import "./project-card.style.css";
const ProjectCard = ({ project }) => {
  console.log(project);
  return (
    <div className="project-card">
      <div className="project-img">
        <img className="project-image" src={project.image} alt="Project" />
      </div>
      <div>
        <h2 className="project-title">{project.title}</h2>
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
            <img id="github" src="src/assets/github-mark.svg"></img>
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectCard;
