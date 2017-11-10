import config from '../config';
import store from '../store';
import utils from '../modules/utils';

/** MainMenu showing game menu */
export default class MainMenu {

  /**
   * Calling init function
   */
  constructor() {
    console.log('MainMenu constructed');
    this.init();
  }

  /**
   * Create mainmenu container with title object
   */
  init() {
    this.ctr = utils.drawCtr();

    this.title = utils.drawText('CreateJS Starter', '50px Ubuntu Mono');
    utils.centerObjectByDims(this.title, config.canvas.width, config.canvas.height);

    this.ctr.addChild(this.title);
    store.stage.addChild(this.ctr);
  }

}
