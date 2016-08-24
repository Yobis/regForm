var loginRoute = require('./login.route'), 
		loginComponent = require('./components/login.component.js');
    

module.exports = angular.module("app.login", [
  // components
  
    require('angular-ui-router'),
  // 'app.login.component',
  loginComponent.name,
  loginRoute.name


]);
