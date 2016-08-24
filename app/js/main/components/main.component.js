'use strict';
module.exports = angular
.module('app.main.component', [])
.component('appMain', {
	templateUrl: '/app/js/main/components/main.template.html',
	controller: MainController,
	transclude: true
});

function MainController(localStorageService, $scope) {
	var ctrl = this;
	$scope.submit = function () {
			localStorageService.set('user', $scope.user);
			localStorageService.set('email', $scope.email);
			localStorageService.set('pass', $scope.pass);
	}
}