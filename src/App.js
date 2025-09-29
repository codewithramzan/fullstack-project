import react from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/App.css';

class App extends react.Component {
constructor(props) {
  super(props);
  this.state = {
    isMenuOpen: false
  };
  
  // Create refs for each section
  this.homeRef = react.createRef();
  this.aboutRef =react.createRef();
  this.servicesRef = react.createRef();
  this.contactRef = react.createRef(); // Fixed this line
}

  componentDidMount() {
    // Re-create refs if they're null
    if (!this.homeRef) this.homeRef = react.createRef();
    if (!this.aboutRef) this.aboutRef = react.createRef();
    if (!this.servicesRef) this.servicesRef = react.createRef();
    if (!this.contactRef) this.contactRef = react.createRef();
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  scrollToSection = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    this.setState({ isMenuOpen: false });
  }

  render() {
    return (
      <div className="App">
        <Header 
          scrollToSection={this.scrollToSection}
          homeRef={this.homeRef}
          aboutRef={this.aboutRef}
          servicesRef={this.servicesRef}
          contactRef={this.contactRef}
          isMenuOpen={this.state.isMenuOpen}
          toggleMenu={this.toggleMenu}
        />
        
        {/* Home Section */}
        <section id="home" ref={this.homeRef}>
          <Home />
        </section>
        
        {/* About Section */}
        <section id="about" ref={this.aboutRef}>
          <About />
        </section>
        
        {/* Services Section */}
        <section id="services" ref={this.servicesRef}>
          <Services />
        </section>
        
        {/* Contact Section */}
        <section id="contact" ref={this.contactRef}>
          <Contact />
        </section>
        
        <Footer 
          scrollToSection={this.scrollToSection}
          homeRef={this.homeRef}
          aboutRef={this.aboutRef}
          servicesRef={this.servicesRef}
          contactRef={this.contactRef}
        />
      </div>
    );
  }
}

export default App;
