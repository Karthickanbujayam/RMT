define(['./module'], function (factories) {
    'use strict';
 
	factories.factory('empServices', function($q, $timeout, $http) {
	console.log("empServices factory is loading");


        var parseUrl = "http://localhost:3000/api";

       return {
         
            fetchAllEmps: function() {
                    return $http.get(parseUrl +'/employee/')
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
             
            createEmp: function(emp){
                    return $http.post(parseUrl +'/employee/', emp)
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
                    return $http.put(parseUrl +'/employee/'+id, emp)
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
                    return $http.delete(parseUrl +'/employee/'+id)
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




