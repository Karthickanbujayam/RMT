define(['./module'], function (services) {
    'use strict';
 
	services.service('empUtzService', function($q, $timeout, $http) {
	console.log("empUtzService.js is loading");
   
   //***Read local JSON data....

      this.empUtz = function() {
        return $http.get('http://localhost:3000/api/empUtilization/');
   };

/*

  var deffered = $q.defer();
  var data = [];  
  var empUtzService = {};

  empUtzService.async = function() {
    $http.get('http://localhost:3000/api/empUtilization')
    .then(function (d) {
      data = d;
      console.log(d);
      deffered.resolve();
    });
    return deffered.promise;
  };
  
  empUtzService.data = function() { return data; };
 
  return empUtzService;
 */


	});     
});




