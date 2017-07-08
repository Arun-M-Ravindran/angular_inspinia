import angular from 'angular';
import uiRouter from 'angular-ui-router';
import resetPasswordComponent from './resetPassword.component';

let resetPasswordModule = angular.module('resetPassword', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('resetPassword', {
      url: '/resetPassword',
      component: 'resetPassword'
    });
})

.component('resetPassword', resetPasswordComponent)

.name;

export default resetPasswordModule;
