class LoginController {
  constructor($state, UserSrv, AuthService) {
    'ngInject';

    this.$state = $state;
    this.UserSrv = UserSrv;
    this.AuthService = AuthService;
    this.email = 'admin@app.com';
    this.password = 'cmnr1234';
    // this.$mdDialog = $mdDialog;
  }

  login() {
    this.UserSrv.login(this.email, this.password).then((resp)=> {
      console.log(resp.data);
      if(resp.data.success) {
        this.AuthService.setCredentials(resp.data.token);
        this.$state.go('vga.dashboard');
      }
      else alert("Invalid username/password.  Please try again.... ")
    });
  }

  forgotPassword() {
    this.$state.go('forgotPassword');
  }

}
export default LoginController;
