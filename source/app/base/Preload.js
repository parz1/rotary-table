import config from '../config';
import store from '../store';
import utils from '../modules/utils';

/**
 * Preload class used for loading content
 */
export default class Preloader {

  /**
   * Calling init method
   */
  load() {
    return new Promise((resolve) => {
      this.init(resolve);
    });
  }

  /**
   * Sets up game loader. Resolve promise when loading is complete.
   * @param {object} Resolve Promise resolve
   */
  init(resolve) {
    this.createTextLoader();

    this.loader = new createjs.LoadQueue(false);
    this.loader.on('error', this.handleFileError.bind(this));
    this.loader.on('fileload', this.handleFileLoad.bind(this));
    this.loader.on('progress', this.handleProgress.bind(this));
    this.loader.on('complete', this.handleComplete.bind(this, () => resolve()));
    this.loader.loadManifest(config.manifest);
  }

  /**
   * Create graphic loader for manifest.
   */
  createTextLoader() {
    this.graphicLoader = utils.drawTextShape(0, 0, config.canvas.width, config.canvas.height, '#fff', 'Loading', '#9b59b6');

    this.textLoader = this.graphicLoader.getChildByName('mainText');
    store.stage.addChild(this.graphicLoader);
  }

  /**
   * Erase graphic loader.
   */
  eraseTextLoader() {
    store.stage.removeChild(this.graphicLoader);
    this.graphicLoader = null;
  }

  /**
   * Handle errors from loader.
   * @param {object} Event Error event.
   */
  handleFileError(e) {
    console.warn(`Error: ${e.title}`);
    console.log(e);
  }

  /**
   * Pushing loaded object to store.images if file is image.
   * @param {object} Event Loaded item event.
   */
  handleFileLoad(e) {
    if (e.item.type === 'image') {
      store.images[e.item.id] = e.result;
    }
  }

  /**
   * Shows loading progress.
   */
  handleProgress() {
    const percent = Math.round(this.loader.progress * 100);

    console.log(`Loading ${percent} %`);
    this.textLoader.text = `Loading ${percent} %`;
  }

  /**
   * Fires when loading is complete.
   * Slides up graphic loader and executes callback.
   * @param {object} Callback Callback - resolve loader promise
   */
  handleComplete(cb) {
    createjs.Tween.get(this.graphicLoader)
      .to({ y: -config.canvas.height }, 1000, createjs.Ease.cubicInOut)
      .call(this.eraseTextLoader)
      .call(cb);
  }

}
