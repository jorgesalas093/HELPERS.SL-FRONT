import "./Home.css";
import Jobs from "../../components/Job/Jobs";
import HelpersLogoTitle from "../../components/HelpersTitle/HelpersTitle";
import HelpersBackground from "../../components/HelpersBackground/HelpersBackground"
import FeaturedWorks from "../../components/FeaturedWorks";
const Home = () => {
  return (
    <div>
      <div>
        <HelpersLogoTitle />
      </div>
      <div className="border-jobs">
        <div>
          <Jobs />
          <div>
            <HelpersBackground />
          </div>
        </div>
      </div>
      <div>
        <FeaturedWorks />
      </div>
    </div>
  );
};
export default Home;