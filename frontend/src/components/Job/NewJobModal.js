import React, {useState}  from "react";
//import firebase from './Firebase/config';


import { Box, ThemeProvider,Typography,Button,Grid, MenuItem,Select,makeStyles,FilledInput,Dialog,DialogTitle,DialogContent,DialogActions,IconButton} from "@mui/material";

import {Close as CloseIcon} from '@mui/icons-material';
import jobData from './dummyData';
import JobCard from "./components/Job/JobCard";

const req=['javascript','python','c','c++','SQL','Data structures','ML'];

export default (props) => {


 return(


    <Dialog open={false} fullWidth>
      <DialogTitle>
        <Box display='flex ' justifyContent='space-between' alignItems='center'>
        Post Job
        <IconButton>
          <CloseIcon/>
        </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput placeholder="Job Title *" disableUnderline fullWidth/>

          </Grid>
          <Grid item xs={6}>
          <Select  disableUnderline  defaultValue='Branch' fullWidth>
            <MenuItem value='Branch'>Select Branch</MenuItem>
            <MenuItem value='CSE'>CSE</MenuItem>
            <MenuItem value='ECE'>ECE</MenuItem>
            <MenuItem value='EEE'>EEE</MenuItem>
            <MenuItem value='MECH'>MECH</MenuItem>
            <MenuItem value='CIVIL'>CIVIL</MenuItem>
            <MenuItem value='IT'>IT</MenuItem>
            <MenuItem value='ECM'>ECM</MenuItem>
          </Select>

          </Grid>
          <Grid item xs={6}>
            <FilledInput placeholder="Company Name *" disableUnderline fullWidth/>

          </Grid>
          <Grid item xs={6}>
            <FilledInput placeholder="Registration link *" disableUnderline fullWidth/>

          </Grid>
          <Grid item xs={6}>
            <FilledInput placeholder="Last Date *" disableUnderline fullWidth/>

          </Grid>
          <Grid item xs={6}>
            <FilledInput placeholder="Company Url *" disableUnderline fullWidth/>

          </Grid>
          <Grid item xs={12}>
            <FilledInput placeholder="Job Description *" disableUnderline fullWidth multiline rows={4} />

          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills</Typography>
          <Box display='flex'>
            {req.map(reqs => <Box sx={newSx} key={reqs}>{reqs}</Box>)}
          </Box>

        </Box>
      </DialogContent>
      <DialogActions>
        <Box color='red' width='100%' display='flex' justifyContent='space-between' alignItems='center'>
          <Typography>
            *Required fields
          </Typography>
          <Button variant='contained' disableElevation >Post</Button>
        </Box>
      </DialogActions>
    </Dialog>
    )
}