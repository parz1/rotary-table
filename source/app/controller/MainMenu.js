export default class MainMenuController {
  constructor(view, config) {
    this.view = view;
    this.config = config;
  }

  create() {
    this.view.render();
  }
}
