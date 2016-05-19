let _Promise = require('babel-runtime/core-js/promise')['default'];

import config from '../config.js';

import utils from '../modules/utils.js';
import preload from '../modules/preload.js';

/** Main class representing game world. */
export default class Game {

	/**
	 * Init the world, create main loader promise.
	 */
	constructor() {
		this.initProm = new _Promise((resolve, reject) => {
			console.log('game init');
			this.init();
			resolve();
		}).then(() => {
			console.log('preload');
			return preload.init(Game);
		}).then(() => {
			console.log('done');
		});
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
		let w = window.innerWidth,
			h = window.innerHeight,
			ow = config.canvas.width,
			oh = config.canvas.height,
			scale = Math.min(w / ow, h /oh);

		if (!this.canvas) {
			return;
		}

		utils.setWH(this.canvas, ow * scale, oh * scale, true);		

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