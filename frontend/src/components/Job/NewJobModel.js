import React, {useState} from "react";
import {Box, Grid, FilledInput, Select, MenuItem,Dialog, DialogTitle, DialogContent, DialogActions,IconButton,Typography, Button, CircularProgress} from '@mui/material';
import {Close as CloseIcon} from '@mui/icons-material';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
    skillChip: {
        margin : theme.spacing(0.5),
        padding : theme.spacing(1),
        fontSize : "14.5px",
        borderRadius: "15px",
        transition : "0.3s",
        cursor : "pointer",
        fontWeight : 600,
        backgroundColor: "2px solid black",
        border:"2px solid black",
        color : "#000",
        cursor:"pointer",

        "&:hover": {
            backgroundColor:'#000',
            color:"#fff"
        }
    },
    included:{
      backgroundColor:'#87CEFA',
            color:"#fff"
    }
}));

const initState = {
  Branch: "",
      Jobtitle: "",
      lastdate: "",
      Jobdescription: "",
      companyName: "",
      link: "",
      passedOut: "",
      postedOn: "",
      skills: [],
};

export default(props) => {
    const [loading,setLoading] = useState(false)
    const [jobDetails,setJobDetails] = useState(initState); 

    const addRemoveSkill = skill => {
      jobDetails.skills.includes(skill)
      ? setJobDetails(oldState => ({ ...oldState, skills: oldState.filter(s => s != skill ),}))
      //removing
      : setJobDetails(oldState => ({ ...oldState, skills: oldState.skills.concat(skill),}))

    };

    const handleSubmit = async () => {
      // for (const field in jobDetails) {
      //  if(typeof (jobDetails[field]) === ('string') && (!jobDetails[field])) 
      //  return;
      // }
      // if(!jobDetails.skills.length) return;
      setLoading(true)
      await props.postJob(jobDetails)
       closeNewJobModel()
      
      
    }

    const closeNewJobModel = () => {
      setJobDetails(initState)
      setLoading(false);
      props.closeNewJobModel()
    }

    const handleChange = e =>{
      e.persist()
      setJobDetails(oldState => ({...oldState, [e.target.name]: e.target.value}))
    };
  

    console.log(jobDetails);
    

    const classes = useStyles();
    const skills=['javascript','python','c','c++','SQL','Data structures','ML'];

    return(
        <Dialog open={props.newJobModel}>
            <DialogTitle>
        <Box display='flex ' justifyContent='space-between' alignItems='center'>
        Post Job
        <IconButton onClick={closeNewJobModel}>
          <CloseIcon/>
        </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <FilledInput onChange={handleChange} name="Jobtitle" value={jobDetails.Jobtitle} autoComplete="off" placeholder="Job Title *"  fullWidth disableUnderline/>

          </Grid>
          <Grid item xs={6}>
          <FilledInput onChange={handleChange} name="Branch" value={jobDetails.Branch} autoComplete="off" placeholder="Branches *"  fullWidth disableUnderline/>
          

          </Grid>
          <Grid item xs={6}>
            <FilledInput onChange={handleChange} name="companyName" value={jobDetails.companyName} autoComplete="off" placeholder="Company Name *" disableUnderline fullWidth/>

          </Grid>
          <Grid item xs={6}>
            <FilledInput onChange={handleChange} name="link" value={jobDetails.link} autoComplete="off" placeholder="Registration link *" disableUnderline fullWidth/>

          </Grid>
          <Grid item xs={6}>
            <FilledInput onChange={handleChange} name="lastdate" value={jobDetails.lastdate} autoComplete="off" placeholder="Last Date *" disableUnderline fullWidth/>

          </Grid>
          <Grid item xs={6}>
          <FilledInput onChange={handleChange} name="passedOut" value={jobDetails.passedOut} autoComplete="off" placeholder="Passed Out Year *" disableUnderline fullWidth/>
          {/* <Select onChange={handleChange} name="passedOut" value={jobDetails.passedOut} disableUnderline variant='filled' fullWidth >
            <MenuItem value='2020'>2020</MenuItem>
            <MenuItem value='2021'>2021</MenuItem> 
            <MenuItem value='2022'>2022</MenuItem>
            <MenuItem value='2023'>2023</MenuItem>
            <MenuItem value='2024'>2024</MenuItem>
            <MenuItem value='2025'>2025</MenuItem>
            
        </Select> */}
        </Grid>
          <Grid item xs={12}>
            <FilledInput onChange={handleChange} name="Jobdescription" value={jobDetails.Jobdescription} autoComplete="off" placeholder="Job Description *" disableUnderline fullWidth multiline rows={4} />

          </Grid>
        </Grid>
        <Box mt={2}>
          <Typography>Skills*</Typography>
          <Box display="flex">
            {skills.map((skill) => (
                <Box onClick={() => addRemoveSkill(skill)} className={`${classes.skillChip} ${jobDetails.skills.includes(skill) && classes.included}` } key={skill}>{skill}</Box>
            ))}

          </Box>
         

        </Box>
      </DialogContent>
      <DialogActions>
        <Box color='red' width ="100%" display='flex' justifyContent='space-between'>
            <Typography variant="caption">*Required fields</Typography>
            <Button onClick={handleSubmit} variant="contained" disableElevation color="primary" disabled={loading}>
              { 
              loading ? (<CircularProgress size={22}/>)
              : ("post")
            } </Button>
        </Box>
      </DialogActions>
            
        </Dialog>
    )
}