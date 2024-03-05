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
import AssemblerGif from "../../assets/gifWorks/fitter-montador-muebles.gif";
import GardenerGif from "../../assets/gifWorks/gardener-jardinero.gif";
import HomeCleanerGif from "../../assets/gifWorks/home-cleaner-limpieza-hogar.gif";
import LocksmithGif from "../../assets/gifWorks/locksmith-cerrajero.gif";
import MessengerGif from "../../assets/gifWorks/messenger-hacer-compra.gif";
import PainterGif from "../../assets/gifWorks/painter-pintor.gif";
import PlumberGif from "../../assets/gifWorks/plumber.gif";
import TeacherGif from "../../assets/gifWorks/teacher.gif";
import WelderGif from "../../assets/gifWorks/welder-soldador.gif";

import Carer from "../../assets/pngWorks/carer-cuidador.png"
import Carpenter from "../../assets/pngWorks/carpenter.png"
import Brickwork from "../../assets/pngWorks/brickwork-reformas-en-general.png"
import Chef from "../../assets/pngWorks/chef.png"
import ClosetOrganizer from "../../assets/pngWorks/closet-organizer-organizador-armario.png"
import Electrician from "../../assets/pngWorks/electrician.png"
import Assembler from "../../assets/pngWorks/fitter-montador-muebles.png"
import Gardener from "../../assets/pngWorks/gardener-jardinero.png"
import HomeCleaner from "../../assets/pngWorks/home-cleaner-limpieza-hogar.png"
import Locksmith from "../../assets/pngWorks/locksmith-cerrajero.png"
import Messenger from "../../assets/pngWorks/messenger-hacer-compra.png"
import Painter from "../../assets/pngWorks/painter-pintor.png"
import Plumber from "../../assets/pngWorks/plumber.png"
import Teacher from "../../assets/pngWorks/teacher.png"
import Welder from "../../assets/pngWorks/welder-soldador.png"

import "./Jobs.css";
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const info = [
  { gifSrc: CarerGif, staticSrc: Carer, text: "Carer", to: "Carer" },
  { gifSrc: CarpenterGif, staticSrc: Carpenter, text: "Carpenter", to: "Carpenter" },
  { gifSrc: BrickworkGif, staticSrc: Brickwork, text: "Brickwork", to: "Brickwork" },
  { gifSrc: ChefGif, staticSrc: Chef, text: "Chef", to: "Chef" },
  { gifSrc: ClosetOrganizerGif, staticSrc: ClosetOrganizer, text: "Closet Organizer", to: "ClosetOrganizer" },
  { gifSrc: ElectricianGif, staticSrc: Electrician, text: "Electrician", to: "Electrician" },
  { gifSrc: AssemblerGif, staticSrc: Assembler, text: "Assembler", to: "Assembler" },
  { gifSrc: GardenerGif, staticSrc: Gardener, text: "Gardener", to: "Gardener" },
  { gifSrc: HomeCleanerGif, staticSrc: HomeCleaner, text: "Home Cleaner", to: "HomeCleaner" },
  { gifSrc: LocksmithGif, staticSrc: Locksmith, text: "Locksmith", to: "Locksmith" },
  { gifSrc: MessengerGif, staticSrc: Messenger, text: "Messenger", to: "Messenger" },
  { gifSrc: PainterGif, staticSrc: Painter, text: "Painter", to: "Painter" },
  { gifSrc: PlumberGif, staticSrc: Plumber, text: "Plumber", to: "Plumber" },
  { gifSrc: TeacherGif, staticSrc: Teacher, text: "Teacher", to: "Teacher" },
  { gifSrc: WelderGif, staticSrc: Welder, text: "Welder", to: "Welder" }
]

const CarouselItem = ({ gifSrc, staticSrc, text, to }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="jobs-line" onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}>

       <Link to={`/job/${to}`}>
        <motion.img animate={{ y: 5}} src={isHovered ? gifSrc : staticSrc} alt={text} />
        <p><b>{text}</b></p>
      </Link>

    </div>
  )
}

const Jobs = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const carouselSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 5,
    variableWidth: true
  };

  return (
    <div ref={ref} className="jobs-container pl-4">
      <motion.div
        animate={controls}
        initial="hidden"
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 50 }
        }}
        transition={{ duration: 0.5 }}
      >
        <Slider {...carouselSettings}>
          {info.map((job, index) => (
            <CarouselItem key={index} gifSrc={job.gifSrc} staticSrc={job.staticSrc} text={job.text} to={job.to} />
          ))}
        </Slider>
      </motion.div>
    </div>
  );
};

export default Jobs;