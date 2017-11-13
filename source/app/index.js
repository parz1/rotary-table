import config from '@/config';
import GameController from '@/controller/Game';
import GameView from '@/view/Game';

import '../index.html';
import '../styles/app.scss';

window.onload = () => {
  const context = document.getElementById(config.canvas.id);
  const gameView = new GameView(context, config);
  const gameController = new GameController(gameView, context, config);

  gameController.create();
};
