import angular from 'angular';
import UserSrv from './user.srv';
import AuthService from './authSrv';


const serviceModule = angular.module('service', [])

.service('UserSrv', UserSrv)
.service('AuthService', AuthService)

.name;

export default serviceModule;
