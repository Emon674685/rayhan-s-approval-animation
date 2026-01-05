import { motion, AnimatePresence } from "framer-motion";
import { PartyPopper, Heart, Star } from "lucide-react";
import agmImage from "@/assets/agm-rayhan-ali.png";

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
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            transition={{ type: "spring", bounce: 0.5 }}
          >
            <motion.div
              className="flex justify-center gap-4 mb-6"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <PartyPopper className="w-12 h-12 text-primary" />
              <Heart className="w-12 h-12 text-accent fill-accent" />
              <Star className="w-12 h-12 text-gold fill-gold" />
            </motion.div>

            {/* AGM Image in thank you */}
            <motion.div
              className="w-20 h-20 rounded-full overflow-hidden border-4 border-secondary mx-auto mb-4"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              <img 
                src={agmImage} 
                alt="MD Rayhan Ali" 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.h2
              className="text-4xl md:text-5xl font-display text-foreground mb-4"
              animate={{ scale: [1, 1.03, 1] }}
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
              আপনি সত্যিই সেরা AGM! 
            </motion.p>
            
            <motion.p
              className="text-lg font-body text-foreground mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              MD Rayhan Ali স্যার - আপনার জন্য অনেক দোয়া রইল! 🙏❤️
            </motion.p>

            <motion.div
              className="mt-6 px-6 py-3 bg-secondary/20 rounded-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              <p className="font-display text-xl text-secondary">
                ছুটি Approved! ✅
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThankYouMessage;
