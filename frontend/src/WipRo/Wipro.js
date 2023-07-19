import {motion} from 'framer-motion';
import {useState} from 'react';
import "./Drop.css";
import "./Wipro.css";
import WiproDrop from './WiproDrop';
function Wipro() {
  const [isOpen, setIsOpen] = useState(false);
  const backgroundStyle = {
    backgroundImage: `url(${require("./Wipro.jpeg")})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
    <div className="Wipro">
      <motion.div transition={{layout: {duration: 1, type: "spring"}}} layout 
      onClick={()=> setIsOpen(!isOpen)} className='card'
      style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba(0,0,0, 0.9)"}}
      >
        <motion.h2 layout="position" color='#fff'>WIPRO</motion.h2>
        {isOpen &&(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        className='expand'>
          <p>
          Wipro Limited (formerly, Western India Palm Refined Oils Limited) is an Indian multinational corporation that provides information technology, consulting and business process services. Wipro's capabilities range across cloud computing, cyber security, digital transformation, artificial intelligence, robotics, data analytics, and other technology consulting services to customers in 167 countries.
          </p>
        </motion.div>
        )}
      </motion.div>     
    </div>
    <WiproDrop/>
    </div>
);}
export default Wipro;
