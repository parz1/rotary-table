import config from '../config.js';
import utils from '../utils.js';

import Preload from './Preload.js';

/** Main class representing game world. */
export default class Game {

	/**
	 * Create init promise.
	 */
	constructor() {
		console.log(utils);
		let initProm = new Promise((resolve, reject) => {
			this.init();
			resolve();
		});

		initProm.then(() => Preload.init());
	}

	/**
	 * Create canvas, stage and resize application.
	 * @augments createjs
	 */
	init() {
		this.canvas = Game.CANVAS = document.getElementById(config.canvas.id);
		this.stage = Game.STAGE = new createjs.Stage(this.canvas);

		createjs.Ticker.setFPS(config.stage.fps);
		createjs.Ticker.on('tick', this.ticker.bind(this));
		
		this.resize();
		window.onresize = this.resize.bind(this);
	}

	/**
	 * Ticker function - updating stage with each tick.
	 */
	ticker() {
		this.stage.update();
	}

	/**
	 * Resize canvas and stage depends on window dimensions.
	 */
	resize() {

		if (!this.canvas) {
			return;
		}

		let w = window.innerWidth,
			h = window.innerHeight,
			ow = config.canvas.width,
			oh = config.canvas.height,
			scale = Math.min(w / ow, h /oh);

		this.canvas.width = ow * scale;
		this.canvas.height = oh * scale;	

		this.canvas.style.width = ow * scale + 'px';
		this.canvas.style.height = oh * scale + 'px';		

		if (!this.stage) {
			return;
		}

		utils.scaleXY(this.stage, scale);
		this.stage.update();			
	}

}

/** Object represents canvas. */
Game.CANVAS = {};
/** Object represents stage. */
Game.STAGE = {};
/** Object for preloaded images. */
Game.IMAGES = {};