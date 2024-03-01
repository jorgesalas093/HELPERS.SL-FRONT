import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Link } from "react-router-dom";

import CarerGif from "../../assets/gifWorks/carer-cuidador.gif";
import CarpenterGif from "../../assets/gifWorks/carpenter.gif";
import BrickworkGif from "../../assets/gifWorks/brickwork-reformas-en-general.gif";
import ChefGif from "../../assets/gifWorks/chef.gif";
import ClosetOrganizerGif from "../../assets/gifWorks/closet-organizer-organizador-armario.gif";
import ElectricianGif from "../../assets/gifWorks/electrician.gif";
import FitterGif from "../../assets/gifWorks/fitter-montador-muebles.gif";
import GardenerGif from "../../assets/gifWorks/gardener-jardinero.gif";
import HomeCleanerGif from "../../assets/gifWorks/home-cleaner-limpieza-hogar.gif";
import LocksmithGif from "../../assets/gifWorks/locksmith-cerrajero.gif";
import MessengerGif from "../../assets/gifWorks/messenger-hacer-compra.gif";
import PainterGif from "../../assets/gifWorks/painter-pintor.gif";
import PlumberGif from "../../assets/gifWorks/plumber.gif";
import TeacherGif from "../../assets/gifWorks/teacher.gif";
import WelderGif from "../../assets/gifWorks/welder-soldador.gif";

import Carer from "../../assets/pngWorks/carer-cuidador.png"

import "./Jobs.css";
import { useState } from "react";



const info = [
  { gifSrc: CarerGif, text: "Carer", to: "Carer" },
  { staticSrc: Carer, text: "Carer", to: "Carer" },
  { src: CarpenterGif, text: "Carpenter", to: "Carpenter" },
  { src: BrickworkGif, text: "Brickwork", to: "Brickwork" },
  { src: ChefGif, text: "Chef", to: "Chef" },
  { src: ClosetOrganizerGif, text: "ClosetOrganizer", to: "ClosetOrganizer" },
  { src: ElectricianGif, text: "Electrician", to: "Electrician" },
  { src: FitterGif, text: "Fitter", to: "Fitter" },
  { src: GardenerGif, text: "Gardener", to: "Gardener" },
  { src: HomeCleanerGif, text: "HomeCleaner", to: "HomeCleaner" },
  { src: LocksmithGif, text: "Locksmith", to: "Locksmith" },
  { src: MessengerGif, text: "Messenger", to: "Messenger" },
  { src: PainterGif, text: "Painter", to: "Painter" },
  { src: PlumberGif, text: "Plumber", to: "Plumber" },
  { src: TeacherGif, text: "Teacher", to: "Teacher" },
  { src: WelderGif, text: "Welder", to: "Welder" }
]

const CarouselItem = ({ gifSrc, staticSrc, text, to }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="jobs-line" onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>

       <Link to={`/job/${to}`}>
        <img src={isHovered ? gifSrc : staticSrc} alt={text} />
        <p>{text}</p>
      </Link>
    </div>
  )
}

const Jobs = () => {
  const carousel = {
    dots: false, //ESTOS SON LOS PUNTOS DEL CARRUSEL, MEJOR DEJARLO EN FALSE DE CARA AL RESPONSIVE
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    variableWidth: true
  };

  return (
    <div className="jobs-container pl-4">
      <div className="custom-carousel">
        <Slider {...carousel}>
          {info.map((job, index) => (
            <CarouselItem key={index} gifSrc={job.src} staticSrc={job.staticSrc} text={job.text} to={job.to} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Jobs;
