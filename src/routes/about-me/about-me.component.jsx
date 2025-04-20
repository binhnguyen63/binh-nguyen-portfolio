import ProjectData from "../../data/project-data";
const AboutMe = () => {
  const baseurl = import.meta.env.BASE_URL;
  return (
    <div className="container-body">
      <div className="introduction">
        <img
          src={ProjectData.profile_pic}
          id="profile-pic"
          alt="profile-pic"
        ></img>
        <div className="introduction-text">
          <h1>About Me</h1>
          <div className="description">
            {ProjectData.about_me.map((des, index) => {
              return <p key={index}>{des}</p>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;
