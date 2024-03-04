import LogoTitle from "../../assets/helpersLogo/HelpersHorizontalGrande.jpeg";
import "./HelpersTitle.css"
import { motion, AnimatePresence } from "framer-motion";

const HelpersLogoTitle = () => {
  return (
    <div className="helpersTitleHorizontal">
    <AnimatePresence>
      <motion.img initial={{ opacity: 0, scale: 0.5 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ 
      duration: 1.5,
      ease: 'easeInOut',
      delay: 0.8,
      type: 'spring'
      }} src={LogoTitle} />
      </AnimatePresence>
    </div>
  );
};

export default HelpersLogoTitle;