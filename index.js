import { EmbedBuilder, AttachmentBuilder, Client, GatewayIntentBits } from 'discord.js';
import dotenv from 'dotenv';
import { commands } from './variables.js';
import { slashCommande } from './functions.js';

dotenv.config();

slashCommande(commands);

const client = new Client({
	intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.on('ready', () => {

});

client.on('messageCreate', (message) => {
	if (message.author.bot) return;
});

client.on('interactionCreate', async (interaction) => {
	if (interaction.isButton()) {
		return;
	}

	if (interaction.isCommand()) {
		return;
	}
});

client.login(process.env.TOKEN);
