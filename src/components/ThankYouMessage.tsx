import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, Heart, Star } from "lucide-react";

interface ThankYouMessageProps {
  show: boolean;
}

const ThankYouMessage = ({ show }: ThankYouMessageProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center z-40 bg-background/80 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="text-center p-8 md:p-12 rounded-3xl bg-card shadow-float border-4 border-primary max-w-lg mx-4"
            initial={{ scale: 0, rotate: -10 }}
            animate={{ scale: 1, rotate: 0 }}
            exit={{ scale: 0, rotate: 10 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <motion.div
              className="flex justify-center gap-4 mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <PartyPopper className="w-16 h-16 text-primary" />
              <Heart className="w-16 h-16 text-accent fill-accent" />
              <Star className="w-16 h-16 text-gold fill-gold" />
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-6xl font-display text-foreground mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 0.5, repeat: Infinity }}
            >
              🎉 ধন্যবাদ স্যার! 🎉
            </motion.h2>
            
            <motion.p
              className="text-xl md:text-2xl font-body text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              আপনি সেরা AGM! 
            </motion.p>
            
            <motion.p
              className="text-lg font-body text-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              MD Rayhan Ali স্যার - আপনার জন্য অনেক দোয়া রইল! 🙏❤️
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouMessage;
