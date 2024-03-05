import TratoImg from "../assets/imageHome/cerrarTrato.jpg";

import { AnimatePresence } from "framer-motion";

const Trato = () => {
  return (
    <div className="container mx-auto w-96 h-auto flex justify-end items-center mr-4 mb-5">
      <AnimatePresence>
        <img src={TratoImg}
        />
      </AnimatePresence>
    </div>
  );
};

export default Trato;
