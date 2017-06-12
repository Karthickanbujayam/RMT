define(['./module'], function (factories) {
    'use strict';
 
	factories.factory('projectService', function($q, $timeout, $http) { 

        var parseUrl = "http://localhost:3000/api/";

       return {
         
            fetchAllprojects: function() {
                    return $http.get(parseUrl +'projectDetails/')
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
             
            proDetailsSave: function(proDetails){
                    return $http.post(parseUrl +'projectDetails/', proDetails)
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
                    return $http.put(parseUrl +'/projectDetails/'+id, emp)
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
                    return $http.delete(parseUrl +'/projectDetails/'+id)
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




