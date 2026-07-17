import "./Projects.css";
import "../styles/globals.css"
import projects from "../data/projects";

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
      <div className="section-heading center">
        <p className="section-subtitle">
          PROJECTS
        </p>

        <h2 className="section-title">
          Featured Projects.
        </h2>
      </div>
        <div className="projects-grid">

          {projects.map((project) => (
            <div className="project-card" key={project.id}>

              <img
                src={project.image}
                alt={project.title}
                className="project-image"/>

              <span className="project-year">
                {project.year}
              </span>

              <h3>{project.title}</h3>

              <p className="tech">
                {project.tech}
              </p>

              <p className="description">
                {project.description}
              </p>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
              >
                  <u>GitHub</u>
              </a>

              {project.live && (
                  <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                  >
                      <u>Live Demo</u>
                  </a>
              )}

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;