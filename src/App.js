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
    this.homeRef = react.createRef();
    this.aboutRef = react.createRef();
    this.servicesRef = react.createRef();
    this.contactRef = react.createRef();
  }

  toggleMenu = () => {
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));
  }

  scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
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
        
        <div ref={this.homeRef}>
          <Home />
        </div>
        
        <div ref={this.aboutRef}>
          <About />
        </div>
        
        <div ref={this.servicesRef}>
          <Services />
        </div>
        
        <div ref={this.contactRef}>
          <Contact />
        </div>
        
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