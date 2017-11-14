import Event from '@/model/Event';
import utils from '@/utils';

export default class PreloaderView {
  constructor(model, stage, config) {
    this.model = model;
    this.stage = stage;
    this.config = config;

    this.model.started.attach(() => {
      console.log('Loading started');
      this.createTextLoader();
    });
    this.model.progressed.attach((sender, { progress }) => {
      console.log(`Loading progress: ${progress}%`);
      this.updateTextLoader(`Loading: ${progress}%`);
    });
    this.model.completed.attach(() => {
      console.log('Loading completed');
      this.animate();
    });

    this.animationFinished = new Event(this);
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
    if (this.textLoader) {
      this.textLoader.text = value;
    }
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
        this.animationFinished.notify();
      });
  }
}
