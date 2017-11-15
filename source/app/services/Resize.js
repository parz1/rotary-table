import App from '@/App';
import utils from '@/utils';

App.service('ResizeService', class ResizeService {
  constructor(context, stage, config) {
    this.context = context;
    this.stage = stage;

    this.canvasWidth = config.canvas.width;
    this.canvasHeight = config.canvas.height;

    this.resize();
    this.attach();
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

  attach() {
    window.addEventListener('resize', this.resize.bind(this));
  }

  resize() {
    utils.setWH(this.context, this.scaledWidth, this.scaledHeight, true);
    utils.scaleXY(this.stage, this.scale);

    // to be changed
    this.stage.update();
  }
}, 'context', 'Stage', 'config');
