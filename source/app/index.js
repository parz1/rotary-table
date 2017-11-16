/* eslint-disable no-unused-vars */
import App from '@/App';

import appConfig from '@/config';
import context from '@/context';
import PreloaderController from '@/controller/Preloader';
import MainMenuController from '@/controller/MainMenu';
import PreloaderService from '@/services/Preloader';
import RouteService from '@/services/Route';
import ResizeService from '@/services/Resize';
import PreloaderModel from '@/model/Preloader';
import EventDispatcher from '@/model/Event';
import PreloaderView from '@/view/Preloader';
import MainMenuView from '@/view/MainMenu';
import MainView from '@/view/Main';

import '../index.html';
import '../styles/app.scss';

window.addEventListener('load', () => {
  App.container.MainView.render();

  App.digest(['MainMenuController', 'ResizeService']);
  App.container.PreloaderController.load();
});
