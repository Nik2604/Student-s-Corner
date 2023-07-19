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
          <h4>TCS Ninja</h4>
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
        <td>NUMERICAL ABILITY</td>
        <td>26</td>
        <td>40Mins</td>
        </tr>
        <tr className="active-row">
        <td>2</td>
        <td>VERBAL ABILITY</td>
        <td>24</td>
        <td>30Mins</td>
        </tr>
        <tr>
        <td>3</td>
        <td>REASONING ABILITY</td>
        <td>10</td>
        <td>50Mins</td>
        </tr>
        <tr className="active-row">
        <td>4</td>
        <td>PROGRAMMING LOGIC</td>
        <td>10</td>
        <td>15Mins</td>
        </tr>
        <tr>
        <td>5</td>
        <td>CODING</td>
        <td>2</td>
        <td>55Mins</td>
        </tr>
        
        </tbody>
        </table>
        <br />
        <h4>TCS Digital</h4>
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
        <td>Advanced Quantitative Aptitude</td>
        <td>10</td>
        <td>35Mins(Shared)</td>
        </tr>
        <tr className="active-row">
        <td>2</td>
        <td>Advanced Reasoning Ability</td>
        <td>10</td>
        <td>35Mins(Shared)</td>
        </tr>
        <tr>
        <td>3</td>
        <td>Advanced Coding</td>
        <td>2</td>
        <td>55Mins</td>
        </tr>
        
        </tbody>
        </table>

        
      </div>
        </DialogContent>
      </Dialog>
      </div>
  );
  }
export default WaterDrop4;
