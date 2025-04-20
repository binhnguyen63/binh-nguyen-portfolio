import ProjectCard from "../../components/project-card/project-card.component";
import ProjectData from "../../data/project-data";
import "./project.style.css";

const Project = () => {
  const baseurl = import.meta.env.BASE_URL;
  return (
    <div className="container-body">
      <div className="project-header fade-in fade-in-delay-1">
        <div className="project-header-text">
          <h2>Project.</h2>
          <h5>SOME OF MY LATEST WORK</h5>
        </div>

        <img
          className="project-header-image"
          src={`${baseurl}/projects.png`}
          alt="Project"
        />
      </div>
      <div className="all-projects fade-in fade-in-delay-2">
        {ProjectData.latest_work.map((project, index) => (
          <ProjectCard
            project={project}
            key={index}
            index={index} // optional
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
