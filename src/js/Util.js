module.exports = {

    resize: function() {

        var w, h, ow, oh, scale;

        w = window.innerWidth;
        h = window.innerHeight;

        ow = 1920;
        oh = 1080;

        scale = Math.min(w / ow, h /oh);

        if(!app.canvas) {
            return;
        }

        app.canvas.width = ow * scale;
        app.canvas.height = oh * scale;

    }

};
