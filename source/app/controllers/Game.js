import ResizeController from './Resize';
import PreloaderController from './Preloader';
import MainMenuController from './MainMenu';
import GameView from '../views/Game';

export default class GameController {
  constructor(context, config) {
    this.context = context;
    this.config = config;
  }

  create() {
    this.view = new GameView(this.context, this.config);

    this.resize = new ResizeController(this.context, this.view.stage, this.config);

    this.preloader = new PreloaderController(this.view.stage, this.config);
    this.preloader.create();

    this.preloader.loader.on('complete', () => {
      this.mainMenu = new MainMenuController(this.view.stage, this.config);
      this.mainMenu.create();
    });
  }
}
