define(['../module'], function (directives) {
    'use strict';
    directives.directive('pageFooter', function() {
	  return {
	    restrict: 'E',
	    templateUrl: 'directive_templates/template_design/footer.html'
	  };
	});
});
