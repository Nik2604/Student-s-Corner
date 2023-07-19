import React, { useState } from 'react';
import "./styles.css";

function UserForm() {
  const [branch, setBranch] = useState('');
  const [btechPercentage, setBtechPercentage] = useState(0);
  const [tenthPercentage, setTenthPercentage] = useState(0);
  const [twelfthPercentage, setTwelfthPercentage] = useState(0);
  const [backlogs, setBacklogs] = useState(0);
  const [skills, setSkills] = useState([]);

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    if (name === 'branch') {
      setBranch(value);
    } else if (name === 'btechPercentage') {
      setBtechPercentage(parseFloat(value));
    } else if (name === 'tenthPercentage') {
      setTenthPercentage(parseFloat(value));
    } else if (name === 'twelfthPercentage') {
      setTwelfthPercentage(parseFloat(value));
    } else if (name === 'backlogs') {
      setBacklogs(parseInt(value));
    } else if (name === 'skills') {
      setSkills(value.split(','));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({
      branch,
      btechPercentage,
      tenthPercentage,
      twelfthPercentage,
      backlogs,
      skills,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="branch">Branch:</label>
        <input
          type="text"
          id="branch"
          name="branch"
          value={branch}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="btechPercentage">B.Tech Percentage:</label>
        <input
          type="number"
          step="0.01"
          id="btechPercentage"
          name="btechPercentage"
          value={btechPercentage}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="tenthPercentage">10th Percentage:</label>
        <input
          type="number"
          step="0.01"
          id="tenthPercentage"
          name="tenthPercentage"
          value={tenthPercentage}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="twelfthPercentage">12th Percentage:</label>
        <input
          type="number"
          step="0.01"
          id="twelfthPercentage"
          name="twelfthPercentage"
          value={twelfthPercentage}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="backlogs">Number of Backlogs:</label>
        <input
          type="number"
          id="backlogs"
          name="backlogs"
          value={backlogs}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="skills">Skills:</label>
        <input
          type="text"
          id="skills"
          name="skills"
          value={skills.join(',')}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default UserForm;