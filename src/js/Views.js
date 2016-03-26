module.exports = {

    displayMainMenu: function() {

        // creating instance of MainMenu if not exist
        if(!app.mainmenu) {
            app.mainmenu = new app.MainMenu();
        }

        // init MainMenu
        app.mainmenu.init();

    },

    hideMainMenu: function() {

        // uninit MainMenu
        app.mainmenu.uninit();

    }

};
