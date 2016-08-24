'use strict';
module.exports = angular
.module('app.main.component', [])
.component('appMain', {
	templateUrl: '/app/js/main/components/main.template.html',
	controller: MainController,
	transclude: true
});

function MainController(localStorageService) {
	var ctrl = this;
	ctrl.submit = function () {
		// debugger;
			localStorageService.set('user', ctrl.user);
			localStorageService.set('email', ctrl.email);
			localStorageService.set('pass', ctrl.pass);
	}
}