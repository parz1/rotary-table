/**
 * @namespace Config
 *
 * @property {array} manifest - array for preloaded files
 *
 * @property {object} canvas - default canvas settings
 * @property {string} canvas.id - canvas DOM ID
 * @property {number} canvas.width - canvas width
 * @property {number} canvas.height - canvas height
 *
 * @property {object} stage - default stage settings
 * @property {number} stage.fps - stage framerate
 */
let config = module.exports = {
	manifest: [
		// example jpg
		{src:'https://pbs.twimg.com/media/Chypg9aUUAAP55z.jpg', id:'example'}
	],
	canvas: {
		id: 'main',
		width: 1920,
		height: 1080
	},
	stage: {
		fps: 5
	}
};