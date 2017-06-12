define(['./module'], function (controllers) {
	
	'use strict';

    return controllers.controller('DashboardCtrl2', ['$scope','$state',
        function($scope, uiColumnStates, $state) {

			console.log("Dashboard2.js File is loading....");

			$scope.test = "Dashboard2.js File is loading....";
		}
		]);
	
});