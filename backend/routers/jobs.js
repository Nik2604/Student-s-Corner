const router = require("express").Router();
let Job = require("../models/job.model");

// Get all jobs
router.route("/").get((req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 15;
  const skipIndex = (page - 1) * limit;

  Job.find()
    .skip(skipIndex)
    .limit(limit)
    .then((jobs) => res.json(jobs))
    .catch((err) => res.status(400).json("Error: " + err));
});

// Get total number of jobs
router.route("/count").get((req, res) => {
  Job.countDocuments()
    .then((count) => res.json(count))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
