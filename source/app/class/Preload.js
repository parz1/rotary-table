import config from '../config.js';
import utils from '../utils.js';

import Game from './Game.js';

/** Class loading game content. */
export default class Preload {

	/**
	 *
	 */
	constructor() {}

	/**
	 * Sets up game loader.
	 */
	static init() {
		this.createTextLoader();

		this.loader = new createjs.LoadQueue(false);
		this.loader.on('error', this.handleFileError, this);
		this.loader.on('fileload', this.handleFileLoad, this);
		this.loader.on('progress', this.handleProgress.bind(this), this);
		this.loader.on('complete', this.handleComplete, this, true);
		this.loader.loadManifest(config.manifest);    
	}

	/*
	 * Create graphic loader for manifest.
	 */
	static createTextLoader() {
		this.graphicLoader = utils.drawTextShape(0, 0, 1920, 1080, '#000', 'Loading', '#eee');
		
		this.textLoader = this.graphicLoader.getChildByName('mainText');
		Game.STAGE.addChild(this.graphicLoader);
	}

	/**
	 * Handle errors from loader.
	 * @param {object} Error event.
	 */
	static handleFileError(e) {
		console.warn('Error: ' + e.title);
		console.log(e);
	}

	/**
	 * Pushing loaded object to Game.IMAGES if file is image.
	 * @param {object} Loaded item event.
	 */
	static handleFileLoad(e) {
		if (e.item.type === 'image') {
			Game.IMAGES[e.item.id] = e.result;
		}		
	}

	/**
	 * Shows loading progress.
	 */
	static handleProgress() {
	    let percent = Math.round(this.loader.progress * 100);

	    console.log(`Loading ${percent} %`);
	    this.textLoader.text = `Loading ${percent} %`;
	}

	/**
	 * Initing game when loading is completed.
	 * @augments Game
	 */
	static handleComplete() {

	}

}