import "./Qualification.css";

import certifications from "../data/certifications";

import {
  FaGraduationCap,
  FaCertificate,
  FaUniversity,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

import { FiExternalLink } from "react-icons/fi";

function Qualification() {
  return (
    <section className="qualification-section" id="qualification">
      <div className="container">

        <p className="section-subtitle">
          QUALIFICATION
        </p>

        <h2 className="section-title">
          Academic Background<span className="accent">.</span>
        </h2>

        <p className="qualification-description">
          My educational journey and professional certifications.
        </p>

        <div className="qualification-grid">

          {/* Education */}

          <div className="education-card">

            <div className="card-title">
              <div className="circle-icon">
                <FaGraduationCap />
              </div>

              <h3>Education</h3>
            </div>

            <hr />

            <div className="education-content">

              <div className="edu-item">
                <span className="bullet"></span>

                <h4>Bachelor of Information Technology</h4>
              </div>

              <div className="edu-detail">
                <FaCalendarAlt />
                <span>2023 – 2026</span>
              </div>

              <div className="edu-detail">
                <FaUniversity />
                <span>University of Mumbai</span>
              </div>

              <div className="edu-detail">
                <FaStar />
                <span>CGPA : 9.23 / 10</span>
              </div>

            </div>

          </div>

          {/* Certifications */}

          <div className="certificate-card">

            <div className="card-title">

              <div className="circle-icon">
                <FaCertificate />
              </div>

              <h3>Certifications</h3>

            </div>

            <hr />

            {certifications.map((certificate) => (

              <a
                key={certificate.id}
                href={certificate.credential}
                className="certificate-item"
                target="_blank"
                rel="noopener noreferrer"
              >

                <div>

                  <div className="certificate-title">

                    <span className="bullet"></span>

                    <h4>{certificate.title}</h4>

                  </div>

                  <p>
                    {certificate.provider}
                    <span className="dot"></span>
                    {certificate.issued}
                  </p>

                </div>

                <FiExternalLink />

              </a>

            ))}

          </div>

        </div>

      </div>
    </section>
  );
}

export default Qualification;