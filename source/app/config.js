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
module.exports = {
  manifest: [
    // example jpg
    // random images from imgur
    // temporary
    { src: 'https://pbs.twimg.com/media/Chypg9aUUAAP55z.jpg', id: 'example' },
    { src: 'https://i.imgur.com/0w7YCUE.jpg', id: 'example2' },
    { src: 'https://i.imgur.com/tPbusfG.jpg', id: 'asadsad' },
    { src: 'https://i.imgur.com/rZP4izY.jpg', id: '' },
    { src: 'https://i.imgur.com/JXDKeAg.jpg', id: '' },
    { src: 'http://i.imgur.com/5Y6CeqS.png', id: '' },
    { src: 'http://i.imgur.com/AFhLA5r.jpg', id: '' },
    { src: 'http://i.imgur.com/v0ZcTsT.png', id: '' },
    { src: 'http://i.imgur.com/7QPflaB.jpg', id: '' },
  ],
  canvas: {
    id: 'main',
    width: 1920,
    height: 1080,
  },
  stage: {
    fps: 40,
  },
};
