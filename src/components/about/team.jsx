
import './about.css';

import image1 from '../../images/victor.jpg'

const OurTeam = () => {
  return (
    <div className="container team_conatiner">
      <div className="team_header">
        <h1>Our Team</h1>
      </div>
      <div className="team_text">
        <p>
          Our team is comprised of highly qualified, skilled, and exceptional
          people who are passionate about supporting people to achieve their
          individual goals and live valuedriven, independent and full lives. We
          believe in a world where every person has the resources, education and
          access to live a successful life and our team is committed to striving
          for and driving this change!
        </p>
      </div>
      <div className="team_gallary">
        <div className='row'>
            <div className="col-md-6 photo"> 
              <img src="" className='img-fluid' alt="" />    
              <div className='image_caption'>
                  <h5>Olaniyi Samuel Oluwatobi</h5>
                  <span>Media & Communication/PR</span> 
                </div>
            </div> 
            <div className="col-md-6 photo">
            <img src={image1} className='img-fluid' alt="" />
                <div className='image_caption'>
                  <h5>Victor Yohanna</h5>
                  <span>Lead Software Developer</span> 
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default OurTeam;
