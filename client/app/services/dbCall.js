define(['./module'], function (services) {
    'use strict';
 
	services.service('myService', function($q, $timeout, $http) {
	console.log("service.js is loading");
   
   //***Read local JSON data....

  var deffered = $q.defer();
  var data = [];  
  var myService = {};

  myService.async = function() {
    $http.get('http://localhost:3000/api/employee')
    .then(function (d) {
      data = d;
      console.log(d);
      deffered.resolve();
    });
    return deffered.promise;
  };
 


  myService.data = function() { return data; };






  return myService;
 


	});     
});




