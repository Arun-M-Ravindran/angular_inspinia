
// const TOKEN_KEY = 'auth.token '

class AuthService {
  constructor ($window, constants) {
    "ngInject";
    this.$window = $window;
    console.log(constants);
    this.constants = constants;
  }

  isAuthenticated() {
    var credentials;

    credentials = this.getCredentials();

    return !!credentials.token;
  }

  setCredentials(token) {
    console.log(token);
    this.$window.localStorage.setItem(this.constants.TOKEN_KEY, token);
  }

  cleanCredentials() {
    this.$window.localStorage.removeItem(this.constants.TOKEN_KEY);
  }

  getCredentials() {
    var token;
    token = this.$window.localStorage.getItem(this.constants.TOKEN_KEY);

    return {
      token: token
    };
  }
}
export default AuthService;
