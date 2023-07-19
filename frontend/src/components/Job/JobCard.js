import React from "react";
import { Box,Typography,Grid, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../../theme/theme";
import { differenceInMinutes } from "date-fns";

const skills = ['javascript','python','sql']

const useStyles = makeStyles((theme) => ({
    wrapper: {
        border: "1px solid #e8e8e8",
        cursor: "pointer",
        transition: "0.3s",

        "&:hover": {
            boxShadow: "0px 5px 25px rgba(0, 0, 0, 0.1)",
            borderLeft: "6px solid #4D64E4",
        },
    },
    companyName: {
        fontSize: "13.5px",
        backgroundColor : theme.palette.primary.main,
        padding : theme.spacing(0.75),
        borderRadius:"5px",
        display: "inline-block",
        fontWeight: 600,

    },
    skillChip: {
        margin : theme.spacing(0.5),
        padding : theme.spacing(1),
        fontSize : "14.5px",
        borderRadius: "20px",
        transition : "0.3s",
        cursor : "pointer",
        fontWeight : 600,
        backgroundColor: "#87CEFA",
        color : "#000",


    }
})

)

export default (props) => {
    const classes = useStyles();
    return(
        <Box mt={2} className={classes.wrapper}>
            <Grid container alignItems='center'>
                <Grid item xs>
                    <Typography variant="subtitle1">{props.Jobtitle}</Typography>
                    <Typography variant="subtitle1" className={classes.companyName} color="#fff">{props.companyName}</Typography>
                </Grid>
                <Grid item container xs>
                    {props.skills.map(skill => <Grid key={skill} className={classes.skillChip} item>{skill}</Grid>)}
                </Grid>
                <Grid item container direction='column' alignItems='flex-end' xs>
                    <Grid item>
                    <Typography variant="outlined">{differenceInMinutes(Date.now(), props.postedOn)} min ago | {props.Branch} | {props.passedOut } </Typography></Grid>
                    <Grid item>
                        <Box mt={2}>
                    <Button onClick={props.open} variant="outlined" >Check</Button>
                    </Box>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Box>

    )
}