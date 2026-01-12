import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const videos = [
    'https://cdn.pixabay.com/video/2023/10/10/vid_20231010_135736_394.mp4',
    'https://cdn.pixabay.com/video/2024/1/17/vid_20240117_133131_491.mp4',
    'https://cdn.pixabay.com/video/2023/12/28/vid_20231228_133619_491.mp4'
];

const BackgroundVideo = () => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }, 15000); // Rotate every 15 seconds for a more dynamic feel

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-video-container">
            <AnimatePresence mode="wait">
                <motion.video
                    key={videos[currentVideoIndex]}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="back-video"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                >
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                </motion.video>
            </AnimatePresence>
            <div className="hero-overlay"></div>

            <style jsx>{`
        .hero-video-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: -1;
          background: #000;
        }

        .back-video {
          width: 100%;
          height: 100%;
          object-fit: cover;
          position: absolute;
          top: 0;
          left: 0;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(to bottom, 
            rgba(0,0,0,0.5) 0%, 
            rgba(0,0,0,0.8) 100%
          );
          z-index: 1;
        }
      `}</style>
        </div>
    );
};

export default BackgroundVideo;
