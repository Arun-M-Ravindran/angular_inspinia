class LeavesController {

  constructor(UserSrv, $scope) {
    'ngInject';
    this.UserSrv = UserSrv;
    this.toDate = "";
    this.leaves();
    $scope.beforeRender = function ($view, $dates, $leftDate, $upDate, $rightDate) {
    var index = Math.floor(Math.random() * $dates.length);
    $dates[index].selectable = false;
}
  }
  leaves() {
    this.UserSrv.leave().then((resp) => {
      console.log(resp.data);
    });
  }

  apply() {
    console.log(this.toDate);
    console.log(this.fromDate);
  }

}

export default LeavesController;
