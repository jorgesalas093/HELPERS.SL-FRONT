import LogoIndex from "../../assets/helpersLogo/LogoIndex.jpeg";

import { motion, AnimatePresence } from "framer-motion";


import "./HelpersLogoIndex.css"

const HelpersLogoIndex = () => {
  return (
    <div className="custom-button">
    <AnimatePresence>
      <motion.img 
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1, rotate: 360}}
      transition={{ duration: 0.5 }} 
      src={LogoIndex} />
      </AnimatePresence>
    </div>
  );
};

export default HelpersLogoIndex;
