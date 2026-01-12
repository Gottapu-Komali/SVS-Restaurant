import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`${isLogin ? 'Login' : 'Registration'} successful! Welcome to SVS.`);
    };

    return (
        <div className="auth-page">
            <div className="auth-overlay"></div>
            <motion.div
                className="auth-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <div className="auth-card">
                    <div className="auth-toggle">
                        <button
                            className={isLogin ? 'active' : ''}
                            onClick={() => setIsLogin(true)}
                        >
                            Login
                        </button>
                        <button
                            className={!isLogin ? 'active' : ''}
                            onClick={() => setIsLogin(false)}
                        >
                            Sign Up
                        </button>
                        <motion.div
                            className="toggle-bg"
                            animate={{ x: isLogin ? 0 : '100%' }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? 'login' : 'signup'}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h2>{isLogin ? 'Welcome Back' : 'Join Our Family'}</h2>
                            <p className="auth-desc">
                                {isLogin
                                    ? 'Please login to access your account and orders.'
                                    : 'Create an account to start experience the royal taste.'}
                            </p>

                            <form onSubmit={handleSubmit} className="auth-form">
                                {!isLogin && (
                                    <div className="input-group">
                                        <i className="fas fa-user"></i>
                                        <input type="text" placeholder="Full Name" required />
                                    </div>
                                )}
                                <div className="input-group">
                                    <i className="fas fa-envelope"></i>
                                    <input type="email" placeholder="Email Address" required />
                                </div>
                                <div className="input-group">
                                    <i className="fas fa-lock"></i>
                                    <input type="password" placeholder="Password" required />
                                </div>
                                {!isLogin && (
                                    <div className="input-group">
                                        <i className="fas fa-check-circle"></i>
                                        <input type="password" placeholder="Confirm Password" required />
                                    </div>
                                )}

                                {isLogin && (
                                    <div className="form-options">
                                        <label>
                                            <input type="checkbox" /> Remember me
                                        </label>
                                        <a href="#" className="forgot-pass">Forgot Password?</a>
                                    </div>
                                )}

                                <motion.button
                                    type="submit"
                                    className="submit-btn"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    {isLogin ? 'Sign In' : 'Create Account'}
                                </motion.button>
                            </form>

                            <div className="social-auth">
                                <p>Or continue with</p>
                                <div className="social-icons">
                                    <button className="social-btn"><i className="fab fa-google"></i></button>
                                    <button className="social-btn"><i className="fab fa-facebook-f"></i></button>
                                    <button className="social-btn"><i className="fab fa-apple"></i></button>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </motion.div>

            <style jsx>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 80px 20px;
          position: relative;
        }

        .auth-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.6);
          backdrop-filter: blur(10px);
          z-index: 0;
        }

        .auth-container {
          width: 100%;
          max-width: 450px;
          position: relative;
          z-index: 1;
        }

        .auth-card {
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 30px;
          padding: 40px;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
        }

        .auth-toggle {
          display: flex;
          background: rgba(255,255,255,0.05);
          border-radius: 50px;
          padding: 5px;
          position: relative;
          margin-bottom: 40px;
        }

        .auth-toggle button {
          flex: 1;
          padding: 12px;
          border: none;
          background: none;
          color: #888;
          cursor: pointer;
          font-weight: 600;
          z-index: 1;
          transition: color 0.3s ease;
        }

        .auth-toggle button.active {
          color: white;
        }

        .toggle-bg {
          position: absolute;
          width: calc(50% - 5px);
          height: calc(100% - 10px);
          background: var(--primary-color);
          border-radius: 50px;
          left: 5px;
          top: 5px;
        }

        h2 {
          font-size: 2em;
          margin-bottom: 10px;
          text-align: center;
        }

        .auth-desc {
          color: #aaa;
          text-align: center;
          margin-bottom: 30px;
          font-size: 0.95em;
        }

        .input-group {
          position: relative;
          margin-bottom: 20px;
        }

        .input-group i {
          position: absolute;
          left: 15px;
          top: 50%;
          transform: translateY(-50%);
          color: #666;
        }

        .input-group input {
          width: 100%;
          padding: 14px 15px 14px 45px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          outline: none;
          transition: all 0.3s ease;
        }

        .input-group input:focus {
          border-color: var(--primary-color);
          background: rgba(255, 255, 255, 0.1);
        }

        .form-options {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          font-size: 0.9em;
          color: #aaa;
        }

        .forgot-pass {
          color: var(--primary-color);
          text-decoration: none;
        }

        .submit-btn {
          width: 100%;
          padding: 15px;
          background: var(--primary-color);
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: bold;
          font-size: 1.1em;
          cursor: pointer;
          margin-bottom: 30px;
          box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
        }

        .social-auth {
          text-align: center;
          border-top: 1px solid rgba(255,255,255,0.1);
          padding-top: 30px;
        }

        .social-auth p {
          color: #666;
          font-size: 0.9em;
          margin-bottom: 20px;
        }

        .social-icons {
          display: flex;
          justify-content: center;
          gap: 15px;
        }

        .social-btn {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          color: white;
          cursor: pointer;
          font-size: 1.2em;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .social-btn:hover {
          background: rgba(255,255,255,0.1);
          transform: translateY(-3px);
        }
      `}</style>
        </div>
    );
};

export default Auth;
