import App from '@/App';

App.service('RouteService', class Route {
  constructor(EventDispatcher) {
    this.routeChanged = EventDispatcher.instance(this);

    this.routeChanged.attach(this.notifyAboutRouteChanges.bind(this));
  }

  notifyAboutRouteChanges(sender, routeName) {
    console.log(`Route changed to: ${routeName}`);
  }
}, 'EventDispatcher');
