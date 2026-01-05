import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  "আমি সত্যিই খুব ক্লান্ত হয়ে গেছি 😫",
  "বাসায় জরুরি কাজ আছে 🏠",
  "মাথা ব্যথা করছে প্রচণ্ড 🤕",
  "মানসিক চাপ অনেক বেশি 🧠",
  "ছুটি নিলে আরও ভালো কাজ করতে পারব 💪",
];

const ReasonsList = () => {
  return (
    <motion.div
      className="mt-6 space-y-3"
      initial="hidden"
      animate="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.8,
          },
        },
      }}
    >
      <motion.h3 
        className="text-xl md:text-2xl font-display text-foreground/80 mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        Leave নেওয়ার কারণসমূহ:
      </motion.h3>
      
      {reasons.map((reason, index) => (
        <motion.div
          key={index}
          className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3 border border-border"
          variants={{
            hidden: { opacity: 0, x: -30 },
            visible: { opacity: 1, x: 0 },
          }}
          whileHover={{ x: 10, backgroundColor: "hsl(var(--muted))" }}
        >
          <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
          <span className="font-body text-foreground">{reason}</span>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ReasonsList;
