import angular from 'angular';

let constantsModule = angular.module('constants', [])

.constant('constants', {
  TOKEN_KEY: 'auth.token',
  BASE_URL: '',
})
.name;

export default constantsModule;
