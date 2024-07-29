import React from 'react';
import './Contact.css';
import ContactImg from '../../assets/image/cake10.jpg'; 

const ContactSection = ({ title, subtitle, imageUrl, children }) => (
  <section className="intro-section">
    <div className="intro-content">
      <h2>{title}</h2>
      <p>{subtitle}</p>
    </div>
    {imageUrl && (
      <div className="intro-image">
        <img src={imageUrl} alt={title} />
      </div>
    )}
    {children}
  </section>
);

const Contact = () => {
  return (
    <div className="contact-page">
      <ContactSection
        title="Contact Us"
        subtitle="We're here to help! Get in touch with us for any inquiries or support."
        imageUrl={ContactImg}
      />

      <section className="form-section">
        <div className="form-header">
          <h3>Contact Form</h3>
          <p>Fill out the form below and we will get back to you as soon as possible.</p>
        </div>
        <form>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
          
          <label htmlFor="phone">Your Phone Number</label>
          <input type="tel" id="phone" name="phone" placeholder="Enter your phone number" required />
          
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" placeholder="Your message here..." required></textarea>
          
          <button type="submit">Submit</button>
        </form>
        <div className="form-info">
          <p><strong>Company Address:</strong> 1234 Main St, Anytown, USA</p>
          <p><strong>Contact Number:</strong> (+91) 9675xxxxxx</p>
        </div>
      </section>
      
      <ContactSection
        title="Company Location"
        subtitle="5678 Elm St, Somecity, USA"
        imageUrl={
          "https://www.google.com/maps/dir/28.6260606,77.3668853/ira+technologies+location/@28.6269669,77.3647814,16z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x390ce454b0000001:0x9c9425d5f2f7b666!2m2!1d77.3726048!2d28.6263907?entry=ttu"
        }
      />
    </div>
  );
};

export default Contact;
