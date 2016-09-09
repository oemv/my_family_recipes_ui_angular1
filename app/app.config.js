'use strict';

angular.
  module('myFamilyRecipes').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/signup',{
          template: '<signUp></signUp>'
        }).
        when('/recipes', {
          template: '<recipe-list></recipe-list>'
        }).
        when('/phones/:phoneId', {
          template: '<phone-detail></phone-detail>'
        }).
        otherwise('/phones');
    }
  ]);
