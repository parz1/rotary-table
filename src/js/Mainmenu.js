/**
 * Created by szymon on 09.03.16.
 */
var _mnp;

function MainMenu(main) {
    this.main = main;
    this.isInited = false;
}

_mnp = MainMenu.prototype;

_mnp.init = function() {

    if(!this.isInited) {
        this.view();
    }

    this.main.stage.addChild(this.ctr);

};

_mnp.uninit = function() {

    this.main.stage.removeChild(this.ctr);

};

_mnp.view = function() {

    this.ctr = new createjs.Container();

    this.isInited = true;

};