import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import WorkProjectGallery from "./WorkProjectGallery";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { getAssetUrl } from "../utils/resolveAsset";

type Project = {
  title: string;
  company: string;
  domain: string;
  tools: string;
  responsibilities: string[];
  /** Main / fallback image when `images` is not set */
  image: string;
  /** Optional gallery (e.g. TotalMed+ product screenshots) */
  images?: string[];
  link?: string;
};

const totalmedScreens = [
  "/images/totalmed/01.png",
  "/images/totalmed/02.png",
  "/images/totalmed/03.png",
  "/images/totalmed/04.png",
  "/images/totalmed/05.png",
  "/images/totalmed/06.png",
  "/images/totalmed/07.png",
];

const scrubSocietyScreens = [
  "/images/scrub-society/01.png",
  "/images/scrub-society/02.png",
  "/images/scrub-society/03.png",
  "/images/scrub-society/04.png",
  "/images/scrub-society/05.png",
  "/images/scrub-society/06.png",
  "/images/scrub-society/07.png",
  "/images/scrub-society/08.png",
  "/images/scrub-society/09.png",
  "/images/scrub-society/10.png",
  "/images/scrub-society/11.png",
  "/images/scrub-society/12.png",
];

// Screens from https://store.mycarecrew.co/ (home, Our Story, all products, search)
const myCareCrewScreens = [
  "/images/mycarecrew/01.png",
  "/images/mycarecrew/03.png",
  "/images/mycarecrew/04.png",
  "/images/mycarecrew/05.png",
];

