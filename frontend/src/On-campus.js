import React , { useState, useEffect} from 'react';
import {Box, CircularProgress, Grid, ThemeProvider, Typography} from '@mui/material';
import theme from './theme/theme';
import Header from './components/Newheader/index';
import SearchBar from './components/SearchBar';
import JobCard from './components/Job/JobCard';
import NewJobModel from './components/Job/NewJobModel';
import { collection, addDoc } from "firebase/firestore";
import  {app, firestore} from './components/firebase/config';
import { serverTimestamp } from 'firebase/firestore';
import ViewJobModel from './components/Job/ViewJobModel';
import Sidebar from './components/StackOverflow/Sidebar';

export default () => {
  
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [newJobModel,setNewJobModel] = useState(false);
  const [viewJobModel,setViewJobModel] = useState({});

  const fetchJobs = async () => {
    
    const req = await firestore.collection('jobs').orderBy('postedOn', 'desc').get();
    const tempJob = req.docs.map(job => ({ ...job.data() , id: job.id, postedOn: job.data().postedOn.toDate() }));
    setJobs(tempJob);
    setLoading(false);
  };

  const postJob = async  jobDetails => {
    await firestore.collection('jobs').add({
      ...jobDetails,
      postedOn: app.firestore.FieldValue.serverTimestamp()
    })
    fetchJobs();
  }
  useEffect(() => {
    fetchJobs();
  })
  return <div>
    
    
  <ThemeProvider theme={theme}>
    <div>
      {/* <Sidebar/> */}

    <Header openNewJobModel={() => setNewJobModel(true)} />
    <NewJobModel closeNewJobModel={() => setNewJobModel(false)} newJobModel={newJobModel} postJob={postJob}/>
    <ViewJobModel job={viewJobModel} closeNewJobModel={() =>  setViewJobModel({})}/>
    <Box mb={3}>
    <Grid px={20} container justify='center'>
      <Grid item xs={20}>
        {/* <SearchBar /> */}

        
        {
        loading ? (<Box display='flex' justifyContent='center'> <CircularProgress /> </Box>)
        : jobs.map((job) => (<JobCard open={() => setViewJobModel(job)} key={job.id} {...job} />))
      }
        
        {/* {jobs.map(job => <JobCard key={job.id} {...job} />)} */}

      </Grid>
    </Grid>
    </Box>
    </div>
  </ThemeProvider>
  </div>
}
