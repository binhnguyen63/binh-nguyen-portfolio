import "./home.style.css";
import ProjectData from "../../data/project-data";
import TechStack from "../../components/experience/experience.component";
import { Link } from "react-router-dom";

const Home = () => {
  const baseurl = import.meta.env.BASE_URL;
  return (
    <div className="container-body">
      <div className="introduction fade-in fade-in-delay-1">
        <img
          src={ProjectData.profile_pic}
          id="profile-pic"
          alt="profile-pic"
        ></img>
        <div className="introduction-text">
          <h1>Welcome,</h1>
          <div className="description">
            {ProjectData.description.map((des, index) => {
              return <p key={index}>{des}</p>;
            })}
          </div>
          <div className="socials">
            <a href={ProjectData.socials.github} target="_blank">
              <img id="github" src={`${baseurl}/github-mark.svg`}></img>
            </a>
            <a href={ProjectData.socials.linkedin} target="_blank">
              <img id="linkedin" src={`${baseurl}/LI-In-Bug.png`}></img>
            </a>
          </div>
        </div>
      </div>
      <div className="experience-section fade-in fade-in-delay-2">
        <h2>My Experience</h2>
        <TechStack />
      </div>
      <div className="latest-work-section fade-in fade-in-delay-3">
        <h2 className="section-title">SOME OF MY LATEST WORK</h2>
        <div className="card-container">
          {ProjectData.latest_work.map((project, index) => {
            if (index <= 2) {
              const handleCardClick = () => {
                window.open(project.github, "_blank");
              };
              return (
                <div className="card" key={index} onClick={handleCardClick}>
                  <img
                    className="ProjectData-image"
                    src={project.image}
                    alt="UI design book"
                  />
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
