import React from 'react'
import {Box, Typography,Button} from '@mui/material';
import './Button.css';
import Sidebar from '../StackOverflow/Sidebar';
// import './App.css';
// import './Apptitude.css';

const boxSx = {
  
  '&:hover':{
    boxShadow:'0px 2px 5px rgba(0,0,0,50)',
    //borderLeft:'6px solid #4D64E4',
    transition:'0.3s'

  }

}
const backgroundStyle = {
  backgroundImage: `url(${require("./back.jpg")})`,

  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};
const item = []

function Apptitude() {
  return (
    <div div style={backgroundStyle}>
    <Box>
    <Box py={2} >  
      {/* <Sidebar/> */}
      
      <Box px={50}  mt={1} >
        <Typography variant='h4' fontWeight={600} color="#00BFFF" align="center">
          Aptitude Test
        </Typography>

      </Box> 
     
    </Box>
    <Box >
    <Box  >
    <div >
        <Typography fontFamily='Sans-Serif'>
        Be it campus placement or any entrace test , aptitude plays a very important role in selection. Company looks for candidate with good Aptitude skills.<br/> Unfortuanately many students find it difficult to crack Aptitude Writtens and get eliminated. This course is saves you from getting eliminated. <br/>
    
        The course covers all topics in detail for Company Entrance Exam. Each topic will be taken from basics and then slowly proceeded to advanced levels.
        </Typography>
          </div>
    </Box>
    <br/>
    


    <Box ml={-80}>
    <Typography variant='h4'  fontFamily='TimesNewRoman' ml={-50}>Topics</Typography>

      {/* <Typography px='20px'>-Quant</Typography>
      <Typography>Logical Reasoning</Typography>
      <Typography>Verbal</Typography>
      <Typography>Data Interpretation</Typography> */}
            <ul style={{listStyleType: 'none', padding: 0}}>
  
    <li style={{display: 'inline-block', margin: '0 20px'}}>
    • Quant
    </li>
    <li style={{display: 'inline-block', margin: '0 30px'}}>
    • Logical Reasoning
    </li>
    <li style={{display: 'inline-block', margin: '0 10px'}}>
    • Verbal
    </li>
    <li style={{display: 'inline-block', margin: '0 10px'}}>
    • Data Interpretation
    </li>

</ul>

            </Box>

      <hr/>
      <div >
      <Box display='flex' columnGap='30px' ml={5}>      
      <Typography variant='h4' fontFamily='TimesNewRoman'>Practice here..</Typography><br/>
      
      <Button  style={{ backgroundColor : "#1E90FF",color :'#fff' ,ml: '30%'}} href='https://www.apexinstitute.net/'  variant='outlined' sx={boxSx} target="_blank"  >Apex</Button>
      <Button  style={{ backgroundColor : "#1E90FF",color :'#fff' }} px='50px'href='https://www.conduira.com/'  variant='outlined' sx={boxSx} target="_blank">Conduira</Button>
      
      </Box>
          </div>
      <br/>
      <hr/>
      <Box ml={-90}>
        <Typography variant='h4' fontFamily='TimesNewRoman'> Here are some other References.. </Typography>
            
          <Button href='https://www.toppr.com/guides/quantitative-aptitude/'>
            <div>
            • toppr


            
          </div>
            </Button>
            
            <Button href='https://www.geeksforgeeks.org/aptitude-for-placements/'>
            <div>
            • Geeks for Geeks
            </div>
            </Button>
            
            <Button href='https://www.indiabix.com/'>
            <div >
            • indiabix
            </div>
            </Button>
            
            <Button href='https://prepinsta.com/'>
            <Typography >
            • Prepinsta
            </Typography>
            </Button>
            
            
                     
          </Box>
      

      
    </Box>
    </Box>
    </div>
    

  )
}

export default Apptitude;
