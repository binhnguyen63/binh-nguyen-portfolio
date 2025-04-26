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
              <img
                id="github-icon"
                src={`${import.meta.env.BASE_URL}/github-mark.svg`}
              ></img>
            </a>
            <a href={ProjectData.socials.linkedin} target="_blank">
              <img
                id="linkedin-icon"
                src={`${import.meta.env.BASE_URL}/LI-In-Bug.png`}
              ></img>
            </a>
            <a href={ProjectData.socials.leetcode} target="_blank">
              <img
                id="leetcode-icon"
                src={`${import.meta.env.BASE_URL}/leetcode.png`}
              ></img>
            </a>
            <a href={`mailto:${ProjectData.socials.email}`}>
              <img
                id="email-icon"
                src={`${import.meta.env.BASE_URL}/email.png`}
                alt="Email icon"
              />
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
            const chosen_project = [
              "Restaurant Management System",
              "User Management Project",
              "Web3 - ETH wallet tracking",
            ];
            if (chosen_project.includes(project.title)) {
              const handleCardClick = () => {
                window.open(project.github, "_blank");
              };
              return (
                <div className="card" key={index} onClick={handleCardClick}>
                  <img
                    className="ProjectData-image"
                    src={project.image[0]}
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
