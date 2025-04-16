import ProjectCard from "../../components/project-card/project-card.component";
import ProjectData from "../../data/project-data";
import "./project.style.css";

const Project = () => {
  return (
    <div className="project-list">
      {ProjectData.latest_work.map((project, index) => (
        <div className="project-card" key={index}>
          <ProjectCard
            project={project} // optional
          />
        </div>
      ))}
    </div>
  );
};

export default Project;
