import angular from 'angular';
import Login from './login/login';
import ResetPassword from './resetPassword/resetPassword';
import ForgotPassword from './forgotPassword/forgotPassword';


let authModule = angular.module('app.auth', [
  Login,
  ResetPassword,
  ForgotPassword
])

.name;

export default authModule;
