const express = require('express');
const router = express.Router();
const Job = require('../models/jobs.model');

router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.json(jobs);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

router.post('/', async (req, res) => {
  try {
    const { companyName, position, locations, salary, batchesEligible, branchesEligible, jobDescription, applyLink } = req.body;
    const job = new Job({
      companyName,
      position,
      locations,
      salary,
      batchesEligible,
      branchesEligible,
      jobDescription,
      applyLink,
    });
    await job.save();
    res.json(job);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
