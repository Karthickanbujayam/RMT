define(['./module'], function (controllers) {
	
	'use strict';

    return controllers.controller('DashboardCtrl3', ['$scope','$state',
        function($scope, uiColumnStates, $state) {

			console.log("Dashboard3.js File is loading....");

			$scope.test = "Dashboard3.js File is loading....";
		}
		]);
	
});