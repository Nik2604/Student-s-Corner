import { Typography } from '@material-ui/core';
import React from 'react'
import { Link} from 'react-router-dom';
import "./css/Sidebar.css";
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-container">
        <div className="sidebar-options">
          <div className="sidebar-option">
            <Link to="/"><Typography>Home</Typography></Link>

            {/* <a href="/">Home</a> */}
            
            <hr/>
          </div>
          
          
          
          <div className="sidebar-option">
            <Link to="/experience"><Typography>Interview Experience</Typography></Link>
            <div className="link">
              <div className="link-tag">
                {/* <PublicIcon /> */}
                {/* <Link>Experiences</Link> */}

                {/* <a href="/">Question</a> */}
              </div>

              {/* <div className="tags">
                <p>Tags</p>
                <p>Users</p>
              </div> */}
            </div>
          </div>
          <hr></hr>
          <div className="sidebar-option">
            <Link to="/previous-questions"><Typography>Previous Questions</Typography></Link>
          </div>
          <hr></hr>
          <div className="sidebar-option">
            <Link to="/opening"><Typography>Resources</Typography></Link>
          </div>
          <hr></hr>
          <div className="sidebar-option">
          <Link>
          <Typography >Job oppurtunities</Typography></Link>
            
                    <div className="links">
                        <Link to="/On-campus" ><Typography>On Campus</Typography></Link>
                    </div>
                    <div className="links">
                        <Link to="/jobs"><Typography>Off Campus</Typography></Link>
                    </div>
          </div>
          <hr/>

          
          
          
        </div>
      </div>
    </div>
  );
}

export default Sidebar;