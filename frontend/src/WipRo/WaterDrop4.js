import React from 'react'; 
import { DialogContent} from '@mui/material';
import { Dialog, DialogTitle } from '@mui/material';
import wipro_2021 from './wipro_2021.pdf';
import wipro_2022 from './wipro_2022.pdf';
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
        <p>Previous Year Question</p>
        </div>
      </button>
      <Dialog open = {open} onClose={handleToClose}>
        <DialogTitle fontWeight={600}>Previous year questions</DialogTitle>
        <DialogContent>
        <div>
        <table className="content-table">
        <thead>
        <tr>
        <th>S.No.</th>
        <th>Year</th>
        <th>Download here</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>1</td>
        <td>2021</td>
        <td>
      
     
        <a href={wipro_2021} download='wipro_2021.pdf'>Download
        </a>

     </td>
        </tr>
        <tr className="active-row">
        <td>2</td>
        <td>2022</td>
        <td> <a href={wipro_2022} download='wipro_2022.pdf'>Download
        </a>
</td>
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
