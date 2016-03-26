module.exports = {

    init: function() {

        var images;

        // main canvas of application
        app.canvas = document.getElementById(app.globals.canvasId);
        // preloader of our application
        app.preloader = document.getElementById(app.globals.preloaderId);
        // 'images' variable may refer to images from lib
        app.images = images || {};

        // resizing
        app.Util.resize();

        // attaching resize to window resize event
        window.onresize = app.Util.resize;

        // stage and ticker
        this.create();

        // preload
        this.preload();

    },

    preload: function() {

        var manifest;

        manifest = [
            // here are your images
            // create an object with 'src' and 'id'
            // example: {src:'images/image.png', id:'image'}
            // you can then create bitmap using createjs.Bitmap(app.images.id)
            {src:'https://pbs.twimg.com/media/Cd6n5DsUsAAae73.jpg', id:'first'}
        ];

        this.preloadText = app.Util.createText('Loading');
        app.stage.addChild(this.preloadText);

        this.loader = new createjs.LoadQueue(false);
        this.loader.on('fileload', this.handleFileLoad, null, false, this);
        this.loader.on('progress', this.handleFileProgress, null, false, this);
        this.loader.on('complete', this.handleComplete, null, false, this);
        this.loader.loadManifest(manifest);

    },

    handleFileLoad: function(e) {

        // all images from app.images goes here and then you can use it by id in bitmap
        if (e.item.type === 'image') {
            app.images[e.item.id] = e.result;
        }

    },

    handleFileProgress: function(e, that) {

        // this function is changing load progress
        var percent = Math.round(that.loader.progress * 100);

        that.preloadText.text = 'Loading ' + percent + '%';

    },

    handleComplete: function(e, that) {

        app.stage.removeChild(that.preloadText);

        app.Util.resize();

        that.start();

    },

    tickFn: function() {

        app.stage.update();

    },

    create: function() {

        // creating our stage - context
        app.stage = new createjs.Stage(app.canvas);

        // fps and updating after each tick
        createjs.Ticker.setFPS(25);
        createjs.Ticker.on('tick', this.tickFn);

    },

    start: function() {

        // initing first view
        app.ViewEngine.displayMainMenu();

    }

};
