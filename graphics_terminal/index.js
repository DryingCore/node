const blessed = require('blessed');

// Cria uma tela
const screen = blessed.screen({
  smartCSR: true
});

screen.title = 'RPG Game Map';

// Cria um box (caixa) para representar o mapa
const mapBox = blessed.box({
  top: 'center',
  left: 'center',
  width: '80%',
  height: '80%',
  content: 'Mapa do RPG\n\n' +
           '#########\n' +
           '#.......#\n' +
           '#..@....#\n' +
           '#.......#\n' +
           '#########',
  tags: true,
  border: {
    type: 'line'
  },
  style: {
    fg: 'white',
    bg: 'black',
    border: {
      fg: '#f0f0f0'
    },
    hover: {
      bg: 'green'
    }
  }
});

// Adiciona a box à tela
screen.append(mapBox);

// Configura tecla de saída
screen.key(['escape', 'q', 'C-c'], function(ch, key) {
  return process.exit(0);
});

// Renderiza a tela
screen.render();
