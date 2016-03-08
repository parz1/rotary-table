window.onload = init;

function init() {

    main = new Main();

    main.init();

    window.onresize = resize;

}

function resize() {

    var w, h, ow, oh, scale;

    w = window.innerWidth;
    h = window.innerHeight;

    ow = 1920;
    oh = 1080;

    scale = Math.min(w / ow, h /oh);

    if(!main.isActive) {
        return;
    }

    main.canvas.width = ow * scale;
    main.canvas.height = oh * scale;

    main.stage.scaleX = main.stage.scaleY = scale;

    main.stage.update();

}