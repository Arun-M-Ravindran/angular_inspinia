import angular from 'angular';
import uiRouter from 'angular-ui-router';
import forgotPasswordComponent from './forgotPassword.component';

let forgotPasswordModule = angular.module('forgotPassword', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('forgotPassword', {
      url: '/forgotPassword',
      component: 'forgotPassword'
    });
})

.component('forgotPassword', forgotPasswordComponent)

.name;

export default forgotPasswordModule;
