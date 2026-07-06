import "./About.css";

import {
  FaCode,
  FaDatabase,
  FaChartBar,
  FaGlobe,
  FaTools,
  FaMicrosoft,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">

        <p className="section-subtitle">ABOUT</p>

        <h2 className="section-title">
         <span className="accent"> About Me.</span>
        </h2>

        <p className="about-description">
          I'm a Software Developer & Data Engineer based in Mumbai with a passion for coding, problem-solving, and continuous learning.<br/>
          As a Software developer & Data Engineer with 3 months of hands-on experience in Data Engineering I have  
          Proficiency in data collection & Cleaning, EDA, ETL/ELT and py libraries like pandas, numpy, matplotlib,
          seaborn, scikit-learn (Machine Learning) GenAI, LLM’s, etc with eager learn new technologies.<br/>
          Actively Exploring Data Engineering, and Mastering SQL by Building Projects and Solving Real world
          problems.
        </p>

        {/* Skills */}

        <div className="about-heading">
          <h3>SKILLS</h3>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaCode />
          </div>

          <p>
            <strong>Programming Languages:</strong> Python, Core Java,
            JavaScript, SQL
          </p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaDatabase />
          </div>

          <p>
            <strong>Databases & ORMs:</strong> MySQL, PostgreSQL, SQLite,
            SQLAlchemy
          </p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaChartBar />
          </div>

          <p>
            <strong>Data Analysis:</strong> Data Cleaning, EDA,
            Statistical Analysis, Machine Learning
          </p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaGlobe />
          </div>

          <p>
            <strong>Web Technologies:</strong> Flask, React, Vite, Node JS,
            Bootstrap, HTML5, CSS3
          </p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaMicrosoft />
          </div>

          <p>
            <strong>Microsoft Tools:</strong> Word, Excel,
            PowerPoint, Power BI
          </p>
        </div>

        <div className="skill-card">
          <div className="skill-icon">
            <FaTools />
          </div>

          <p>
            <strong>Tools:</strong> Git, GitHub,
            Postman
          </p>
        </div>

        {/* Learning */}

        <div className="about-heading learning">
          <h3>CURRENTLY LEARNING</h3>
        </div>

        <div className="learning-tags">

          <span>Data Engineering</span>

          <span>Advanced SQL</span>

          <span>DSA</span>

          <span>React</span>

          <span>Docker</span>

        </div>

        {/* Social */}

        <div className="about-heading learning">
          <h3>FOLLOW ME</h3>
        </div>

        <div className="follow-links">

        <a
            href="https://github.com/UmairAnsari17"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaGithub />
            GitHub
        </a>

        <a
            href="https://linkedin.com/in/umair-ansari17"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaLinkedin />
            LinkedIn
        </a>

        <a
            href="https://x.com/UmxirAnsari"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaXTwitter />
            X
        </a>

        <a
            href="https://instagram.com/umxiirrrr"
            target="_blank"
            rel="noopener noreferrer"
        >
            <FaInstagram />
            Instagram
        </a>

        </div>

      </div>
    </section>
  );
}

export default About;