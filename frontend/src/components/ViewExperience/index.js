import React from 'react';
import "./index.css";
import Sidebar from '../StackOverflow/Sidebar';
import MainQuestion from './MainQuestion';
import { Box } from '@mui/material';

function Index() {
  const backgroundStyle = {
    backgroundColor: '#F8F8FF'}
  
   
    return (
      <div className="backgroundStyle">
      <div className="stack-index">
        <div className="stack-index-content">
          
          <Box mt={0} ml={0}>
          <MainQuestion /></Box>
        </div>
      </div>
      </div>
    );
  }
  
  export default Index;