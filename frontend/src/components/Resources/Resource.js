import React from 'react'
import {Box, Typography} from '@mui/material';
import {Dialog ,
DialogContentText ,
 DialogTitle ,
 DialogActions ,
 Button , DialogContent}
 from "@mui/material"
import './Button.css';
import Sidebar from '../StackOverflow/Sidebar';


function Resource() {
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [open6, setOpen6] = React.useState(false);
    const [open7, setOpen7] = React.useState(false);
    const [open8, setOpen8] = React.useState(false);
    const backgroundStyle = {
      backgroundImage: `url(${require("./back.jpg")})`,
  
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
    };
  

const handleClickToOpen1 = () => {
	setOpen1(true);
};

const handleToClose1 = () => {
	setOpen1(false);
};
const handleClickToOpen2 = () => {
	setOpen2(true);
};

const handleToClose2 = () => {
	setOpen2(false);
};
const handleClickToOpen3 = () => {
	setOpen3(true);
};

const handleToClose3 = () => {
	setOpen3(false);
};
const handleClickToOpen4 = () => {
	setOpen4(true);
};

const handleToClose4 = () => {
	setOpen4(false);
};
const handleClickToOpen5 = () => {
	setOpen5(true);
};

const handleToClose5 = () => {
	setOpen5(false);
};
const handleClickToOpen6 = () => {
	setOpen6(true);
};

const handleToClose6 = () => {
	setOpen6(false);
};
const handleClickToOpen7 = () => {
	setOpen7(true);
};

const handleToClose7 = () => {
	setOpen7(false);
};
const handleClickToOpen8 = () => {
	setOpen8(true);
};

const handleToClose8 = () => {
	setOpen8(false);
};
    return(
      <div  style={backgroundStyle}>
        <Box>
        <Box py={1}  >
         {/* <Sidebar/> */}
            <Box ml={1} mt={1}>
            <Typography variant='h4' color="#00BFFF" fontWeight={600}>
                TECHNICAL TEST
            </Typography>

        </Box>
             </Box>
             
             <Box >
    <div >
        <Typography fontFamily='Sans-Serif' >
        A technical test is an assessment conducted in order to evaluate and measure candidates' performances, skills, knowledge, abilities, personality traits, attitudes, and job/academic potential.</Typography>
        <br/>
        <Box ml={-70}>
        <Typography variant='h5' ml={-75}>Tips</Typography>
        <ol>
        <li style={{display: 'inline-block', margin: '0 20px'}}>
        • Sharpen your problem-solving skills.
    </li>
    <li style={{display: 'inline-block', margin: '0 20px'}}>
    • Take practice tests.
    </li>
    <li style={{display: 'inline-block', margin: '0 20px'}}>
    • Practice past tests
    </li>
           
            
        
            
        </ol></Box>
        <hr/>
        
      </div>
    </Box>
    <br/>
    <Box ml={10} >
    <Typography variant='h4' fontFamily='TimesNewRoman' ml={-50}>Here are  the most commonly used languages for Technical Test...</Typography><br/>
       <div > 
      <Box display='flex' columnGap='30px'> 
      <div className='1'>
      <Button onClick={handleClickToOpen1} style={{ backgroundColor : "#00008B",color :'#FFE4C4'}}  variant='outlined'  >C</Button>
      <Dialog open={open1} onClose={handleToClose1}>
		<DialogTitle>{"C references..."}</DialogTitle>
      
		<DialogContent>
      
		<DialogContentText>
          Practice using these references for the improvement of your tecnical skills
          <p>
            <ul>
            <li> &nbsp;
           <a
              href="https://www.geeksforgeeks.org/c-programming-language/"
                 title="The portal has been created to provie well written and well explained solutions for selected computer science problems">Geeks For Geeks</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://www.javatpoint.com/c-programming-language-tutorial"
                 title="JavaTpoint provides easy and point to point learning of various online tutorials such as Java Tutorial, JavaScript, SQL, Cloud Computing, Python etc.">javatpoint</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://youtu.be/irqbmMNs2Bo"
                 title="India's most loved channel by College Students">Apna College</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://youtube.com/playlist?list=PLBlnK6fEyqRggZZgYpPMUxdY1CYkZtARR"
                 title="Neso Academy offers world-class learning resources on engineering courses, school syllabus, competitive exams, and many more">Neso Academy</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://youtu.be/N_Wd-0YTlxQ"
                 title="The main Intention of this channel is to share knowlwdge and entertain with latest trending videos about programming ">Suresh Techs</a>.
                 </li>
                 </ul>
        </p>
    
		</DialogContentText>
		</DialogContent>
      <DialogActions>
       <Button onClick={handleToClose1}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
      </Dialog>
      </div>
      <div className='2'>
      <Button onClick={handleClickToOpen2} style={{ backgroundColor : "#00008B",color :'#FFE4C4' }}  variant='outlined' >python</Button> 
      <Dialog open={open2} onClose={handleToClose2}>
		<DialogTitle>{" Python references..."}</DialogTitle>
      
		<DialogContent>
      
		<DialogContentText>
          Practice using these references for the improvement of your tecnical skills
          <p>
            <ul>
            <li> &nbsp;
           <a
              href="https://www.geeksforgeeks.org/python-programming-language/learn-python-tutorial/"
                 title="The portal has been created to provie well written and well explained solutions for selected computer science problems">Geeks For Geeks</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://www.w3schools.com/python/"
                 title="This website  offers free online tutorials, references and exercises for all the major languages of the web">w3schools</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://youtu.be/rfscVS0vtbw"
                 title="It is a non-profit organization that consists of an interactive learning web platform, an online community  that intend to make learning web development accessible to anyone.">freeCodeCamp.org </a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://youtu.be/gfDE2a7MKjA"
                 title=" They provide a quick and to the point demo along with resources of anything and everything  they teach">CodeWithHarry</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://youtu.be/9hVzEKZQyMU"
              title=" This Channel consists of Technical videos related to COMPUTER SCIENCE & ENGINEERING to help people  in self-learning ">Sundeep Saradhi Kanthety</a>.
                 </li>
                 </ul>
        </p>
    
		</DialogContentText>
		</DialogContent>
      <DialogActions>
       <Button onClick={handleToClose2}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
      </Dialog>
      </div>
      <div className='3'>
      <Button onClick={handleClickToOpen3} style={{ backgroundColor : "#00008B",color :'#FFE4C4'}}  variant='outlined'  >DBMS</Button>  
      <Dialog open={open3} onClose={handleToClose3}>
		<DialogTitle>{" DBMS references..."}</DialogTitle>
      
		<DialogContent>
      
		<DialogContentText>
          Practice using these references for the improvement of your tecnical skills
          <p>
            <ul>
            <li> &nbsp;
           <a
              href="https://www.scaler.com/topics/dbms/"
                 title="Scaler is an outcome-focused, ed-tech platform for techies looking to upskill with the help of our programs- Scaler Academy and Scaler Data Science & ML">Scaler Academy</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://www.javatpoint.com/dbms-tutorial"
              title="JavaTpoint provides easy and point to point learning of various online tutorials such as Java Tutorial, JavaScript, SQL, Cloud Computing, Python etc.">Javapoint</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://www.youtube.com/playlist?list=PLxCzCOWd7aiFAN6I8CuViBuCdJgiOkT2Y"
                 title="India's no 1 Free education platform for those aspirants who want to just smash the entrance exam like GATE,UGC NET,KVS,NVS,HTET,CTET etc in Computer Science but they are lagging behind due to lack of proper guidance">GateSmashers </a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://www.youtube.com/playlist?list=PLDzeHZWIZsTpukecmA2p5rhHM14bl2dHU "
                 title=" To the Point, Short and Practical - These 3 terms defines our Content">CodeHelp</a>.
                 </li>
                </ul>
        </p>
    
		</DialogContentText>
		</DialogContent>
      <DialogActions>
       <Button onClick={handleToClose3}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
      </Dialog>
      </div>
      <div className='4'>
      <Button onClick={handleClickToOpen4} style={{ backgroundColor : "#00008B",color :'#FFE4C4'}}  variant='outlined'  >SQL</Button> 
      <Dialog open={open4} onClose={handleToClose4}>
		<DialogTitle>{"  SQL references..."}</DialogTitle>
      
		<DialogContent>
      
		<DialogContentText>
          Practice using these references for the improvement of your tecnical skills.
          <p>
            <ul>
            <li> &nbsp;
           <a
              href="https://www.youtube.com/watch?v=ER8oKX5myE0"
                 title="It is a non-profit organization that consists of an interactive learning web platform, an online community  that intend to make learning web development accessible to anyone">freeCodeCamp</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://www.khanacademy.org/computing/computer-programming/sql"
              title=" This is an nonprofit organization that offers our educational resources free to students and teachers everywhere.">Khan Academy</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://www.w3schools.com/sql/"
                 title="India's no 1 Free education platform for those aspirants who want to just smash the entrance exam like GATE,UGC NET,KVS,NVS,HTET,CTET etc in Computer Science but they are lagging behind due to lack of proper guidance">W3schools </a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://youtu.be/D_wNQR3LeeM "
                 title=" To the Point, Short and Practical - These 3 terms defines our Content">CodeHelp</a>.
                 </li>
                </ul>
        </p>
    
		</DialogContentText>
		</DialogContent>
      <DialogActions>
       <Button onClick={handleToClose4}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
      </Dialog>
      </div>
      <div className='5'>
      <Button onClick={handleClickToOpen5} style={{ backgroundColor : "#00008B",color :'#FFE4C4'}}  variant='outlined'  >DS</Button> 
      <Dialog open={open5} onClose={handleToClose5}>
		<DialogTitle>{"  Data Structures references..."}</DialogTitle>
      
		<DialogContent>
      
		<DialogContentText>
          Practice using these references for the improvement of your tecnical skills.
          <p>
            <ul>
            <li> &nbsp;
           
           <a
              href="https://www.youtube.com/watch?v=pkYVOmU3MgA"
                 title="It is a non-profit organization that consists of an interactive learning web platform, an online community  that intend to make learning web development accessible
                 to anyone.">FreeCodeCamp Org</a>.
                 </li>
            <li> &nbsp;
           <a
              href="https://takeuforward.org/strivers-a2z-dsa-course/strivers-a2z-dsa-course-sheet-2/"
                 title="create content which can help some of you and entertain you at the same time. ">Striver</a>.
                 </li>
                 
                 <li> &nbsp;
           <a
              href="https://www.youtube.com/playlist?list=PLrk5tgtnMN6TYBW0-U4YhIRyYEVpqVEnJ "
                 title=" Coding Ninjas is an online Edtech company providing highest rated programming courses in Java, C++, React, ML, Data Science.">Coding Ninja</a>.
                 </li>
                </ul>
        </p>
    
		</DialogContentText>
		</DialogContent>
      <DialogActions>
       <Button onClick={handleToClose5}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
      </Dialog>
      </div>
      <div className='6'>
      <Button onClick={handleClickToOpen6} style={{ backgroundColor : "#00008B",color :'#FFE4C4'}}  variant='outlined'  >OS</Button> 
      <Dialog open={open6} onClose={handleToClose6}>
		<DialogTitle>{"  Operating Systems references..."}</DialogTitle>
      
		<DialogContent>
      
		<DialogContentText>
          Practice using these references for the improvement of your tecnical skills.
          <p>
            <ul>
            <li> &nbsp;
           <a
              href="https://youtube.com/playlist?list=PLxCzCOWd7aiGz9donHRrE9I3Mwn6XdP8p"
                 title="India's no 1 Free education platform for those aspirants who want to just smash the entrance exam like GATE,UGC NET,KVS,NVS,HTET,CTET etc in Computer Science but they are lagging behind due to lack of proper guidance">freeCodeCamp</a>.
                 </li>
                 <li> &nbsp;
           
           <a
              href="https://prepinsta.com/operating-systems/"
                 title="PrepInsta is a preparation platform that can provide structured and engaging courses which assist students in their Online Written Exams, Technical interview preparation, and more.">prepinsta </a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://youtube.com/playlist?list=PLDzeHZWIZsTr3nwuTegHLa2qlI81QweYG "
                 title=" To the Point, Short and Practical - These 3 terms defines our Content">CodeHelp</a>.
                 </li>
                </ul>
        </p>
    
		</DialogContentText>
		</DialogContent>
      <DialogActions>
       <Button onClick={handleToClose6}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
      </Dialog>
      </div>
      <div className='7'>
        <Button onClick={handleClickToOpen7} style={{ backgroundColor : "#00008B",color :'#FFE4C4'}}  variant='outlined'  >OOPs</Button> 
        <Dialog open={open7} onClose={handleToClose7}>
		<DialogTitle>{"  OOPS references..."}</DialogTitle>
      
		<DialogContent>
      
		<DialogContentText>
          Practice using these references for the improvement of your tecnical skills.
          <p>
            <ul>
            <li> &nbsp;
           
           <a
              href="https://youtu.be/qiSCMNBIP2g"
               title="Free programming tutorials from beginner to advanced level">Telusko </a>.
                 </li>
            <li> &nbsp;
           <a
              href="https://youtu.be/Ej_02ICOIgs"
                 title="It is a non-profit organization that consists of an interactive learning web platform, an online community  that intend to make learning web development accessible
                 to anyone ">FreeCodeCamp Org</a>.
                 </li>
                 
                 
                 <li> &nbsp;
           <a
              href="https://www.javatpoint.com/python-oops-concepts"
                 title="JavaTpoint provides easy and point to point learning of various online tutorials such as Java Tutorial, JavaScript, SQL, Cloud Computing, Python etc">JavaTpoint</a>.
                 </li>
                </ul>
        </p>
    
		</DialogContentText>
		</DialogContent>
      <DialogActions>
       <Button onClick={handleToClose7}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
      </Dialog>
      </div>
      <div className='8'> 
      <Button onClick={handleClickToOpen8} style={{ backgroundColor : "#00008B",color :'#FFE4C4'}}  variant='outlined'  >CN</Button> 
      <Dialog open={open8} onClose={handleToClose8}>
		<DialogTitle>{"  Computer Networking references..."}</DialogTitle>
      
		<DialogContent>
      
		<DialogContentText>
          Practice using these references for the improvement of your tecnical skills.
          <p>
            <ul>
            <li> &nbsp;
           
           <a
              href="https://www.netacad.com/courses/networking/ccna-introduction-networks"
               title="CCNA is an information technology certification from Cisco Systems ">CCNA</a>.
                 </li>
            <li> &nbsp;
           <a
              href="https://youtube.com/playlist?list=PLF1hDMPPRqGxpYdo0ctaa7MxfOi9vjs1u"
                 title="They provide a place where you can start trying to hack into computer systems in a safe and importantly, 
                 a legal way ">Cert Bros</a>.
                 </li>
                 
                 <li> &nbsp;
           <a
              href="https://youtube.com/playlist?list=PL7zRJGi6nMRzg0LdsR7F3olyLGoBcIvvg"
                 title="Learn Visually.  A channel of animated information technology 
                 videos ">PowerCert Animated Videos</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://www.youtube.com/watch?v=JFF2vJaN0Cw&list=PLxCzCOWd7aiGFBD2-2joCpWOLUrDLvVV_"
                 title="India's no 1 Free education platform for those aspirants who want to just smash the entrance exam like GATE,UGC NET,KVS,NVS,HTET,CTET etc in Computer Science but they are lagging
                 behind due to lack of proper guidance">Gate Smashers</a>.
                 </li>
                 <li> &nbsp;
           <a
              href="https://youtube.com/playlist?list=PLBlnK6fEyqRgMCUAG0XRw78UA8qnv6jEx"
                 title="Neso Academy offers world-class learning resources on engineering courses, school syllabus, 
                 competitive exams, and many more. ">Neso Academy</a>.
                 </li>
                </ul>
        </p>
    
		</DialogContentText>
		</DialogContent>
      <DialogActions>
       <Button onClick={handleToClose8}
				color="primary" autoFocus>
			Close
		</Button>
		</DialogActions>
      </Dialog>
      </div>
       
      </Box> 
      </div>
      </Box>
      
      </Box>
      </div>
    )
}
export default Resource;   

  
      

      

      

             
             


































       
  