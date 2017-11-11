import PreloaderModel from '../models/Preloader';
import PreloaderView from '../views/Preloader';

export default class PreloaderController {
  constructor(stage, config) {
    this.stage = stage;
    this.config = config;
  }

  get loader() {
    return this.model.loader;
  }

  create() {
    this.view = new PreloaderView(this.stage, this.config);
    this.view.createTextLoader();

    this.model = new PreloaderModel(this.config, {
      handleProgress: this.handleProgress.bind(this),
      handleComplete: this.handleComplete.bind(this)
    });
    this.model.load();
  }

  /**
   * Shows loading progress.
   */
  handleProgress({ progress }) {
    const percent = Math.round(progress * 100);

    console.log(`Loading ${percent} %`);
    this.view.updateTextLoader(`Loading ${percent} %`);
  }

  /**
   * Fires when loading is complete.
   * Slides up graphic loader and executes callback.
   * @param {object} Callback Callback - resolve loader promise
   */
  handleComplete() {
    this.view.animate();
  }
}
