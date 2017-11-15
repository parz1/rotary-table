import Bottle from 'bottlejs';

let instance = null;

class App {
  constructor() {
    if (!instance) {
      instance = this;
    }

    this.bottle = new Bottle();

    this.constant = this.bottle.constant.bind(this.bottle);
    this.service = this.bottle.service.bind(this.bottle);
    this.instanceFactory = this.bottle.instanceFactory.bind(this.bottle);
    this.factory = this.bottle.factory.bind(this.bottle);
    this.digest = this.bottle.digest.bind(this.bottle);
    this.container = this.bottle.container;

    return instance;
  }
}

export default new App();
