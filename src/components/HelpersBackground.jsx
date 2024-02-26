import Background from "../assets/helpersLogo/I need a helpers.jpeg";
import "../pages/Home.css";
import "../components/HelpersBackground.css";

const HelpersBackground = () => {
  return (
    <div>
      <img className="img-background" src={Background} />
    </div>
  );
};

export default HelpersBackground;
