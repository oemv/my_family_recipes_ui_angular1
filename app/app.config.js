'use strict';

angular.
  module('myFamilyRecipes').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider
        .when('/signup',{
          template: '<sign-up></sign-up>'
        })
        .when('/recipes', {
          template: '<recipe-list></recipe-list>'
        })
        .otherwise('/recipes');
    }
  ]);
