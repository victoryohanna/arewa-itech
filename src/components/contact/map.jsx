import "./contact.css";

const Geolocator = () => {
  return (
    <div className="map_container">
      <h3>Our Location</h3>
      <iframe
        className="map_canvas"
        src="https://maps.google.com/maps?q=Banex%20Plaza%20Wuse&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default Geolocator;
