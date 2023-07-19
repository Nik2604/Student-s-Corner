import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
function WaterDrop3() {
  const [open, setOpen] = React.useState(false);
const handleClickToOpen =() => {
  setOpen(true);
}
const handleToClose =() =>{
  setOpen(false);
}
  return (
    <div className='container'>
      <button onClick={handleClickToOpen} className="drop">
      <div className='smalldrop'></div>
      <div className="content"> 
        <p>Exam Pattern</p>
        </div>
      </button>
      <Dialog open = {open} onClose={handleToClose}>
        <DialogTitle>Exam Pattern</DialogTitle>
        <DialogContent>
        <div>
        <table className="content-table">
        <thead>
        <tr>
        <th>S.No.</th>
        <th>Topic</th>
        <th>Number of Questions</th>
        <th>Time</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
        <td>LOGICAL REASONING</td>
        <td>15</td>
        <td>25Mins</td>
        </tr>
        <tr className="active-row">
        <td>2</td>
        <td>Mathematical ABILITY</td>
        <td>10</td>
        <td>35Mins</td>
        </tr>
        <tr>
        <td>3</td>
        <td>VERBAL ABILITY</td>
        <td>20</td>
        <td>20Mins</td>
        </tr>
        <tr className="active-row">
        <td>4</td>
        <td>Pseudo Code</td>
        <td>5</td>
        <td>10Mins</td>
        </tr>
        <tr>
        <td>5</td>
        <td>Puzzle Solving</td>
        <td>4</td>
        <td>10Mins</td>
        </tr>
        </tbody>
        </table>
        <br />
      </div>
        </DialogContent>
      </Dialog>
      </div>
  );
  }
export default WaterDrop3;
