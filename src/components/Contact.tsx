import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Connect</h4>
            <p>
              <a
                href="mailto:harin20397@gmail.com"
                data-cursor="disable"
              >
                harin20397@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+919099005139" data-cursor="disable">
                +91 9099005139
              </a>{" "}
              · Ahmedabad, Gujarat
            </p>
            <h4>Education</h4>
            <p>
              B.Tech (Mechanical), C.U. Shah College of Engineering &amp; Technology,
              Wadhwan — 2014–2018
            </p>
            <h4>Languages</h4>
            <p>English (intermediate), Hindi &amp; Gujarati (fluent)</p>
            <h4>Achievements</h4>
            <p>
              “Team of the Year” — InheritX Solutions, 2024, for team performance
              and excellence.
            </p>
            <p>
              Campus placement with HIFAB Aluminium Pvt. Ltd. at C.U. Shah
              University.
            </p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://www.linkedin.com/in/harin-patel-ab9856150"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              LinkedIn <MdArrowOutward />
            </a>
            <a
              href="mailto:harin20397@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+919099005139"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Ahmedabad%2C+Gujarat%2C+India"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Location <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Harin Patel</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
