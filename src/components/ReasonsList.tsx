import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, X, Plus } from "lucide-react";

const defaultReasons = [
  "আমি সত্যিই খুব ক্লান্ত হয়ে গেছি 😫",
  "বাসায় জরুরি কাজ আছে 🏠",
  "মাথা ব্যথা করছে প্রচণ্ড 🤕",
  "মানসিক চাপ অনেক বেশি 🧠",
  "ছুটি নিলে আরও ভালো কাজ করতে পারব 💪",
];

const ReasonsList = () => {
  const [reasons, setReasons] = useState<string[]>(defaultReasons);
  const [newReason, setNewReason] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleDelete = (index: number) => {
    setReasons(prev => prev.filter((_, i) => i !== index));
  };

  const handleAdd = () => {
    if (newReason.trim()) {
      setReasons(prev => [...prev, newReason.trim()]);
      setNewReason("");
      setIsAdding(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleAdd();
    }
  };

  return (
    <motion.div
      className="mt-6 space-y-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
    >
      <h3 className="text-xl md:text-2xl font-display text-foreground/80 mb-4">
        ছুটি নেওয়ার কারণসমূহ:
      </h3>
      
      <AnimatePresence initial={false}>
        {reasons.map((reason, index) => (
          <motion.div
            key={reason}
            className="flex items-center gap-3 bg-muted/50 rounded-xl px-4 py-3 border border-border group"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0, marginBottom: 0 }}
            transition={{ duration: 0.2 }}
          >
            <CheckCircle2 className="w-5 h-5 text-secondary flex-shrink-0" />
            <span className="font-body text-foreground flex-1">{reason}</span>
            <motion.button
              onClick={() => handleDelete(index)}
              className="opacity-0 group-hover:opacity-100 p-1.5 rounded-full bg-accent/20 hover:bg-accent text-accent hover:text-accent-foreground transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Add new reason section */}
      <AnimatePresence>
        {isAdding ? (
          <motion.div
            className="flex items-center gap-3 bg-primary/10 rounded-xl px-4 py-3 border-2 border-dashed border-primary/40"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Plus className="w-5 h-5 text-primary flex-shrink-0" />
            <input
              type="text"
              value={newReason}
              onChange={(e) => setNewReason(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="নতুন কারণ লিখুন..."
              className="flex-1 bg-transparent border-none outline-none font-body text-foreground placeholder:text-muted-foreground"
              autoFocus
            />
            <motion.button
              onClick={handleAdd}
              className="px-4 py-1.5 rounded-lg bg-primary text-primary-foreground font-body text-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              যোগ করুন
            </motion.button>
            <motion.button
              onClick={() => {
                setIsAdding(false);
                setNewReason("");
              }}
              className="p-1.5 rounded-full bg-muted hover:bg-muted/80 text-muted-foreground"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-4 h-4" />
            </motion.button>
          </motion.div>
        ) : (
          <motion.button
            onClick={() => setIsAdding(true)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5 transition-all font-body"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Plus className="w-5 h-5" />
            নতুন কারণ যোগ করুন
          </motion.button>
        )}
      </AnimatePresence>

      {reasons.length === 0 && (
        <motion.p
          className="text-center py-4 text-muted-foreground font-body"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          কোনো কারণ নেই! উপরের বাটনে ক্লিক করে যোগ করুন।
        </motion.p>
      )}
    </motion.div>
  );
};

export default ReasonsList;
