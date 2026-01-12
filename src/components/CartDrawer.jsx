import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import confetti from 'canvas-confetti';

const CartDrawer = () => {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cartTotal, clearCart } = useCart();

    const handleCheckout = () => {
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#e74c3c', '#f1c40f', '#ffffff']
        });
        alert('Thank you for your order! Our chefs are starting to prepare your feast.');
        clearCart();
        toggleCart();
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        className="cart-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={toggleCart}
                    />
                    <motion.div
                        className="cart-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    >
                        <div className="cart-header">
                            <h2>Your Basket</h2>
                            <button className="close-cart" onClick={toggleCart}>
                                <i className="fas fa-times"></i>
                            </button>
                        </div>

                        <div className="cart-items">
                            {cart.length === 0 ? (
                                <div className="empty-cart">
                                    <i className="fas fa-shopping-basket"></i>
                                    <p>Your basket is empty</p>
                                    <button onClick={toggleCart} className="start-shopping">Browse Menu</button>
                                </div>
                            ) : (
                                cart.map((item) => (
                                    <motion.div
                                        key={item.id}
                                        className="cart-item"
                                        layout
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <img src={item.image_url} alt={item.name} />
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p>${item.price.toFixed(2)}</p>
                                            <div className="quantity-controls">
                                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                        </div>
                                        <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                            <i className="fas fa-trash"></i>
                                        </button>
                                    </motion.div>
                                ))
                            )}
                        </div>

                        {cart.length > 0 && (
                            <div className="cart-footer">
                                <div className="summary">
                                    <div className="summary-line">
                                        <span>Subtotal</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                    <div className="summary-line">
                                        <span>Delivery Fee</span>
                                        <span>FREE</span>
                                    </div>
                                    <div className="summary-line total">
                                        <span>Total</span>
                                        <span>${cartTotal.toFixed(2)}</span>
                                    </div>
                                </div>
                                <button className="checkout-btn" onClick={handleCheckout}>
                                    Confirm Order (${cartTotal.toFixed(2)})
                                </button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}

            <style jsx>{`
        .cart-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.7);
          backdrop-filter: blur(5px);
          z-index: 2000;
        }

        .cart-drawer {
          position: fixed;
          top: 0; right: 0; bottom: 0;
          width: 100%;
          max-width: 450px;
          background: #121212;
          z-index: 2001;
          display: flex;
          flex-direction: column;
          box-shadow: -10px 0 30px rgba(0,0,0,0.5);
          border-left: 1px solid rgba(255,255,255,0.05);
        }

        .cart-header {
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border-bottom: 1px solid rgba(255,255,255,0.05);
        }

        .close-cart {
          background: none;
          border: none;
          color: white;
          font-size: 1.5em;
          cursor: pointer;
        }

        .cart-items {
          flex: 1;
          overflow-y: auto;
          padding: 20px;
        }

        .empty-cart {
          text-align: center;
          margin-top: 100px;
          color: #666;
        }

        .empty-cart i { font-size: 4em; margin-bottom: 20px; }
        .start-shopping {
          margin-top: 20px;
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 10px 25px;
          border-radius: 50px;
          cursor: pointer;
        }

        .cart-item {
          display: flex;
          gap: 15px;
          background: rgba(255,255,255,0.03);
          padding: 15px;
          border-radius: 15px;
          margin-bottom: 15px;
          align-items: center;
        }

        .cart-item img {
          width: 80px;
          height: 80px;
          border-radius: 10px;
          object-fit: cover;
        }

        .item-details { flex: 1; }
        .item-details h4 { margin-bottom: 5px; }
        .item-details p { color: var(--secondary-color); font-weight: bold; }

        .quantity-controls {
          display: flex;
          align-items: center;
          gap: 15px;
          margin-top: 10px;
        }

        .quantity-controls button {
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: none;
          color: white;
          cursor: pointer;
        }

        .remove-item {
          background: none;
          border: none;
          color: #444;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .remove-item:hover { color: var(--primary-color); }

        .cart-footer {
          padding: 30px;
          background: rgba(255,255,255,0.02);
          border-top: 1px solid rgba(255,255,255,0.05);
        }

        .summary-line {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          color: #888;
        }

        .summary-line.total {
          margin-top: 20px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
          color: white;
          font-size: 1.3em;
          font-weight: bold;
        }

        .checkout-btn {
          width: 100%;
          padding: 18px;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 15px;
          font-weight: bold;
          font-size: 1.1em;
          cursor: pointer;
          margin-top: 25px;
          box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
        }
      `}</style>
        </AnimatePresence>
    );
};

export default CartDrawer;
