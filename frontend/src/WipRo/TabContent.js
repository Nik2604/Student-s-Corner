import React from 'react';

const TabContent = ({ tabName }) => {
  const contents = {
    'Quants': (
      <div>
        <h4>Quants</h4>
        <br/>
        <ul>
          <li>LCM & HCF</li>
          <li>Divisibility</li>
          <li>Numbers, decimal fractions, and power</li>
          <li>Time & Work</li>
          <li>Pipes and Cisterns</li>
          <li>Averages</li>
          <li>Profit and Loss</li>
          <li>Simple and Compound Interest</li>
          <li>Time, Speed, and Distance</li>
          <li>Problems on Trains</li>
          <li>Geometry, Coordinate Geometry</li>
          <li>Clocks & Calendar</li>
          <li>Logarithms</li>
          <li>Permutation and Combinations</li>
          <li>Probability</li>
          <li>Percentages</li>
          <li>Ratio & Proportion</li>
          <li>Algebra</li>
          <li>Surds & Indices</li>
          <li>Allegations and Mixtures</li>
          <li>Problem on Ages</li>
        </ul>
      </div>
    ),
    "Verbal Ability": (
      <div>
        <h4>Verbal Ability</h4>
        <br/>
        <ul>
          <li>Synonyms</li>
          <li>Antonyms</li>
          <li>Contextual Vocabulary</li>
          <li>Jumbled Sentence</li>
          <li>Sentence Formation</li>
          <li>Inferential and Literal Comprehension</li>
          <li>Comprehension ordering</li>
          <li>Error Identification</li>
          <li>Sentence Improvement & Construction</li>
          <li>Subject-Verb Agreement</li>
          <li>Tenses & Articles</li>
          <li>Preposition & Conjunctions</li>
          <li>Speech & Voices</li>
        </ul>
      </div>
    ),
    "Logical Reasoning": (
      <div>
        <h4>Logical Ability</h4>
        <br/>
        <ul>
          <li>Coding deductive logic</li>
          <li>Blood Relation</li>
          <li>Directional Sense</li>
          <li>Objective Reasoning</li>
          <li>Selection decision tables</li>
          <li>Seating Arrangements</li>
          <li>Mathematical Orders</li>
          <li>Inferred Meaning</li>
          <li>Logical word sequence</li>
          <li>Data sufficiency</li>
          <li>Syllogism</li>
          <li>Data Arrangement</li>
        </ul>
      </div>
    ),
    "Essay Writing": (
      <div>
        <h4>Points to be REMEMBERED dude..!</h4>
        <br/>
        <ul>
          <li>First try to plot the concept on how to start of with the essay.</li><br/>
          <li>A Well Structured or Well Ordered essay with meaningful section always apply a positive impact on the reader.</li><br/>
          <li>Use facts to support your points so that one cannot deny.</li><br/>
          <li>Structure of the essay should be in order so that each section express a meaning with support of one’s view on the topic. </li><br/>
          <li>Conclude the topic by summarizing all the facts.</li><br/>
          </ul>
          <br/>
        <h4>Essay Writing Practising Question</h4>
        <br/>
        <ul>
          <li>The Challenge of Education in India</li><br/>
          <li>What are the positive and negative impacts of GST?</li><br/>
          <li>Rise of Religious Terrorism in Sri Lanka</li><br/>
          <li>Is Social Media Evil?</li><br/>
          <li>Impact of media on society</li><br/>
          <li>True qualities of a leader.</li><br/>
          <li>Is Group Discussion necessary for recruitment?</li><br/>
          </ul>
      </div>
    ),
    "Coding": (
      <div>
        <h4>Coding Key Points to be REMEMBERED...!</h4>
        <br/>
        <ul>
          <li>You need to implement the function signature, that has been provided by the editor.</li><br/>
          <li>Use the function that is exactly provided in the problem as any deviation may lead to unsuccessful compilation of the code.</li><br/>
          <li>Do not modify pre-implemented main method.</li><br/>
          <li>You may include necessary libraries if required.</li><br/>
          <li>The signature may call other functions defined by you.</li><br/>
          <li>It may also use structure definitions and other pre processing directives such as macros.</li>
    
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
