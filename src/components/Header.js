import react from 'react';
import '../styles/Header.css';

class Header extends react.Component {
  render() {
    const { 
      scrollToSection, 
      homeRef, 
      aboutRef, 
      servicesRef, 
      contactRef, 
      isMenuOpen, 
      toggleMenu 
    } = this.props;

    return (
      <header className="header">
        <nav className="navbar">
          <div className="nav-brand">
            <div className="logo">FS</div>
            <span>FullStack</span>
          </div>
          
          <ul className={`nav-links ${isMenuOpen ? 'nav-active' : ''}`}>
            <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection(homeRef); }}>Home</a></li>
            <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection(aboutRef); }}>About</a></li>
            <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollToSection(servicesRef); }}>Services</a></li>
            <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection(contactRef); }}>Contact</a></li>
          </ul>
          
          <div className={`burger ${isMenuOpen ? 'toggle' : ''}`} onClick={toggleMenu}>
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
