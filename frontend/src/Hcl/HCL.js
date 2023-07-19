import {motion} from 'framer-motion';
import {useState} from 'react';
import "./HCL.css";
import "./Drop.css";
import HCLDrop from './HCLDrop';
function HCL() {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundStyle = {
    backgroundImage: `url(${require("./Hcl.jpeg")})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
    <div className="HCL">
      <motion.div transition={{layout: {duration: 1, type: "spring"}}} layout 
      onClick={()=> setIsOpen(!isOpen)} className='card'
      style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba(0,0,0, 0.9)"}}
      >
        <motion.h2 layout="position" color='#fff'>HCL</motion.h2>
        {isOpen &&(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        className='expand'>
          <p>HCL Technologies Limited, d/b/a HCLTech, is an Indian multinational information technology services and consulting company headquartered in Noida. It emerged as an independent company in 1991 when HCL entered into the software services business. The company has offices in 52 countries and over 210,966 employees.

          </p>
        </motion.div>
        )}
      </motion.div>     
    </div>
    <HCLDrop/>
    </div>
);}
export default HCL;
