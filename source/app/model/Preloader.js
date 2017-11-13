import Event from '@/model/Event';

export default class PreloaderModel {
  constructor(config) {
    this.config = config;
    this.images = {};

    this.progressed = new Event(this);
    this.completed = new Event(this);

    this.init();
  }

  init() {
    this.loader = new createjs.LoadQueue(false);
    this.loader.on('error', this.handleFileError.bind(this));
    this.loader.on('fileload', this.handleFileLoad.bind(this));
    this.loader.on('progress', this.handleProgress.bind(this));
    this.loader.on('complete', this.handleComplete.bind(this));
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

  handleProgress(e) {
    const progress = Math.round(e.progress * 100);

    this.progressed.notify({ progress });
  }

  handleComplete() {
    this.completed.notify();
  }
}