/** Aligned with CV (Projects section) */
const projects: Project[] = [
  {
    title: "Staffbot (TotalMed+)",
    company: "Inheritx Solutions Pvt. Ltd.",
    domain: "Healthcare job marketplace",
    tools:
      "Selenium WebDriver, Playwright, Postman, Apache JMeter, BrowserStack, Salesforce Lightning",
    responsibilities: [
      "Test case design and execution for web and mobile.",
      "Critical regression through UI automation; API and backend checks.",
      "Salesforce Lightning: ATS workflows and related UI validation.",
      "Load and performance test runs for key flows.",
    ],
    image: totalmedScreens[0],
    images: totalmedScreens,
    link: "https://app.totalmedplus.com/",
  },
  {
    title: "Scrub Society",
    company: "Inheritx Solutions Pvt. Ltd.",
    domain: "Travel & per diem jobs, community, and professional profiles (healthcare)",
    tools:
      "Selenium WebDriver, Playwright, Postman, Apache JMeter, BrowserStack, Salesforce (ATS integrations where applicable)",
    responsibilities: [
      "Test planning and runs for job search, listings, state-based browse, and advanced filters.",
      "Functional and regression on job details, pay and stipend logic, and apply experience.",
      "Profile and credentials (licenses, work history, resume/AI) plus navigation, resources, and employer areas; API, automated UI, compatibility, and performance as needed.",
    ],
    image: scrubSocietyScreens[0],
    images: scrubSocietyScreens,
    link: "https://scrubsociety.com/",
  },
  {
    title: "My CareCrew",
    company: "Hyperlink Info-System",
    domain:
      "E-commerce (Shopify) — products for patients & caregivers, collections, and search",
    tools: "Selenium WebDriver, Selenium IDE, Postman, BrowserStack",
    responsibilities: [
      "Test cases; functional, regression, smoke, sanity, and exploratory coverage.",
      "API validation, cross-browser, and responsive testing.",
    ],
    image: myCareCrewScreens[0],
    images: myCareCrewScreens,
    link: "https://store.mycarecrew.co/",
  },
  {
    title: "Bond (FinTech & Credit)",
    company: "Hyperlink Info-System",
    domain: "FinTech SaaS – digital banking, credit builder programs, and card issuing APIs",
    tools: "Postman, Playwright API Testing, Selenium WebDriver, Apache JMeter, AWS CloudWatch",
    responsibilities: [
      "Tested core digital banking APIs (account creation, card issuing, KYC flows) using Postman and Playwright.",
      "Validated credit reporting data generation and card authorization transactions.",
      "Performed load and performance testing on money transfer endpoints using Apache JMeter.",
      "Collaborated with development to verify payment gateway integrations and PCI-DSS compliance.",
    ],
    image: "/images/bond.png",
  },
  {
    title: "Broki (Real Estate CRM)",
    company: "Inheritx Solutions Pvt. Ltd.",
    domain: "PropTech SaaS – real estate CRM, MLS property feed sync, and e-signing workflows",
    tools: "Selenium WebDriver, TestNG, RestAssured, Jenkins, AWS S3, BrowserStack",
    responsibilities: [
      "Designed automated regression suites for broker workflows, agent lead tracking, and dashboard reporting.",
      "Tested MLS listing sync cron-jobs to ensure real-time accuracy of property data feeds.",
      "Validated e-sign compliance, document rendering, and secure audit trail logging stored on AWS S3.",
      "Conducted cross-browser compatibility testing via BrowserStack.",
    ],
    image: "/images/broki.png",
  },
  {
    title: "Orrdr (Food Delivery & Logistics)",
    company: "Arth I-Soft",
    domain: "Logistics & FoodTech – consumer ordering app, restaurant dashboard, and driver dispatch engine",
    tools: "Appium (iOS & Android), Playwright, Postman, Google Maps API, BrowserStack",
    responsibilities: [
      "Automated mobile app regressions using Appium across Android and iOS platforms.",
      "Tested real-time order tracking, merchant notifications, and webhook-triggered dispatch routing.",
      "Simulated geolocation events to validate ETA calculation logic and driver mapping.",
      "Conducted end-to-end payment gateway validation (Stripe, wallets) and checkout flow optimization.",
    ],
    image: "/images/orrdr.png",
  },
  {
    title: "MaxLife Insurance (Salesforce CRM)",
    company: "Inheritx Solutions Pvt. Ltd.",
    domain: "InsurTech / Salesforce CRM – agent enablement, policy booking, claim workflows, and customer onboarding",
    tools: "Salesforce Lightning, Selenium WebDriver, Playwright, Postman, Jira",
    responsibilities: [
      "Validated custom Salesforce Lightning Web Components (LWC), page layouts, and multi-step policy creation wizards.",
      "Developed automated regressions using Selenium for end-to-end policy onboarding workflows.",
      "Validated API integrations between Salesforce Financial Services Cloud and core underwriting backend systems.",
      "Tested user profiles, security matrices, sharing rules, and approval hierarchies for claims agents.",
    ],
    image: "/images/Maxlife.png",
  },
  {
    title: "Sapphire Retail (Salesforce Commerce)",
    company: "Hyperlink Info-System",
    domain: "E-commerce / Retail – B2C store, order management (OMS), and loyalty programs on Salesforce Commerce Cloud",
    tools: "Salesforce Commerce Cloud, Playwright, Postman, BrowserStack, Apache JMeter",
    responsibilities: [
      "Automated storefront checkout, payment processing, and catalog search flows using Playwright.",
      "Tested Salesforce Order Management System (OMS) workflows including order capture, fulfillment, and refund logic.",
      "Conducted load testing on catalog search and product detail APIs using Apache JMeter.",
      "Validated data mapping and integration syncs between Salesforce CRM and external ERP systems.",
    ],
    image: "/images/sapphire.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                /* Total width n× viewport: each flex child is 100/n % of the track
                   = one full container width, so one project shows at a time. */
                width: `${projects.length * 100}%`,
                transform: `translateX(calc(-100% * ${currentIndex} / ${projects.length}))`,
              }}
            >
              {projects.map((project, index) => (
                <div
                  className="carousel-slide"
                  key={index}
                  style={{ flex: `0 0 calc(100% / ${projects.length})` }}
                >
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-company">{project.company}</p>
                        {project.link ? (
                          <p className="carousel-project-link">
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              data-cursor="disable"
                            >
                              View live site
                            </a>
                          </p>
                        ) : null}
                        <p className="carousel-domain">
                          <span className="carousel-meta-label">Domain</span>{" "}
                          {project.domain}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools &amp; technologies</span>
                          <p className="carousel-tools-line">{project.tools}</p>
                        </div>
                        <div className="carousel-rnr">
                          <span className="tools-label">Roles &amp; responsibilities</span>
                          <ul>
                            {project.responsibilities.map((line) => (
                              <li key={line}>{line}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      {project.images && project.images.length > 0 ? (
                        <WorkProjectGallery
                          images={project.images.map(getAssetUrl)}
                          projectTitle={project.title}
                        />
                      ) : (
                        <WorkImage
                          image={getAssetUrl(project.image)}
                          alt={project.title}
                          link={project.link}
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
