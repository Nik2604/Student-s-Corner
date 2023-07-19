import React, { useState } from 'react';
import { Card, CardContent, Dialog, DialogTitle, DialogContent } from '@material-ui/core';
import { Box, Typography, Grid, Button } from "@mui/material";
import { Link } from 'react-router-dom';
import template from "./template.jpeg";
import template1 from "./template1.jpeg";
import template2 from "./template2.jpg";
import {Tilt} from 'react-tilt';
import ResumeTips1 from './ResumeTips1';
// import {ReactTilt} from 'react-tilt';

const ResumeTipsCard = () => {
  

  return (
    <div>
      
       <Box ml={8} mr={8} mt={55} mb={4} border="2px solid #e8e8e8" borderRadius='15px'>
        <Typography  fontWeight={600} fontSize={50}>Build Your Future</Typography>
        <ResumeTips1/>
            <Grid container alignItems='center'>
                <Grid item xs>
                 <Tilt className="Tilt" options={{ max : 25 }}>
                  <a href='https://practice.geeksforgeeks.org/resume/?utm_source=article&utm_medium=article&utm_campaign=resume-builder-article' target='_blank'>
                    <img src={template} style={{height: '350px', width: '300px',  marginTop: '25px', borderRadius: '20px', marginBottom: '20px', marginLeft:'10%'}}/>
                  </a>
                </Tilt>
                </Grid>
                <Grid item xs>
                 <Tilt className="Tilt" options={{ max : 25 }}>
                  <a href='https://practice.geeksforgeeks.org/resume/?utm_source=article&utm_medium=article&utm_campaign=resume-builder-article' target='_blank'>
                    <img src={template1} style={{height: '350px', width: '300px', marginTop: '25px', borderRadius: '20px', marginBottom: '20px',  marginLeft:'10%'}}/>
                  </a>
                </Tilt>
                </Grid>
                <Grid item xs>
                 <Tilt className="Tilt" options={{ max : 25 }}>
                  <Link to='/resume'>
                   <img src={template2} style={{height: '350px', width: '300px', marginTop: '25px', marginBottom: '20px',  marginLeft:'10%'}}/>
                    </Link>
                </Tilt>
                </Grid>
                
            </Grid>
        </Box>

    </div>
   
  );
};

export default ResumeTipsCard;
