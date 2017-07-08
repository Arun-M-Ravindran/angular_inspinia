
// 'use strict';
import angular from 'angular';
//Directive used to set metisMenu and minimalize button
let sample = angular.module('sample', [])
    .directive('sideNavigation', ($timeout) => {
      "ngInject";
        return {
            restrict: 'A',
            link: (scope, element) => {
                // Call metsi to build when user signup
                scope.$watch('authentication.user', () => {
                    $timeout(() => {
                        element.metisMenu();
                    });
                });

            }
        };
    })
    .directive('minimalizaSidebar', ($timeout) => {
      "ngInject";
        return {
            restrict: 'A',
            template: '<a class="navbar-minimalize minimalize-styl-2 btn btn-primary " href="" ng-click="minimalize()"><i class="fa fa-bars"></i></a>',
            controller: ($scope) => {
                "ngInject";
                $scope.minimalize = () => {
                    angular.element('body').toggleClass('mini-navbar');
                    if (!angular.element('body').hasClass('mini-navbar') || angular.element('body').hasClass('body-small')) {
                        // Hide menu in order to smoothly turn on when maximize menu
                        angular.element('#side-menu').hide();
                        // For smoothly turn on menu
                        $timeout(() => {
                            angular.element('#side-menu').fadeIn(400);
                        }, 200);
                    } else {
                        // Remove all inline style from jquery fadeIn function to reset menu state
                        angular.element('#side-menu').removeAttr('style');
                    }
                };
            }
        };
    })

.name;
export default sample;
