import Event from '../model/Event';
import utils from '../utils';

export default class PreloaderView {
  constructor(model, stage, config) {
    this.model = model;
    this.stage = stage;
    this.config = config;

    this.model.progressed.attach((sender, { progress }) => {
      this.updateTextLoader(`Loading: ${progress}%`);
    });
    this.model.completed.attach(() => {
      this.animate();
    });

    this.preloaderHidden = new Event(this);
  }

  /**
   * Create graphic loader for manifest.
   */
  createTextLoader() {
    this.graphicLoader = utils.drawTextShape(0, 0, this.config.canvas.width, this.config.canvas.height, '#fff', 'Loading', '#9b59b6');

    this.textLoader = this.graphicLoader.getChildByName('mainText');
    this.stage.addChild(this.graphicLoader);
  }

  updateTextLoader(value) {
    this.textLoader.text = value;
  }

  /**
   * Erase graphic loader.
   */
  eraseTextLoader() {
    this.stage.removeChild(this.graphicLoader);
    this.graphicLoader = null;
  }

  /**
   * Fires when loading is complete.
   * Slides up graphic loader and executes callback.
   * @param {object} Callback Callback - resolve loader promise
   */
  animate() {
    createjs.Tween.get(this.graphicLoader)
      .to({ y: -this.config.canvas.height }, 1000, createjs.Ease.cubicInOut)
      .call(this.eraseTextLoader)
      .call(() => {
        this.preloaderHidden.notify();
      });
  }
}
