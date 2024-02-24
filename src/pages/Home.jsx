import "./Home.css";
import Jobs from "../components/Jobs";
import HelpersLogoTitle from "../components/HelpersTitle";


const Home = () => {
  return (
    <div>
      <div>
      
        <h1><HelpersLogoTitle/></h1>
      </div>
      <div>
     
        <Jobs/>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
