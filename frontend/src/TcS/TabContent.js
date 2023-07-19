import React from 'react';

const TabContent = ({ tabName }) => {
  const contents = {
    'Numerical Ability': (
      <div>
        <h4>
Numerical Ability Foundation Section:</h4>
        <br/>
        <ul>
          <li>Statistics</li>
          <li>Percentage</li>
          <li>Time & Work</li>
          <li>Area & Mensuration</li>
          <li>Number System</li>
          <li>Linear Equations</li>
          <li>Data Interpretation</li>
          <li>HCF LCM</li>
          <li>Simple Interest</li>
          <li>Compound Interest</li>
          <li>Profit and Loss</li>
          <li>Speed, Distance, Time</li>
          <li>Ratio and Proportion</li>
          <li>Permutation and Combination</li>
          <li>Probability</li>
          <li>Partnership</li>
          <li>Mixtures</li>
        </ul>
        
      </div>
    ),
    "Reasoning Ability": (
      <div>
        <h4>Reasoning Ability</h4>
        <br/>
        <ul>
          <li>Coding and Decoding</li>
          <li>Cuts and unfolds</li>
          <li>Attention to detail</li>
          <li>Unboxing a cube</li>
          <li>Analogies</li>
          <li>Blood Relation</li>
          <li>Data Arrangements</li>
          <li>Visual Reasoning</li>
          <li>Venn Diagrams</li>
          <li>Syllogisms</li>
          <li>Statement Assumption</li>
          <li>Statement Conclusion</li>
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
          <li>Sentence completion</li>
          <li>Error Identification</li>
          <li>Synonyms & Antonyms</li>
          <li>Sentence/Paragraph Re-arrangements</li>
          <li>Fill in the blanks
(Prepositions/Articles Tenses/Conjunctions)</li>
          

        </ul>
      </div>
    ),
    "Advanced Quantitative Aptitude": (
      <div>
        <h4>Advanced Quantitative Aptitude</h4>
        <br/>
        <ul>
          <li>Averages</li>
          <li>Profit Loss</li>
          <li>HCF LCM</li>
          <li>Permutation and Combination</li>
          <li>Probability</li>
          <li>Geometry</li>
          <li>Mensuration</li>
          <li>Puzzles</li>
          <li>Partnership</li>
          <li>Number System</li>
          <li>Time & Work</li>
          <li>Time, Speed, Distance</li>
          <li>Simple & Compound Interest</li>
          <li>Progressions</li>
          <li>Logarithms</li>
          </ul>
      </div>
    ),
    "Advanced Reasoning Ability": (
      <div>
        <h4>Advanced Reasoning Ability</h4>
        <br/>
        <ul>
          <li>Data Arrangements</li>
          <li>Visual Reasoning</li>
          <li>Venn Diagrams</li>
          <li>Syllogisms</li>
          <li>Statement Assumption</li>
          <li>Statement Conclusion</li>
          <li>Spatial Reasoning</li>
          <li>Puzzles</li>
          <li>Cuts, Folds, Cubes-based questions</li>
        </ul>
      </div>
    ),
    "Advanced Coding": (
      <div>
        <h4>Advanced Coding</h4>
        <br/>
        <ul>
          <li>Operators</li>
          <li>Looping statements</li>
          <li>Object-Oriented Programming (OOPS)</li>
          <li>Threading</li>
          <li>Functions</li>
          <li>Recursion</li>
          <li>Algorithms</li>
          <li>Arrays</li>
          <li>Control statements</li>
          <li>Strings</li>
          <li>Data Structures: Linked List, Stack, Queue, Trees, and Graphs</li>
          <li>Scenario and Logical Based Problems are asked</li>
          <li>Matrix Operations and Set Theory</li>
          <li>String Operations: Backward and Forward Shift</li>
          <li>Multidimensional Arrays</li>
          <li>Flow Control Loops</li>
          <li>Number Series, Pattern Series</li>
          <li>Shortest Path Calculation Logic</li>
          <li>Algorithms</li>
          <li>Data Structures</li>
          <li>Time and Space Complexity</li>


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
