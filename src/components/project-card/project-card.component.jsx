import "./project-card.style.css";
const ProjectCard = ({ project, index }) => {
  const baseurl = import.meta.env.BASE_URL;
  const isEven = index % 2 === 0;

  return (
    <div className="project-card-wrapper">
      <div className={`project-card ${isEven ? "left-img" : "right-img"}`}>
        <div className="project-img">
          <img className="project-image" src={project.image} alt="Project" />
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
              <img id="github" src={`${baseurl}/github-mark.svg`} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;
