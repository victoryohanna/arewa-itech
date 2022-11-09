import {Link} from 'react-router-dom';

import './partner.css';

import google from '../../images/google.png';
import microsoft from'../../images/microsoft2.png';
import amazon from '../../images/Amazon.png';
import salesforce from '../../images/Salesforce.png'

const Partners = ()=>{ 
    return(
        <div className="containter-fluid">
            <h2 className="title">Our Partners</h2>
            <div className='image_container row'>
                <div className="col-md-3 image">
                    <Link to="/" className="links"><img src={google} className="img-fluid" alt="" /></Link>
                </div>
                <div className="col-md-3 image">
                    <Link to="/" className="links"><img src={microsoft} className="img-fluid" alt="" /></Link>
                </div>
                <div className="col-md-3 image">
                    <Link to="/" className="links"><img src={salesforce} className="img-fluid" alt="" /></Link>
                </div>
                <div className="col-md-3 image">
                    <Link to="/" className="links"><img src={amazon} className="img-fluid" alt="" /></Link>
                </div>
            </div>
        </div>
    )
}

export default Partners;