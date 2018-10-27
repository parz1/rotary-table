import "./polyfills";

import { createjs } from "createjs";

import { createDOMStage, getDOMStage, handleResize } from "@/utils";

import "./styles.css";

const init = () => {
  const body = document.getElementsByTagName("body")[0];
  const canvas = createDOMStage();
  body.append(canvas);

  window.onload = () => {
    const canvas = getDOMStage();
    const stage = new createjs.Stage(canvas);

    handleResize(canvas, stage);
    window.onresize = () => handleResize(canvas, stage);
  };
};

init();
