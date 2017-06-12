/**
 * loads sub modules and wraps them up into the main module
 * this should be used for top-level module definitions only
 */
define([
    'angular', 
    'uiRouter',
    'ngResource',
    'dirPagination',
    './controllers/index',
    './factories/index',
    './directives/index',
    './filters/index',
    './services/index'
], function (ng) {

    'use strict';
  
    console.log("App.js file is loading ");

    return ng.module('app', [
        'app.services',
        'app.controllers',
        'app.factories',
        'app.filters',
        'app.directives',
        'ui.router',
        'angularUtils.directives.dirPagination' 
        

        
    ]);
});
