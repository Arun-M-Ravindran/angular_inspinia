import angular from 'angular';
import uiRouter from 'angular-ui-router';
import dashboardComponent from './dashboard.component';

let dashboardModule = angular.module('dashboard', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
    // $urlRouterProvider.otherwise('/dashboard');
  $stateProvider
    .state('vga.dashboard', {
      url: '/dashboard',
      component: 'dashboard'
    });
})

.component('dashboard', dashboardComponent)

.name;

export default dashboardModule;
