define(['./module'], function (controllers) {
	
	'use strict';

    return controllers.controller('landingpage', ['$location','$scope','$state','$http','$interval','$rootScope','$filter','empServices','empUtzService','projectService',
        function($location, $scope, $state, $http, $interval, $rootScope, $filter, empServices, empUtzService, projectService) {

			console.log("landingpage.js File is loading....");
			/********** Employee Details start ********/
			  $scope.currentPage = 1;
  			  $scope.pageSize = 6;
			  $scope.test = "landingpage.js File is loading....";
			  $scope.check = "";
			  $scope.editmn = true;
			  $scope.deletemn = true; 
			  $scope.addmn = false;
			  $scope.showaddform = false;
			  $scope.showeditform = false;			  
			  $scope.showfrm = false;
 
			  $scope.edit = function() {
			    $scope.editmode = true;
			    $scope.addmode = true;
			    $scope.deletemode = true; 
			    $scope.showeditform = true;	
			    $scope.rowUnderEdit = angular.copy($scope.currentrow);

			  }
			  $scope.cancel = function() {
			    $scope.editmode = false;
			    $scope.addmode = false;
			    $scope.deletemode = false; 
			    $scope.showaddform = false;
			    $scope.showeditform = false;	
			    $scope.rowUnderEdit = {};
			  }
			  $scope.save = function() {
			    $scope.currentrow.name = $scope.rowUnderEdit.username;
			    $scope.currentrow.points = $scope.rowUnderEdit.password;
			    $scope.editmode = false;
			    $scope.addmode = false;
			    $scope.resetAll({});
			  }

			  $scope.create = function (res) {
			  	$scope.showaddform = true;
			    $scope.editmode = true;
			    $scope.addmode = true;
			    $scope.deletemode = true;     
			    $rootScope.loading = true;
			   
			    };

			    $scope.createRow = function(){
			    	console.log("createRow");
			    }
/* 	

        	  empServices.query().then(function() {
				    $scope.MyRecCollection = empServices.data().data;
			  });
 
        		  $scope.$watch('MyRecCollection', function(MyRecCollection) {
				    if(angular.isDefined(MyRecCollection)) {
				      // Do something with the returned data, angular handle promises fine, you don't have to reassign the value to the scope if you just want to use it with angular directives
				    }
					});
				*/
			  $scope.resetAll = function(currentRow) {
			    angular.forEach($scope.MyRecCollection, function(val) {


			      if (val._id !== currentRow._id) {
			        val.checked = false;

			      } else {
			        $scope.currentrow = val;
			      }
			      $scope.editmn = false;
			      $scope.deletemn = false;
 
			    });
			  }

		$scope.emp = {
				  signum: '',
				  name: '',
				  jobStage: '',
				  role: '',
				  type: '',
				  location: '',
				  businessArea: '',
				  subProduct : '',
				  EGI_LM : '',
				  approvedbyRNAMOSS : '', 
				  currentStatus : '', 
				  pool: ''
				}
        $scope.emps=[];
               
        $scope.fetchAllEmps = function(){
              empServices.fetchAllEmps()
                  .then(
                               function(d) {
                                    $scope.MyRecCollection = d;
                                    //$scope.MyRecCollection = empServices.data().data;
                               },
                                function(errResponse){
                                    console.error('Error while fetching Currencies');
                                }
                       );
          };
          $scope.fetchAllEmps();

          $scope.createEmp = function(emp){ 
              empServices.createEmp(emp)
                      .then(
                      $scope.fetchAllEmps, 
                              function(errResponse){
                                   console.error('Error while creating User.');
                              } 
                  );
          };

          $scope.updateEmp = function(emp, id){
              empServices.updateEmp(emp, id)
                      .then(
                              $scope.fetchAllEmps, 
                              function(errResponse){
                                   console.error('Error while updating User.');
                              } 
                  );
          };
 
         $scope.deleteEmp = function(id){
              empServices.deleteUser(id)
                      .then(
                              $scope.fetchAllEmps, 
                              function(errResponse){
                                   console.error('Error while deleting User.');
                              } 
                  );
          };
 
/********** Employee Details End ********/

/***********Employee EmpUtz Start******************************/
			/*
 			 $scope.editmn = true;
			  $scope.deletemn = true; 
			  $scope.addmn = false;
			 
		 		  
			  $scope.showfrm = false;
			  */
			   $scope.empUtzShowaddform = false;
			   $scope.empUtzShoweditform = false;

			  $scope.empUtzCreate = function (res) {
			  	$scope.empUtzShowaddform = true;
			    $scope.empUtzEditmode = true;
			    $scope.empUtzAddmode = true;
			    $scope.empUtzDeletemode = true;     
			    $rootScope.loading = true;
			   
			    };


			    $scope.empUtzCancel = function() {
				   $scope.empUtzEditmode = false;
				    $scope.empUtzAddmode = false;
				    $scope.empUtzDeletemode = false; 
				    $scope.empUtzShowaddform = false;
				    $scope.showeditform = false;	
				    $scope.rowUnderEdit = {};
			  }
 

        $scope.empUtzs=[];
               
        $scope.fetchAllempUtz = function(){
              empUtzService.fetchAllempUtz().then(function (response) {
           		 console.log(response);
            	 $scope.RecEmpUtzCollection = response;
	            }, function (error) {
	                console.log('Unable to load Employee data: ' + error.message);
	            });

          };


          $scope.fetchAllempUtz();


 		$scope.empUtzSave = function(empUtz){ 
 			   var empUtzreq = $scope.bindData(empUtz)
              		empUtzService.empUtzSave(empUtzreq).then(  $scope.fetchAllempUtz, 
                              function(errResponse){
                                   console.error('Error while creating User.');
                              } 
                  );
          };

          $scope.bindData = function(req){
          	 var empUtzreq = {
				  signum: req.signum,
				  name: req.name,
				  approvedbyRNAMOSS: req.approvedbyRNAMOSS,
				  CU: req.CU,
				  location: req.location,
				  status: req.status,
				  mapping_dtls: [ 
				  {
					year: req.year,
					months : 
					  [
					  	{ month: "Jan", value: req.jan , isChecked: '' },
					  	{ month: "Feb", value: req.feb, isChecked: '' }, 
					  	{ month: "Mar", value: req.mar, isChecked: '' }, 
					  	{ month: "Apr", value: req.apr , isChecked: '' },
					  	{ month: "may", value: req.may , isChecked: '' },  
					  	{ month: "Jun", value: req.jun, isChecked: '' }, 
					  	{ month: "Jul", value: req.jul, isChecked: '' }, 
					  	{ month: "Aug", value: req.aug, isChecked: '' }, 
					  	{ month: "Sep", value: req.sep, isChecked: '' }, 
					  	{ month: "Oct", value: req.oct, isChecked: '' }, 
					  	{ month: "Nov", value: req.nov, isChecked: '' }, 
					  	{ month: "Dec", value: req.dec, isChecked: '' }, 
						   
					  ]
				  }
				  ]
				}
				return empUtzreq

          }

         

/****************Employee EmpUtz end***************************/

/****************Project Details start***************************/

	/*
 			 $scope.editmn = true;
			  $scope.deletemn = true; 
			  $scope.addmn = false;
			 
		 		  
			  $scope.showfrm = false;
			  */
			   $scope.projectShowaddform = false;
			   $scope.projectShoweditform = false;

			  $scope.projectCreate = function (res) {
			  	$scope.projectShowaddform = true;
			    $scope.projectEditmode = true;
			    $scope.projectAddmode = true;
			    $scope.projectDeletemode = true;     
			    $rootScope.loading = true;
			   
			    };


			    $scope.projectCancel = function() {
				   $scope.projectEditmode = false;
				    $scope.projectAddmode = false;
				    $scope.projectDeletemode = false; 
				    $scope.projectShowaddform = false;
				    $scope.projectShoweditform = false;	
				    $scope.rowUnderEdit = {};
			  }
  
        $scope.fetchAllprojects = function(){
              projectService.fetchAllprojects().then(function (response) {
           		 console.log(response);
            	 $scope.projDetailCollection = response;
	            }, function (error) {
	                console.log('Unable to load Employee data: ' + error.message);
	            });

          };


          $scope.fetchAllprojects();


 		$scope.projectDetailSave = function(projects){ 
 			 	projectService.proDetailsSave(projects).then(  $scope.fetchAllprojects, 
                              function(errResponse){
                                   console.error('Error while creating User.');
                              } 
                  );
          };

         

/****************Project Details end***************************/

  $scope.isActive = function(route) {
        return route === $location.path();
    }




		
		}]);
});