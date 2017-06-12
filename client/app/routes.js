/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */

define(['./app'], function(app) {
    'use strict';
     console.log("Router.js file is loading ");
    return app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider' , function($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {
        
    
            
        $stateProvider.state('/',{
            url: '/dashboard',  
            templateUrl: 'directive_templates/dashboard1/Dashboard.html',
            controller:'DashboardCtrl'
             
            
        }).state('dashboard1',{
            url: '/dashboard2',
            templateUrl: 'directive_templates/dashboard2/Dashboard.html',
            controller:'DashboardCtrl2'
        })
        .state('dashboard3',{
            url: '/dashboard3',
            templateUrl: 'directive_templates/dashboard3/Dashboard.html',
            controller: 'DashboardCtrl3'
        })
        .state('landingpage',{
            url: '/landingpage',
            templateUrl: 'directive_templates/landingpage/landingpage.html',
            controller: 'landingpage'
        }).state('landingpage.tab1',{
            url: '/tab1',
            templateUrl: 'directive_templates/landingpage/tab1.html' 
        })
        .state('landingpage.tab2',{
            url: '/tab2',
            templateUrl: 'directive_templates/landingpage/tab2.html' 
        })
        .state('landingpage.tab3',{
            url: '/tab3',
            templateUrl: 'directive_templates/landingpage/tab3.html' 
        });

        $urlRouterProvider.otherwise("/dashboard");

    }])
});