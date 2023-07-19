import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Jobs.css";
import { Box, Typography } from "@mui/material";
import { makeStyles } from '@material-ui/core/styles';
const classes = makeStyles({
  root: {
    '&:hover': {
      cursor: 'pointer',
      color: '#FF1493', 
    },
  },
});
const JobCard = ({ job }) => {
  return (
    <div className="car">
      <div className="car-bod">
        <h5 className="car-titl">{job.Title}</h5>
        <h6 className="car-subtitl mb-2 text-muted">{job.Company}</h6>
        <p className="car-tex">{job.Location}</p>
        <a href={job["Apply Link"]} className="card-link">
          Apply
        </a>
      </div>
    </div>
  );
};

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(15);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get(`/jobs?page=${page}&limit=${limit}`);
      setJobs(res.data);
    };
    fetchJobs();
  }, [page, limit]);

  useEffect(() => {
    const fetchCount = async () => {
      const res = await axios.get("/jobs/count");
      setTotal(res.data);
    };
    fetchCount();
  }, []);

  const handleRefresh = () => {
    setJobs([]);
    setPage(1);
    setLimit(15);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <div>
      <div className="containe">
      <Box>
        <center>
      <Typography variant='h4' color='#1E90FF' >Off-Campus Jobs</Typography></center>
     
      <div className="ro">
        {jobs.map((job) => (
          <div className="col-md-4 mb-3" key={job._id}>
            <JobCard job={job} />
          </div>
        ))}
      </div>
      <div className="d-flex justify-content-center my-3">
        <nav>
          <ul className="pagination">
            {Array.from(Array(Math.ceil(total / limit)), (_, i) => i + 1).map(
              (number) => (
                <li
                  className={`page-item${number === page ? " active" : ""}`}
                  key={number}
                >
                  <Link to="#" className="page-lin" onClick={(event) => handlePageChange(event, number)}>
                    {number}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </div>
      </Box>
     
    </div>
    </div>
  );
};

export default Jobs;
