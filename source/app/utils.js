/**
 * Utility functions.
 * @module utility
 */
let utils = module.exports = {};

/** Scale element equally. */
utils.scaleXY = function(elem, amount) {
	elem.scaleX = elem.scaleY = amount;
};

/** Center reg point. */
utils.centerReg = function(elem, x = false, y = false) {
	let dims = elem.getBounds();

	elem.regX = (x) ? dims.width / 2 : 0;
	elem.regY = (y) ? dims.height / 2 : 0;

	return elem;
};

/** Centers object vertically. */
utils.centerObjectVertical = function(elem, parent) {
	let parentDims = parent.getBounds();

	elem.y = parentDims.height / 2;

	utils.centerReg(elem, false, true);

	return elem;
};

/** Centers object horizontally. */
utils.centerObjectHorizontal = function(elem, parent) {
	let parentDims = parent.getBounds();

	elem.x = parentDims.width / 2;

	utils.centerReg(elem, true, false);

	return elem;
};

/** Centers object vertically and horizontally. */
utils.centerObject = function(elem, parent) {
	utils.centerObjectVertical(elem, parent);
	utils.centerObjectHorizontal(elem, parent);

	return elem;
};

/** Draws container and set it's position. */
utils.drawCtr = function(x = 0, y = 0) {
	let ctr = new createjs.Container();

	ctr.x = x;
	ctr.y = y;

	return ctr;
};

/** Draws shape and set it's bounds. */
utils.drawShp = function(x = 0, y = 0, w = 0, h = 0, bgColor = '#000') {
	let shp = new createjs.Shape( new createjs.Graphics().f(bgColor).dr(x, y, w, h) );

	shp.setBounds(x, y, w, h);

	return shp;
};

/** Draw text object. */
utils.drawText = function(content = '', font = '30px Arial', color = '#fff') {
	let text = new createjs.Text(content, font, color);

	return text;
};

/** Draws container with background and text centered vertically&horizontally. */
utils.drawTextShape = function(x, y, w, h, bgColor = '#000', content = '', color = '#fff', font = '30px Arial') {
	let ctr = utils.drawCtr(x, y),
		shp = utils.drawShp(0, 0, w, h, bgColor),
		text = utils.drawText(content, font, color);

	ctr.addChild(shp, text);

	utils.centerObject(text, ctr);

	text.name = 'mainText';

	return ctr;
};