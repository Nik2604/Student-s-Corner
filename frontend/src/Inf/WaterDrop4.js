import React, { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import TabContent from './TabContent';
import './Tabs.css';


function WaterDrop4() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Logical Reasoning');

  const handleClickToOpen = () => {
    setOpen(true);
  }

  const handleToClose = () => {
    setOpen(false);
  }

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  }

  return (
    <div className='container'>
      <button onClick={handleClickToOpen} className="drop">
        <div className='smalldrop'></div>
        <div className="content">
          <p>Exam Syllabus</p>
        </div>
      </button>
      <Dialog open={open} onClose={handleToClose} >
        <DialogTitle fontWeight={600}>Exam Syllabus</DialogTitle>
        <div className="tabs-container">
          <div className="tabs" >
            <Tab tabName="Logical Reasoning" isActive={activeTab === 'Logical Reasoning'} onClick={handleTabClick} />
            <Tab tabName="Mathematical Ability" isActive={activeTab === 'Mathematical Ability'} onClick={handleTabClick} />
            <Tab tabName="Verbal Ability" isActive={activeTab === 'Verbal Ability'} onClick={handleTabClick} />
            <Tab tabName="Pseudo Code" isActive={activeTab === 'Pseudo Code'} onClick={handleTabClick} />
            {/* <Tab tabName="Puzzle Solving" isActive={activeTab === 'Puzzle Solving'} onClick={handleTabClick} /> */}
          </div>
          <TabContent tabName={activeTab}/>
        </div>
      </Dialog>
    </div>
  );
}

const Tab = ({ tabName, isActive, onClick }) => (
  <div
    className={`tab ${isActive ? "active" : ""}`}
    onClick={() => onClick(tabName)}
  >
    {tabName}
  </div>
);

export default WaterDrop4;
