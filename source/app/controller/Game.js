import PreloaderModel from '@/model/Preloader';
import PreloaderView from '@/view/Preloader';
import MainMenuView from '@/view/MainMenu';
import PreloaderController from '@/controller/Preloader';
import ResizeController from '@/controller/Resize';
import MainMenuController from '@/controller/MainMenu';

export default class GameController {
  constructor(view, context, config) {
    this.view = view;
    this.context = context;
    this.config = config;
  }

  create() {
    this.resize = new ResizeController(this.context, this.view.stage, this.config);

    this.preloaderModel = new PreloaderModel(this.config);
    this.preloaderView = new PreloaderView(this.preloaderModel, this.view.stage, this.config);
    this.preloader = new PreloaderController(
      this.preloaderModel, this.preloaderView, this.config
    );
    this.preloader.create();

    this.preloaderView.preloaderHidden.attach(() => {
      this.mainMenuView = new MainMenuView(this.view.stage, this.config);
      this.mainMenu = new MainMenuController(this.mainMenuView, this.view.stage, this.config);
      this.mainMenu.create();
    });
  }
}
