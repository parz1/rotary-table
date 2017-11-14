export default class Preloader {
  constructor(config, model, view, PreloaderService, RouteService) {
    this.config = config;
    this.model = model;
    this.view = view;
    this.PreloaderService = PreloaderService;
    this.Route = RouteService;

    this.PreloaderService.started.attach(() => {
      this.model.started.notify();
    });
    this.PreloaderService.progressed.attach((sender, e) => {
      this.model.handleProgress(e);
    });
    this.PreloaderService.completed.attach((sender, e) => {
      this.model.handleComplete(e);
    });
    this.PreloaderService.fileLoaded.attach((sender, e) => {
      this.model.handleFileLoad(e);
    });

    this.view.animationFinished.attach(() => {
      this.Route.routeChanged.notify('mainMenu');
    });
  }

  load() {
    this.PreloaderService.load();
  }
}
