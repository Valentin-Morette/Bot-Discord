import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v10';

function slashCommande(commands) {
	const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

	(async () => {
		try {
			// Uncomment the following line to register commands in a specific guild
			await rest.put(Routes.applicationGuildCommands(process.env.IDAPPLICATION, process.env.IDSERVER), {
				body: commands,
			});

			// Uncomment the following line to register commands globally
			// await rest.put(Routes.applicationCommands(process.env.IDAPPLICATION), {
			// 	body: commands,
			// });

			console.log('Slash commands registered successfully!');
		} catch (error) {
			console.error(error);
		}
	})();
}

export { slashCommande };
