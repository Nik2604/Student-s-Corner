import React from 'react';
import {Box, Button, Typography, Grid} from '@mui/material';

export default(props) => {
  return (
    <Box py={2} bgcolor='secondary.main' color='white'>
        <Grid px={15} container justify='center'>
            <Grid item xs={15}>
                <Box display='flex' justifyContent='space-between'>
                <Typography variant='h3' color='#000'>On Campus Jobs</Typography>
                 <Button onClick={props.openNewJobModel} variant='contained' color='primary' disableElevation>Post a Job</Button>

                </Box>
            
        
        </Grid>
        </Grid>
    </Box>
  )
}


