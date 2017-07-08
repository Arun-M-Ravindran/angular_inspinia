import angular from 'angular';
import uiRouter from 'angular-ui-router';
import sidemenuComponent from './sidemenu.component';

let sidemenuModule = angular.module('sidemenu', [
  uiRouter
])

.component('sidemenu', sidemenuComponent)

.name;

export default sidemenuModule;
