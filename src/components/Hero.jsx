import "./Hero.css";

function Hero() {
  return (
    <section className="hero-section" id="hero">
      <div className="container hero-content">

        <p className="hero-subtitle">
          SOFTWARE DEVELOPER • DATA ENGINEER • ML ENTHUSIAST
        </p>

        <h1 className="hero-title">
          Hi, I'm <span>Umair Ansari</span>
        </h1>

        <h2 className="hero-heading">
          Software Developer & Data Engineer
        </h2>

        <p className="hero-description">
          Passionate about Python, Data Engineering, Machine Learning,
          and modern web development. I enjoy building real-world
          applications that solve meaningful problems while writing
          clean, maintainable, and scalable code.
        </p>

        <div className="hero-buttons">

          <a href="#projects" className="primary-btn">
            View Projects
          </a>

          <a
            href="/Umair_Ansari_Resume.pdf"
            download
            className="secondary-btn"
          >
            Download Resume
          </a>

        </div>

      </div>
    </section>
  );
}

export default Hero;