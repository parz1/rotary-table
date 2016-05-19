/**
 * Utility functions.
 * @module Utility
 */

/**
 * @alias module:Utility
 */
let utils = module.exports = {};

/** 
 * Scale element equally.
 * @param {object} Element Element to change
 * @param {number} amount Scale ratio
 */
utils.scaleXY = function(elem, amount) {
	elem.scaleX = elem.scaleY = amount;
};

/** 
 * Center registration point. 
 * @param {object} Element Element to change
 * @param {boolean} X If true centers registration point horizontally
 * @param {boolean} Y If true centers registration point vertically
 */
utils.centerReg = function(elem, x = false, y = false) {
	let dims = elem.getBounds();

	elem.regX = (x) ? dims.width / 2 : 0;
	elem.regY = (y) ? dims.height / 2 : 0;
};

/** 
 * Center object vertically based on it's parent height.
 * @param {object} Element Element to change
 * @param {object} Parent Parent of element
 */
utils.centerObjectVertical = function(elem, parent) {
	let parentDims = parent.getBounds();

	elem.y = parentDims.height / 2;

	utils.centerReg(elem, false, true);
};

/** 
 * Center object horizontally based on it's parent width. 
 * @param {object} Element Element to change
 * @param {object} Parent Parent of element
 */
utils.centerObjectHorizontal = function(elem, parent) {
	let parentDims = parent.getBounds();

	elem.x = parentDims.width / 2;

	utils.centerReg(elem, true, false);
};

/** 
 * Center object vertically and horizontally based on it's parent height and width. 
 * @param {object} Element Element to change
 * @param {object} Parent Parent of element
 */
utils.centerObject = function(elem, parent) {
	utils.centerObjectVertical(elem, parent);
	utils.centerObjectHorizontal(elem, parent);
};

/** 
 * Draws container and set it's position. 
 * @param {number} X Horizontal container position
 * @param {number} Y Vertical container position
 * @returns {object} CreateJS container object
 */
utils.drawCtr = function(x = 0, y = 0) {
	let ctr = new createjs.Container();

	ctr.x = x;
	ctr.y = y;

	return ctr;
};

/** 
 * Draws shape and set it's bounds. 
 * @param {number} X Horizontal shape position
 * @param {number} Y Vertical shape position
 * @param {number} Width Width of shape
 * @param {number} Height Height of shape
 * @param {string} BackgroundColor Background color of shape
 * @returns {object} CreateJS shape object
 */
utils.drawShp = function(x = 0, y = 0, w = 0, h = 0, bgColor = '#000') {
	let shp = new createjs.Shape( new createjs.Graphics().f(bgColor).dr(x, y, w, h) );

	shp.setBounds(x, y, w, h);

	return shp;
};

/** 
 * Draw text object. 
 * @param {string} Content Content of text object
 * @param {string} Font Font specification in format '[size] [type]', e.g '30px Arial'
 * @param {string} Color Color of text object
 * @returns {object} CreateJS text object
 */
utils.drawText = function(content = '', font = '30px Arial', color = '#fff') {
	let text = new createjs.Text(content, font, color);

	return text;
};

/** 
 * Draws container with background and text centered vertically&horizontally. 
 * @param {number} X Horizontal container position
 * @param {number} Y Vertical container position
 * @param {number} Width Width of container
 * @param {number} Height Height of container
 * @param {string} BackgroundColor Background color of container
 * @param {string} Content Content of text object in container
 * @param {string} Color Color of text object in container
 * @param {string} Font Font specification in format '[size] [type]', e.g '30px Arial'
 * @returns {object} CreateJS container object
 */
utils.drawTextShape = function(x, y, w, h, bgColor, content, color, font) {
	let ctr = utils.drawCtr(x, y),
		shp = utils.drawShp(0, 0, w, h, bgColor),
		text = utils.drawText(content, font, color);

	ctr.addChild(shp, text);

	utils.centerObject(text, ctr);

	text.name = 'mainText';

	return ctr;
}; 