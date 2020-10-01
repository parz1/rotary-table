import "./polyfills";

import { Stage, Container, Graphics, Shape, Ticker } from "@createjs/EaselJS";

import { createDOMStage, getDOMStage, handleResize } from "@/utils";

import "./styles.css";

const attachTicker = (stage) => {
  Ticker.framerate = 50;
  Ticker.on("tick", () => {
    stage.update();
  });
}

const init = () => {
  const body = document.getElementsByTagName("body")[0];
  const canvas = createDOMStage();
  body.append(canvas);

  window.onload = () => {
    const canvas = getDOMStage();
    const stage = new Stage(canvas);

    const ctr = new Container();
    stage.addChild(ctr);

    const graphics = new Graphics().beginFill("#ff0000").drawRect(0, 0, 100, 100);
    const shape = new Shape(graphics);
    ctr.addChild(shape);

    handleResize(canvas, stage);
    window.onresize = () => handleResize(canvas, stage);
    attachTicker(stage);
  };
};

init();
