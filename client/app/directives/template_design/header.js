define(['../module'], function (directives) {
    'use strict';
    directives.directive('pageHeader', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'directive_templates/template_design/header.html'
	  };
	});
});
