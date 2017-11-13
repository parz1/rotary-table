import utils from '@/utils';

export default class MainMenuView {
  constructor(stage, config) {
    this.stage = stage;
    this.config = config;
  }

  render() {
    this.ctr = utils.drawCtr();

    this.title = utils.drawText('CreateJS Starter', '50px Ubuntu Mono');
    utils.centerObjectByDims(this.title, this.config.canvas.width, this.config.canvas.height);

    this.ctr.addChild(this.title);
    this.stage.addChild(this.ctr);
  }
}
