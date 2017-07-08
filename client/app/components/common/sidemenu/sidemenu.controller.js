class SidemenuController {
  constructor(UserSrv) {
    'ngInject';
    this.UserSrv = UserSrv;
  }
  logout() {
    this.UserSrv.logout();
  }
}

export default SidemenuController;
