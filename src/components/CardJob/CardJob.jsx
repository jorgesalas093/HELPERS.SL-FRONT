import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "../CardJob/CardJob.css";
import { jobs } from "../../assets/utils/utils";

const CardJob = () => {
  return (
    <div className="card-list">
      {jobs.map((job, index) => (
        <CardJobList key={index} job={job} />
      ))}
    </div>
  );
};

export const CardJobList = ({ job }) => {
  return (
    <li className="card-container">
      <Link to={`/job/${job.to}`} className="block w-full h-full">
        <motion.div className="card-wrapper">
          <div className="splash-container">
            <div className="splash">
              <img src={job.img} alt={job.img} />
              <div className="title-overlay">{job.title}</div>
            </div>
          </div>
          <div className="card-content">
            <p>{job.text}</p>
          </div>
        </motion.div>
      </Link>
    </li>
  );
};

export default CardJob;
