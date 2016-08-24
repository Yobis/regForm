'use strict';
module.exports = angular
  .module('app.login.component', [])
  .component('appLogin', {
    templateUrl: '/app/js/login/components/login.template.html',
    controller: LoginController,
    transclude: true
    });

function LoginController(){
  var ctrl = this;
}
