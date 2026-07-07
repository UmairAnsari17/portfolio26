import "./Contact.css";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaInstagram
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">

        <p className="section-subtitle">
          CONTACT
        </p>

        <h2 className="section-title">
          Open To New Opportunities
          <br />
          And Collaborations.
        </h2>

        <p className="contact-description">
          I'm currently looking for opportunities as a Python Developer,
          Data Engineer, AI/ML Engineer or Software Developer.
          If you'd like to collaborate, discuss a project,
          or just drop me a line, I'd love to hear from you.
        </p>

        <div className="contact-buttons">

          <a
            href="mailto:umairansari.py@gmail.com"
            className="primary-btn"
          >
            Let's Work Together
          </a>

          <a
            href="/./Umair Ansari Resume.pdf"
            className="secondary-btn"
            download
          >
            Download Resume
          </a>

        </div>

        <div className="contact-links">

          <a
            href="mailto:umairansari.py@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
            Email
          </a>

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

export default Contact;