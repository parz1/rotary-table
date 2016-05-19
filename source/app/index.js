require('babel-runtime/core-js/promise')['default'] = require('bluebird');

import '../styles/app.scss';
import '../index.html';

import Game from './class/Game.js';

window.onload = new Game();