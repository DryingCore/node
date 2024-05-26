import { select, confirm } from "@inquirer/prompts";

async function createMainMenu() {
	const mainMenu = await select({
		message: "Welcome to Dragons GFALL'S",
		choices: [
			{
				name: "Continue",
				value: "testValue",
				description: "Continue your history...",
			},
			{
				name: "New Game",
				value: "testValue2",
				description: "Start your journey...",
			},
		],
	});
}

async function startNewGame() {
	const answer = await confirm({ message: "Are you sure you want to start a new game?" });
}