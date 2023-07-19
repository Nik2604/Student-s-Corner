import { Box,Typography, Button, Select, MenuItem } from '@mui/material'
import React, {useState, useEffect} from 'react';
import data from "./Pdf";
import {Home} from "../Home";
import Sidebar from '../StackOverflow/Sidebar';



function Tcs() {
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
      <Home/>
      <Typography variant='h4' mt={3} mb={2} fontFamily='TimesNewRoman' fontWeight="600">TATA CONSULTANCY SERVICE (TCS)</Typography>
      <Typography fontFamily='TimesNewRoman' fontSize='20px'>TCS Online Test has a total of 2 rounds and time given is 165 mins.<br/><br/> We suggest you study from our  TCS Model papers and TCS Sample papers given on our website and a good amount of questions will be of a similar pattern in the TCS Written Test 2023.</Typography>
      <br/>
      <Typography variant='h4' px={5} fontFamily='TimesNewRoman' fontWeight='600'>TCS Information</Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>
        Total Rounds :  02
      </Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Total Questions</Typography>
      <Box px={14}>
      <ul >
        <li fontFamily='TimesNewRoman' fontSize='20px'>Round 01 -- 66 qsns</li>
        <br/>
        <li fontFamily='TimesNewRoman' fontSize='20px'>Round 02 -- 22 qsns</li>
      </ul>
      
      </Box>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Total time : 165 mins</Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Negative marking : No</Typography>
<hr/>
      <Typography variant='h4' px={5} fontFamily='TimesNewRoman' mt={3} mb={2} fontWeight='600'>TCS Previous Year Paper Overview</Typography>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>TCS Placement Papers have been divided into following sections in the exam known as Round 1 and Round 2:</Typography><br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Round 1 includes:</Typography>
      <Box px={14}>
        <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px" >Traits</Typography>
      <ul>
        
          
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 1(image selection)
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 75 mins(shared)
            </li>
          
        
      </ul>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Numerical Ability</Typography>
      <ul>
        
          
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 20
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 75 mins(shared)
            </li>
          
        
      </ul>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Verbal Ability</Typography>
      <ul>
        
          
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 25
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 75 mins(shared)
            </li>
          
        
      </ul>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Reasoning Ability</Typography>
      <ul>
        
          
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 20
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 75 mins(shared)
            </li>
          
        
      </ul>
      
      </Box>
      <hr/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Round 2 includes:</Typography>
      <Box px={14}>
        <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Advanced Quantitative Ability</Typography>
      <ul>
        
          
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 10
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 35 mins(shared)
            </li>
          
        
      </ul>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Advanced Reasoning Ability</Typography>
      <ul>
        
          
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 10
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 35 mins(shared)
            </li>
          
        
      </ul>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Advanced Coding</Typography>
      <ul>
        
          
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 2
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 55 mins
            </li>
          
        
      </ul>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Reasoning Ability</Typography>
      <ul>
        
          
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 20
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 75 mins(shared)
            </li>
          
        
      </ul>
      
      </Box>
      <hr/>
      <Typography fontFamily="TimesNewRoman" variant='h4' fontWeight="600"   >Question Papers</Typography>
      
      {/* <Button href={tcs} download="tcs" variant='outlined'>Tcs 2022</Button> */}
      <Box display="flex"  mt={3} marginRight={100 } columnGap={2}>
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
      <h4>{yearState?.year} . pdf</h4>
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

export default Tcs