function MainMenu() {

    this.isInited = false;

}

MainMenu.prototype = {

    init: function() {

        if(!this.isInited) {
            this.view();
        }

        app.stage.addChild(this.ctr);

    },

    uninit: function() {

        app.stage.removeChild(this.ctr);

    },

    view: function() {

        this.ctr = new createjs.Container();

        this.isInited = true;

    }

};

module.exports = MainMenu;