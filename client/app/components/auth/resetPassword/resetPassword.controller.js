class ResetPasswordController {
  constructor($state, UserSrv) {
    'ngInject';
    this.$state = $state;
    this.UserSrv = UserSrv;
  }
  resetPassword() {
    this.UserSrv.logout();
  }
}

export default ResetPasswordController;
