import react from "react";
import '../styles/Contact.css';

class Contact extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        name: '',
        email: '',
        phone: '',
        message: ''
      },
      errors: {},
      isSubmitting: false,
      isSubmitted: false
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      },
      errors: {
        ...prevState.errors,
        [name]: ''
      }
    }));
  }

  validateForm = () => {
    const { formData } = this.state;
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?[\d\s-()]{10,}$/;

    // Name validation
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    } else if (formData.name.trim().length < 2) {
      errors.name = 'Name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required';
    } else if (!phoneRegex.test(formData.phone)) {
      errors.phone = 'Please enter a valid phone number';
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }

    return errors;
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const errors = this.validateForm();

    if (Object.keys(errors).length === 0) {
      this.setState({ isSubmitting: true });
      
      // Simulate form submission
      setTimeout(() => {
        this.setState({
          isSubmitting: false,
          isSubmitted: true,
          formData: {
            name: '',
            email: '',
            phone: '',
            message: ''
          }
        });
        
        // Reset submission status after 5 seconds
        setTimeout(() => {
          this.setState({ isSubmitted: false });
        }, 5000);
      }, 2000);
    } else {
      this.setState({ errors });
    }
  }

  render() {
    const { formData, errors, isSubmitting, isSubmitted } = this.state;

    return (
      <section className="contact-section section">
        <h2 className="section-title">Contact Us</h2>
        <div className="contact-content">
          <div className="contact-info slide-up">
            <h3>Get In Touch</h3>
            <div className="contact-item">
              <strong>Email:</strong> info@fullstack.com
            </div>
            <div className="contact-item">
              <strong>Phone:</strong> +1 (555) 123-4567
            </div>
            <div className="contact-item">
              <strong>Address:</strong> 123 Web Street, Digital City
            </div>
          </div>
          
          <form className="contact-form" onSubmit={this.handleSubmit}>
            {isSubmitted && (
              <div className="success-message">
                Thank you! Your message has been sent successfully.
              </div>
            )}
            
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={this.handleChange}
                className={errors.name ? 'error' : ''}
              />
              {errors.name && <span className="error-text">{errors.name}</span>}
            </div>
            
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={this.handleChange}
                className={errors.email ? 'error' : ''}
              />
              {errors.email && <span className="error-text">{errors.email}</span>}
            </div>
            
            <div className="form-group">
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={this.handleChange}
                className={errors.phone ? 'error' : ''}
              />
              {errors.phone && <span className="error-text">{errors.phone}</span>}
            </div>
            
            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                value={formData.message}
                onChange={this.handleChange}
                className={errors.message ? 'error' : ''}
              ></textarea>
              {errors.message && <span className="error-text">{errors.message}</span>}
            </div>
            
            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default Contact;
