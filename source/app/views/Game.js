export default class GameView {
  constructor(context, config) {
    this.stage = new createjs.Stage(context);
    this.config = config;

    this.render();
  }

  render() {
    this.stage.enableMouseOver();

    createjs.Ticker.framerate = this.config.stage.fps;
    createjs.Ticker.on('tick', () => this.stage.update());
  }
}
