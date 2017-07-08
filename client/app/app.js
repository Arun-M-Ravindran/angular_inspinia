
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import Components from './components/components';
import AppComponent from './app.component';
import Inspinia from './directives/directives';
import Appservices from './services/services';
import AppConst from './appConst';
import AuthInterceptorFactory from './authInterceptors';

import 'jquery';
import 'animate';
import 'font-awesome/css/font-awesome.min.css';
import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.css';
import 'metismenu';
import 'metismenu/src/metisMenu.css';
import '../inspinia';
import '../assets/css/style.css';
import 'angularjs-datepicker';
import uiBootstrapDatePicker from 'angular-bootstrap-datetimepicker';


angular.module('vga', [
  uiRouter,
  Components,
  Inspinia,
  uiBootstrap,
  Appservices,
  AppConst,
  '720kb.datepicker',
  uiBootstrapDatePicker
])

  .factory('AuthInterceptor', AuthInterceptorFactory)
  .config(($locationProvider, $stateProvider, $httpProvider, $urlRouterProvider) => {
    "ngInject";
    $httpProvider.interceptors.push('AuthInterceptor')
    $locationProvider.html5Mode(true).hashPrefix('!');
    $stateProvider
      .state('vga', {
        url: '/vga',
        component: 'vga'
      });
   if(window.localStorage.getItem('auth.token')) {
     $urlRouterProvider.otherwise('vga/dashboard');
   } else {
     $urlRouterProvider.otherwise('/login');
   }
  })

  .run(($rootScope, $state, $stateParams) => {
    "ngInject";
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
  })

  .component('vga', AppComponent);
