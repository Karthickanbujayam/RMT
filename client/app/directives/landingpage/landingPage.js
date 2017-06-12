define(['../module'], function (directives) {
    'use strict';
    console.log("landingpage directive is loading...");
    directives.directive('landingpage', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'directive_templates/landingpage/landingpage.html'
	  };
	});
});
