import React from 'react';
import './Contact.css';
import msg_icon from '../../assets/img/msg-icon.png';
import mail_icon from '../../assets/img/mail-icon.png';
import phone_icon from '../../assets/img/phone-icon.png';
import location_icon from '../../assets/img/location-icon.png';
import white_arrow from '../../assets/img/white-arrow.png';

const Contact = () => {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "f31efdce-580e-44b1-89b1-c3c42ec8a9bf");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form submitted successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='contact'>
      
      <div className="contact-col">
        <h3>Contact Our Institute <img src={msg_icon} alt="message icon" /></h3>
        
        <p>
          For any enquiries related to admissions, courses, or campus facilities, feel free to reach out to us. 
          Our team is always ready to assist students and parents with the right guidance and information.
        </p>

        <ul>
          <li>
            <img src={mail_icon} alt="mail icon" />
            admissions@xyzinstitute.edu.in
          </li>

          <li>
            <img src={phone_icon} alt="phone icon" />
            +91 98765 43210
          </li> 

          <li>
            <img src={location_icon} alt="location icon" />
            <p>
              XYZ Institute of Technology <br />
              Sector 62, Noida <br />
              Uttar Pradesh, India - 201309
            </p>
          </li>
        </ul>
      </div>

      <div className="contact-col">
        <form onSubmit={onSubmit}>
          
          <label>Your Name</label>
          <input type="text" name='name' placeholder='Enter your full name' required/>

          <label>Phone Number</label>
          <input type="tel" name='phone' placeholder='Enter your mobile number' required/>

          <label>Your Message</label>
          <textarea name="message" rows="6" placeholder='Write your query here...' required></textarea>

          <button type='submit' className='btn dark-btn'>
            Submit
            <img src={white_arrow} alt="arrow icon" />
          </button>

        </form>

        <span>{result}</span>
      </div>

    </div>
  )
}

export default Contact