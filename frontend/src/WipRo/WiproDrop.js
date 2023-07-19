import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
import WaterDrop2 from './WaterDrop2';
import WaterDrop3 from './WaterDrop3';
import WaterDrop4 from './WaterDrop4';
function WiproDrop() {
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
        <DialogContent>
          <ul>
            <li>Project Engineer(PE)- 3.5LPA</li>
            <br/>
            <li>Project Engineer(wipro velocity)- 6.5LPA</li>
          </ul>
        </DialogContent>
      </Dialog>
      <div> <WaterDrop2/></div>
      <div><WaterDrop3/></div>
      <div> <WaterDrop4/></div>
     
      
     
      </div>
  );}
export default WiproDrop;