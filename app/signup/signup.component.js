'use strict';

angular
  .module('signUp')
  .component('signUp', {
    templateUrl: 'signUp/signup-form.html',
    controller: ['$routeParams', '$http', function($routeParams, $http){
       var $ctrl = this;
       var user = {};
       $ctrl.api_creds = {
           email: 'johndoe@outlook.com',
           password: 'foobar'
       }

       $ctrl.doSubmit = function(){
         $http
         .post('http://localhost:8080/authenticate',$ctrl.api_creds)
         .then(
            function(response){
              console.log(response);
            },
            function(response){
              console.log(response);
            }
          );
       };
    }]
  });
