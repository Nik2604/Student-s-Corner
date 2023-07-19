import {motion} from 'framer-motion';
import {useState} from 'react';
import TCSDrop from './TCSDrop';
import './Drop.css';
import './TCS.css';
function TCS() {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundStyle = {
    backgroundImage: `url(${require("./TCS.jpeg")})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
    <div className="TCS">
      <motion.div transition={{layout: {duration: 1, type: "spring"}}} layout 
      onClick={()=> setIsOpen(!isOpen)} className='card'
      style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba(0,0,0, 0.9)"}}
      >
        <motion.h2 layout="position" color='#fff'>TCS</motion.h2>
        {isOpen &&(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        className='expand'>
          <p>
          Tata Consultancy Services is an Indian multinational information technology services and consulting company with its headquarters in Mumbai, Maharashtra. It is a part of the Tata Group and operates in 150 locations across 46 countries. In July 2022, it was reported that TCS had over 600,000 employees worldwide.
          </p>
        </motion.div>
        )}
      </motion.div>     
    </div>
    <TCSDrop/>
    </div>
);}
export default TCS;
