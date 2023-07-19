import React, { useState, useEffect } from "react";
import { Box,MenuItem,Select,Typography} from '@mui/material';
import "./App.css";
import data from "./services/data";
import MaterialTable from 'material-react-table';
import Table from './components/Table/Table';

function Year() {
  const [yearState, setYearState] = useState();
  

  const onChangeComboBox = (e) => {
    const selectedId = e.target.value;
    const selectedYearState = data.filter((d) => d.id == selectedId)[0];
    setYearState(selectedYearState);
  };

  useEffect(() => {
    setYearState(data[1]);
  }, []);

  return (
    
    <div >
      <Box px={8} mt={60} fontFamily='TimesNewRoman'>
        <Typography px={35} variant="h3" fontFamily='TimesNewRoman' color='#1E90FF'>
          Training & Placement Cell
          
        </Typography>
        <Typography  fontSize={20} fontFamily='TimesNewRoman' color='#696969'>•
    Considering the large number of students pursuing various courses from Vignan's Institute of Information Technology, Visakhapatnam, and Central Training & Placement Cell (CTPC) has been constituted.
    </Typography >
    <br/>
    <Typography variant="h5" color='#1E90FF'fontFamily='TimesNewRoman' >
      Objectives of the Department : 
    </Typography>
    <ul >
      <Box color='#696969' fontSize={20}>
      <li>•
      Provide ample opportunities for placement of students to achieve cent percent placements.
      </li>
      
      <li>•
      Manage Centralized Placement activities for all courses.
      </li>
      
      <li>•
      Organize campus recruitment for the students with National and Multinational Companies from all over India.
      </li>
      
      <li>•
      Prepare students for various campus recruitments by arranging training in Aptitude tests, Group discussions.
      </li>
      
      <li>•
      Promote career counseling by organizing guest speakers by senior corporate personnel and by the alumni students.
      </li>
      
      </Box>
    </ul>
      </Box>
      <hr/>      
    </div>
  );
}

export default Year;
