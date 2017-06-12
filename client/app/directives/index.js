/**
 * attach directives to this module
 * if you get 'unknown {x}Provider' errors from angular, be sure they are
 * properly referenced in one of the module dependencies in the array.
 **/
define([
		'./dashboard1/dashboard',
		'./dashboard2/dashboard',
		'./dashboard3/dashboard',
		'./template_design/header',
		'./template_design/footer',
		'./template_design/nav'  
	   ], function () {  
	console.log("Directives are loading");
});
