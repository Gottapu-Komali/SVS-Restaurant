import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ReservationModal = ({ isOpen, onClose }) => {
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Table reserved successfully! A confirmation email has been sent.');
        onClose();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        className="modal-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                    />
                    <motion.div
                        className="modal-container"
                        initial={{ opacity: 0, scale: 0.8, y: 50 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.8, y: 50 }}
                    >
                        <div className="modal-header">
                            <h3>Reserve Your Royal Table</h3>
                            <button onClick={onClose}><i className="fas fa-times"></i></button>
                        </div>

                        <form onSubmit={handleSubmit} className="reservation-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" required placeholder="Your Name" />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" required placeholder="Your Email" />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Date</label>
                                    <input type="date" required />
                                </div>
                                <div className="form-group">
                                    <label>Time</label>
                                    <input type="time" required />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label>Guests</label>
                                    <select required>
                                        <option value="1">1 Person</option>
                                        <option value="2">2 People</option>
                                        <option value="3">3 People</option>
                                        <option value="4">4 People</option>
                                        <option value="5+">5+ People</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>Occasion</label>
                                    <select>
                                        <option value="">None</option>
                                        <option value="birthday">Birthday</option>
                                        <option value="anniversary">Anniversary</option>
                                        <option value="business">Business Meeting</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Special Requests</label>
                                <textarea placeholder="e.g. Allergies, table preferences..."></textarea>
                            </div>

                            <button type="submit" className="reserve-btn">Confirm Reservation</button>
                        </form>
                    </motion.div>
                </>
            )}

            <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.8);
          backdrop-filter: blur(10px);
          z-index: 3000;
        }

        .modal-container {
          position: fixed;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 90%;
          max-width: 600px;
          max-height: 90vh;
          overflow-y: auto;
          background: #121212;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 30px;
          padding: 40px;
          z-index: 3001;
          box-shadow: 0 30px 60px rgba(0,0,0,0.5);
          scrollbar-width: thin;
          scrollbar-color: var(--primary-color) transparent;
        }

        .modal-container::-webkit-scrollbar {
          width: 6px;
        }

        .modal-container::-webkit-scrollbar-thumb {
          background-color: var(--primary-color);
          border-radius: 10px;
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
        }

        .modal-header h3 { font-size: 1.8em; font-family: 'Playfair Display', serif; }
        .modal-header button { background: none; border: none; color: #666; font-size: 1.5em; cursor: pointer; }

        .reservation-form { display: flex; flex-direction: column; gap: 20px; }
        .form-row { display: flex; gap: 20px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; flex: 1; }
        
        label { font-size: 0.9em; color: #888; font-weight: 500; }
        input, select, textarea {
          padding: 12px 15px;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          color: white;
          outline: none;
        }
        input:focus { border-color: var(--primary-color); }
        textarea { height: 100px; resize: none; }

        .reserve-btn {
          background: var(--primary-color);
          color: white;
          border: none;
          padding: 18px;
          border-radius: 15px;
          font-weight: bold;
          font-size: 1.1em;
          cursor: pointer;
          margin-top: 10px;
          box-shadow: 0 10px 20px rgba(231, 76, 60, 0.3);
        }

        @media (max-width: 600px) {
          .form-row { flex-direction: column; gap: 20px; }
          .modal-container { padding: 30px 20px; border-radius: 20px; width: 95%; }
          .modal-header h3 { font-size: 1.4em; }
          .modal-header { margin-bottom: 20px; }
          .reserve-btn { padding: 15px; }
        }
      `}</style>
        </AnimatePresence>
    );
};

export default ReservationModal;
