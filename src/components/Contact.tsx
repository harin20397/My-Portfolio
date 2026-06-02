import { MdArrowOutward, MdCopyright } from "react-icons/md";
import { FiMail, FiPhone, FiMapPin, FiAward, FiBookOpen, FiGlobe, FiLinkedin } from "react-icons/fi";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h2 className="contact-title">
          GET IN <span className="contact-title-accent">TOUCH</span>
        </h2>

        <div className="contact-dashboard-layout">
          {/* Left Side: CTA */}
          <div className="contact-cta-panel">
            <h3 className="cta-heading">Let's build something exceptional together</h3>
            <p className="cta-desc">
              Whether you need to scale test coverage, build robust automated pipelines, or streamline release cycles—I'm open to discussing new QA roles, consulting opportunities, or technical challenges.
            </p>
            
            <a 
              href="mailto:harin20397@gmail.com" 
              className="cta-button"
              data-cursor="disable"
            >
              <span>Email Me</span>
              <MdArrowOutward className="cta-button-icon" />
            </a>
          </div>

          {/* Right Side: Unified Dashboard Panel (Common Card Wrapper) */}
          <div className="contact-dashboard-panel glass-panel">
            
            {/* Column 1: Education */}
            <div className="dashboard-column col-top-left">
              <div className="dashboard-column-header">
                <FiBookOpen className="column-icon" />
                <h4>Education</h4>
              </div>
              <div className="dashboard-column-content">
                <div className="education-timeline-item">
                  <div className="timeline-meta">
                    <span className="timeline-year-pill">2014 – 2018</span>
                  </div>
                  <h5 className="timeline-degree">B.Tech in Mechanical Engineering</h5>
                  <p className="timeline-college">C.U. Shah College of Eng. & Tech.</p>
                  <ul className="timeline-bullets">
                    <li>Core: Thermodynamics, Fluid Mechanics & Manufacturing Processes</li>
                    <li>Project: Design & Analysis of Mechanical Components using CAD</li>
                    <li>Skills: Engineering Drawing, AutoCAD & Problem-Solving Methods</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Column 2: Recognition */}
            <div className="dashboard-column col-top-right">
              <div className="dashboard-column-header">
                <FiAward className="column-icon" />
                <h4>Recognition</h4>
              </div>
              <div className="dashboard-column-content recognition-list">
                <div className="achievement-timeline-item">
                  <div className="timeline-meta">
                    <span className="timeline-year-pill">2024</span>
                  </div>
                  <h5 className="timeline-degree">“Team of the Year” Award</h5>
                  <p className="timeline-college">InheritX Solutions</p>
                </div>
                <div className="achievement-timeline-item">
                  <div className="timeline-meta">
                    <span className="timeline-year-pill">2018</span>
                  </div>
                  <h5 className="timeline-degree">Selected in Campus Placement</h5>
                  <p className="timeline-college">HIFAB Aluminium Pvt. Ltd. (C.U. Shah University)</p>
                </div>
              </div>
            </div>

            {/* Column 3: Languages */}
            <div className="dashboard-column col-bottom-left">
              <div className="dashboard-column-header">
                <FiGlobe className="column-icon" />
                <h4>Languages</h4>
              </div>
              <div className="dashboard-column-content languages-container">
                <div className="language-segment-list">
                  {[
                    { name: "English", level: "Professional", activeSegments: 4 },
                    { name: "Hindi", level: "Native", activeSegments: 5 },
                    { name: "Gujarati", level: "Native", activeSegments: 5 },
                  ].map((lang) => (
                    <div className="lang-segment-item" key={lang.name}>
                      <div className="lang-info">
                        <span className="lang-name">{lang.name}</span>
                        <span className="lang-level-text">{lang.level}</span>
                      </div>
                      <div className="lang-segmented-bar">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <div
                            key={i}
                            className={`bar-segment ${i < lang.activeSegments ? "active" : ""}`}
                            style={{ "--segment-index": i } as React.CSSProperties}
                          />
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Column 4: Connect */}
            <div className="dashboard-column col-bottom-right">
              <div className="dashboard-column-header">
                <FiMail className="column-icon" />
                <h4>Connect</h4>
              </div>
              <div className="dashboard-column-content connect-links-list">
                <a
                  href="https://www.linkedin.com/in/harin-patel-ab9856150"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="dashboard-connect-link"
                >
                  <FiLinkedin className="connect-icon" />
                  <span>LinkedIn</span>
                  <MdArrowOutward className="connect-arrow" />
                </a>
                <a
                  href="mailto:harin20397@gmail.com"
                  data-cursor="disable"
                  className="dashboard-connect-link"
                >
                  <FiMail className="connect-icon" />
                  <span>Email</span>
                  <MdArrowOutward className="connect-arrow" />
                </a>
                <a
                  href="tel:+919099005139"
                  data-cursor="disable"
                  className="dashboard-connect-link"
                >
                  <FiPhone className="connect-icon" />
                  <span>Phone</span>
                  <MdArrowOutward className="connect-arrow" />
                </a>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Ahmedabad%2C+Gujarat%2C+India"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="dashboard-connect-link"
                >
                  <FiMapPin className="connect-icon" />
                  <span>Ahmedabad, India</span>
                  <MdArrowOutward className="connect-arrow" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Footer Area */}
        <div className="contact-footer">
          <div className="footer-divider"></div>
          <div className="footer-content">
            <div className="footer-left">
              <h2>
                Designed &amp; Developed by <span>Harin Patel</span>
              </h2>
            </div>
            <div className="footer-right">
              <h5>
                <MdCopyright className="copyright-icon" /> 2026
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
