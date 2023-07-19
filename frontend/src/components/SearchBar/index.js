import { Select,Box, MenuItem,Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import "./search.css";


import React from 'react';

const useStyles = makeStyles({
    wrapper : {
        backgroundColor : "#fff",
        display : 'flex',
        boxShadow : '0px 1px 5px rgba(0, 0 , 0, 0.1)',
        borderRadius : "5px",
        "& > *" : {
            flex :1,
            height : "45px",
            margin : "8px"
        }

    }
})



export default(props) => {
    const classes = useStyles();

  return (
    <div className='search'>
    <Box p={1} mb={1} className ={classes.wrapper}>
        <Select disableUnderline variant='filled' defaultValue='EEE'>
            <MenuItem value='CSE'>CSE</MenuItem>
            <MenuItem value='EEE'>EEE</MenuItem>
            <MenuItem value='ECE'>ECE</MenuItem>
            <MenuItem value='ME'>ME</MenuItem>
            <MenuItem value='CIVIL'>CIVIL</MenuItem>
            <MenuItem value='IT'>IT</MenuItem>
            <MenuItem value='ECM'>ECM</MenuItem>
        </Select>
        <Select disableUnderline variant='filled' defaultValue='2023'>
            <MenuItem value='2020'>2020</MenuItem>
            <MenuItem value='2021'>2021</MenuItem>
            <MenuItem value='2022'>2022</MenuItem>
            <MenuItem value='2023'>2023</MenuItem>
            <MenuItem value='2024'>2024</MenuItem>
            <MenuItem value='2025'>2025</MenuItem>
            
        </Select>
        <Button variant="contained" color="primary" disableElevation>Search</Button>
    </Box>
    </div>
  )
}