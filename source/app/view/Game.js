/* eslint-disable prefer-arrow-callback */
import App from '@/App';

App.service('GameView', class GameView {
  constructor(context, config) {
    this.stage = new createjs.Stage(context);
    this.config = config;
  }

  render() {
    this.stage.enableMouseOver();

    createjs.Ticker.framerate = this.config.stage.fps;
    createjs.Ticker.on('tick', () => this.stage.update());
  }
}, 'context', 'config');

App.service('Stage', function (GameView) {
  return GameView.stage;
}, 'GameView');
