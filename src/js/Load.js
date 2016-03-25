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

        this.loader = new createjs.LoadQueue(false);
        this.loader.on('fileload', this.handleFileLoad, null, false, this);
        this.loader.on('progress', this.handleFileProgress, null, false, this);
        this.loader.on('complete', this.handleComplete, null, false, this);
        this.loader.loadManifest(manifest);

        console.log('preloading application');

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

        app.preloader.innerHTML = 'Loading ' + percent + '%';

    },

    handleComplete: function(e, that) {

        // and here are functions that are called when loading ends
        document.getElementById(app.globals.preloaderId).style.display = 'none';

        that.create();

        app.Util.resize();

    },

    tickFn: function() {

        app.stage.update();

    },

    create: function() {

        app.stage = new createjs.Stage(app.canvas);

        createjs.Ticker.setFPS(25);
        createjs.Ticker.on('tick', this.tickFn);

        // name of instance lowercase, name of object with capital letters
        app.mainmenu = new app.MainMenu();

        // initing first view
        app.mainmenu.init();

    }

};
