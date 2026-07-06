import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="hero">

      <div className="container hero-content">

        <p className="hero-subtitle">
          SOFTWARE DEVELOPER • DATA ENGINEER • ML ENTHUSIAST
        </p>

        <h2 className="hero-title">
          Hi, I'm Umair Ansari
        </h2>

        <h3 className="hero-heading">
          Software Developer & Data Engineer
        </h3>

        <p className="hero-description">
          Data Engineer passionate about Python,
          Machine Learning, and modern web development. I enjoy building
          real-world applications that solve meaningful problems. Focused on writing clean, observable, and maintainable code
          with continously Learning New Technologies.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a href="#" className="secondary-btn">
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}

export default Hero;