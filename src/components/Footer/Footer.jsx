import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faPinterestP, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';


const footerLinks = [
  {
    title: 'POLICY INFO',
    links: [
      { to: '/terms', text: 'Terms & Conditions' },
      { to: '/privacy', text: 'Privacy Policy' },
      { to: '/terms-of-use', text: 'Terms of Use' },
      { to: '/disclaimer', text: 'Disclaimer' },
    ],
  },
{
  title: 'ABOUT COMPANY',
  links: [
      { to: '/about', text: 'About Us' },
      { to: '/team', text: 'CakeWala Team' },
      { to: '/careers', text: 'Careers' },
      { to: '/testimonials', text: 'Testimonials' },
      { to: '/news-room', text: 'News Room' },
    ],
  },
{
  title: 'CAKEWALA BUSINESS',
  links: [
    { to: '/decoration-services', text: 'Decoration Services' },
    { to: '/corporate-service', text: 'Corporate Service' },
    { to: '/affiliate-program', text: 'Affiliate Program' },
    { to: '/retail-stores', text: 'Retails Stores' },
    { to: '/franchise', text: 'Franchise' },
    ],
  },
{
   title: 'NEED HELP?',
   links: [
      { to: '/contact', text: 'Contact Us' },
      { to: '/faqs', text: 'FAQs' },
    ],
  },
 {
  title: 'USEFUL LINKS',
  links: [
      { to: '/quotes-n-wishes', text: 'Quotes N Wishes' },
      { to: '/flower-astrology', text: 'Flower Astrology' },
      { to: '/article-hub', text: 'Article Hub' },
      { to: '/care-guide', text: 'Care Guide' },
      { to: '/blog', text: 'Blog' },
    ],
  },
];

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {footerLinks.map((section, index) => (

          <div className="footer-section" key={index}>
            <h3 className="footer-title">{section.title}</h3>
          <ul className="footer-list">
            
           {section.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                <Link to={link.to} className="footer-link">{link.text}</Link>
              </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <div className="footer-copyright">
         <p>&copy; 2023-2024 CakeWala.com. All rights reserved.</p>
        </div>

        <div className="footer-social">
        
         <ul className="social-list">
           <li><Link to="#" className="social-link facebook"><FontAwesomeIcon icon={faFacebookF} /></Link></li>
           <li><Link to="#" className="social-link twitter"><FontAwesomeIcon icon={faTwitter} /></Link></li>
            <li><Link to="#" className="social-link pinterest"><FontAwesomeIcon icon={faPinterestP} /></Link></li>
            <li><Link to="#" className="social-link instagram"><FontAwesomeIcon icon={faInstagram} /></Link></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
