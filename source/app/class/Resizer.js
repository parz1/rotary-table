import store from '../store';
import config from '../config';
import utils from '../modules/utils';

export default class {
  constructor() {
    this.canvasWidth = config.canvas.width;
    this.canvasHeight = config.canvas.height;
  }

  get width() {
    return window.innerWidth;
  }

  get height() {
    return window.innerHeight;
  }

  get scale() {
    return Math.min(this.width / this.canvasWidth, this.height / this.canvasHeight);
  }

  get scaledWidth() {
    return this.canvasWidth * this.scale;
  }

  get scaledHeight() {
    return this.canvasHeight * this.scale;
  }

  resize() {
    utils.setWH(store.canvas, this.scaledWidth, this.scaledHeight, true);
    utils.scaleXY(store.stage, this.scale);

    store.stage.update();
  }
}
