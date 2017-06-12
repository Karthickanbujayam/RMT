define(['../module'], function (directives) {
    'use strict';
    console.log("dashboard3 directive is loading...");
    directives.directive('dashboard3', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'directive_templates/dashboard3/Dashboard.html'
	  };
	});
});
