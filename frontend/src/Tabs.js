import React, { useState } from "react";
// import './Tabs.css';

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
    "Critical Reasoning": "Critical Reasoning content",
    "abstract reasoning": "Abstract Reasoning content",
    technical: "Technical content",
    coding: "Coding content"
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
          tabName="abstract reasoning"
          isActive={activeTab === "abstract reasoning"}
          onClick={handleClick}
        />
        <Tab
          tabName="technical"
          isActive={activeTab === "technical"}
          onClick={handleClick}
        />
        <Tab
          tabName="coding"
          isActive={activeTab === "coding"}
          onClick={handleClick}
        />
      </div>
      <TabContent tabName={activeTab} />
    </div>
  );
};

export default Tabs;