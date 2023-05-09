import React, {useState} from 'react';
import { Col, Row } from 'react-bootstrap';

const Contact = () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
const handleChange = (event)=>{
    const{name, value} = event.target;
    setFormData({ ...formData, [name]: value})
}


const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
    };
    fetch('http://localhost:8000/api/contact', requestOptions)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
};


  return (
    <Row>
      <Col md={6} className="mx-auto">
        <h1>Contact me</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email address</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              className="form-control"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </Col>
      <Col>
      <div className='contact-data'>
        <p>If you want to chat about a web development project, email me
          on bhavesh.chemicool@gmail.com.
        </p>
        <p>
          I can help designing a website, designing a new product, improving existing part of your product, building a strong
          design system, building websites in webflow, or designing a custom icon for your business.(" ")
        </p>
        <p>
          Currently based in Jaipur, India. Available for remote-friendly work.
        </p>
      </div>
      </Col>
    </Row>
  );
};

export default Contact;