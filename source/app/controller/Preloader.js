export default class Preloader {
  constructor(config, service, model, view, mainMenuView) {
    this.config = config;
    this.service = service;
    this.model = model;
    this.view = view;
    this.mainMenuView = mainMenuView;

    this.service.started.attach(() => {
      this.model.started.notify();
    });
    this.service.progressed.attach((sender, e) => {
      this.model.handleProgress(e);
    });
    this.service.completed.attach((sender, e) => {
      this.model.handleComplete(e);
    });
    this.service.fileLoaded.attach((sender, e) => {
      this.model.handleFileLoad(e);
    });

    this.view.animationFinished.attach(() => {
      this.mainMenuView.render();
    });
  }

  load() {
    this.service.load();
  }
}
