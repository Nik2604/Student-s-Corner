import React from 'react';

const TabContent = ({ tabName }) => {
  const contents = {
    'Logical Reasoning': (
      <div>
        <h4>Logical</h4>
        <br/>
        <ul>
          <li>Arrangements</li>
          <li>Puzzles</li>
          <li>Syllogisms</li>
          <li>Coding-Decoding</li>
          <li>Number series</li>
          <li>Cryptarithmetic</li>
          <li>Clocks and Calendar</li>
          <li>Data Sufficiency</li>
          <li>Most logical choice</li>
          <li>Logical Deduction</li>
        </ul>
        
      </div>
    ),
    "Mathematical Ability": (
      <div>
        <h4>Mathematical Ability</h4>
        <br/>
        <ul>
          <li>Percentages</li>
          <li>Data Interpretation</li>
          <li>Permutation and Combination</li>
          <li>Probability</li>
          <li>Areas, Shapes, Perimeter</li>
          <li>Speed Time and Distance / Boats and Streams</li>
          <li>Time and Work</li>
          <li>Profit and Loss | Mixtures & Allegation</li>
          <li>Problem on Ages</li>
          <li>Divisibility</li>
          <li>Number Decimal & Fractions</li>
          <li>Series and Progression</li>
          <li>LCM and HCF</li>
        </ul>
      </div>
    ),
    "Verbal Ability": (
      <div>
        <h4>Verbal Ability</h4>
        <br/>
        <ul>
          <li>Reading comprehension</li>
          <li>Sentence correction</li>
          <li>Sentence Selection</li>
          <li>Sentence completion</li>
          <li>Para Jumbles</li>
          <li>Spotting error</li>
          <li>Analogy</li>
          <li>Fill in the blanks</li>
          <li>One Word Substitution</li>
          </ul>
      </div>
    ),
    "Pseudo Code": (
      <div>
        <h4>Pseudo Code</h4>
        <br/>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>Data Structure</li>
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
