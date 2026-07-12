import { Link } from "react-router-dom";
import Avatar from "../assets/img/avataaars.svg";
import profileImage from "../assets/img/5f10c3cf-1a72-4049-802e-2a5ef6c7e4bc_removalai_preview.png";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "React.JS" },
  { name: "Python" },
  { name: "WordPress" },
  { name: "C++" },
  { name: "Bootstrap" },
  { name: "Embedded System" },
  { name: "GitHub Actions" },
  { name: "Git/GitHub" },
  { name: "Firebase" },
  { name: "Supabase" },
  { name: "Flet" },
  { name: "Mobile App Development" },
];

const strengths = [
  "Adaptable",
  "Detail-focused",
  "Curious",
  "Reliable",
  "Resourceful",
];

function About() {
  return (
    <section className="about" id="about">
      <div className="card">
        <div className="section-heading">
          <p className="eyebrow">About Me</p>
          <h2>Building useful things while learning deeply.</h2>
          {/* <p className="info">
            I am a Computer Engineering student at the University of Cebu - Main Campus.
            My course covers both hardware and software, but I am especially drawn to
            creating practical, user-friendly software.
          </p> */}
        </div>

        <div className="know-me">
          <figure className="my-picontainer">
            <img
              className="my-pic"
              src={profileImage}
              alt="Argie working profile"
            />
          </figure>

          <div className="get-know">
            <h3>Get to know me</h3>
            <p>
              I like turning ideas into working projects, whether that means
              designing a website, writing front-end code, or thinking through
              how hardware and software can work together.
            </p>
            <p>
              I am currently sharpening my React, JavaScript, Python, and design
              skills. I am also open to freelance or junior opportunities where
              I can contribute, keep learning, and grow with real projects.
            </p>

            <ul className="quick-facts" aria-label="Personal strengths">
              {strengths.map((strength) => (
                <li key={strength}>{strength}</li>
              ))}
            </ul>

            <Link className="learn-more" to="/moreAbout">
              More About Me
              <i className="bi bi-arrow-right arrow-right"></i>
            </Link>
          </div>
        </div>

        <div className="skills">
          <div className="skills-copy">
            <p className="eyebrow">My Skills</p>
            <h3>Tools I am building with</h3>
          </div>

          <div className="skill-grid">
            <ul className="skill-set" aria-label="Personal strengths">
              {skills.map((skill) => (
                <li key={skill.name}>{skill.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
