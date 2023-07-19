import React, { useState } from 'react';
import './Form.css';
import { Typography } from '@mui/material';
import axios from "axios";

function Form() {
  const [branch, setBranch] = useState('');
  const [tenthPercent, setTenthPercent] = useState(0);
  const [twelfthPercent, setTwelfthPercent] = useState(0);
  const [btechPercent, setBtechPercent] = useState(0);
  const [skills, setSkills] = useState('');
  const [backlogs, setBacklogs] = useState('');


  const handleSubmit = async (event) => {
    event.preventDefault();
    const skillsArray = skills.split(',').map((skill) => skill.trim().toLowerCase());
    const acceptableSkills = ['django', 'react', 'mern', 'aws', 'devops', 'frontend development', 'backend development', 'vlsi', 'automation', 'python', 'catia', 'iot', 'pcb designing', 'ansys', 'autocad', 'python'];
    const skillsMatch = skillsArray.some((skill) => acceptableSkills.includes(skill));
  
    if (tenthPercent > 65 && twelfthPercent > 65 && btechPercent > 65 && backlogs < 2 && skillsMatch) {
      alert("Hurray!!! you have high possiblity to get placed");
    } else {
      alert("You need to practice more and try harder");
    }
  };
  

  return (
    <div class="form-box">
      <Typography fontWeight={600} fontSize={50}>Predict Your Placement</Typography>
    <form onSubmit={handleSubmit}>
      <div style={{ display: 'inline-block' }}>
        <label  htmlFor="branch">Branch:</label>
        <input className='new'
          type="text"
          id="branch"
          name="branch"
          value={branch}
          onChange={(event) => setBranch(event.target.value)}
        />
      </div>
      <div style={{ display: 'inline-block', marginLeft: '30px' }}>
        <label htmlFor="tenth-percent">10th Percentage:</label>
        <input className='new'
          type="number"
          id="tenth-percent"
          name="tenth-percent"
          value={tenthPercent}
          min={0}
          max={100}
          onChange={(event) => setTenthPercent(parseInt(event.target.value))}
        />
      </div>
      <div style={{ display: 'inline-block', marginLeft: '30px' }}>
        <label htmlFor="twelfth-percent">12th Percentage:</label>
        <input className='new'
          type="number"
          id="twelfth-percent"
          name="twelfth-percent"
          value={twelfthPercent}
          min={0}
          max={100}
          onChange={(event) => setTwelfthPercent(parseInt(event.target.value))}
        />
      </div>
      <div style={{ display: 'inline-block', marginLeft: '20px' }}>
        <label htmlFor="btech-percent">B.Tech Percentage:</label>
        <input className='new'
          type="number"
          id="btech-percent"
          name="btech-percent"
          value={btechPercent}
          min={0}
          max={100}
          onChange={(event) => setBtechPercent(parseInt(event.target.value))}
        />
        

      </div>
      <div style={{ display: 'inline-block', marginLeft: '20px' }}>
  <label htmlFor="backlogs">Backlogs:</label>
  <input className='new'
    type="text"
    id="backlogs"
    name="backlogs"
    value={backlogs}
    onChange={(event) => setBacklogs(event.target.value)}
  />
</div>
      <div style={{ display: 'inline-block', marginLeft: '20px' }}>
        <label htmlFor="skills">Skills:</label>
        <textarea className='xyz'
          id="skills"
          name="skills"
          rows="1"
          cols="10"
          value={skills}
          onChange={(event) => setSkills(event.target.value)}
        />
      </div>
      <div style={{ display: 'inline-block' }}>
        <input type="submit" value="Predict" className='Parju'/>
      </div>
    </form>
    </div>
  );
}

export default Form;
