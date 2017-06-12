define(['../module'], function (directives) {
    'use strict';
    console.log("dashboard2 directive is loading...");
    directives.directive('dashboard2', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'directive_templates/dashboard2/Dashboard.html'
	  };
	});
});
