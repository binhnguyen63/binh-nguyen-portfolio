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
        <p className="project-description">{project.description}</p>
      </div>
    </div>
  );
};
export default ProjectCard;
