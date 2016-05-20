import config from '../config.js';
import utils from '../modules/utils.js';
import Game from './Game.js';

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
		Game.STAGE.addChild(this.ctr);
	}

}