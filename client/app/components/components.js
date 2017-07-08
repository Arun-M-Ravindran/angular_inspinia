import angular from 'angular';
import Common from './common/common';
import Auth from './auth/auth';
import Dashboard from './dashboard/dashboard';
import Profile from './profile/profile';
import Leaves from './leaves/leaves';
import Home from './home/home';

let componentModule = angular.module('app.components', [
  Common,
  Auth,
  Dashboard,
  Profile,
  Leaves,
  Home,
])

.name;

export default componentModule;
