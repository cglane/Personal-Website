/**
 * @name personalWebsite
 * @description
 * Single Page Personal Website
 */

import angular from 'angular';
import uirouter from 'angular-ui-router';
//config
import router from './router.js';
//controllers
import MainController from './areas/main/main-ctrl.js';
import PortfolioController from './areas/portfolio/portfolio-ctrl.js'
import ContactController from './areas/contact/contact-ctrl.js'
import AboutController from './areas/about/about-ctrl.js'
angular.module('personalWeb', [uirouter])
  //config
  .config(router)
  //controllers
  .controller('MainController',MainController)
  .controller('ContactController', ContactController)
  .controller('PortfolioController', PortfolioController)
  .controller('AboutController', AboutController)

angular.bootstrap(document, ['personalWeb']);
