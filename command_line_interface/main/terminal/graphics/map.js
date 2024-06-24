// Importação de módulos usando ESModules
import blessed from "blessed";

// Cria a tela do jogo
const screen = blessed.screen({
	smartCSR: true,
});

let dragonContent = "{red-fg}Dragon Spitting Fire{/red-fg}";

screen.title = "Dragon GFALL'S";

// Cria uma box para as opções do jogo
const gameBox = blessed.box({
	top: "center",
	left: "center",
	width: "80%",
	height: "50%",
	content: `{center}${dragonContent}{/center}\n{center}Continue{/center}\n{center}New Game{/center}\n{center}Options{/center}`,
	tags: true,
	border: {
		type: "line",
	},
	style: {
		fg: "white",
		bg: "black",
		border: {
			fg: "#f0f0f0",
		},
		hover: {
			bg: "black",
		},
	},
});

// Adiciona as boxes à tela
screen.append(gameBox);

// Função para animar o dragão
let fire = "";
const fireStates = ["!", " ", "!!", " ", "!!!"];

setInterval(() => {
	fire = fireStates[Math.floor(Math.random() * fireStates.length)];
	dragonContent = `{center}{red-fg}${fire}Dragon Spitting Fire${fire}{/red-fg}{/center}`;
	gameBox.setContent(`${dragonContent}\n{center}Continue{/center}\n{center}New Game{/center}\n{center}Options{/center}`);
	screen.render();
}, 500);

// Configura tecla de saída
screen.key(["escape", "q", "C-c"], function (ch, key) {
	return process.exit(0);
});

// Renderiza a tela
screen.render();
