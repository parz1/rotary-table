function MainMenu(main) {

    this.main = main;
    this.isInited = false;

}

MainMenu.prototype = {

    init: function() {

        if(!this.isInited) {
            this.view();
        }

        this.main.stage.addChild(this.ctr);

    },
    uninit: function() {

        this.main.stage.removeChild(this.ctr);

    },
    view: function() {

        this.ctr = new createjs.Container();

        this.isInited = true;

    }

};

module.exports = MainMenu;