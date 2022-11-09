import "./services.css";
import { FaGlobe, FaBattleNet } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";

const OurServices = () => {
  return (
    <div className="container-fluid main_section">
      <div className="title_section">
        <h2>Our Services</h2>
      </div>
      <div className="body_section">
        <div className="content_card">
          <div className="row">
            <div className="col body_card">
              <div className="body_content">
                <div className="brand">
                  <FaGlobe />
                </div>
                <h4>UI/UX</h4>
                <div className="body_text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque iusto laboriosam nihil culpa voluptatum repellendus
                    dignissimos incidunt, quos magnam quam error voluptas,
                    maiores possimus consequuntur omnis. Maxime amet nisi
                    veritatis.
                  </p>
                </div>
              </div>
            </div>
            <div className="col body_card">
              <div className="body_content">
                <div className="brand">
                  <GrTechnology />
                </div>
                <h4>Graphic Design</h4>
                <div className="body_text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque iusto laboriosam nihil culpa voluptatum repellendus
                    dignissimos incidunt, quos magnam quam error voluptas,
                    maiores possimus consequuntur omnis. Maxime amet nisi
                    veritatis. 
                  </p>
                </div>
              </div> 
            </div>
            <div className="col body_card">
              <div className="body_content">
                <div className="brand">
                  <FaBattleNet />
                </div>
                <h4>Project Management</h4>
                <div className="body_text">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Cumque iusto laboriosam nihil culpa voluptatum repellendus
                    dignissimos incidunt, quos magnam quam error voluptas,
                    maiores possimus consequuntur omnis. Maxime amet nisi
                    veritatis.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
