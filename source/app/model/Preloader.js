import Event from '@/model/Event';

export default class PreloaderModel {
  constructor() {
    this.images = {};

    this.started = new Event(this);
    this.progressed = new Event(this);
    this.completed = new Event(this);
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
}
