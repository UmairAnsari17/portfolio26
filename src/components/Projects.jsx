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

                <a href={project.github}>
                  <u>GitHub</u>
                </a>

                <a href={project.live}>
                  <u>Live</u>
                </a>

              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;