import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
import WaterDrop2 from './WaterDrop2';
import WaterDrop3 from './WaterDrop3';
import WaterDrop4 from './WaterDrop4';
function AccentureDrop() {
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
        <DialogTitle>ROLES OFFERED</DialogTitle>
        <DialogContent><ol>
          <li>
            ASE (Associate Software Engineer) - 4.5 Lpa</li>
            <li>AASE (Advanced Associate Software Engineer) - 6 Lpa</li></ol></DialogContent>
        
      </Dialog>
      <div><WaterDrop4/></div>
      <div><WaterDrop3/></div>
      <div><WaterDrop2/></div>
      </div>
  );}
export default AccentureDrop;