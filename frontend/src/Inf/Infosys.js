import { motion } from 'framer-motion';
import { useState } from 'react';
import InfosysDrop from './InfosysDrop';
import './Infosys.css';
import "./Drop.css";

function Infosys() {
  const [isOpen, setIsOpen] = useState(false);

  const backgroundStyle = {
    backgroundImage: `url(${require("./Infosys.jpeg")})`,

    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  };

  return (
    <div style={backgroundStyle}>
      <div className="Infosys">
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          onClick={() => setIsOpen(!isOpen)}
          className="card"
          style={{ borderRadius: "1rem", boxShadow: "0px 10px 30px rgba(0,0,0, 0.9)" }}
        >
          <motion.h2 layout="position" color="#fff">
            Infosys
          </motion.h2>
          {isOpen && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2 }} className="expand">
              <p>
                Infosys Limited is an Indian multinational information technology company that provides business consulting, information technology and outsourcing services. The company was founded in Pune and is headquartered in Bangalore.
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
      <InfosysDrop />
    </div>
  );
}

export default Infosys;
