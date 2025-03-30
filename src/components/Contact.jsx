import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Contact = () => {
  return (
    <section className="container contact active" id="contact">
      <div className="contact-container">
        <div className="main-title">
          <h2>Contact <span>Me</span><span className="bg-text">Contact</span></h2>
        </div>
        <div className="contact-content-con">
          <div className="personal-contact">
            <h4>Contact me here</h4>
            <div className="contact-info">
              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon="fa-solid fa-map-marker-alt" />
                  <span>Location</span>
                </div>
                <p>: Ghaziabad, UttarPradesh</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon="fa-solid fa-envelope" />
                  <span>Email</span>
                </div>
                <p>: fauzdarujjwal@gmail.com</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon="fa-solid fa-user-graduate" />
                  <span>Mobile Number</span>
                </div>
                <p>: +919354439260</p>
              </div>
              <div className="contact-item">
                <div className="icon">
                  <FontAwesomeIcon icon="fa-solid fa-globe-africa" />
                  <span>Languages</span>
                </div>
                <p>: Hindi, English</p>
              </div>
            </div>
            <div className="contact-icons">
              <div className="contact-icon">
                <a href="https://www.linkedin.com/in/ujjwal-fauzdar-848519251/" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-linkedin-in" />
                </a>
                <a href="https://github.com/UjjwalFauzdar" target="_blank" rel="noreferrer">
                  <FontAwesomeIcon icon="fa-brands fa-github" />
                </a>
              </div>
            </div>
          </div>
          <div className="user-contact">
            <form action="mailto:fauzdarujjwal@gmail.com" method="post" encType="text/plain" className="contact-form">
              <div className="input-control i-c-2">
                <input type="text" name="name" placeholder="YOUR NAME" required />
                <input type="email" name="email" placeholder="YOUR EMAIL" required />
              </div>
              <div className="input-control">
                <input type="text" name="subject" placeholder="ENTER SUBJECT" required />
              </div>
              <div className="input-control">
                <textarea name="message" cols="15" rows="8" placeholder="Message Here..." required></textarea>
              </div>
              <div className="submit-btn">
                <button type="submit" className="main-btn">
                  <span className="btn-text">Submit</span>
                  <span className="btn-icon">
                    <FontAwesomeIcon icon="fa-solid fa-paper-plane" />
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;