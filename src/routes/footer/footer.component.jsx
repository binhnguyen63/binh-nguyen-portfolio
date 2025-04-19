import { Link } from "react-router-dom";
import ProjectData from "../../data/project-data";
import "./footer.style.css";
const Footer = () => {
  const openResume = () => {
    window.open(ProjectData.resume, "_blank");
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© binh-nguyen-portfolio</p>
        <div className="footer-column">
          <div className="browse">
            <p>Browse</p>
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <a href="#" onClick={openResume}>
              Resume
            </a>
          </div>
          <div className="follow-me">
            <p>Follow Me</p>
            <Link to={ProjectData.socials.github} target="_blank">
              Github
            </Link>
            <Link to={ProjectData.socials.linkedin} target="_blank">
              LinkedIn
            </Link>
            <a href={ProjectData.socials.leetcode} target="_blank">
              Leetcode
            </a>
          </div>
          <div className="contact-footer">
            <p>Contact</p>
            <a href={`mailto:${ProjectData.email}`}>Email Me</a>
            <Link to="/contact">Contact Form</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
