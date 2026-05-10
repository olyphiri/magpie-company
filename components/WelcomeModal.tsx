// components/WelcomeModal.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has seen the welcome message before using localStorage
    const hasSeenWelcome = localStorage.getItem("hasSeenWelcome");
    if (!hasSeenWelcome) {
      // If not, set a small delay and show the modal
      const timer = setTimeout(() => setIsOpen(true), 500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    // Set a flag so the modal won't show again on future visits
    localStorage.setItem("hasSeenWelcome", "true");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full bg-gradient-to-br from-navy-light to-navy-deep rounded-2xl shadow-2xl border border-electric-blue/30 p-6 text-center"
          >
            {/* Decorative glowing orb */}
            <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-electric-blue/20 rounded-full blur-2xl"></div>
            
            <div className="mt-2 mb-6">
              {/* Animated text container */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-blue via-cyan to-electric-blue bg-clip-text text-transparent animate-pulse">
                  Welcome to Magpie!
                </h2>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="mt-3"
              >
                <p className="text-gray-300 text-lg">
                  Let's transform your business with{" "}
                  <span className="text-electric-blue font-semibold">
                    compliance & digital innovation
                  </span>.
                </p>
              </motion.div>

              {/* Optional playful cursor effect */}
              <motion.div
                animate={{ opacity: [1, 0, 1] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="inline-block w-1.5 h-5 bg-electric-blue ml-1 align-middle"
              ></motion.div>
            </div>

            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleClose}
              className="mt-4 px-6 py-2 bg-gradient-to-r from-electric-blue to-cyan text-navy-deep font-semibold rounded-full shadow-lg hover:shadow-electric-blue/50 transition-all duration-300"
            >
              Let's Get Started →
            </motion.button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}