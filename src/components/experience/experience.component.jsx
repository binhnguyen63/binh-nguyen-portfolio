import { FaCheckCircle } from "react-icons/fa";
import "./experience.style.css";

const TechItem = ({ name, level }) => (
  <div className="tech-item">
    <FaCheckCircle className="icon" />
    <div>
      <h4>{name}</h4>
      <p>{level}</p>
    </div>
  </div>
);

const TechSection = ({ title, techs }) => (
  <div className="tech-section">
    <h3>{title}</h3>
    <div className="tech-list">
      {techs.map((tech, index) => (
        <TechItem key={index} name={tech.name} level={tech.level} />
      ))}
    </div>
  </div>
);

const TechStack = () => {
  const frontEndTechs = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "Python", level: "Experienced" },
    { name: "TypeScript", level: "Learning" },
    { name: "React", level: "Intermediate" },
  ];

  const backEndTechs = [
    { name: "Databricks", level: "Experienced" },
    { name: "PostgreSQL", level: "Experienced" },
    { name: "Java", level: "Intermediate" },
    { name: "PhP", level: "Intermediate" },
    { name: "Node.JS", level: "Intermediate" },
    { name: "Flask/Django", level: "Learning" },
  ];

  return (
    <div className="tech-stack">
      <TechSection title="Front-end Development" techs={frontEndTechs} />
      <TechSection title="Back-end Development" techs={backEndTechs} />
    </div>
  );
};

export default TechStack;
