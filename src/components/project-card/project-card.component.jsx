import { useState } from "react";
import "./project-card.style.css";

const ProjectCard = ({ project, index }) => {
  const baseurl = import.meta.env.BASE_URL;
  const isEven = index % 2 === 0;

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = Array.isArray(project.image) ? project.image : [project.image];

  const handleNext = () => {
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImgIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextImgIndex = (currentImgIndex + 1) % images.length;

  return (
    <div className="project-card-wrapper">
      <div className={`project-card ${isEven ? "left-img" : "right-img"}`}>
        <div className="project-img">
          <img
            className="project-image"
            src={images[currentImgIndex]}
            alt={`Project image ${currentImgIndex + 1}`}
          />

          {images.length > 1 && (
            <>
              <div className="img-navigation">
                <button onClick={handlePrev} className="img-nav-button">
                  <img src={`${baseurl}/previous-svgrepo-com.svg`}></img>
                </button>
                <div className="img-preview-container">
                  <img
                    className="img-preview"
                    src={images[nextImgIndex]}
                    alt={`Preview ${nextImgIndex + 1}`}
                  />
                </div>
                <button onClick={handleNext} className="img-nav-button">
                  <img src={`${baseurl}/next-svgrepo-com.svg`}></img>
                </button>
              </div>
            </>
          )}
        </div>

        <div className="project-content">
          <h2 className="project-title fade-in fade-in-delay-1">
            {project.title}
          </h2>
          {project.detailed_description && (
            <div className="project-description">
              {project.detailed_description.map((des, i) => (
                <p key={i}>{des}</p>
              ))}
            </div>
          )}
          {project.tools_used && (
            <p className="project-tools">
              <strong>Tools Used: </strong>
              {project.tools_used.map((tool, i) => (
                <span className="tool" key={i}>
                  {tool}
                  {i !== project.tools_used.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <img id="github-icon" src={`${baseurl}/github-mark.svg`} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
