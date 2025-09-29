import react from "react";
import '../styles/Footer.css';

class Footer extends react.Component {
  render() {
    const { 
      scrollToSection, 
      homeRef, 
      aboutRef, 
      servicesRef, 
      contactRef 
    } = this.props;

    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>FullStack Development</h3>
            <p>
              Building the future of web applications with cutting-edge 
              technologies and innovative solutions.
            </p>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef); }}>Home</a></li>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }}>About</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }}>Services</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }}>Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }}>Web Development</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }}>Mobile Development</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }}>Cloud Solutions</a></li>
              <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }}>Maintenance</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Connect With Us</h4>
            <div className="social-links">
              <a href="#" className="social-link" onClick={(e) => e.preventDefault()}>📘</a>
              <a href="#" className="social-link" onClick={(e) => e.preventDefault()}>🐦</a>
              <a href="#" className="social-link" onClick={(e) => e.preventDefault()}>📷</a>
              <a href="#" className="social-link" onClick={(e) => e.preventDefault()}>💼</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2024 FullStack Development. All rights reserved.</p>
        </div>
      </footer>
    );
  }
}

export default Footer;
