// con esta logica, sacar las card de la home, dale duro muchacho, confio en ti JozeLui

import Carer from "../assets/imageJob/carer.jpg"
import Carpenter from "../assets/imageJob/carpenter.jpg"
import Brickwork from "../assets/imageJob/brickwork.jpg"
import Chef from "../assets/imageJob/chef.avif"


import { Link } from "react-router-dom";

import "../components/CardHome.css"

const info = [
    { title: "Carer", img: Carer, text: "Caring for sick, disabled or needy people. It also accompanies medical appointments or daily tasks.", to: "Carer" },
    { title: "Carpenter", img: Carpenter, text: "Construction and repair of furniture, doors and everything related to wood. We also put laminate flooring.", to: "Carpenter" },
    { title: "Brickwork", img: Brickwork, text: "Bathroom renovation, changing house layout, plasterboard, changing windows. Everything related to works at home.", to: "Brickwork" },
    { title: "Chef", img: Chef, text: "Do you have a dinner or lunch at home and want to surprise your guests? A chef will come to your house and he will leave it ready to surprise you.", to: "Chef" }
];

const CardJob = ({ title, img, text, to }) => {
  return (
      <li className="card-container">
          <Link to={`/job/${to}`} className="block w-full h-full">
              <div className="bg-white shadow-md rounded-lg p-6 card">
                  <div className="image-container">
                      <img src={img} alt={title} />
                  </div>
                  <h2 className="text-xl font-semibold mb-2">{title}</h2>
                  <p>{text}</p>
              </div>
          </Link>
      </li>
  );
};

const JobList = () => {
  return (
      <ul className="jobs-list">
          {info.map((job, index) => (
              <CardJob key={index} title={job.title} img={job.img} text={job.text} to={job.to} />
          ))}
      </ul>
  );
};

export default JobList;