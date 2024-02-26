import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Carer from "../../assets/gifWorks/carer-cuidador.gif";
import Carpenter from "../../assets/gifWorks/carpenter.gif";
import Brickwork from "../../assets/gifWorks/brickwork-reformas-en-general.gif";
import Chef from "../../assets/gifWorks/chef.gif";
import ClosetOrganizer from "../../assets/gifWorks/closet-organizer-organizador-armario.gif";
import Electrician from "../../assets/gifWorks/electrician.gif";
import Fitter from "../../assets/gifWorks/fitter-montador-muebles.gif";
import Gardener from "../../assets/gifWorks/gardener-jardinero.gif";
import HomeCleaner from "../../assets/gifWorks/home-cleaner-limpieza-hogar.gif";
import Locksmith from "../../assets/gifWorks/locksmith-cerrajero.gif";
import Messenger from "../../assets/gifWorks/messenger-hacer-compra.gif";
import Painter from "../../assets/gifWorks/painter-pintor.gif";
import Plumber from "../../assets/gifWorks/plumber.gif";
import Teacher from "../../assets/gifWorks/teacher.gif";
import Welder from "../../assets/gifWorks/welder-soldador.gif";
import "./Jobs.css";

const info = [
  { src: Carer, text: "Carer", to: Carer },
  { src: Carpenter, text: "Carpenter", to: Carpenter },
  { src: Brickwork, text: "Brickwork", to: Brickwork },
  { src: Chef, text: "Chef", to: Chef },
  { src: ClosetOrganizer, text: "ClosetOrganizer", to: ClosetOrganizer },
  { src: Electrician, text: "Electrician", to: Electrician },
  { src: Fitter, text: "Fitter", to: Fitter },
  { src: Gardener, text: "Gardener", to: Gardener },
  { src: HomeCleaner, text: "HomeCleaner", to: HomeCleaner },
  { src: Locksmith, text: "Locksmith", to: Locksmith },
  { src: Messenger, text: "Messenger", to: Messenger },
  { src: Painter, text: "Painter", to: Painter },
  { src: Plumber, text: "Plumber", to: Plumber },
  { src: Teacher, text: "Teacher", to: Teacher },
  { src: Welder, text: "Welder", to: Welder }
]

const CarouselItem = ({ src, text, to }) => {
  return (
    <div className="jobs-line">
      <button>
        <img src={src} />
        <p>{text}</p>
      </button>
    </div>
  )
}

const Jobs = () => {
  const carousel = {
    dots: false, //ESTOS SON LOS PUNTOS DEL CARRUSEL, MEJOR DEJARLO EN FALSE DE CARA AL RESPONSIVE
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };

  return (
    <div className="jobs-container pl-4">
      <div className="custom-carousel">
        <Slider {...carousel}>
          {info.map((job, index) => (
            <CarouselItem key={index} src={job.src} text={job.text} to={job.to} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Jobs;
