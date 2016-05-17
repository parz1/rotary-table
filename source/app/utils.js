import con from './const.js';

var exports = module.exports = {};

exports.scaleXY = function(elem, amount) {
	elem.scaleX = elem.scaleY = amount;
};