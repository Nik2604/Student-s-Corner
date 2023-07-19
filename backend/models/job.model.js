const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const jobSchema = new Schema(
  {
    Date: { type: String, required: true },
    Company: { type: String, required: true },
    Title: { type: String, required: true },
    Location: { type: String, required: true },
    "Apply Link": { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
