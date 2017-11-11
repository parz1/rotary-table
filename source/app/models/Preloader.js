export default class PreloaderModel {
  constructor(config, callbacks) {
    this.config = config;
    this.images = {};
    this.handleProgress = callbacks.handleProgress;
    this.handleComplete = callbacks.handleComplete;

    this.init();
  }

  init() {
    this.loader = new createjs.LoadQueue(false);
    this.loader.on('error', this.handleFileError.bind(this));
    this.loader.on('fileload', this.handleFileLoad.bind(this));
    this.loader.on('progress', this.handleProgress);
    this.loader.on('complete', this.handleComplete);
  }

  load() {
    this.loader.loadManifest(this.config.manifest);
  }

  /**
   * Handle errors from loader.
   * @param {object} Event Error event.
   */
  handleFileError(e) {
    console.warn(`Error: ${e.title}`);
    console.log(e);
  }

  /**
   * Pushing loaded object to store.images if file is image.
   * @param {object} Event Loaded item event.
   */
  handleFileLoad(e) {
    if (e.item.type === 'image') {
      this.images[e.item.id] = e.result;
    }
  }
}
