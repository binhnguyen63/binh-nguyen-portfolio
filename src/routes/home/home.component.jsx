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
          <div className="description">
            {ProjectData.description.map((des, index) => {
              return <p key={index}>{des}</p>;
            })}
          </div>
          <div className="socials">
            <a href={ProjectData.socials.github} target="_blank">
              <img
                id="github"
                src={`${import.meta.env.BASE_URL}/github-mark.svg`}
              ></img>
            </a>
            <a href={ProjectData.socials.linkedin} target="_blank">
              <img
                id="linkedin"
                src={`${import.meta.env.BASE_URL}/LI-In-Bug.png`}
              ></img>
            </a>
          </div>
        </div>
      </div>
      <div className="latest-work-section">
        <h2 className="section-title">SOME OF MY LATEST WORK</h2>
        <div className="card-container">
          {ProjectData.latest_work.map((project, index) => {
            if (index <= 2) {
              return (
                <div className="card" key={index}>
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
