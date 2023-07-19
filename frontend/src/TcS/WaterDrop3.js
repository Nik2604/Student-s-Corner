import React, { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import TabContent from './TabContent';
import './Tabs.css';


function WaterDrop3() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Numerical Ability');

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
            <Tab tabName="Numerical Ability" isActive={activeTab === 'Numerical Ability'} onClick={handleTabClick} />
            <Tab tabName="Reasoning Ability" isActive={activeTab === 'Reasoning Ability'} onClick={handleTabClick} />
            <Tab tabName="Verbal Ability" isActive={activeTab === 'Verbal Ability'} onClick={handleTabClick} />
            <Tab tabName="Advanced Quantitative Aptitude" isActive={activeTab === 'Advanced Quantitative Aptitude'} onClick={handleTabClick} />
            <Tab tabName="Advanced Reasoning Ability" isActive={activeTab === 'Advanced Reasoning Ability'} onClick={handleTabClick} />
            <Tab tabName="Advanced Coding" isActive={activeTab === 'Advanced Coding'} onClick={handleTabClick} />
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

export default WaterDrop3;
