import "./main.css";

const Header = () => {
  return (
    <div className="container main_container">
      <div className="card main_card ">
        <div className="card-body ">
          <div className="row">
          <div className="col-md-6 section2">
              
            </div> 
            <div className="col-md-6">
              <h1 className="header-title">Arewa-iTech</h1>
              <p className="header-subtitle">
                {" "}
                A vibrant social digital technology initiative.
              </p>
              <div className=" header-context-section">
                <p >
                  We are committed to providing digital solutions,
                  innovations, resources and opportunities to address critical
                  social and environmental challenges.
                </p>
              </div>
              <div className="button_section d-flex justify-content-center">
                <button type="button">...more about us</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ); 
};

export default Header;
