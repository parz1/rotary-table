import "./polyfills";

import { Stage, Container, Graphics, Shape, Ticker } from "@createjs/EaselJS";

import { createDOMStage, getDOMStage, handleResize } from "@/utils";

import { CONFIG } from "@/config";

import "./styles.css";

const init = () => {
  const body = document.getElementsByTagName("body")[0];
  const canvas = createDOMStage();
  body.append(canvas);

  window.onload = () => {
    Ticker.framerate = CONFIG.framerate;
    Ticker.on("tick", () => {
      stage.update();
    });

    const canvas = getDOMStage();
    const stage = new Stage(canvas);

    const ctr = new Container();
    stage.addChild(ctr);

    const graphics = new Graphics()
      .beginFill("#ff0000")
      .drawRect(0, 0, 100, 100);
    const shape = new Shape(graphics);
    ctr.addChild(shape);

    handleResize(canvas, stage);
    window.onresize = () => handleResize(canvas, stage);
  };
};

init();
