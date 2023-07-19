import React from 'react';

const TabContent = ({ tabName }) => {
  const contents = {
    English: (
      <div>
        <h4>English Ability:</h4>
        <br/>
        <ul>
          <li>Sentence Correction</li>
          <li>Prepositions</li>
          <li>Grammar</li>
          <li>Reading Comprehension</li>
          <li>Synonyms & Antonym</li>
          <li>Idioms and Phrases</li>
          <li>Speech and Tenses</li>
          <li>Article</li>
          <li>Sentence Selection</li>
          <li>Spotting Error</li>
          <li>Sentence Arrangement</li>
        </ul>
        
      </div>
    ),
    "Critical Reasoning": (
      <div>
        <h4>Critical Reasoning</h4>
        <br/>
        <ul>
          <li>Arrangements</li>
          <li>Blood Relations</li>
          <li>Statement & Conclusions</li>
          <li>Coding  Decoding</li>
          <li>Agree Disagree Psychometric</li>
          <li>Analogies</li>
          <li>Logical Sequence</li>
        </ul>
      </div>
    ),
    "Abstract Reasoning": (
      <div>
        <h4>Abstract Reasoning content</h4>
        <br/>
        <ul>
          <li>Visual Reasoning</li>
          <li>Flowcharts-Visual Reasoning-DI</li>
          <li>Directional Sense</li>
          <li>Seating Arrangement</li>
        </ul>
      </div>
    ),
    "Technical": (
      <div>
        <h4>Technical content</h4>
        <br/>
        <ul>
          <li>Fundamental of Networking</li>
          <li>Common Applications and MS office</li>
          <li>Pseudo Code</li>
          </ul>
      </div>
    ),
    "Coding": (
      <div>
        <h4>Coding content</h4>
        <br/>
        <ul>
          <li>C</li>
          <li>C++</li>
          <li>Java</li>
          <li>Python</li>
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
