/* eslint-disable prefer-arrow-callback */
import App from '@/App';

App.instanceFactory('EventDispatcher', function (container, sender) {
  return new function () {
    this.sender = sender;
    this.listeners = [];

    this.constructor.prototype.attach = function (listener) {
      this.listeners.push(listener);
    };

    this.constructor.prototype.notify = function (args) {
      this.listeners.forEach(listener => listener(this.sender, args));
    };
  }();
});
