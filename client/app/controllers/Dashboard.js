define(['./module'], function (controllers) {
	
	'use strict';

    return controllers.controller('DashboardCtrl', ['$scope','$state',
        function($scope, uiColumnStates, $state) {

			console.log("Dashboard1.js File is loading....");

			$scope.test = "Dashboard1.js File is loading....";
		
			}
		]);
	
});