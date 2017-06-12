define(['./module'], function (factories) {
    'use strict';
 
    factories.factory('navFactory', function($q, $timeout, $http) {
    console.log("Login factory is loading");
    var menus = {
        fetch: function(callback) {
            return $timeout(function() {
                return $http.get('mock_data/menu').then(function(response) {
                    return response.data;
                });
            }, 30);
        }
    };

    return menus;
    });     
});




