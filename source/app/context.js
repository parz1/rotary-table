/* eslint-disable prefer-arrow-callback */
import App from '@/App';

window.addEventListener('load', () => {
  App.service('context', function (config) {
    return document.getElementById(config.canvas.id);
  }, 'config');
});
