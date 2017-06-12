define(['./module'], function (factories) {
    'use strict';
 
	factories.factory('empUtzService', function($q, $timeout, $http) {
	console.log("empUtzService factory is loading");


        var parseUrl = "http://localhost:3000/api/";

       return {
         
            fetchAllempUtz: function() {
                    return $http.get(parseUrl +'empUtilization/')
                    .then(
                            function(response){
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while fetching users');
                                return $q.reject(errResponse);
                            }
                    );
                },
             
            empUtzSave: function(empUtz){
                    return $http.post(parseUrl +'empUtilization/', empUtz)
                    .then(
                            function(response){
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while creating user');
                                return $q.reject(errResponse);
                            }
                    );
                },
             
            updateEmp: function(emp, id){
                    return $http.put(parseUrl +'/empUtilization/'+id, emp)
                    .then(
                            function(response){
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while updating user');
                                return $q.reject(errResponse);
                            }
                    );
                },
             
           deleteEmp: function(id){
                    return $http.delete(parseUrl +'/empUtilization/'+id)
                    .then(
                            function(response){
                                return response.data;
                            }, 
                            function(errResponse){
                                console.error('Error while deleting user');
                                return $q.reject(errResponse);
                            }
                    );
                }
         
        };

 

	});     
});




