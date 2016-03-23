var images, main;

var Main = function () {};

Main.prototype = {

    init: function () {

        var manifest;

        this.canvas = document.getElementById('main');
        this.preloader = document.getElementById('preloader');
        images = images || {};

        manifest = [
            {src:'https://www.gravatar.com/avatar/f24b32911f573da56b76fcec73e338b0?s=32&d=identicon&r=PG', id:'aaa'}
        ];

        this.loader = new createjs.LoadQueue(false);
        this.loader.on('fileload', this.handleFileLoad, null, false, this);
        this.loader.on('progress', this.handleFileProgress, null, false, this);
        this.loader.on('complete', this.handleComplete, null, false, this);
        this.loader.loadManifest(manifest);

    },
    handleFileLoad: function (e) {

        if (e.item.type === 'image') {
            images[e.item.id] = e.result;
        }

    },
    handleFileProgress: function (e, that) {

        var percent = Math.round(that.loader.progress * 100);

        that.preloader.innerHTML = 'Loading' + percent + '%';

    },
    handleComplete: function (e, that) {

        that.stage = new createjs.Stage(that.canvas);
        that.stage.enableMouseOver();

        createjs.Ticker.setFPS(25);
        createjs.Ticker.on('tick', that.tickFn, null, false, that);

        that.isActive = true;

        that.displayMainMenu();

        resize();

    },
    tickFn: function (e, that) {

        that.stage.update();

    },
    displayMainMenu: function () {

        if (!this.mainMenuView) {
            this.mainMenuView = new MainMenu(this);
        }

        this.mainMenuView.init();
        this.currentView = this.mainMenuView;

    },
    hideMainMenu: function() {

        this.mainMenuView.uninit();
        this.currentView = null;

    }

};