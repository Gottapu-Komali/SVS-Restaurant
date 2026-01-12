import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="logo">SVS <span>Restaurant</span></div>
                    <p className="footer-desc">
                        Serving authentic Indian flavors since 1995. Every dish is a story of tradition, passion, and elite craftsmanship.
                    </p>
                    <div className="social-links">
                        <a href="#"><i className="fab fa-instagram"></i></a>
                        <a href="#"><i className="fab fa-facebook-f"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-youtube"></i></a>
                    </div>
                </div>

                <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/menu">Our Menu</Link></li>
                        <li><Link to="/auth">Book a Table</Link></li>
                        <li><a href="#">About Us</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Contact Us</h4>
                    <ul className="contact-info">
                        <li><i className="fas fa-map-marker-alt"></i> 123 Heritage Lane, Foodie Valley, India</li>
                        <li><i className="fas fa-phone"></i> +91 98765 43210</li>
                        <li><i className="fas fa-envelope"></i> taste@svsrestaurant.com</li>
                        <li><i className="fas fa-clock"></i> 11:00 AM - 11:00 PM</li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h4>Newsletter</h4>
                    <p>Subscribe for exclusive offers and royal recipes.</p>
                    <form className="newsletter-form">
                        <input type="email" placeholder="Your Email" />
                        <button type="submit">Join</button>
                    </form>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2026 SVS Restaurant. All rights reserved. | Crafted for Royalty</p>
            </div>

            <style jsx>{`
        .footer {
          background: #080808;
          padding: 80px 5% 30px;
          border-top: 1px solid rgba(255,255,255,0.05);
          margin-top: 50px;
        }

        .footer-content {
          max-width: 1400px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1.5fr 1.5fr;
          gap: 50px;
        }

        .logo span { color: var(--primary-color); font-weight: 300; font-size: 0.8em; }
        
        .footer-desc {
          color: #666;
          margin: 20px 0;
          line-height: 1.8;
          font-size: 0.95em;
        }

        .social-links { display: flex; gap: 15px; }
        .social-links a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255,255,255,0.05);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover { background: var(--primary-color); transform: translateY(-3px); }

        h4 {
          color: white;
          margin-bottom: 25px;
          font-size: 1.2em;
          position: relative;
        }
        h4::after {
          content: '';
          position: absolute;
          bottom: -8px; left: 0;
          width: 40px; height: 2px;
          background: var(--primary-color);
        }

        ul { list-style: none; }
        ul li { margin-bottom: 15px; }
        ul li a { color: #888; text-decoration: none; transition: 0.3s; font-size: 0.95em; }
        ul li a:hover { color: var(--primary-color); padding-left: 5px; }

        .contact-info li { display: flex; gap: 15px; color: #888; font-size: 0.95em; }
        .contact-info i { color: var(--primary-color); margin-top: 5px; }

        .newsletter-form {
          display: flex;
          gap: 10px;
          margin-top: 20px;
        }
        .newsletter-form input {
          flex: 1;
          padding: 12px 15px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          color: white;
          outline: none;
        }
        .newsletter-form button {
          padding: 10px 20px;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
        }

        .footer-bottom {
          text-align: center;
          margin-top: 60px;
          padding-top: 30px;
          border-top: 1px solid rgba(255,255,255,0.05);
          color: #444;
          font-size: 0.9em;
        }

        @media (max-width: 1024px) {
          .footer-content { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 768px) {
          .footer-content { grid-template-columns: 1fr; text-align: center; }
          h4::after { left: 50%; transform: translateX(-50%); }
          .social-links { justify-content: center; }
          .contact-info li { justify-content: center; }
        }
      `}</style>
        </footer>
    );
};

export default Footer;
