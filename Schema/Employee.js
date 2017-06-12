var mongoose = require('mongoose');
var EmployeeScehma = new mongoose.Schema({
  signum: String,
  name: String,
  jobStage: String,
  role: String,
  type: String,
  location: String,
  businessArea: String,
  subProduct : String,
  EGI_LM : String,
  approvedbyRNAMOSS : String, 
  currentStatus : String, 
  pool: String
   
  
});

module.exports = mongoose.model('employeeCollection', EmployeeScehma);



