import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Carer from "../../assets/imageJob/carer.jpg";
import Carpenter from "../../assets/imageJob/carpenter.jpg";
import Brickwork from "../../assets/imageJob/brickwork.jpg";

import "../FeaturedWorks/FeaturedWorks.css";

const job = [
  { title: "Carer", img: Carer, text: "Caring for sick, disabled or needy people. It also accompanies medical appointments or daily tasks.", to: "Carer" },
  { title: "Carpenter", img: Carpenter, text: "Construction and repair of furniture, doors and everything related to wood. We also put laminate flooring.", to: "Carpenter" },
  { title: "Brickwork", img: Brickwork, text: "Bathroom renovation, changing house layout, plasterboard, changing windows. Everything related to works at home.", to: "Brickwork" },
  { title: "Brickwork", img: Brickwork, text: "Bathroom renovation, changing house layout, plasterboard, changing windows. Everything related to works at home.", to: "Brickwork" },
  { title: "Brickwork", img: Brickwork, text: "Bathroom renovation, changing house layout, plasterboard, changing windows. Everything related to works at home.", to: "Brickwork" },
  { title: "Brickwork", img: Brickwork, text: "Bathroom renovation, changing house layout, plasterboard, changing windows. Everything related to works at home.", to: "Brickwork" }
];

const FeaturedWorks = () => {
    return (
      <div className="car-list">
        {job.map((job, index) => (
          <CardJob key={index} job={job} />
        ))}
      </div>
    );
  };
  
  const CardJob = ({ job }) => {
    const [ref, inView] = useInView({
      triggerOnce: true,
      threshold: 0.5
    });
  
    const cardVariants = {
      offscreen: {
        y: 50
      },
      onscreen: {
        y: 10,
        rotate: -5,
        transition: {
          type: "spring",
          bounce: 0.4,
          duration: 0.8
        }
      }
    };
  
    return (
      <li className="card-container" ref={ref}>
        <Link to={`/job/${job.to}`} className="block w-full h-full">
          <motion.div
            className="car-container"
            initial="offscreen"
            animate={inView ? "onscreen" : "offscreen"}
            variants={cardVariants}
            transition={{ type: "spring", bounce: 1.4, duration: 0.8 }}
          >
            <div className="car-title">{job.title}</div>
            <div className="splash">
              <img src={job.img} alt={job.title} />
            </div>
            <div className="car-content">
              <p>{job.text}</p>
            </div>
          </motion.div>
        </Link>
      </li>
    );
  };
  
  export default FeaturedWorks;