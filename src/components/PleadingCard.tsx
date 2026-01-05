import { motion } from "framer-motion";
import { Heart, Star } from "lucide-react";

interface PleadingCardProps {
  children: React.ReactNode;
  delay?: number;
}

const PleadingCard = ({ children, delay = 0 }: PleadingCardProps) => {
  return (
    <motion.div
      className="relative bg-card rounded-2xl p-6 md:p-8 shadow-float border-2 border-primary/20"
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
      whileHover={{ scale: 1.02, rotate: [-1, 1, -1, 0] }}
    >
      {/* Decorative corners */}
      <motion.div 
        className="absolute -top-3 -left-3 text-primary"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-6 h-6 fill-primary" />
      </motion.div>
      <motion.div 
        className="absolute -top-3 -right-3 text-accent"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <Heart className="w-6 h-6 fill-accent" />
      </motion.div>
      <motion.div 
        className="absolute -bottom-3 -left-3 text-secondary"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
      >
        <Heart className="w-6 h-6 fill-secondary" />
      </motion.div>
      <motion.div 
        className="absolute -bottom-3 -right-3 text-gold"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <Star className="w-6 h-6 fill-gold" />
      </motion.div>
      
      {children}
    </motion.div>
  );
};

export default PleadingCard;
