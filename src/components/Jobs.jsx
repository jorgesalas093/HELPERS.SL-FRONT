import Carer from "../assets/gifWorks/carer-cuidador.gif";
import Carpenter from "../assets/gifWorks/carpenter.gif";
import Brickwork from "../assets/gifWorks/brickwork-reformas-en-general.gif";
import Chef from "../assets/gifWorks/chef.gif";
import ClosetOrganizer from "../assets/gifWorks/closet-organizer-organizador-armario.gif";
import Electrician from "../assets/gifWorks/electrician.gif";
import Fitter from "../assets/gifWorks/fitter-montador-muebles.gif";
import Gardener from "../assets/gifWorks/gardener-jardinero.gif";
import HomeCleaner from "../assets/gifWorks/home-cleaner-limpieza-hogar.gif";
import Locksmith from "../assets/gifWorks/locksmith-cerrajero.gif";
import Messenger from "../assets/gifWorks/messenger-hacer-compra.gif";
import Painter from "../assets/gifWorks/painter-pintor.gif";
import Plumber from "../assets/gifWorks/plumber.gif";
import Teacher from "../assets/gifWorks/teacher.gif";
import Welder from "../assets/gifWorks/welder-soldador.gif";
import "./Jobs.css";

const Jobs = () => {
  return (
    <div className="jobs-container">
      <div className="jobs-line">
        <img src={Carer} />
        <p>Carer</p>
      </div>
      <div className="jobs-line">
        <img src={Carpenter} />
        <p>Carpenter</p>
      </div>
      <div className="jobs-line">
        <img src={Brickwork} />
        <p>Brickwork</p>
      </div>
      <div className="jobs-line">
        <img src={Chef} />
        <p>Chef</p>
      </div>
      <div className="jobs-line">
        <img src={ClosetOrganizer} />
        <p>Closet Organizer</p>
      </div>
      <div className="jobs-line">
        <img src={Electrician} />
        <p>Electrician</p>
      </div>
      <div className="jobs-line">
        <img src={Fitter} />
        <p>Fitter</p>
      </div>
      <div className="jobs-line">
        <img src={Gardener} />
        <p>Gardener</p>
      </div>
      <div className="jobs-line">
        <img src={HomeCleaner} />
        <p>Home Cleaner</p>
      </div>
      <div className="jobs-line">
        <img src={Locksmith} />
        <p>Locksmith</p>
      </div>
      <div className="jobs-line">
        <img src={Messenger} />
        <p>Messenger</p>
      </div>
      <div className="jobs-line">
        <img src={Painter} />
        <p>Painter</p>
      </div>
      <div className="jobs-line">
        <img src={Plumber} />
        <p>Plumber</p>
      </div>
      <div className="jobs-line">
        <img src={Teacher} />
        <p>Teacher</p>
      </div>
      <div className="jobs-line">
        <img src={Welder} />
        <p>Welder</p>
      </div>
    </div>
  );
};

export default Jobs;
