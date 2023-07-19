import {motion} from 'framer-motion';
import {useState} from 'react';
import './Accenture.css';
import './Drop.css';
import AccentureDrop from './AccentureDrop';
function Accenture() {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundStyle = {
    backgroundImage: `url(${require("./accenture.jpeg")})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
    <div className="Accenture">
      <motion.div transition={{layout: {duration: 1, type: "spring"}}} layout 
      onClick={()=> setIsOpen(!isOpen)} className='card'
      style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba(0,0,0, 0.9)"}}
      >
        <motion.h2 layout="position" color='#fff'>Accenture</motion.h2>
        {isOpen &&(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        className='expand'>
          <p>
          Accenture plc is an Irish-American professional services company based in Dublin, specializing in information technology (IT) services and consulting. A Fortune Global 500 company, it reported revenues of $61.6 billion in 2022. Accenture's current clients include 91 of the Fortune Global 100 and more than three-quarters of the Fortune Global 500. As of 2022, Accenture is considered the largest consulting firm in the world by number of employees.
          </p>
        </motion.div>
        )}
      </motion.div>     
    </div>
    <AccentureDrop/>
    </div>

    
    
    
    
);}
export default Accenture;
