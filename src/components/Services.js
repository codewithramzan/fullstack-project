import React from 'react';
import '../styles/Services.css';

class Services extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    // Trigger animation when component mounts
    setTimeout(() => {
      this.setState({ visible: true });
    }, 300);
  }

  render() {
    const { visible } = this.state;

    return (
      <section className="services-section section">
        <h2 className="section-title">Our Services</h2>
        <div className={`services-grid ${visible ? 'visible' : ''}`}>
          <div className="service-card">
            <div className="service-icon">💻</div>
            <h3>Web Development</h3>
            <p>Custom web applications built with modern frameworks and best practices.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Mobile Development</h3>
            <p>Cross-platform mobile applications for iOS and Android.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">☁</div>
            <h3>Cloud Solutions</h3>
            <p>Scalable cloud infrastructure and deployment solutions.</p>
          </div>
          
          <div className="service-card">
            <div className="service-icon">🔧</div>
            <h3>Maintenance & Support</h3>
            <p>Ongoing maintenance and support for your applications.</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Services;
