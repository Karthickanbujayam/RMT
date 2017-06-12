/**
 * configure RequireJS
 * prefer named modules to long paths, especially for version mgt
 * or 3rd party libraries
 */
require.config({

    paths: {
            
        'angular': '../bower_components/angular/angular',
        'uiRouter': '../bower_components/angular-ui-router/release/angular-ui-router',
        'ngRouter': '../bower_components/node_modules/angular-route/angular-route',
        'ngResource':'../bower_components/angular-resource/angular-resource',
        'jQuery':'../bower_components/jquery/dist/jquery',
        'domReady': '../bower_components/domReady/domReady',
        'dirPagination': '../bower_components/dirPagination/dirPagination'  

    },

    /**
     * for libs that either do not support AMD out of the box, or
     * require some fine tuning to dependency mgt'
     */
    shim: {
        'angular': {
            exports: 'angular',
            deps: ['jQuery']
        },
        'uiRouter':{
            deps: ['angular']
        },
        'ngRouter':{
            deps: ['angular']
        },
        'ngResource':{
            deps: ['angular']   
        },
        'angular-cookies':{
            deps: ['angular']
        },
        'domReady':{ 
            exports: 'angular',
            deps: ['jQuery']
        } ,
        'dirPagination':{  
            deps: ['angular']
        } 

    },
    
    deps: [
        // kick start application... see bootstrap.js
        './bootstrap' 
    ]
});


define([], function () {
    'use strict';
     console.log("Main.js file is loading ");
     
});







