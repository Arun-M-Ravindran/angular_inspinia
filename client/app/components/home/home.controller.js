



class HomeController {

  constructor($state, $scope) {
    'ngInject';
    this.state = $state;
  }


  login() {
    console.log('Arun')
    this.state.go('login');
  }

 

}

export default HomeController;
