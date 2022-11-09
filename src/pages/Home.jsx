import "./styles/home.css";

import Header from "../components/landingPage/Main";
import Featured from "../components/featured/Featured";
import OurServices from "../components/ourServices/services";
import Partners from "../components/partners/partner";

const Home = () => {
  return (
    <div className="container-fluid">
      <div>
        <Header />
      </div>
      <div>
        <Featured />
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <Partners />
      </div>
    </div>
  );
};

export default Home;
