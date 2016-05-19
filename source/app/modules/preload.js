import config from '../config.js';
import utils from './utils.js';

/**
 * Preload functionality - loading game content
 * @module Preload
 */

/**
 * @alias module:Preload
 */
let preload = module.exports = {};

/**
 * Sets up game loader.
 * @param {object} Game Main game class
 */
preload.init = function(game) {
	this.game = game;

	this.createTextLoader();

	this.loader = new createjs.LoadQueue(false);
	this.loader.on('error', this.handleFileError, this);
	this.loader.on('fileload', this.handleFileLoad, this);
	this.loader.on('progress', this.handleProgress.bind(this), this);
	this.loader.loadManifest(config.manifest); 
};

/**
 * Create graphic loader for manifest.
 */
preload.createTextLoader = function() {
	this.graphicLoader = utils.drawTextShape(0, 0, config.canvas.width, config.canvas.height, '#000', 'Loading', '#eee');
		
	this.textLoader = this.graphicLoader.getChildByName('mainText');
	this.game.STAGE.addChild(this.graphicLoader);
};

/**
 * Handle errors from loader.
 * @param {object} Event Error event.
 */
preload.handleFileError = function(e) {
	console.warn('Error: ' + e.title);
	console.log(e);
};

/**
 * Pushing loaded object to Game.IMAGES if file is image.
 * @param {object} Event Loaded item event.
 */
preload.handleFileLoad = function(e) {
	if (e.item.type === 'image') {
		this.game.IMAGES[e.item.id] = e.result;
	}		
};

/**
 * Shows loading progress.
 */
preload.handleProgress = function() {
	let percent = Math.round(this.loader.progress * 100);

	console.log(`Loading ${percent} %`);
	this.textLoader.text = `Loading ${percent} %`;
};