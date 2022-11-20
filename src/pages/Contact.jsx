
import ContactForm from "../components/contact/contactForm";
import Geolocator from "../components/contact/map";

const Contact = ()=>{
    return(
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                   <ContactForm/> 
                </div>
                <div className="col-md-6">
                   <Geolocator/> 
                </div>
            </div>
            
            
        </div>
    )
}

export default Contact;