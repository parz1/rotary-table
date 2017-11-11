import MainMenuView from '../views/MainMenu';

export default class MainMenuController {
  constructor(stage, config) {
    this.stage = stage;
    this.config = config;
  }

  create() {
    this.view = new MainMenuView(this.stage, this.config);
    this.view.render();
  }
}
