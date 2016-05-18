/**
 * Utility functions.
 * @module utility
 */
let utils = module.exports = {};

/** Scale element equally. */
utils.scaleXY = function(elem, amount) {
	elem.scaleX = elem.scaleY = amount;
};