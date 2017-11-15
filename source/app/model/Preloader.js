import App from '@/App';

App.service('PreloaderModel', class PreloaderModel {
  constructor(EventDispatcher) {
    this.images = {};

    this.started = EventDispatcher.instance(this);
    this.progressed = EventDispatcher.instance(this);
    this.completed = EventDispatcher.instance(this);
  }

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
}, 'EventDispatcher');
