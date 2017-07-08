class UserSrv {
  constructor($http, $state, constants, AuthService) {
   'ngInject';
    this.$http = $http;
    this.constants = constants;
    console.log(constants);
    this.state = $state;
    this.AuthService = AuthService;
  }

  getUser() {
    return this.user;
  }
  login(username, password) {
    const url = this.constants.BASE_URL + '/account/login/';
    const data = {
      email: username,
      password: password
    };
    return this.$http.post(url, data);
  }

  logout() {
    this.AuthService.cleanCredentials();
    this.state.go('login');
  }

  leave() {
    const url = this.constants.BASE_URL + '/account/leaves';
    return this.$http.post(url);
  }
}

export default UserSrv;
