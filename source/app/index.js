import config from '@/config';
import PreloaderController from '@/controller/Preloader';
import MainMenuController from '@/controller/MainMenu';
import PreloaderService from '@/services/Preloader';
import RouteService from '@/services/Route';
import ResizeService from '@/services/Resize';
import PreloaderModel from '@/model/Preloader';
import PreloaderView from '@/view/Preloader';
import MainMenuView from '@/view/MainMenu';
import GameView from '@/view/Game';

import '../index.html';
import '../styles/app.scss';

window.onload = () => {
  const context = document.getElementById(config.canvas.id);
  const gameView = new GameView(context, config);

  const resizeController = new ResizeService(context, gameView.stage, config);

  const routeService = new RouteService();

  const mainMenuView = new MainMenuView(gameView.stage, config);
  const mainMenuController = new MainMenuController(mainMenuView, routeService);

  const preloaderService = new PreloaderService(config);
  const preloaderModel = new PreloaderModel(config);
  const preloaderView = new PreloaderView(preloaderModel, gameView.stage, config);
  const preloaderController =
    new PreloaderController(config, preloaderModel, preloaderView, preloaderService, routeService);

  preloaderController.load();
};
