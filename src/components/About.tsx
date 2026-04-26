import { useEffect, useRef, useState } from "react";
import "./styles/About.css";

const About = () => {
  const [roleVisible, setRoleVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    // Tuned for “in focus”: shrink the root viewport (simulates the section being centered),
    // and require a solid share of the section to be visible—no sliver at the fold.
    const ob = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) {
            setRoleVisible(false);
            continue;
          }
          setRoleVisible(e.intersectionRatio >= 0.38);
        }
      },
      {
        root: null,
        rootMargin: "-12% 0px -12% 0px",
        threshold: [0, 0.12, 0.2, 0.3, 0.38, 0.45, 0.55, 0.65, 0.8, 1],
      }
    );
    ob.observe(el);
    return () => ob.disconnect();
  }, []);

  return (
    <div className="about-section" id="about" ref={sectionRef}>
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p
          className={
            "about-role" + (roleVisible ? " about-role--visible" : "")
          }
          aria-hidden={!roleVisible}
        >
          Senior Quality Analyst · Ahmedabad, Gujarat · 5+ years
        </p>
        <p className="para">
          I am a Senior Quality Analyst focused on building confidence in web and
          mobile releases through thoughtful test planning, sharp requirement
          analysis, and clear communication across product, development, and client
          teams.
        </p>
        <p className="para about-para-tight">
          My work blends manual testing, automation, API checks, defect analysis,
          and release support, with the detailed tools and project coverage outlined
          in the sections below.
        </p>
      </div>
    </div>
  );
};

export default About;
