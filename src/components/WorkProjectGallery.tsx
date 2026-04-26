import { useState, useCallback } from "react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import "./styles/WorkProjectGallery.css";

type Props = {
  images: string[];
  projectTitle: string;
};

const WorkProjectGallery = ({ images, projectTitle }: Props) => {
  const [ix, setIx] = useState(0);
  const n = images.length;

  const go = useCallback(
    (dir: -1 | 1) => {
      setIx((i) => (i + dir + n) % n);
    },
    [n]
  );

  if (!n) return null;

  return (
    <div
      className="work-project-gallery"
      role="region"
      aria-roledescription="carousel"
      aria-label={`${projectTitle} screenshots`}
    >
      <div className="work-project-gallery__frame">
        <img
          key={ix}
          src={images[ix]}
          alt={`${projectTitle} — app screenshot ${ix + 1} of ${n}`}
        />
      </div>
      {n > 1 && (
        <div className="work-project-gallery__controls">
          <button
            type="button"
            className="work-project-gallery__btn"
            onClick={() => go(-1)}
            aria-label="Previous screenshot"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <span className="work-project-gallery__count">
            {ix + 1} / {n}
          </span>
          <button
            type="button"
            className="work-project-gallery__btn"
            onClick={() => go(1)}
            aria-label="Next screenshot"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>
        </div>
      )}
      {n > 1 && (
        <div
          className="work-project-gallery__dots"
          role="tablist"
          aria-label="Screenshot"
        >
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              className={
                "work-project-gallery__dot" +
                (i === ix ? " work-project-gallery__dot--active" : "")
              }
              onClick={() => setIx(i)}
              aria-label={`Show screenshot ${i + 1}`}
              aria-selected={i === ix}
              data-cursor="disable"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default WorkProjectGallery;
