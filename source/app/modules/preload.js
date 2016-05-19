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
 * @returns {object} Promise Return loader promise resolved when loading is complete
 */
preload.init = function(game) {
	this.game = game;

	this.createTextLoader();

	return new utils._Promise((resolve, reject) => {
		this.loader = new createjs.LoadQueue(false);
		this.loader.on('error', this.handleFileError, this);
		this.loader.on('fileload', this.handleFileLoad, this);
		this.loader.on('progress', this.handleProgress.bind(this), this);
		this.loader.on('complete', this.handleComplete.bind(this, () => resolve()));
		this.loader.loadManifest(config.manifest);
	});
};

/**
 * Create graphic loader for manifest.
 */
preload.createTextLoader = function() {
	this.graphicLoader = utils.drawTextShape(0, 0, config.canvas.width, config.canvas.height, '#fff', 'Loading', '#9b59b6');
		
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

/**
 * Executing callback when loading is complete.
 */
preload.handleComplete = function(cb) {
	cb();
};