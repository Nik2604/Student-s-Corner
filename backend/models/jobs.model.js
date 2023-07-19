const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  company: String,
  position: String,
  locations: [String],
  salary: Number,
  batchesEligible: [String],
  branchesEligible: [String],
  jobDescription: String,
  applyLink: String
});

const Job = mongoose.model('Job', jobSchema);

module.exports = Job;
