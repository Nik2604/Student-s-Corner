import React from 'react';
import { Dialog, DialogTitle, DialogContent } from '@mui/material';
function WaterDrop2() {
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
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
        <td>Quants Section</td>
        <td>16</td>
        </tr>
        <tr className="active-row">
        <td>2</td>
        <td>Verbal Ability</td>
        <td>22</td>
        </tr>
        <tr>
        <td>3</td>
        <td>Logical Section</td>
        <td>14</td>
        </tr>
        <tr className="active-row">
        <td>4</td>
        <td>Essay Writing</td>
        <td>1</td>
        </tr>
        <tr>
        <td>5</td>
        <td>Coding</td>
        <td>2</td>
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
export default WaterDrop2;
