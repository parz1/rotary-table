// our application
// attached to window object, because it can be accessible from everywhere
window.app = {};

// global configuration
app.globals = {
    canvasId: 'main',
    defaultFont: 'Open Sans'
};

// util functions
app.Util = require('./Util.js');
// loading & init functions
app.Load = require('./Load.js');
// view engine - display & hide
app.ViewEngine = require('./Views.js');

// classes
app.MainMenu = require('./MainMenu.js');

// initing app after dom loaded
window.onload = app.Load.init();
