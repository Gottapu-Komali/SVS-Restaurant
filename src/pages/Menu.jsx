import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const menuItems = [
    {
        id: 1,
        name: 'Hyderabadi Dum Biryani',
        description: 'Aromatic basmati rice layered with tender meat, herbs, and signature spices',
        price: 18.99,
        category: 'Biryani',
        image_url: 'https://images.pexels.com/photos/7394819/pexels-photo-7394819.jpeg',
        special: true,
        rating: 5,
        prepTime: '25-30 min',
        isVeg: false
    },
    {
        id: 2,
        name: 'Butter Chicken',
        description: 'Creamy tomato curry with tender chicken pieces and aromatic spices',
        price: 16.99,
        category: 'Curries',
        image_url: 'https://images.pexels.com/photos/7394827/pexels-photo-7394827.jpeg',
        rating: 4.8,
        prepTime: '20-25 min',
        isVeg: false
    },
    {
        id: 3,
        name: 'Paneer Tikka',
        description: 'Grilled cottage cheese marinated in spiced yogurt',
        price: 12.99,
        category: 'Starters',
        image_url: 'https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg',
        rating: 4.7,
        prepTime: '15-20 min',
        isVeg: true
    },
    {
        id: 4,
        name: 'Gulab Jamun',
        description: 'Sweet milk dumplings soaked in rose-scented syrup',
        price: 6.99,
        category: 'Desserts',
        image_url: 'https://images.pexels.com/photos/14467427/pexels-photo-14467427.jpeg',
        rating: 4.9,
        prepTime: '10 min',
        isVeg: true
    },
    {
        id: 5,
        name: 'Tandoori Roti',
        description: 'Traditional whole wheat bread baked in a clay oven',
        price: 2.99,
        category: 'Breads',
        image_url: 'https://images.pexels.com/photos/12737657/pexels-photo-12737657.jpeg',
        rating: 4.5,
        prepTime: '5-8 min',
        isVeg: true
    },
    {
        id: 6,
        name: 'Chicken 65',
        description: 'Spicy, deep-fried chicken dish originating from Chennai',
        price: 14.99,
        category: 'Starters',
        image_url: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg',
        rating: 4.8,
        prepTime: '15-20 min',
        isVeg: false
    }
];

const categories = ['All', 'Biryani', 'Starters', 'Curries', 'Desserts', 'Breads'];

const Menu = () => {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');
    const { addToCart } = useCart();

    const filteredItems = useMemo(() => {
        return menuItems.filter(item => {
            const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
            const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.description.toLowerCase().includes(searchQuery.toLowerCase());
            return matchesCategory && matchesSearch;
        });
    }, [activeCategory, searchQuery]);

    const handleAddToCart = (item) => {
        addToCart(item);
    };

    return (
        <div className="menu-page">
            <section className="menu-header">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Signature Menu
                </motion.h2>
                <p className="menu-subtitle">Savor the authentic flavors crafted with heritage recipes</p>

                <div className="menu-controls">
                    <div className="search-box">
                        <i className="fas fa-search"></i>
                        <input
                            type="text"
                            placeholder="Search dishes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="category-filter">
                        {categories.map((cat) => (
                            <motion.button
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {cat}
                            </motion.button>
                        ))}
                    </div>
                </div>
            </section>

            <div className="menu-container">
                <AnimatePresence mode="popLayout">
                    {filteredItems.length > 0 ? (
                        filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                className="card"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="card-image-wrapper">
                                    <img src={item.image_url} alt={item.name} />
                                    <div className="card-badge">
                                        <span className={`veg-indicator ${item.isVeg ? 'veg' : 'non-veg'}`}>
                                            <i className="fas fa-circle"></i>
                                        </span>
                                        {item.special && <span className="special-tag">Chef's Special</span>}
                                    </div>
                                    <div className="prep-time-overlay">
                                        <i className="far fa-clock"></i> {item.prepTime}
                                    </div>
                                </div>

                                <div className="card-content">
                                    <div className="card-header">
                                        <h3>{item.name}</h3>
                                        <div className="rating">
                                            <i className="fas fa-star"></i> {item.rating}
                                        </div>
                                    </div>
                                    <p>{item.description}</p>
                                    <div className="card-footer">
                                        <span className="price">${item.price}</span>
                                        <button className="order-btn" onClick={() => handleAddToCart(item)}>
                                            <i className="fas fa-plus"></i> Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="no-results">
                            <i className="fas fa-search"></i>
                            <p>No dishes found matching your search.</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>

            <style jsx>{`
        .menu-page {
          padding-top: 100px;
          background: linear-gradient(to bottom, #121212, #1a1a1a);
          min-height: 100vh;
        }

        .menu-header {
          text-align: center;
          padding: 40px 5%;
        }

        .menu-subtitle {
          color: #888;
          font-size: 1.2em;
          margin-bottom: 30px;
        }

        .menu-controls {
          max-width: 800px;
          margin: 0 auto;
        }

        .search-box {
          position: relative;
          margin-bottom: 25px;
        }

        .search-box i {
          position: absolute;
          left: 20px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .search-box input {
          width: 100%;
          padding: 15px 15px 15px 50px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 50px;
          color: white;
          outline: none;
          transition: border-color 0.3s ease;
        }

        .search-box input:focus {
          border-color: var(--primary-color);
        }

        .category-filter {
          display: flex;
          justify-content: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-bottom: 40px;
        }

        .filter-btn {
          padding: 10px 25px;
          border-radius: 30px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }

        .filter-btn.active {
          background: var(--primary-color);
          border-color: var(--primary-color);
          box-shadow: 0 5px 15px rgba(231, 76, 60, 0.4);
        }

        .no-results {
          grid-column: 1 / -1;
          text-align: center;
          padding: 100px;
          color: #444;
        }
        .no-results i { font-size: 3em; margin-bottom: 20px; }

        .card-image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .card-badge {
          position: absolute;
          top: 15px;
          left: 15px;
          display: flex;
          gap: 10px;
          z-index: 2;
        }

        .veg-indicator {
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid;
          font-size: 10px;
        }

        .veg-indicator.veg { border-color: #2ecc71; color: #2ecc71; }
        .veg-indicator.non-veg { border-color: #e74c3c; color: #e74c3c; }

        .special-tag {
          background: var(--secondary-color);
          color: #000;
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8em;
          font-weight: bold;
        }

        .prep-time-overlay {
          position: absolute;
          bottom: 10px;
          right: 10px;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(5px);
          padding: 5px 12px;
          border-radius: 20px;
          font-size: 0.85em;
          color: white;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 10px;
        }

        .rating {
          color: var(--secondary-color);
          font-weight: bold;
          font-size: 0.9em;
        }

        .order-btn {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        @media (max-width: 768px) {
          .category-filter { gap: 10px; }
          .filter-btn { padding: 8px 18px; font-size: 0.9em; }
        }
      `}</style>
        </div>
    );
};

export default Menu;
