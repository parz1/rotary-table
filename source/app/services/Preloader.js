import App from '@/App';

App.service('PreloaderService', class PreloaderService {
  constructor(config, EventDispatcher) {
    this.config = config;

    this.started = EventDispatcher.instance(this);
    this.fileLoaded = EventDispatcher.instance(this);
    this.progressed = EventDispatcher.instance(this);
    this.completed = EventDispatcher.instance(this);

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
    this.started.notify();
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

  handleFileLoad(e) {
    this.fileLoaded.notify(e);
  }

  handleProgress(e) {
    this.progressed.notify(e);
  }

  handleComplete() {
    this.completed.notify();
  }
}, 'config', 'EventDispatcher');
