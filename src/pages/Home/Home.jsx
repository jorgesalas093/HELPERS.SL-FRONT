import "./Home.css";
import Jobs from "../../components/Job/Jobs";
import HelpersLogoTitle from "../../components/HelpersTitle/HelpersTitle";
import FeaturedWorks from "../../components/FeaturedWorks/FeaturedWorks";
const Home = () => {
  return (
    <div>
      <div>
        <HelpersLogoTitle />
      </div>
      <div className="border-jobs">
        <div>
          <Jobs />
        </div>
      </div>
      <div>
        <FeaturedWorks />
      </div>
    </div>
  );
};
export default Home;