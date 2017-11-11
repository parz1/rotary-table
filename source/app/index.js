import '../index.html';
import '../styles/app.scss';

import config from './config';
import GameController from './controllers/Game';

window.onload = () => {
  const context = document.getElementById(config.canvas.id);
  const gameController = new GameController(context, config);

  gameController.create();
};
