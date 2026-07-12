import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { projects } from "../assets/projects";

function ProjectGallery({ images, title }) {
  const [isPaused, setIsPaused] = useState(false);
  const total = images.length;

  if (total === 0) {
    return null;
  }

  if (total === 1) {
    return (
      <div className="project-details-image">
        <img src={images[0]} alt={`${title} preview`} />
      </div>
    );
  }

  // Doubling the list is what makes the loop seamless: the track animates
  // from translateX(0) to translateX(-50%), and since the second half is
  // a pixel-identical copy of the first, the reset back to 0% is invisible.
  const trackImages = [...images, ...images];

  // Scales the animation duration with the image count so the marquee's
  // perceived speed (px/second) stays roughly constant whether there are
  // 3 images or 12, instead of a fixed duration making short lists crawl
  // or long lists zip past.
  const duration = Math.max(total * 3.5, 12);

  const pause = () => setIsPaused(true);
  const resume = () => setIsPaused(false);

  return (
    <div
      className="project-details-image pd-marquee"
      role="region"
      aria-label={`${title} screenshots`}
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      onTouchCancel={resume}
    >
      <div
        className={`pd-marquee-track ${isPaused ? "is-paused" : ""}`}
        style={{ "--marquee-duration": `${duration}s` }}
      >
        {trackImages.map((src, index) => {
          const isDuplicate = index >= total;
          return (
            <div
              className="pd-marquee-item"
              key={`${src}-${index}`}
              aria-hidden={isDuplicate}
            >
              <img
                src={src}
                alt={isDuplicate ? "" : `${title} screenshot ${index + 1}`}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((item) => item.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <section className="project-details not-found">
        <div className="card">
          <h2>Project not found</h2>
          <p>We couldn't find the project you're looking for.</p>
          <button
            type="button"
            className="btn-project"
            onClick={() => navigate("/")}
          >
            Back to home
          </button>
        </div>
      </section>
    );
  }

  // `image` can be a single source (most projects) or an array of sources
  // (e.g. EggCubator). No need for a separate `images` key in the data —
  // this just detects which shape it is.
  const rawImages = project.images ?? project.image;
  const images = Array.isArray(rawImages)
    ? rawImages
    : rawImages
      ? [rawImages]
      : [];

  return (
    <section className="project-details" id="project-details">
      <button type="button" className="btn-back" onClick={() => navigate(-1)}>
        <i className="bi bi-x-lg arrow-left"></i>
      </button>
      <div className="card">
        <div className="project-details-header">
          <p className="eyebrow">{project.type}</p>
          <h2>{project.title}</h2>
        </div>

        {images.length > 0 && (
          <ProjectGallery images={images} title={project.title} />
        )}

        <p className="project-details-summary">{project.summary}</p>

        <h3>Highlights</h3>
        <ul className="project-highlights">
          {project.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <div className="project-tags" aria-label="Project technologies">
          {project.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>

        <div className="project-actions">
          {project.links.map((link) =>
            link.href.startsWith("http") ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={`/${link.href}`}>
                {link.label}
              </Link>
            ),
          )}
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
