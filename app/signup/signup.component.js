'use strict';

angular
  .module('signUp')
  .component('signUp', {
    templateUrl: 'signUp/signup-form.html',
    controller: ['$routeParams', '$http', '$location', function($routeParams, $http, $location){
       var $ctrl = this;
       $ctrl.user = { display_image : ''};
       $ctrl.api_creds = {
           email: 'johndoe@outlook.com',
           password: 'foobar'
       };

       $ctrl.signUp = function(){
         $http
         .post('http://localhost:8080/authenticate',$ctrl.api_creds)
         .then(
           function(response){
                  var isSuccess = response.data.success;
                  if(isSuccess){
                      var request = {
                            method: 'POST',
                            url: 'http://localhost:8080/api/users',
                            headers:{
                              'x-access-token': response.data.access_token
                            },
                            data: $ctrl.user
                      };

                      $http(request)
                      .then(
                        function(response){
                            $location.path('/recipes').replace();
                            console.dir(response);
                        },
                        function(error){
                          console.dir(error);

                      });
                }else{

                }
            },
            function(error){
                console.log(error);
            }
          );
       };
    }]
  });
