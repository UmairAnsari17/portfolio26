import "./Experience.css";

function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">

        <p className="section-subtitle">
          EXPERIENCE
        </p>

        <h2 className="section-title">
          Professional Journey.
        </h2>

        <div className="experience-card">

          <div className="experience-header">

            <div>
              <h3>Data Engineer & Mobile Forensics Intern</h3>
              <h4>Cyber Police Station, M.B.V.V</h4>
            </div>

            <div className="experience-right">
              <span>April 2025 – June 2025</span>
              <p>On-Site (Mumbai) | Internship</p>
            </div>

          </div>

          <ul className="experience-list">
            <li>
              Worked with thousands of Cyber Police Station, M.B.V.V workforce data.
            </li>

            <li>
              Cleaned, transformed and loaded workforce data into the M.B.V.V website database.
            </li>

            <li>
              Assisted in detecting mobile fraud using Mobile Forensics techniques.
            </li>
          </ul>

        </div>

      </div>
    </section>
  );
}

export default Experience;