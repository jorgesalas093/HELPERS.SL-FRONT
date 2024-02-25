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

const Jobs = () => {
  const carousel = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1
  };

  return (
    <div className="jobs-container">
      <div>
        <Slider {...carousel}>
          <div className="jobs-line">
            <button>
              <img src={Carer} />
              <p>Carer</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Carpenter} />
              <p>Carpenter</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Brickwork} />
              <p>Brickwork</p>
            </button>
          </div>
          <div className="jobs-line">
          <button>
            <img src={Chef} />
            <p>Chef</p>
          </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={ClosetOrganizer} />
              <p>Closet Organizer</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Electrician} />
              <p>Electrician</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Fitter} />
              <p>Fitter</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Gardener} />
              <p>Gardener</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={HomeCleaner} />
              <p>Home Cleaner</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Locksmith} />
              <p>Locksmith</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Messenger} />
              <p>Messenger</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Painter} />
              <p>Painter</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Plumber} />
              <p>Plumber</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Teacher} />
              <p>Teacher</p>
            </button>
          </div>
          <div className="jobs-line">
            <button>
              <img src={Welder} />
              <p>Welder</p>        
            </button>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Jobs;
