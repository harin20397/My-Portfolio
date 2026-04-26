import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello, I'm</h2>
            <h1>
              HARIN <span>PATEL</span>
            </h1>
            <p className="landing-role">Senior Quality Analyst</p>
          </div>
          <div className="landing-info">
            <h3>Quality &</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Manual</div>
              <div className="landing-h2-2">Automation</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Automation</div>
              <div className="landing-h2-info-1">Manual</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
