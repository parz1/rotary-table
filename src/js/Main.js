var images,
    main, _mp;

function Main() {}

_mp = Main.prototype;

_mp.init = function() {

    var manifest;

    resize();

    this.canvas = document.getElementById('main');
    this.preloader = document.getElementById('preloader');
    images = images || {};

    manifest = [

    ];

    this.loader = new createjs.LoadQueue(false);
    this.loader.on('fileload', this.handleFileLoad, null, false, this);
    this.loader.on('progress', this.handleFileProgress, null, false, this);
    this.handleComplete(null, this);
    //this.loader.on('complete', this.handleComplete, null, false, this);
    this.loader.loadManifest(manifest);

};

_mp.handleFileLoad = function(e) {

    if(e.item.type === 'image') {
        images[e.item.id] = e.result;
    }

};

_mp.handleFileProgress = function(e, that) {

    var percent = Math.round(that.loader.progress * 100);

    that.preloader.innerHTML = 'Loading' + percent + '%';

};

_mp.handleComplete = function(e, that) {

    that.stage = new createjs.Stage(that.canvas);
    that.stage.enableMouseOver();

    createjs.Ticker.setFPS(25);
    createjs.Ticker.on('tick', that.tickFn, null, false, this);

    that.isActive = true;

    resize();
};

_mp.tickFn = function(e, that) {

    that.stage.update();

};