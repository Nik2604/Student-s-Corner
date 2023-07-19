import React from 'react';

const TabContent = ({ tabName }) => {
  const contents = {
    'Numerical Ability': (
      <div>
        <h4>Aptitude</h4>
        <br/>
        <ul>
          <li>HCF and LCM</li>
          <li>Number System</li>
          <li>Time, Work, Pipes and Cisterns</li>
          <li>Permutations and Combinations</li>
          <li>Geometry</li>
          <li>Time, Speed and Distance</li>
          <li>Probability</li>
          <li>Profit and Loss</li>
          <li>Interest, Mixture and Allegation</li>
          <li>Logarithm</li>
        </ul>
        
      </div>
    ),
    "Verbal Ability": (
      <div>
        <h4> Verbal Ability</h4>
        <br/>
        <ul>
          <li>Sentence correction</li>
          <li>Reading Comprehension</li>
          <li>Grammar</li>
          <li>Synonyms and Antonyms</li>
          <li>Fill in the blanks</li>
          <li>Spellings</li>
         
        </ul>
      </div>
    ),
    "Logical Reasoning": (
      <div>
        <h4> Logical Reasoning</h4>
        <br/>
        <ul>
          <li>Directional Sense</li>
          <li>Logical Reasoning</li>
          <li>Coding and Decoding</li>
          <li>Data Sufficiency</li>
          <li>Pattern Analogy</li>
          <li>Number Series</li>
          <li>Logical Statement Assumption</li>
          
          </ul>
      </div>
    ),
    "Computer Fundamentals": (
      <div>
        <h4>Computer Fundamentals</h4>
        <br/>
        <ul>
          <li>Computer Basics</li>
          <li>Data Structures</li>
          <li>OOPs</li>
          <li>Code input Output</li>
          <li>Networking</li>
          <li>OS</li>
          <li>DBMS</li>
        </ul>
      </div>
    ),
  };
  return (
    <div className="tab-content">
      {/* Render content based on tabName */}
      {contents[tabName]}
    </div>
  );
};

export default TabContent;
