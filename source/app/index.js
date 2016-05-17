import '../styles/app.scss';
import '../index.html';

import createjs from 'createjs-collection';

import config from './config.js';


// Test Test Test Test Test Test Test Test Test Test 
// -------------------------------------------------------
const canvas = document.getElementById(config.canvasID);

let stage = new createjs.Stage(canvas);
let shp = new createjs.Shape( new createjs.Graphics().f('#fff').dr(0, 0, 100, 100) );

stage.addChild(shp);

function resize() {
	var w, h, ow, oh, scale;

	w = window.innerWidth;
	h = window.innerHeight;

	ow = 1920;
	oh = 1080;

	scale = Math.min(w / ow, h /oh);

	if(!canvas) {
		return;
	}

	canvas.width = ow * scale;
	canvas.height = oh * scale;

	stage.update();
}

window.onload = resize;
window.onresize = resize;