import { Box,Typography, Button, Select, MenuItem } from '@mui/material'
import React, {useState, useEffect} from 'react';
import data from "./HCLpdf";
import {Home} from "../Home";
import Sidebar from '../StackOverflow/Sidebar';


function HCL() {
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
      <Typography variant='h4' mt={3} mb={2} fontFamily='TimesNewRoman' fontWeight="600">HCL</Typography>
      <Typography fontFamily='TimesNewRoman' fontSize='20px'>The placement process starts with written test followed by Technical and HR Interview. .<br/>
      <br/> We suggest you study from our  HCL Model papers and HCL Sample papers given on our website and a good amount of questions will be of similar pattern in the HCL Written Test.</Typography>
      <br/>
      <Typography variant='h4' px={5} fontFamily='TimesNewRoman' fontWeight='600'>HCL Information</Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>
        Total Rounds :  03
      </Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Total Questions</Typography>
      <Box px={14}>
      <ul >
        <li fontFamily='TimesNewRoman' fontSize='20px'>Round 01 -- 77 Questions</li>
        <br/>
      </ul>
      
      </Box>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Total time : 95 mins</Typography>
      <br/>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>Negative marking : No</Typography>
<hr/>
      <Typography variant='h4' px={5} fontFamily='TimesNewRoman' mt={3} mb={2} fontWeight='600'>HCL Previous Year Paper Overview</Typography>
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px'>HCL Online Test has a total of 5 sections and time given is 95 mins.</Typography><br/>
      
      {/* SECTION-1 */}
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Section 1 includes:</Typography>
      <Box px={14}>
        <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px" >Quantitative Aptitude</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 15 Questions
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 15 mins
            </li>
      </ul>
      </Box>
      
      {/* SECTION-2 */}
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Section 2 includes:</Typography>
      <Box px={14}>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Verbal  Ability</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 15
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 15 mins
            </li>
      </ul>
      </Box>
      
      {/* SECTION-3 */}
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Section 3 includes:</Typography>
      <Box px={14}>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Logical Reasoning</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 15 Questions
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 15 mins
            </li>
      </ul>
      </Box>
      
      {/* SECTION-4 */}
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Section 4 includes:</Typography>
      <Box px={14}>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Computer Fundamentals</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 30 Questions
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 30 mins
            </li>
      </ul>
      </Box>
      
      {/* SECTION-5 */}
      <Typography px={10} fontFamily='TimesNewRoman' fontSize='20px' fontWeight="600">Section 5 includes:</Typography>
      <Box px={14}>
      <Typography fontFamily="TimesNewRoman" variant='subtitle1' fontSize="20px">Coding</Typography>
      <ul>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Total Questions: 02 Questions
            </li>
            <li fontFamily='TimesNewRoman' fontSize='20px'>
              Time Alloted : 20 mins
            </li>
      </ul>
      </Box>
      <hr/>
      <Typography fontFamily="TimesNewRoman" variant='h4' fontWeight="600" >Question Papers</Typography>
      
      {/* <Button href={tcs} download="tcs" variant='outlined'>HCL 2022</Button> */}
      <Box display="flex"  mt={3} marginRight={100} columnGap={2}>
        <Typography  fontFamily='TimesNewRoman' fontSize='20px' mt={1}  paddingLeft={8} >Select Year</Typography>
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
      <Box px={20} mt={2} display='flex' columnGap={2}>
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

export default HCL