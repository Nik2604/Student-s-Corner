import React, { useState } from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import TabContent from './TabContent';
import './Tabs.css';


function WaterDrop3() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('English');

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
      <Dialog open={open} onClose={handleToClose}>
        <DialogTitle fontWeight={600}>Exam Syllabus</DialogTitle>
        <div className="tabs-container">
          <div className="tabs" >
            <Tab tabName="English" isActive={activeTab === 'English'} onClick={handleTabClick} />
            <Tab tabName="Critical Reasoning" isActive={activeTab === 'Critical Reasoning'} onClick={handleTabClick} />
            <Tab tabName="Abstract Reasoning" isActive={activeTab === 'Abstract Reasoning'} onClick={handleTabClick} />
            <Tab tabName="Technical" isActive={activeTab === 'Technical'} onClick={handleTabClick} />
            <Tab tabName="Coding" isActive={activeTab === 'Coding'} onClick={handleTabClick} />
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
