import Event from '@/model/Event';

export default class Route {
  constructor() {
    this.routeChanged = new Event(this);

    this.routeChanged.attach(this.notifyAboutRouteChanges.bind(this));
  }

  notifyAboutRouteChanges(sender, routeName) {
    console.log(`Route changed to: ${routeName}`);
  }
}
