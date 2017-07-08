import angular from 'angular';
import Navbar from './navbar/navbar';
import Sidemenu from './sidemenu/sidemenu';
import Footer from './footer/footer';
// import '../../directives.js';

let commonModule = angular.module('app.common', [
  Navbar,
  Sidemenu,
  Footer,
])

.name;

export default commonModule;
