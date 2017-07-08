// 'use strict';

// Workaround for not losing the this binding in methods
let self;

class AuthInterceptor {
  constructor ($q, AuthService) {
    this.$q = $q;
    this.authService = AuthService;

    self = this;
  }

  request (config) {
    if (self.authService.getCredentials().token) {
      config.headers.Authorization = `Token ${self.authService.getCredentials().token}`;
      console.log(config);
    }
    return config;
  }

  responseError (rejection) {
    return self.$q.reject(rejection);
  }


  static factory ($location, $q, AuthService) {
    return new AuthInterceptor($location, $q, AuthService);
  }
}

AuthInterceptor.factory.$inject = ['$q', 'AuthService'];

export default AuthInterceptor.factory;
