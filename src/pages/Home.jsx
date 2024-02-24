import "./Home.css";
import Jobs from "../components/Jobs";


const Home = () => {
  return (
    <div>
      <div>
        <h1 className="helpersTitle text-3xl font-bold p-1000">Helpers</h1>
      </div>
      <div>
     
        <Jobs/>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
