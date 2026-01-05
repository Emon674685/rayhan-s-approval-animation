import { motion } from "framer-motion";
import { Check, Sparkles } from "lucide-react";

interface AcceptButtonProps {
  onClick: () => void;
  accepted: boolean;
}

const AcceptButton = ({ onClick, accepted }: AcceptButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className={`relative px-12 py-5 rounded-full font-display text-2xl md:text-3xl font-bold
        ${accepted 
          ? "bg-secondary text-secondary-foreground" 
          : "bg-primary text-primary-foreground gradient-fun animate-pulse-glow"
        }
        shadow-playful transition-all duration-300`}
      whileHover={{ scale: accepted ? 1 : 1.1 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      <span className="flex items-center gap-3">
        {accepted ? (
          <>
            <Check className="w-8 h-8" />
            ধন্যবাদ স্যার! 🎉
          </>
        ) : (
          <>
            <Sparkles className="w-8 h-8" />
            ছুটি Approve করুন! 🙏
          </>
        )}
      </span>
      
      {/* Pulsing ring effect */}
      {!accepted && (
        <>
          <motion.span
            className="absolute inset-0 rounded-full border-4 border-primary"
            animate={{ scale: [1, 1.3], opacity: [0.5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.span
            className="absolute inset-0 rounded-full border-4 border-accent"
            animate={{ scale: [1, 1.5], opacity: [0.3, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
          />
        </>
      )}
    </motion.button>
  );
};

export default AcceptButton;
