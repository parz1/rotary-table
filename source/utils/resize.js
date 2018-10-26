// todo
// move to config
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

export const handleResize = (canvas, stage) => {
  const scale = Math.min(
    window.innerWidth / CANVAS_WIDTH,
    window.innerHeight / CANVAS_HEIGHT
  );

  const width = CANVAS_WIDTH * scale;
  const height = CANVAS_HEIGHT * scale;

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  stage.scaleX = scale;
  stage.scaleY = scale;
};
