import config from './config.js';
import utils from './utils.js';
import con from './const.js';

function init() {
	con.canvas = document.getElementById(config.canvasID);

	preload();
}

function preload() {
	let manifest;

	manifest = [
		// example image
		{src:'https://pbs.twimg.com/media/Chypg9aUUAAP55z.jpg', id:'example'}
	];	

	con.loader = new createjs.LoadQueue(false);
	con.loader.on('error', handleError);
	con.loader.on('fileload', handleFileLoad);
	con.loader.on('progress', handleFileProgress);
	con.loader.on('complete', handleComplete);
	con.loader.loadManifest(manifest);    
}

function handleError(e) {
	console.log('An error has occured');
	console.log(e);
}

function handleFileLoad(e) {
	if(e.item.type === 'image') {
		con.images[e.item.id] = e.result;
	}
}

function handleFileProgress(e) {
    let percent = Math.round(con.loader.progress * 100);

    console.log('Loading ' + percent + '%');
}

function handleComplete(e) {
	con.stage = new createjs.Stage(con.canvas);
	
	createjs.Ticker.setFPS(5);
	createjs.Ticker.on('tick', () => con.stage.update());	
	
	window.onresize = resize;
	resize();
}

function resize() {
	let w, h, ow, oh, scale;

	w = window.innerWidth;
	h = window.innerHeight;

	ow = 1920;
	oh = 1080;

	scale = Math.min(w / ow, h /oh);

	if(!con.canvas || !con.stage) {
		return;
	}

	con.canvas.width = ow * scale;
	con.canvas.height = oh * scale;	

	con.canvas.style.width = ow * scale + 'px';
	con.canvas.style.height = oh * scale + 'px';		

	utils.scaleXY(con.stage, scale);
	con.stage.update();	
}

window.onload = init;