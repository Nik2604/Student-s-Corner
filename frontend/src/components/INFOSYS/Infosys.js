import { Box,Typography, Button, Select, MenuItem } from '@mui/material'
import React, {useState, useEffect} from 'react';
import data from "./Infosyspdf";
import {Home} from "../Home";
import Sidebar from '../StackOverflow/Sidebar';



function Infosys() {
  const [yearState, setYearState] = useState();
  

  const onChangeComboBox = (e) => {
    const selectedId = e.target.value;
    const selectedYearState = data.filter((d) => d.id === selectedId)[0];
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
      <Typography variant='h4' mt={3} mb={2} fontFamily='TimesNewRoman' fontWeight="600">Infosys</Typography>
      <Typography fontFamily='TimesNewRoman' fontSize='20px'>The eligible candidates should then go through three rounds of the recruitment process of Infosys that includes: Online Assessment Test, Technical Interview, HR Interview.<br/>
      <br/> We suggest you study from our  Infosys Model papers and Infosys Sample papers given on our website and a good amount of questions will be of similar pattern in the Infosys Written Test.</Typography>
      <br/>
      <Typography variant='h4' px={5} fontFamily='TimesNewRoman' fontWeight='600'>Infosys Information</Typography>
      <br/>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Total Questions</Typography>
      <Box px={14}>
      <ul >
        <li fontFamily='TimesNewRoman' fontSize='20px'>Round 01 -- 54 Questions</li>
      </ul>
      
      </Box>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Total time : 100 mins</Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Negative marking : No</Typography>
<hr/>
      <Typography variant='h4' px={5} fontFamily='TimesNewRoman' mt={3} mb={2} fontWeight='600'>Infosys Previous Year Paper Overview</Typography>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Infosys Online Test has a total of 5 sections and time given is 100 mins.</Typography><br/>
      
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Round 1 includes:</Typography>
      <Box px={14}>
        <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px" >Reasoning Ability</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 15 Questions
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 25 mins
            </li>
      </ul>
      </Box>
    
      
      <Box px={14}>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Mathematical Ability</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 10 Questions
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 35 mins
            </li>
      </ul>
      </Box>
      
      <Box px={14}>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Verbal Ability</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 20 Questions
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 20 mins
            </li>
      </ul>
      </Box>
      

      <Box px={14}>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Pseudo Code</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 05 Questions
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 10 mins
            </li>
      </ul>
      </Box>
      
      <Box px={14}>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Puzzle Solving</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 04 Questions
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 10 mins
            </li>
      </ul>
      </Box>
      <hr/>
      <Typography fontFamily="TimesNewRoman" variant='h4' fontWeight="600" >Question Papers</Typography>
      

      <Box display="flex"  mt={3} marginRight={100} columnGap={2}>
        <Typography  fontFamily='TimesNewRoman' fontSize='20px' mt={1}  paddingLeft={8} >Select Year </Typography>
      <Select fullWidth
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
      <Box px={10} mt={4} display="flex" columnGap={5}>
      <h2>{yearState?.year}.Pdf</h2>
      {yearState ? (
        <Button href={yearState?.pdf} download="yearState?.pdf" bgcolor='#000' variant='outlined'>download here</Button>
      ) : (
        ""
        
      )}
      </Box>
      </Box>
    </Box>

  
  )
}

export default Infosys