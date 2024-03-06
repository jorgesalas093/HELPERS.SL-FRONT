import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Carer from "../../assets/imageJob/carer.jpg"
import Carpenter from "../../assets/imageJob/carpenter.jpg"
import Brickwork from "../../assets/imageJob/brickwork.jpg"

import "../FeaturedWorks/FeaturedWorks.css"

const job = [
    { title: "Carer", img: Carer, text: "Caring for sick, disabled or needy people. It also accompanies medical appointments or daily tasks.", to: "Carer" },
    { title: "Carpenter", img: Carpenter, text: "Construction and repair of furniture, doors and everything related to wood. We also put laminate flooring.", to: "Carpenter" },
    { title: "Brickwork", img: Brickwork, text: "Bathroom renovation, changing house layout, plasterboard, changing windows. Everything related to works at home.", to: "Brickwork" }
];

const cardVariants = {
  offscreen: {
    y: 300
  },
  onscreen: {
    y: 10,
    rotate: -5,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.4
    }
  }
};

const CardJob = ({ title, img, text, to }) => {
  return (
    <li className="card-container">
    <Link to={`/job/${to}`} className="">
    <motion.div
      className="car-container"
      initial="offscreen"
      animate="onscreen"
      variants={cardVariants}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
    >
      <div className="car-title">{title}</div>
      <div className="splash">
        <img src={img} alt={title} />
      </div>
      <div className="car-content">
        <p>{text}</p>
      </div>
    </motion.div>
    </Link>
    </li>
  );
};

const FeaturedWorks = () => {
  return (
    <div className="car-list">
      {job.map((job, index) => (
        <CardJob key={index} title={job.title} img={job.img} text={job.text} to={job.to} />
      ))}
    </div>
  );
};

export default FeaturedWorks;