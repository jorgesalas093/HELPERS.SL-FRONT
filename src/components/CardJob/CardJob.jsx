// con esta logica, sacar las card de la home, dale duro muchacho, confio en ti JozeLui

//ya casi lo tienes JozeLui, descargate las fotos de los curros que faltan y ponle una descripción, recuerda pasar el texto en español en el block de notas

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


import { Link } from "react-router-dom";

import "../CardJob/CardJob.css"

const info = [
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