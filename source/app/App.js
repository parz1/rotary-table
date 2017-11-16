import Bottle from 'bottlejs';

let instance = null;

class App {
  constructor() {
    if (!instance) {
      instance = this;
      this.assign();
    }

    return instance;
  }

  assign() {
    this.bottle = new Bottle();

    Object.entries(this.bottle).forEach(([key]) => {
      this[key] = this.bottle[key];
    });

    Object.entries(Object.getPrototypeOf(this.bottle)).forEach(([key]) => {
      this[key] = this.bottle[key].bind(this.bottle);
    });
  }
}

export default new App();
