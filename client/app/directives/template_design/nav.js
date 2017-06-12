define(['../module'], function (directives) {
    'use strict';
    directives.directive('pageNav', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'directive_templates/template_design/nav.html'
	  };
	});
});
