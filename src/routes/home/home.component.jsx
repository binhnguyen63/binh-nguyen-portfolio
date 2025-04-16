import "./home.style.css";
import ProjectData from "../../data/project-data";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="introduction">
        <img
          src="src/assets/profile.png"
          id="profile-pic"
          alt="profile-pic"
        ></img>
        <div className="introduction-text">
          <h1>Welcome,</h1>
          <p className="description">
            {ProjectData.description.map((des) => {
              return <p>{des}</p>;
            })}
          </p>
          <div className="socials">
            <a href={ProjectData.socials.github} target="_blank">
              <img id="github" src="src/assets/github-mark.svg"></img>
            </a>
            <a href={ProjectData.socials.linkedin} target="_blank">
              <img id="linkedin" src="src/assets/LI-In-Bug.png"></img>
            </a>
          </div>
        </div>
      </div>
      <div class="latest-work-section">
        <h2 class="section-title">SOME OF MY LATEST WORK</h2>
        <div class="card-container">
          {ProjectData.latest_work.map((project, index) => (
            <div class="card">
              <img
                className="ProjectData-image"
                src={project.image}
                alt="UI design book"
              />
              <div class="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
