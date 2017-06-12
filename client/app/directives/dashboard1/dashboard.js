define(['../module'], function (directives) {
    'use strict';
    console.log("dashboard1 directive is loading...");
    directives.directive('dashboard1', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'directive_templates/dashboard1/Dashboard.html'
	  };
	});
});
