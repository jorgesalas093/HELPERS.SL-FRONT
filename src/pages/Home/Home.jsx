import "./Home.css";
import Jobs from "../../components/Job/Jobs";
import HelpersLogoTitle from "../../components/HelpersTitle/HelpersTitle";
import Body from "../../components/Body/Body";



const Home = () => {
  return (
    <div>
      <div>
        <HelpersLogoTitle />
      </div>
      <div>
        <div>
          <Jobs />
        </div>
      </div>
      <div>
        <Body/>        
      </div>
    </div>
  );
};
export default Home;