import "./about.css";
const AboutUs = () => {
  return (
    <div className="container about_container">
      <div className="about_header">
        <h1>Who Are We</h1>
      </div>
      <div className="row">
        <div className="col-md-5 section_image">
          <div className="about_image"></div>
        </div>
        <div className="col-md-6 section_text">
          <div className="">
            <p>
              We develop innovative solutions and mobilize available resources
              to facilitate and improve the growth and development of our
              society. We intend to use our well established frameworks, skills,
              innovations and resources to deliver sustainable and
              selfsufficient digital technologies oriented social values to the
              society
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
