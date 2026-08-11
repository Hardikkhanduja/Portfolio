import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

 
export const Preloader = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 10) + 5;
      if (current >= 100) {
        current = 100;
        clearInterval(interval);
        setTimeout(onComplete, 500); 
      }
      setProgress(current);
    }, 50);
    
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ y: 0 }}
      exit={{ y: "-100%" }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[100] flex items-end justify-end bg-background p-12"
    >
      <div className="font-mono text-[10vw] leading-none tracking-tighter text-accent font-bold">
        {progress}%
      </div>
    </motion.div>
  );
};
