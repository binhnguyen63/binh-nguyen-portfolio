import ProjectCard from "../../components/project-card/project-card.component";
import ProjectData from "../../data/project-data";
import "./project.style.css";

const Project = () => {
  return (
    <div className="project-list">
      {ProjectData.latest_work.map((project, index) => (
        <ProjectCard
          project={project}
          key={index} // optional
        />
      ))}
    </div>
  );
};

export default Project;
