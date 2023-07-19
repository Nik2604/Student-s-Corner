import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';
function WaterDrop4() {
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
        <td>English Ability</td>
        <td>17</td>
        </tr>
        <tr className="active-row">
        <td>2</td>
        <td>Critical Reasoning and Problem Solving</td>
        <td>18</td>
        </tr>
        <tr>
        <td>3</td>
        <td>Abstract Reasoning</td>
        <td>15</td>
        </tr>
        <tr className="active-row">
        <td>4</td>
        <td>Common Application and MS Office</td>
        <td>12</td>
        </tr>
        <tr>
        <td>5</td>
        <td>Pseudo Code</td>
        <td>18</td>
        </tr>
        <tr className="active-row">
        <td>6</td>
        <td>Network Security and Cloud</td>
        <td>10</td>
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
export default WaterDrop4;
