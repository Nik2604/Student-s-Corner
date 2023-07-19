import React, { useState } from 'react';
import './Opening.css';
import { Link } from 'react-router-dom';
import Sidebar from '../StackOverflow/Sidebar';
import { Box, Button, ButtonBase, Typography } from '@mui/material';


function Opening() {
  const [showMore, setShowMore] = useState(false);
  const backgroundStyle = {
    backgroundImage: `url(${require("./back.jpg")})`,
  
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '200vh',
  };
  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <body>
      <div style={backgroundStyle}>
        {/* <Sidebar/> */}
        <div>
          <Box marginLeft={1} mt={1}>
        
        <h1 className="heading">How to Prepare for Campus Placements?</h1>
        <p className={`text ${showMore ? 'show-more' : ''}`}>
          Many students do not take campus placement preparations too seriously. However, for most this proves to be a big mistake.
          <br />
          <br /> We hope that you are not amongst those!
          <br />
          <br /> Campus placement has generally have the following stages.
          <br />
          <br />
          1. Skill assessment test
          <br />
          2. Group discussion
          <br />
          3. Panel interview round
          <br />
          4. Technical test
          <br />
          5. General HR round
          <span className="moreText">
            {/* <h1>Skill Assessment test</h1> */}
            <br />
            <br />
            Skill assessment is usually an aptitude-based test that helps in determining the reasoning &amp; analytical quotient of a candidate.
            <br />
            <br />
            Here are a few tips for aptitude preparations for placements.
            <br />
            <br />
            1. Solve aptitude-based tasks constantly &amp; consistently from corresponding college portals.
            <br />
            2. Gather previous aptitude test papers &amp; solve them to get hands-on experience.
            <br />
            3. Talk to professionals/seniors in your domain &amp; ask for relevant tips.
            <br />
            4. Don’t shy away from taking feedback.
            <br />
            5. Work with resources such as Practice set books, sample papers &amp; practice papers.
            <br />
            6. Acquire in-depth knowledge of your core field as much as you can.
            {/* <h1>Group Discussion</h1> */}
            <br />
            Group discussion is primarily a campus placement-based exercise. This is an exercise that helps a recruiting manager analyze each individual during a group discussion &amp; identify their problem-solving abilities as per the situation provided.
            <br />
            <br />
            1. Be Clear
            <br />
            2. Sharpen Your Communication Skills
            <br />
            3. Take Charge
            {/* <h1>Panel Interview Round</h1>  */}
            <br />
            A Panel Interview is a round wherein a panel of professional recruiting managers interview a potential candidate face to face. This round determines whether the candidate’s application should be moved forward or not. Hence, the importance of this round is much higher.
            <br />
            <br />
            1. Gain Confidence
            <br />
            2. Clarity of Thought
            <br />
            3. Research well
          </span>
        </p>
        
        <Box px={3}>
        <Button variant='contained' px={3}  onClick={toggleShowMore}>
          {showMore ? 'Read Less' : 'Read More'}
        </Button></Box>

        <hr />
        <Typography color='#1E90FF' fontWeight={500} variant='h4'>Practice and Learn till you are Perfect ! !</Typography><br/>
        <Box px={5} display="flex" columnGap={20} mb={5}>
          
        <Link to="/apptitude" > 
        <Button bgcolor="#FFFFE0" variant='contained'> Apptitude test</Button>
       </Link>
      
        <Link to="/reso">
        <Button variant='contained'>Technical Test</Button>
        </Link>
        </Box>
        <hr/>
        <Typography  variant='h4' color='#1E90FF'>Company Wise Strategy</Typography>
        <Box px={5} display="flex" columnGap={15} mb={5} >
          
        <Link to="/accenture" > 
        <Button bgcolor="#FFFFE0" variant='contained'> Accenture</Button>
       </Link>
      
        <Link to="/tcs">
        <Button variant='contained'>TCS</Button>
        </Link>
        <Link to="/infosys">
        <Button variant='contained'>Infosys</Button>
        </Link>
        <Link to="/wipro">
        <Button variant='contained'>Wipro</Button>
        </Link>
        <Link to="/hcl">
        <Button variant='contained'>Hcl</Button>
        </Link>
        </Box>
        </Box>
        
        
        </div>
      </div>
      
    </body>
  );
}

export default Opening;
