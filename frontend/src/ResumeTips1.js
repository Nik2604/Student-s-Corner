import {motion} from 'framer-motion';
import {useState} from 'react';
import './ResumeTips1.css';
function ResumeTips1() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="ResumeTips"> 
      <motion.div transition={{layout: {duration: 1, type: "spring"}}} layout 
      onClick={()=> setIsOpen(!isOpen)} className='card'
      style={{borderRadius: "1rem", boxShadow:"0px 10px 30px rgba(0,0,0, 0.9)"}}
      >
        <motion.h2 layout="position" style={{color: "#000"}}>ResumeTips</motion.h2>
        {isOpen &&(
        <motion.div 
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{duration: 2}}
        className='expand'>
          
            <li>Use bullet Points in Your Resume.</li>
            <li>Save Your Resume in PDF format and always send it in PDF format to companies.</li>
            <li>If possible, showcase your GitHub Profile, any online link for projects, or LinkedIn profile in your resume.</li>
            <li>Do not use the word ‘I’ in your resume.</li>
            <li>Depending on the country, you might need to include a photo in your resume. Ensure it is professional, on a plain background, and with no distracting elements. </li>
            <li>Do not fake anything or your resume shouldn’t have any buzzwords.</li>
            <li>Only include relevant skills in your resume, be precise and clear.</li>
            <li>The candidate can also attach a cover letter or write an email to the recruiter of the company.</li>
            <li>The Projects section is the Game Changer, try adding clickable deployed links to the resume of it is a software project or try to add the link of a small video describing the working of the project if it is a hardware project</li>
          
        </motion.div>
        )}
      </motion.div> 
    </div>
   
   );}
export default ResumeTips1;
