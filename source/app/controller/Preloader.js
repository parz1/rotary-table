import PreloaderModel from '../model/Preloader';
import PreloaderView from '../view/Preloader';

export default class PreloaderController {
  constructor(stage, config) {
    this.stage = stage;
    this.config = config;
  }

  create() {
    this.model = new PreloaderModel(this.config);
    this.model.load();

    this.view = new PreloaderView(this.model, this.stage, this.config);
    this.view.createTextLoader();
  }
}
