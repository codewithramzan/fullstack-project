import react from "react";
import '../styles/About.css';

class About extends react.Component {
  render() {
    return (
      <section className="about-section section">
        <h2 className="section-title">About Us</h2>
        <div className="about-content">
          <div className="about-text slide-up">
            <p>
              We are a passionate team of full-stack developers dedicated to creating 
              exceptional web experiences. With expertise in modern technologies and 
              a focus on user-centered design, we build applications that are both 
              functional and beautiful.
            </p>
            <p>
              Our mission is to deliver high-quality, scalable solutions that help 
              businesses grow and succeed in the digital world.
            </p>
          </div>
          <div className="about-stats">
            <div className="stat">
              <h3>50+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>5+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat">
              <h3>100%</h3>
              <p>Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
