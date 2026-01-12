import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ReservationModal from '../components/ReservationModal';

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    role: "Food Critic",
    content: "The Hyderabadi Biryani here is unparalleled. Each grain of rice tells a story of authentic tradition. A must-visit for any curry lover!",
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Travel Blogger",
    content: "The ambiance is just as royal as the food. SVS Restaurant offers more than just a meal; it's a complete cultural experience.",
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    id: 3,
    name: "Vikram Shah",
    role: "Regular Customer",
    content: "I've been coming here for 10 years, and the taste hasn't changed. The Butter Chicken is creamy perfection every single time.",
    avatar: "https://i.pravatar.cc/150?u=3"
  }
];

const Home = () => {
  const [dateTime, setDateTime] = useState(new Date());
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setDateTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="home-page">
      <ReservationModal
        isOpen={isReservationOpen}
        onClose={() => setIsReservationOpen(false)}
      />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="welcome-badge">Premium Quality Dining</span>
            <h1>The Art of <br /><span>Indian Cuisine</span></h1>
            <p className="hero-description">
              Experience a royal journey through India's rich culinary heritage.
              Our master chefs combine traditional techniques with modern flair.
            </p>
            <div className="hero-actions">
              <Link to="/menu" className="btn-primary">Explore Menu</Link>
              <button
                onClick={() => setIsReservationOpen(true)}
                className="btn-secondary"
                style={{ cursor: 'pointer', background: 'transparent' }}
              >
                Book a Table
              </button>
            </div>

            <div className="hero-stats">
              <div className="stat">
                <h3>15+</h3>
                <p>Awards</p>
              </div>
              <div className="stat">
                <h3>200+</h3>
                <p>Recipes</p>
              </div>
              <div className="stat">
                <h3>5k+</h3>
                <p>Customers</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="hero-image-box"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <div className="floating-plate">
              <img src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Signature Dish" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Info Section */}
      <section className="info-bar">
        <div className="info-item">
          <div className="info-icon"><i className="fas fa-history"></i></div>
          <div className="info-text">
            <h4>Live Order Status</h4>
            <p>{formatDate(dateTime)}</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon"><i className="fas fa-percentage"></i></div>
          <div className="info-text">
            <h4>Daily Offer</h4>
            <p>20% off on Family Platters</p>
          </div>
        </div>
        <div className="info-item">
          <div className="info-icon"><i className="fas fa-motorcycle"></i></div>
          <div className="info-text">
            <h4>Free Delivery</h4>
            <p>On all orders above $50</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-us">
        <div className="section-title">
          <h2>Why SVS Restaurant?</h2>
          <p>We redefine the standard of Indian fine dining</p>
        </div>
        <div className="benefits-grid">
          <div className="benefit-card">
            <div className="benefit-icon"><i className="fas fa-leaf"></i></div>
            <h3>Organic Spices</h3>
            <p>We use 100% natural, farm-fresh spices sourced directly from India.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><i className="fas fa-user-tie"></i></div>
            <h3>Expert Chefs</h3>
            <p>Our kitchen is led by award-winning chefs with 20+ years experience.</p>
          </div>
          <div className="benefit-card">
            <div className="benefit-icon"><i className="fas fa-utensils"></i></div>
            <h3>Authentic Taste</h3>
            <p>Traditional recipes passed down through generations of royalty.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="section-title">
          <h2>Guest Experiences</h2>
          <p>Don't just take our word for it, hear from our valued guests</p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              className="testimonial-card"
              whileHover={{ y: -10 }}
            >
              <div className="quote-icon"><i className="fas fa-quote-left"></i></div>
              <p className="t-content">{t.content}</p>
              <div className="t-author">
                <img src={t.avatar} alt={t.name} />
                <div className="t-info">
                  <h4>{t.name}</h4>
                  <span>{t.role}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <style jsx>{`
                .home-page {
                  overflow-x: hidden;
                }

                .hero-section {
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    padding: 100px 5%;
                    position: relative;
                }

                .hero-content {
                    display: flex;
                    gap: 60px;
                    align-items: center;
                    max-width: 1400px;
                    margin: 0 auto;
                }

                .hero-text { flex: 1.2; }
                .hero-image-box { flex: 0.8; }

                .welcome-badge {
                    background: rgba(231, 76, 60, 0.1);
                    color: var(--primary-color);
                    padding: 8px 20px;
                    border-radius: 50px;
                    font-weight: bold;
                    font-size: 0.9em;
                    letter-spacing: 1px;
                    text-transform: uppercase;
                }

                h1 {
                    font-size: 4.5em;
                    margin: 20px 0;
                    line-height: 1.1;
                    font-family: 'Playfair Display', serif;
                }

                h1 span {
                    color: var(--primary-color);
                    font-style: italic;
                }

                .hero-description {
                    font-size: 1.2em;
                    color: #aaa;
                    margin-bottom: 40px;
                    line-height: 1.8;
                    max-width: 600px;
                }

                .hero-actions {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 60px;
                }

                .btn-primary {
                    background: var(--primary-color);
                    color: white;
                    padding: 18px 40px;
                    border-radius: 15px;
                    text-decoration: none;
                    font-weight: bold;
                    box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
                    transition: transform 0.3s ease;
                }

                .btn-secondary {
                    border: 2px solid rgba(255,255,255,0.1);
                    color: white;
                    padding: 18px 40px;
                    border-radius: 15px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: all 0.3s ease;
                }

                .btn-secondary:hover {
                    background: white;
                    color: black;
                }

                .hero-stats {
                    display: flex;
                    gap: 40px;
                }

                .stat h3 {
                    font-size: 2em;
                    color: var(--secondary-color);
                    margin-bottom: 5px;
                }

                .stat p { color: #666; font-size: 0.9em; }

                .floating-plate {
                    position: relative;
                    animation: float 6s ease-in-out infinite;
                }

                .floating-plate img {
                    width: 100%;
                    border-radius: 50%;
                    box-shadow: 0 30px 60px rgba(0,0,0,0.5);
                    border: 15px solid rgba(255,255,255,0.05);
                }

                .info-bar {
                    display: flex;
                    background: rgba(255,255,255,0.03);
                    backdrop-filter: blur(10px);
                    padding: 30px 5%;
                    border-top: 1px solid rgba(255,255,255,0.05);
                    border-bottom: 1px solid rgba(255,255,255,0.05);
                    justify-content: space-around;
                }

                .info-item { display: flex; align-items: center; gap: 15px; }
                .info-icon { font-size: 1.5em; color: var(--primary-color); }
                .info-text h4 { margin-top: 5px; font-size: 1.1em; }
                .info-text p { color: #888; font-size: 0.85em; }

                .why-us, .testimonials { padding: 100px 5% 50px; text-align: center; }
                .section-title h2 { font-size: 3em; margin-bottom: 15px; font-family: 'Playfair Display', serif; }
                .section-title p { color: #888; font-size: 1.2em; margin-bottom: 60px; }

                .benefits-grid, .testimonials-grid {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 30px;
                    max-width: 1200px;
                    margin: 0 auto;
                }

                .benefit-card, .testimonial-card {
                    padding: 40px;
                    background: rgba(255,255,255,0.02);
                    border: 1px solid rgba(255,255,255,0.05);
                    border-radius: 20px;
                    transition: all 0.3s ease;
                }

                .benefit-card:hover, .testimonial-card:hover {
                    background: rgba(255,255,255,0.05);
                    border-color: var(--primary-color);
                }

                .benefit-icon {
                    font-size: 2.5em;
                    color: var(--primary-color);
                    margin-bottom: 25px;
                }

                .quote-icon { color: var(--primary-color); font-size: 1.5em; margin-bottom: 20px; text-align: left; }
                .t-content { color: #aaa; line-height: 1.8; font-style: italic; margin-bottom: 30px; text-align: left; }
                .t-author { display: flex; align-items: center; gap: 15px; }
                .t-author img { width: 50px; height: 50px; border-radius: 50%; }
                .t-info { text-align: left; }
                .t-info h4 { font-size: 1em; margin-bottom: 2px; }
                .t-info span { color: #666; font-size: 0.8em; }

                @media (max-width: 1024px) {
                    h1 { font-size: 3.5em; }
                    .hero-content { flex-direction: column; text-align: center; }
                    .hero-description { margin: 0 auto 40px; }
                    .hero-actions { justify-content: center; }
                    .hero-stats { justify-content: center; }
                    .benefits-grid, .testimonials-grid { grid-template-columns: 1fr; }
                }
            `}</style>
    </div>
  );
};

export default Home;
