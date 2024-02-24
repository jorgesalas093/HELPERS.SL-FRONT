import "./Home.css";
import Jobs from "../components/Jobs";
import HelpersLogoTitle from "../components/HelpersTitle";
import HelpersBackground from "../components/HelpersBackground"

const Home = () => {
  return (
    <div>
      <div>
        <HelpersLogoTitle/>
      </div>
      <div className="border-jobs">
        <div>
          <Jobs/>
          
          <div>
            <HelpersBackground/>
          </div>

        </div>

       

      </div>
    </div>
  );
};

export default Home;
