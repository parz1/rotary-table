export default class PreloaderController {
  constructor(model, view, config) {
    this.model = model;
    this.view = view;

    this.config = config;
  }

  create() {
    this.view.createTextLoader();
    this.model.load();
  }
}
