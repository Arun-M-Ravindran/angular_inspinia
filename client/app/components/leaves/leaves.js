import angular from 'angular';
import uiRouter from 'angular-ui-router';
import leavesComponent from './leaves.component';

let leavesModule = angular.module('leaves', [
  uiRouter
])

.config(($stateProvider, $urlRouterProvider) => {
  "ngInject";
  $stateProvider
    .state('vga.leaves', {
      url: '/leaves',
      component: 'leaves'
    });
})

.component('leaves', leavesComponent)

.name;

export default leavesModule;
