import config from '@/config';
import PreloaderController from '@/controller/Preloader';
import PreloaderService from '@/services/Preloader';
import PreloaderModel from '@/model/Preloader';
import PreloaderView from '@/view/Preloader';
import MainMenuView from '@/view/MainMenu';
import ResizeController from '@/controller/Resize';
import GameView from '@/view/Game';

import '../index.html';
import '../styles/app.scss';

window.onload = () => {
  const context = document.getElementById(config.canvas.id);
  const gameView = new GameView(context, config);

  const resizeController = new ResizeController(context, gameView.stage, config);
  resizeController.resize();
  window.onresize = resizeController.resize.bind(resizeController);

  const mainMenuView = new MainMenuView(gameView.stage, config);

  const preloaderService = new PreloaderService(config);
  const preloaderModel = new PreloaderModel(config);
  const preloaderView = new PreloaderView(preloaderModel, gameView.stage, config);
  const preloaderController =
    new PreloaderController(config, preloaderService, preloaderModel, preloaderView, mainMenuView);


  preloaderController.load();
};
