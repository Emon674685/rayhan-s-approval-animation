import { motion } from "framer-motion";

interface FloatingEmojiProps {
  emoji: string;
  className?: string;
  delay?: number;
}

const FloatingEmoji = ({ emoji, className = "", delay = 0 }: FloatingEmojiProps) => {
  return (
    <motion.div
      className={`absolute text-4xl md:text-6xl select-none ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: 1, 
        y: [0, -15, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay },
        y: {
          duration: 2 + Math.random(),
          repeat: Infinity,
          ease: "easeInOut",
          delay,
        }
      }}
    >
      {emoji}
    </motion.div>
  );
};

export default FloatingEmoji;
