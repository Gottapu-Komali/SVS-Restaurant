import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { cartCount, toggleCart } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
    >
      <nav className={scrolled ? 'scrolled' : ''}>
        <div className="navbar-container">
          <NavLink to="/" className="logo-link">
            <div className="logo">SVS <span>Restaurant</span></div>
          </NavLink>

          <ul className="nav-links">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className={({ isActive }) => (isActive ? 'active' : '')}>
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/auth" className={({ isActive }) => (isActive ? 'active' : '')}>
                Login/Register
              </NavLink>
            </li>
          </ul>

          <div className="nav-actions">
            <motion.button
              className="cart-btn"
              onClick={toggleCart}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <i className="fas fa-shopping-basket"></i>
              {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
            </motion.button>
            <button className="mobile-menu-btn">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .logo span {
          color: var(--primary-color);
          font-weight: 300;
          font-size: 0.8em;
          margin-left: 5px;
        }

        .logo-link {
          text-decoration: none;
        }

        .nav-links {
          display: flex;
          gap: 30px;
          list-style: none;
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .cart-btn {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 10px;
          border-radius: 12px;
          color: white;
          cursor: pointer;
          position: relative;
          transition: all 0.3s ease;
        }

        .cart-btn:hover {
          background: var(--primary-color);
          border-color: var(--primary-color);
          transform: translateY(-2px);
        }

        .cart-count {
          position: absolute;
          top: -8px;
          right: -8px;
          background: var(--secondary-color);
          color: #000;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          font-size: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          font-size: 1.5em;
          cursor: pointer;
        }

        @media (max-width: 768px) {
          .nav-links { display: none; }
          .mobile-menu-btn { display: block; }
          .navbar-container {
            padding: 0 20px;
          }
        }
      `}</style>
    </motion.header>
  );
};

export default Navbar;
