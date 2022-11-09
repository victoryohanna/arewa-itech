import "./styles/about.css";

import AboutUs from "../components/about/about";
import OurGoals from "../components/about/ourgoals";
import OurTeam from "../components/about/team";


const About = () => {
  return (
    <div className="container-fluid">
      <div className="about">
        <AboutUs />
      </div>
      <div className="goals">
        <OurGoals />
      </div>
      <div className="team">
        <OurTeam/>
      </div>
    </div>
  );
};

export default About;
