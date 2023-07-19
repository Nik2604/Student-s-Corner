import React from "react";
import {Box, Grid, FilledInput, Select, MenuItem,Dialog, DialogTitle, DialogContent, DialogActions,IconButton,Typography, Button, CircularProgress} from '@mui/material';
import {Close as CloseIcon} from '@mui/icons-material';
import {format} from 'date-fns';
import { makeStyles } from "@mui/styles";
import theme from "../../theme/theme";


const useStyles=makeStyles({
    info: {
        '& > *':{
            margin:'5px'
        }
    },
    skillChip: {
        margin : theme.spacing(0.5),
        padding : theme.spacing(1),
        fontSize : "14.5px",
        borderRadius: "20px",
        transition : "0.3s",
        cursor : "pointer",
        fontWeight : 600,
        backgroundColor: "#000",
        color : "#fff",


    }
})

export default(props) => {
    const classes=useStyles()
    return(
    <Dialog open={!!Object.keys(props.job).length} fullWidth>
        <DialogTitle>
        <Box display='flex ' justifyContent='space-between' alignItems='center'>
        {props.job.Jobtitle} @ {props.job.companyName}
        <IconButton onClick={props.closeNewJobModel}>
          <CloseIcon/>
        </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>
        <Box>
            <Box className={classes.info} display='flex' mb={0.5}>
                <Typography variant="body2">Posted On: </Typography>
                <Typography variant="body2">{props.job.postedOn && format(props.job.postedOn, "dd/MMM/yyyy HH:MM")}</Typography>
            </Box>
            
            <Box className={classes.info} display='flex' mb={0.5}>
                <Typography variant="body2">Branch: </Typography>
                <Typography variant="body2">{props.job.Branch }</Typography>
        
            </Box>
            <Box className={classes.info} display='flex' mb={0.5}>
                <Typography variant="body2">Company Name: </Typography>
                <Typography variant="body2">{props.job.companyName }</Typography>
            </Box>
            <Box className={classes.info} display='flex' mb={0.5}>
                <Typography variant="body2">Last date: </Typography>
                <Typography variant="body2">{props.job.lastdate}</Typography>
            </Box>
            <Box className={classes.info} display='flex' mb={0.5}>
                <Typography variant="body2">Passed out: </Typography>
                <Typography variant="body2">{props.job.passedOut}</Typography>
            </Box>
            <Box className={classes.info} display='flex' mb={0.5}>
                <Typography variant="body2">Job Description: </Typography>
                <Typography variant="body2">{props.job.jobdescription}</Typography>
            </Box>
            <Box ml={0.5}>
                <Typography variant="body2">Skills: </Typography>
                <Grid container alignItems='center'>
                {props.job.skills && props.job.skills.map((skill) => (
                    <Grid item key={skill} className={classes.skillChip}>{skill}</Grid>
                ))}

                </Grid>
                
            </Box>
        </Box>

      </DialogContent>
      <DialogActions>
        <Button variant="outlined" component='a' href={props.job.link} target='_blank'>Apply</Button>

      </DialogActions>
    </Dialog>
    )
}