import con from './const.js';

var exports = module.exports = {};

exports.resize = function() {
	var w, h, ow, oh, scale;

	w = window.innerWidth;
	h = window.innerHeight;

	ow = 1920;
	oh = 1080;

	scale = Math.min(w / ow, h /oh);

	if(!con.canvas) {
		return;
	}

	con.canvas.width = ow * scale;
	con.canvas.height = oh * scale;	

	exports.scaleXY(con.stage, scale);
	con.stage.update();
};

exports.scaleXY = function(elem, amount) {
	elem.scaleX = elem.scaleY = amount;
};