export default class MainMenuController {
  constructor(view, RouteService) {
    this.view = view;
    this.RouteService = RouteService;

    this.RouteService.routeChanged.attach(this.routeChanged.bind(this));
  }

  routeChanged(sender, route) {
    if (route === 'mainMenu') {
      this.view.render();
    }
  }
}
