class NavbarController {
  constructor($state, UserSrv) {
    "ngInject";
    this.name = 'navbar';
    this.UserSrv = UserSrv;
  }
  logout() {
   console.log("Arun");
   this.UserSrv.logout();
  }
}

export default NavbarController;
