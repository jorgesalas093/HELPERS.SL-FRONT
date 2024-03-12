import { useState } from 'react';

import "./IconsAllJob.css";

import Carer from "../../assets/pngWorks/carer-cuidador.png";
import Carpenter from "../../assets/pngWorks/carpenter.png";
import Brickwork from "../../assets/pngWorks/brickwork-reformas-en-general.png";
import Chef from "../../assets/pngWorks/chef.png";
import ClosetOrganizer from "../../assets/pngWorks/closet-organizer-organizador-armario.png";
import Electrician from "../../assets/pngWorks/electrician.png";
import Assembler from "../../assets/pngWorks/fitter-montador-muebles.png";
import Gardener from "../../assets/pngWorks/gardener-jardinero.png";
import HomeCleaner from "../../assets/pngWorks/home-cleaner-limpieza-hogar.png";
import Locksmith from "../../assets/pngWorks/locksmith-cerrajero.png";
import Messenger from "../../assets/pngWorks/messenger-hacer-compra.png";
import Painter from "../../assets/pngWorks/painter-pintor.png";
import Plumber from "../../assets/pngWorks/plumber.png";
import Teacher from "../../assets/pngWorks/teacher.png";
import Welder from "../../assets/pngWorks/welder-soldador.png";

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

const listIcon = [
  { icon: Carer, gif: CarerGif, text: "Carer" },
  { icon: Carpenter, gif: CarpenterGif, text: "Carpenter" },
  { icon: Brickwork, gif: BrickworkGif, text: "Brickwork" },
  { icon: Chef, gif: ChefGif, text: "Chef" },
  { icon: ClosetOrganizer, gif: ClosetOrganizerGif, text: "Closet Organizer" },
  { icon: Electrician, gif: ElectricianGif, text: "Electrician" },
  { icon: Assembler, gif: AssemblerGif, text: "Assembler" },
  { icon: Gardener, gif: GardenerGif, text: "Gardener" },
  { icon: HomeCleaner, gif: HomeCleanerGif, text: "Home Cleaner" },
  { icon: Locksmith, gif: LocksmithGif, text: "Locksmith" },
  { icon: Messenger, gif: MessengerGif, text: "Messenger" },
  { icon: Painter, gif: PainterGif, text: "Painter" },
  { icon: Plumber, gif: PlumberGif, text: "Plumber" },
  { icon: Teacher, gif: TeacherGif, text: "Teacher" },
  { icon: Welder, gif: WelderGif, text: "Welder" },
];

const IconItem = ({ icon, gif, text, action, selected, onSelect }) => {
  const [isGifDisplayed, setIsGifDisplayed] = useState(false);

  const handleClick = () => {
    if (selected === text && isGifDisplayed) {
      setIsGifDisplayed(false);
      onSelect(null);
    } else {
      setIsGifDisplayed(true);
      onSelect(text);
      action(text);
    }
  };

  return (
    <div>
      <div>
        <button className={`icon-button ${selected === text ? 'selected' : ''}`} onClick={handleClick}>
          <div className="icons-line">
            <img src={selected === text ? (isGifDisplayed ? gif : icon) : icon} alt={text} className={isGifDisplayed ? 'gif' : ''} />
            <p>{text}</p>
          </div>
        </button>
      </div>
      <div></div>
    </div>
  );
};

const Icon = ({ action }) => {
  const [selectedIcon, setSelectedIcon] = useState(null);

  const handleIconSelect = (text) => {
    setSelectedIcon(text);
  };

  return (
    <div className="container">
      <h2 className="icons-title">Select a type job</h2>
      <div className="icons-container">
        {listIcon.map((item, index) => (
          <IconItem
            key={index}
            icon={item.icon}
            gif={item.gif}
            text={item.text}
            action={action}
            selected={selectedIcon}
            onSelect={handleIconSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default Icon;