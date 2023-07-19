import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import WaterDrop2 from './WaterDrop2';
import WaterDrop3 from './WaterDrop3';
import WaterDrop4 from './WaterDrop4';
function InfosysDrop() {
  const [open, setOpen] = React.useState(false);
  const handleClickToOpen =() => {setOpen(true);}
  const handleToClose =() =>{setOpen(false);}
  return (
    <div className='container'>
      <button onClick={handleClickToOpen} className="drop">
      <div className='smalldrop'></div>
      <div className="content"> 
        <p>Roles Offered</p>
        </div>
      </button>
      <Dialog open = {open} onClose={handleToClose}>
        <DialogTitle>Roles Offered</DialogTitle>
        <DialogContent>System Engineer(SE)- 3.6LPA</DialogContent>
        <DialogContent>Digital System Engineer(DSE)- 6.25LPA</DialogContent>
        <DialogContent>Power Programmer(PP) or Specialist Programmer(SP)- 9.5LPA</DialogContent>
      </Dialog>
      <div><WaterDrop3/></div>
      <div><WaterDrop4/></div>
      <div><WaterDrop2/></div>
      
      
      

      </div>
  );}
export default InfosysDrop;