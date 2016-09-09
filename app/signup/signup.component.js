'use strict'

angular
.module('signup')
.component('signUp',{
    templateUrl: 'signup/signup-template.html',
    controller: function(){
      $ctrl = this;

      $ctrl.foo =  function(){
           alert('Hello');
      };

    }
});
