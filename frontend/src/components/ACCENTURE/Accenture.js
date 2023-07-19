import { Box,Typography, Button, Select, MenuItem } from '@mui/material'
import React, {useState, useEffect} from 'react';
import data from "./accenture_pdf";
import {Home} from "../Home";
import Sidebar from '../StackOverflow/Sidebar';



function Accenture(props) {
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
    <Box  fontFamily='TimesNewRoman'>
      <Sidebar/>
      <Box ml={27} mt={-68}>
      
      <Home />
      <Typography variant='h4' mt={3} mb={2} fontFamily='TimesNewRoman' fontWeight="600">Accenture</Typography>
      <Typography fontFamily='TimesNewRoman' fontSize='20px'>Accenture used to conduct its hiring drive with 3 assessment rounds in the Zonal Level Hiring Test. But with the upcoming drive Accenture have changed its pattern .<br/><br/> 
      Accenture Placement Paper 2023 will now have only one written round, which will have 6 different Sections.<br/> The 6 Sections will consist of 90 Questions ( The Analysis of which is given below in the image ). You will have 90 minutes to solve all the questions. And after clearing Accenture Placement Paper 2023 with the required cut-off, you will be eligible for the Interview Round.</Typography>
      <br/>
      <Typography variant='h4' px={5} fontFamily='TimesNewRoman' fontWeight='600'>Accenture Information</Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>
      Cognitive Ability : 50 Qsns
      </Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Technical Ability : 40 Qsns</Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Coding : 2 Qsns</Typography><br/>
     
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Communication assesment : 20-25 Qsns</Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Negative marking : No</Typography>
<hr/>
      <Typography variant='h4' px={5} fontFamily='TimesNewRoman' mt={3} mb={2} fontWeight='600'>Accenture Previous Year Paper Overview</Typography>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>The Accenture eligibility criteria is that you should have 65% or 6.5 cgpa in your graduation with no active backlogs.<br/>

Accenture Placement Test is now divided into further parts:</Typography><br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Cognitive Assessment : </Typography>
      <Box px={14}>
        
      <ul>
        
          
            <li fontFamily='TimesNewRoman' fontSize='20px'>
            Critical Reasoning and Problem Solving - 18 Qsns
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
            Verbal Ability - 17 Qsns
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
            Abstract Reasoning - 15Qsns
            </li>
          
        
      </ul>
      
      
    
      
      </Box>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Technical Assessment : </Typography>
      <Box px={14}>
        
        <ul>
          
            
              <li fontFamily='TimesNewRoman' fontSize='20px'>
              Common Applications in MS Word - 12 Qsns
              </li>
              <li fontFamily='TimesNewRoman' fontSize='20px'>
              Pseudo Code -18 Qsns
              </li>
              <li fontFamily='TimesNewRoman' fontSize='20px'>
              Network Security and Cloud - 10 Qsns
              </li>
            
          
        </ul>
        
        
      
        
        </Box>
      <hr/>
      
      
      <Typography fontFamily="TimesNewRoman" variant='h4' fontWeight="600"   >Question Papers</Typography>
      
      {/* <Button href={tcs} download="tcs" variant='outlined'>Tcs 2022</Button> */}
      <Box display="flex"  mt={3} marginRight={100} columnGap={2}>
        <Typography  fontFamily='TimesNewRoman' fontSize='20px' mt={1}  paddingLeft={8} >Select Year</Typography>
        
      <Select  defaultValue={2021}  fullWidth

        value={yearState?.id}
        onChange={(e) => {
          onChangeComboBox(e);
        }}
        >
        {data.map((d) => (
          <MenuItem key={d.id} value={d.id}>
            {d.year}
          </MenuItem>
        ))}
      </Select>
      
      </Box>
      <Box px={20} mt={2} display="flex" columnGap={2}>
      <h4> {yearState?.year}.Pdf</h4>
      {yearState ? (
        
        <Button href={yearState?.pdf} download="yearState?.pdf" bgcolor='#000' variant='outlined'  >download here</Button>

      ) : (
        ""
      )}
      </Box>
      </Box>
    </Box>

  
  )
}

export default Accenture