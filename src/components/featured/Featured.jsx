import { Link } from "react-router-dom";
import "./featured.css";
import {FaGripfire, FaBookReader} from 'react-icons/fa'
import {GiNuclearWaste} from 'react-icons/gi'

const Featured = () => {
  return (
    <div className="container  featured_container">
      <div><h2>Featured</h2></div>
      <div className="row">
        <div className="col-md-4">
          <div className="card featured_card">
            <div className="card-body featured_card-body">
              <div className="d-flex justify-content-center agro_logo">
                <FaGripfire/>
              </div>
              <Link to="/">
                <h4 className="d-flex justify-content-center">Agroconnect</h4>
                <p>
                  Agroconnect is a platform that aims to bridge the gap between
                  farmers and consumers, by eliminating exploitation and
                  hoarding that brings about food Scarcity and insecurity. We
                  intend to use this platform to promote and provide
                  availability and accessibility of food and cash crops,
                  prevention of food wastage and other difficulties faced by
                  farmers and consumers.
                </p>
                <span className="d-flex justify-content-center">...learn more</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card featured_card">
            <div className="card-body featured_card-body">
            <div className="d-flex justify-content-center di_logo">
                <GiNuclearWaste/>
              </div>
              <Link to="/">
                <h4 className="d-flex justify-content-center">Disposify</h4>
                <p>
                  A smart phone app that helps people segregate, compost,
                  properly dispose waste and easily access local waste
                  management event and services. The application aims to
                  eradicate improper disposal of waste and to enable a safer and
                  cleaner environment.
                </p>
                <span className="d-flex justify-content-center">...learn more</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card featured_card">
            <div className="card-body featured_card-body">
            <div className="d-flex justify-content-center iFuture_logo">
                <FaBookReader/>
              </div>
              <Link to="/">
                <h4 className="d-flex justify-content-center">iFuture</h4>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facilis quia laboriosam neque ipsa dolorem? Voluptatem, omnis.
                  Atque dolorem sit quaerat, deleniti, eaque sunt architecto
                  commodi ipsa assumenda facere praesentium{" "}
                </p>
                {/* <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Facilis quia laboriosam
                </p> */}
                <span className="d-flex justify-content-center">...learn more</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
