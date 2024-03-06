import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

import Carer from "../../assets/imageJob/carer.jpg"
import Carpenter from "../../assets/imageJob/carpenter.jpg"
import Brickwork from "../../assets/imageJob/brickwork.jpg"
import Chef from "../../assets/imageJob/chef.jpg"
import ClosetOrganizer from "../../assets/imageJob/closetOrganizer.jpg"
import Electrician from "../../assets/imageJob/electrician.jpg"
import Assembler from "../../assets/imageJob/assembler.jpg"
import Gardener from "../../assets/imageJob/gardener.jpg"
import HomeCleaner from "../../assets/imageJob/homeCleaner.jpg"
import Locksmith from "../../assets/imageJob/locksmith.jpg"
import Messenger from "../../assets/imageJob/messenger.jpg"
import Painter from "../../assets/imageJob/painter.jpg"
import Plumber from "../../assets/imageJob/plumber.jpg"
import Teacher from "../../assets/imageJob/teacher.jpg"
import Welder from "../../assets/imageJob/welder.jpg"

import "../FeaturedWorks/FeaturedWorks.css";

const job = [
    { title: "Carer", img: Carer, text: "Caring for sick, disabled or needy people. It also accompanies medical appointments or daily tasks.", to: "Carer" },
    { title: "Carpenter", img: Carpenter, text: "Construction and repair of furniture, doors and everything related to wood. We also put laminate flooring.", to: "Carpenter" },
    { title: "Brickwork", img: Brickwork, text: "Bathroom renovation, changing house layout, plasterboard, changing windows. Everything related to works at home.", to: "Brickwork" },
    { title: "Chef", img: Chef, text: "Do you have a dinner or lunch at home and want to surprise your guests? A chef will come to your house and he will leave it ready to surprise you.", to: "Chef" },
    { title: "Closet Organizer", img: ClosetOrganizer, text: ".", to: "ClosetOrganizer" },
    { title: "Electrician", img: Electrician, text: ".", to: "Electrician" },
    { title: "Assembler", img: Assembler, text: ".", to: "Assembler" },
    { title: "Gardener", img: Gardener, text: ".", to: "Gardener" },
    { title: "Home Cleaner", img: HomeCleaner, text: ".", to: "HomeCleaner" },
    { title: "Locksmith", img: Locksmith, text: ".", to: "Locksmith" },
    { title: "Messenger", img: Messenger, text: ".", to: "Messenger" },
    { title: "Painter", img: Painter, text: ".", to: "Painter" },
    { title: "Plumber", img: Plumber, text: ".", to: "Plumber" },
    { title: "Teacher", img: Teacher, text: ".", to: "Teacher" },
    { title: "Welder", img: Welder, text: ".", to: "Welder" }
];

const FeaturedWorks = () => {
    return (
      <div className="card-list">
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
        rotate: -8,
        transition: {
          type: "spring",
          bounce: 0.5,
          duration: 0.8
        }
      }
    };
  
    return (
      <li className="card-container" ref={ref}>
        <Link to={`/job/${job.to}`} className="block w-full h-full">
            <AnimatePresence>
                <motion.div
                    className="card-container"
                    initial="offscreen"
                    animate={inView ? "onscreen" : "offscreen"}
                    variants={cardVariants}
                    transition={{ type: "spring", bounce: 1.4, duration: 0.8 }}
                >
                    <div className="card-title">{job.title}</div>
                    <div className="splash">
                    <img src={job.img} alt={job.title} />
                    </div>
                    <div className="card-content">
                    <p>{job.text}</p>
                    </div>
                </motion.div>
            </AnimatePresence>
        </Link>
      </li>
    );
  };
  
  export default FeaturedWorks;