import { createjs } from "createjs";

import { createDOMStage, getDOMStage } from "@/utils";

import "./styles.css";

const init = () => {
  const body = document.getElementsByTagName("body")[0];
  const canvas = createDOMStage();
  body.append(canvas);

  window.onload = () => {
    const canvas = getDOMStage();
    const stage = new createjs.Stage(canvas);
  };
};

init();
