import React, { useState } from "react";
import '../accenture/Tabs.css';
import '../accenture/Table.css';

const Tab = ({ tabName, isActive, onClick }) => (

  <div
    className={`tab ${isActive ? "active" : ""}`}
    onClick={() => onClick(tabName)}
  >
    {tabName}
  </div>
);
const TabContent = ({ tabName }) => {
const contents = {
English: "English content",
"Critical Reasoning": (
<div>
<table className="content-table">
<thead>
<tr>
<th>S.No.</th>
<th>Topic</th>
<th>Number of Questions</th>
</tr>
</thead>
<tbody>
<tr>
<td>1</td>
<td>English Ability</td>
<td>17</td>
</tr>
<tr className="active-row">
<td>2</td>
<td>Critical Reasoning and Problem Solving</td>
<td>18</td>
</tr>
<tr>
<td>3</td>
<td>Abstract Reasoning</td>
<td>15</td>
</tr>
<tr className="active-row">
<td>4</td>
<td>Common Application and MS Office</td>
<td>12</td>
</tr>
<tr>
<td>5</td>
<td>Pseudo Code</td>
<td>18</td>
</tr>
<tr className="active-row">
<td>6</td>
<td>Network Security and Cloud</td>
<td>10</td>
</tr>
</tbody>
</table>
<br />
<h4>English Ability:</h4>
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
<p>Time: 50 mins</p>
</div>
),
"Abstract Reasoning": "Abstract Reasoning content",
Technical: "Technical content",
Coding: "Coding content"
};

return <div className="tab-content">{contents[tabName]}</div>;
};

const Tabs = () => {
const [activeTab, setActiveTab] = useState("English");

const handleClick = (tabName) => {
setActiveTab(tabName);
};

return (
<div className="tabs-container">
<div className="tab-bar">
<Tab
tabName="English"
isActive={activeTab === "English"}
onClick={handleClick}
/>
<Tab
tabName="Critical Reasoning"
isActive={activeTab === "Critical Reasoning"}
onClick={handleClick}
/>
<Tab
tabName="Abstract Reasoning"
isActive={activeTab === "abstract reasoning"}
onClick={handleClick}
/>
<Tab
tabName="technical"
isActive={activeTab === "technical"}
onClick={handleClick}
/>
</div>
<TabContent tabName={activeTab} />
</div>
);
};

export default Tabs;