import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Quality Analyst</h4>
                <h5>InheritX Solutions Pvt. Ltd. · Ahmedabad</h5>
              </div>
              <h3>2022–26</h3>
            </div>
            <div className="career-copy">
              <p>
                Nov 2022 – Apr 24, 2026: led QA coverage for web and mobile
                products across planning, execution, defect analysis, release
                reporting, and client-facing QA sign-off.
              </p>
              <div className="career-tags">
                <span>Selenium &amp; Playwright</span>
                <span>Salesforce Lightning</span>
                <span>Risk-based QA</span>
              </div>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Quality Analyst</h4>
                <h5>Hyperlink Info-System · Ahmedabad</h5>
              </div>
              <h3>2021–22</h3>
            </div>
            <div className="career-copy">
              <p>
                Sep 2021 – Nov 2022: translated requirements, user stories, and
                acceptance criteria into clear test coverage for web and mobile
                release cycles.
              </p>
              <div className="career-tags">
                <span>API testing</span>
                <span>Regression cycles</span>
                <span>Cross-functional QA</span>
              </div>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Quality Analyst</h4>
                <h5>Arth I-Soft · Ahmedabad</h5>
              </div>
              <h3>2020–21</h3>
            </div>
            <div className="career-copy">
              <p>
                Aug 2020 – Sep 2021: built the fundamentals through test execution,
                defect documentation, validation support, and clear test summaries.
              </p>
              <div className="career-tags">
                <span>Test execution</span>
                <span>Defect tracking</span>
                <span>QA documentation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
