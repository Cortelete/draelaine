import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';

interface CoinLogoProps {
  src: string;
  alt: string;
}

export default function CoinLogo({ src, alt }: CoinLogoProps) {
  const [clicks, setClicks] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (clicks > 0) {
      const duration = Math.max(0.2, 2 / clicks); // Gets faster with more clicks
      
      controls.start({
        rotateY: [0, 360 * clicks],
        transition: { 
          duration: duration * clicks, 
          ease: "easeOut" 
        }
      }).then(() => {
        // Reset clicks after animation finishes to allow spinning again
        setClicks(0);
        controls.set({ rotateY: 0 });
      });
    }
  }, [clicks, controls]);

  return (
    <motion.div
      className="relative w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 cursor-pointer perspective-1000"
      onClick={() => setClicks(c => c + 1)}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        animate={controls}
        className="w-full h-full flex items-center justify-center p-2"
        style={{ transformStyle: 'preserve-3d' }}
      >
        <img 
          src={src} 
          alt={alt} 
          className="w-full h-full object-contain drop-shadow-md"
          onError={(e) => {
            // Fallback if image is not found
            const target = e.target as HTMLImageElement;
            target.src = 'https://ui-avatars.com/api/?name=Elaine+Ferreira&background=dfc37a&color=fff&size=200';
          }}
        />
      </motion.div>
    </motion.div>
  );
}
