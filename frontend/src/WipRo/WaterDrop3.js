import React,{useState} from 'react';
import { Dialog, DialogTitle } from '@mui/material';
import TabContent from './TabContent';
import './Tabs.css';


function WaterDrop3() {
  const [open, setOpen] = React.useState(false);
  const [activeTab, setActiveTab] = useState('Quants');

const handleClickToOpen =() => {
  setOpen(true);
}

const handleToClose =() =>{
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
      <Dialog open = {open} onClose={handleToClose}>
        <DialogTitle>Exam Syllabus</DialogTitle>
        <div className="tabs-container">
          <div className="tabs" >
            <Tab tabName="Quants" isActive={activeTab === 'Quants'} onClick={handleTabClick} />
            <Tab tabName="Verbal Ability" isActive={activeTab === 'Verbal Ability'} onClick={handleTabClick} />
            <Tab tabName="Logical Reasoning" isActive={activeTab === 'Logical Reasoning'} onClick={handleTabClick} />
            <Tab tabName="Essay Writing" isActive={activeTab === 'Essay Writing'} onClick={handleTabClick} />
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
