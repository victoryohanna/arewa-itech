const ContactForm = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <div className="mb-3">
          <label for="inputFullName" className="form-label">
            Full Name
          </label>
          <input type="text" className="form-control" id="inputFullName" />
        </div>
        <div className="mb-3">
          <label for="inputEmail" className="form-label">
            Email
          </label>
          <input type="password" className="form-control" id="inputEmail" />
        </div>
        <div className="mb-3">
          <label for="contactMessage" className="form-label">
            How can we help you
          </label>
          <textarea
            className="form-control"
            id="contactMessage"
            rows="3"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
