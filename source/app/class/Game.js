import config from '../config';
import store from '../store';
import Preloader from './Preload';
import MainMenu from './MainMenu';
import Resizer from './Resizer';

/** Main class representing game world. */
export default class Game {
  /**
   * Init the world, create main loader promise.
   */
  constructor() {
    this.resizer = new Resizer();
    this.preloader = new Preloader();

    new Promise((resolve) => {
      this.init(resolve);
    })
      .then(() => this.preloader.load())
      .then(() => new MainMenu());
  }

  /**
   * Create canvas, stage and resize application.
   * @augments Stage
   */
  init(resolve) {
    store.canvas = document.getElementById(config.canvas.id);
    store.stage = new createjs.Stage(store.canvas);

    store.stage.enableMouseOver();

    createjs.Ticker.setFPS(config.stage.fps);
    createjs.Ticker.on('tick', this.ticker);

    this.resizer.resize();
    window.onresize = () => this.resizer.resize();

    resolve();
  }

  /**
   * Ticker function - updating stage with each tick.
   */
  ticker() {
    store.stage.update();
  }
}
