import Background from "../../assets/helpersLogo/I need a helpers.jpeg";
import "../../pages/Home/Home";
import "../HelpersBackground/HelpersBackground.css";
//import HelpersLogoIndex from './../HelppersLogo/HelpersLogoIndex';

const HelpersBackground = () => {
  return (
    <div>
      <img className="img-background" src={Background} />
    </div>
  );
};

export default HelpersBackground;
