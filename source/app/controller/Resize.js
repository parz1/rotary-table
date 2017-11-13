import utils from '@/utils';

export default class ResizeController {
  constructor(context, stage, config) {
    this.context = context;
    this.stage = stage;

    this.canvasWidth = config.canvas.width;
    this.canvasHeight = config.canvas.height;

    this.resize();
    window.onresize = () => this.resize();
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
    utils.setWH(this.context, this.scaledWidth, this.scaledHeight, true);
    utils.scaleXY(this.stage, this.scale);

    // to be changed
    this.stage.update();
  }
}
