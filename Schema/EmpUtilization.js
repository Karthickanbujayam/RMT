var mongoose = require('mongoose');
Schema = mongoose.Schema;
var EmpUtilizationScehma = new mongoose.Schema({
  signum: String,
  name: String,
  approvedbyRNAMOSS: String,
  CU: String,
  location: String,
  status: String,
  mapping_dtls: [ 
  {
	year: String,
	months : 
	  [
	  	{ month: String, value: String, isChecked: String },
	  	{ month: String, value: String, isChecked: String }, 
	  	{ month: String, value: String, isChecked: String }, 
	  	{ month: String, value: String, isChecked: String },
	  	{ month: String, value: String, isChecked: String },  
	  	{ month: String, value: String, isChecked: String }, 
	  	{ month: String, value: String, isChecked: String }, 
	  	{ month: String, value: String, isChecked: String }, 
	  	{ month: String, value: String, isChecked: String }, 
	  	{ month: String, value: String, isChecked: String }, 
	  	{ month: String, value: String, isChecked: String }, 
	  	{ month: String, value: String, isChecked: String } 
		   
	  ]
  }
  ] 
});

module.exports = mongoose.model('empUtilizationCollection', EmpUtilizationScehma);