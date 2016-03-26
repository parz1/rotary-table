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

        app.canvas.style.width = ow * scale + 'px';
        app.canvas.style.height = oh * scale + 'px';

    },

    createText: function(content, font, color, x, y, regx, regy) {

        font = font || '30px ' + app.globals.defaultFont;
        color = color || '#fff';

        var text;

        text = new createjs.Text(content, font, color);

        text.x = x || app.canvas.width / 2;
        text.y = y || app.canvas.height / 2;

        text.regX = regx || text.getBounds().width / 2;
        text.regY = regy || text.getBounds().height / 2;

        return text;

    }

};
