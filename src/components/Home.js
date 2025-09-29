import react from 'react';
import '../styles/Home.css';

class Home extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSection: null
    };
  }

  handleHover = (section) => {
    this.setState({ activeSection: section });
  }

  handleLeave = () => {
    this.setState({ activeSection: null });
  }

  render() {
    const { activeSection } = this.state;

    return (
      <section className="home-section background-fixed">
        <div className="home-content">
          <h1 className="home-title fade-in">Welcome to FullStack Development</h1>
          <p className="home-subtitle slide-up">Building modern web applications with cutting-edge technologies</p>
          
          <div className="hover-sections">
            <div 
              className={`hover-section ${activeSection === 1 ? 'active' : ''}`}
              onMouseEnter={() => this.handleHover(1)}
              onMouseLeave={this.handleLeave}
            >
              <h3>Frontend</h3>
              <div className="hover-content">
                <p>React, Vue, Angular - Modern JavaScript frameworks for building interactive UIs</p>
              </div>
            </div>
            
            <div 
              className={`hover-section ${activeSection === 2 ? 'active' : ''}`}
              onMouseEnter={() => this.handleHover(2)}
              onMouseLeave={this.handleLeave}
            >
              <h3>Backend</h3>
              <div className="hover-content">
                <p>Node.js, Python, Java - Robust server-side technologies for scalable applications</p>
              </div>
            </div>
            
            <div 
              className={`hover-section ${activeSection === 3 ? 'active' : ''}`}
              onMouseEnter={() => this.handleHover(3)}
              onMouseLeave={this.handleLeave}
            >
              <h3>Database</h3>
              <div className="hover-content">
                <p>MongoDB, PostgreSQL, MySQL - Efficient data storage and management solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Home;
