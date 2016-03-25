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

        var tempShape;

        this.ctr = new createjs.Container();

        tempShape = new createjs.Shape( new createjs.Graphics().ss(1).s('#fff').dr(0, 0, 300, 50) );

        this.ctr.addChild(tempShape);

        this.isInited = true;

    }

};

module.exports = MainMenu;