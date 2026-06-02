import {
  FaEnvelope,
  FaLinkedinIn,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import "./styles/SocialIcons.css";
import { TbNotes } from "react-icons/tb";
import { useEffect } from "react";
import HoverLinks from "./HoverLinks";
import { getAssetUrl } from "../utils/resolveAsset";

const SocialIcons = () => {
  useEffect(() => {
    const social = document.getElementById("social") as HTMLElement;
    if (!social) return;

    const cleanups: (() => void)[] = [];

    social.querySelectorAll("span").forEach((item) => {
      const elem = item as HTMLElement;
      const link = elem.querySelector("a") as HTMLElement;
      if (!link) return;

      let rect = elem.getBoundingClientRect();
      const defaultWidth = rect.width || 50;
      const defaultHeight = rect.height || 50;

      let mouseX = defaultWidth / 2;
      let mouseY = defaultHeight / 2;
      let currentX = defaultWidth / 2;
      let currentY = defaultHeight / 2;
      let animationFrameId: number;

      // Set initial variables to center the icon inside the span
      link.style.setProperty("--siLeft", `${currentX}px`);
      link.style.setProperty("--siTop", `${currentY}px`);

      const updatePosition = () => {
        currentX += (mouseX - currentX) * 0.1;
        currentY += (mouseY - currentY) * 0.1;

        link.style.setProperty("--siLeft", `${currentX}px`);
        link.style.setProperty("--siTop", `${currentY}px`);

        animationFrameId = requestAnimationFrame(updatePosition);
      };

      const onMouseEnter = () => {
        rect = elem.getBoundingClientRect();
      };

      const onMouseMove = (e: MouseEvent) => {
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        if (x < 40 && x > 10 && y < 40 && y > 5) {
          mouseX = x;
          mouseY = y;
        } else {
          mouseX = rect.width / 2 || 25;
          mouseY = rect.height / 2 || 25;
        }
      };

      const onMouseLeave = () => {
        mouseX = rect.width / 2 || 25;
        mouseY = rect.height / 2 || 25;
      };

      elem.addEventListener("mouseenter", onMouseEnter);
      elem.addEventListener("mousemove", onMouseMove);
      elem.addEventListener("mouseleave", onMouseLeave);

      updatePosition();

      cleanups.push(() => {
        elem.removeEventListener("mouseenter", onMouseEnter);
        elem.removeEventListener("mousemove", onMouseMove);
        elem.removeEventListener("mouseleave", onMouseLeave);
        cancelAnimationFrame(animationFrameId);
      });
    });

    return () => {
      cleanups.forEach((cleanup) => cleanup());
    };
  }, []);

  return (
    <div className="icons-section">
      <div className="social-icons" data-cursor="icons" id="social">
        <span>
          <a
            href="https://www.linkedin.com/in/harin-patel-ab9856150"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </span>
        <span>
          <a href="mailto:harin20397@gmail.com">
            <FaEnvelope />
          </a>
        </span>
        <span>
          <a href="tel:+919099005139">
            <FaPhone />
          </a>
        </span>
        <span>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Ahmedabad%2C+Gujarat%2C+India"
            target="_blank"
            rel="noreferrer"
          >
            <FaLocationDot />
          </a>
        </span>
      </div>
      <a
        className="resume-button"
        href={getAssetUrl("/Harin_Patel_Senior_QA.pdf")}
        target="_blank"
        rel="noreferrer"
      >
        <HoverLinks text="RESUME" />
        <span>
          <TbNotes />
        </span>
      </a>
    </div>
  );
};

export default SocialIcons;
