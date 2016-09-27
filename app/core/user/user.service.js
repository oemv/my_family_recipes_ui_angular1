'use strict';

angular
  .module('core.user')
  .factory('UserService', function ($resource) {
    return $resource('http://localhost:8080/api/users/:email',{email: "@email"});
  });
