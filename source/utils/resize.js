// todo
// move to config
const CANVAS_WIDTH = 1920;
const CANVAS_HEIGHT = 1080;

export const calculateScale = () =>
  Math.min(
    window.innerWidth / CANVAS_WIDTH,
    window.innerHeight / CANVAS_HEIGHT,
  );

export const handleResize = (canvas, stage) => {
  const scale = calculateScale();

  const width = CANVAS_WIDTH * scale;
  const height = CANVAS_HEIGHT * scale;

  canvas.width = width;
  canvas.height = height;
  canvas.style.width = `${width}px`;
  canvas.style.height = `${height}px`;

  stage.scaleX = scale;
  stage.scaleY = scale;
};
