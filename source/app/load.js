import createjs from 'createjs-collection';

import config from './config.js';
import utils from './utils.js';
import con from './const.js';

function init() {

	con.canvas = document.getElementById(config.canvasID);

	con.stage = new createjs.Stage(con.canvas);
	
	createjs.Ticker.setFPS(25);
	createjs.Ticker.on('tick', () => con.stage.update());

	// Test Test Test Test Test Test Test Test Test Test 
	// -----------------------------------------------------
	let shp = new createjs.Shape( new createjs.Graphics().f('#fff').dr(0, 0, 500, 100) );

	con.stage.addChild(shp);

	utils.resize();
	window.onresize = utils.resize;

	preload();

}

function preload() {

	let manifest, loader;

	manifest = [
		{src: 'https://pbs.twimg.com/media/Cd6n5DsUsAAae73.jpg', id: 'first'},
		{src: 'https://4.bp.blogspot.com/-k8IX2Mkf0Jo/U4ze2gNn7CI/AAAAAAAA7xg/iKxa6bYITDs/s0/HOT+Balloon+Trip_Ultra+HD.jpg', id: 'second'}
	];	

	con.loader = new createjs.LoadQueue(false);
	con.loader.on('fileload', handleFileLoad);
	con.loader.on('progress', handleFileProgress);
	con.loader.on('complete', handleComplete);
	con.loader.loadManifest(manifest);    

}

function handleFileLoad(e) {
	if(e.item.type === 'image') {
		con.images[e.item.id] = e.result;
	}
}

function handleFileProgress(e) {
    var percent = Math.round(con.loader.progress * 100);

    console.log('Loading ' + percent + '%');
}

function handleComplete(e) {
	utils.resize();
}

window.onload = init;