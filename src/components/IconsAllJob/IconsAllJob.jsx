import "./IconsAllJob.css"

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

const listIcon = [
  { icon: Carer, text: "Carer" },
  { icon: Carpenter, text: "Carpenter" },
  { icon: Brickwork, text: "Brickwork" },
  { icon: Chef, text: "Chef" },
  { icon: ClosetOrganizer, text: "Closet Organizer" },
  { icon: Electrician, text: "Electrician" },
  { icon: Assembler, text: "Assembler" },
  { icon: Gardener, text: "Gardener" },
  { icon: HomeCleaner, text: "Home Cleaner" },
  { icon: Locksmith, text: "Locksmith" },
  { icon: Messenger, text: "Messenger" },
  { icon: Painter, text: "Painter" },
  { icon: Plumber, text: "Plumber" },
  { icon: Teacher, text: "Teacher" },
  { icon: Welder, text: "Welder" },
];

const IconItem = ({ icon, text, searchQuery }) => {
  const handleIconClick = () => {
    // Realizar la búsqueda relacionada con el trabajo específico
    console.log(`Realizar búsqueda para "${searchQuery}"`);
    // llamar a una función que realice la búsqueda.
  };

  return (
    <div>
      <div>
        <button className="icon-button" onClick={handleIconClick}>
          <div className="icons-line">
            <img src={icon} alt={text} />
            <p>{text}</p>
          </div>
        </button>
      </div>
      <div>
      
      </div>
    </div>
  );
};

const Icon = () => {
  const iconRows = [];
  let currentRow = [];

  listIcon.forEach((item, index) => {
    currentRow.push(
      <IconItem
        key={index}
        icon={item.icon}
        text={item.text}
        searchQuery={item.searchQuery}
      />
    );

        if (currentRow.length === 5 || index === listIcon.length - 1) {
      iconRows.push(
        <div key={index} className="icons-row">
          {currentRow}
        </div>
      );
      currentRow = [];
    }
  });

  return (
    <div>
      <h2 className="icons-title">Select a type job</h2>
      <div className="icons-container">{iconRows}</div>
    </div>
  );
};

export default Icon;