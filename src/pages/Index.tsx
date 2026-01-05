import { useState } from "react";
import { motion } from "framer-motion";
import FloatingEmoji from "@/components/FloatingEmoji";
import PleadingCard from "@/components/PleadingCard";
import AcceptButton from "@/components/AcceptButton";
import ReasonsList from "@/components/ReasonsList";
import Confetti from "@/components/Confetti";
import ThankYouMessage from "@/components/ThankYouMessage";
import agmImage from "@/assets/agm-rayhan-ali.png";
import { AlertTriangle } from "lucide-react";

const Index = () => {
  const [accepted, setAccepted] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);

  const handleAccept = () => {
    if (!accepted) {
      setAccepted(true);
      setTimeout(() => setShowThankYou(true), 500);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden py-8 px-4">
      {/* Confetti effect */}
      <Confetti isActive={accepted} />
      
      {/* Thank you overlay */}
      <ThankYouMessage show={showThankYou} />
      
      {/* Floating emojis background */}
      <FloatingEmoji emoji="🙏" className="top-[10%] left-[5%]" delay={0} />
      <FloatingEmoji emoji="💼" className="top-[15%] right-[8%]" delay={0.3} />
      <FloatingEmoji emoji="📝" className="top-[40%] left-[3%]" delay={0.5} />
      <FloatingEmoji emoji="✨" className="top-[60%] right-[5%]" delay={0.7} />
      <FloatingEmoji emoji="🌟" className="bottom-[20%] left-[8%]" delay={0.9} />
      <FloatingEmoji emoji="❤️" className="bottom-[15%] right-[10%]" delay={1.1} />
      <FloatingEmoji emoji="😊" className="top-[70%] left-[15%]" delay={0.4} />
      <FloatingEmoji emoji="🎯" className="top-[25%] left-[20%]" delay={0.8} />

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-display text-foreground mb-2"
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            🙏 ছুটি Approve করুন 🙏
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-body text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            জরুরি আবেদন
          </motion.p>
        </motion.div>

        {/* Already on leave notice */}
        <motion.div
          className="mb-6 p-4 bg-accent/20 border-2 border-accent rounded-xl flex items-center gap-3"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 2 }}
          >
            <AlertTriangle className="w-8 h-8 text-accent" />
          </motion.div>
          <div>
            <p className="font-display text-xl text-foreground">
              ⚠️ আমি ইতিমধ্যে ছুটি কাটাচ্ছি!
            </p>
            <p className="font-body text-sm text-muted-foreground">
              প্লিজ স্যার, এখন শুধু approve করে দিন! 🥺
            </p>
          </div>
        </motion.div>

        {/* Main content card */}
        <PleadingCard delay={0.2}>
          {/* AGM Photo */}
          <div className="text-center mb-6">
            <motion.div
              className="inline-block mb-4 relative"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring", bounce: 0.5 }}
            >
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-primary shadow-playful mx-auto">
                <img 
                  src={agmImage} 
                  alt="MD Rayhan Ali - AGM" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Crown effect */}
              <motion.span 
                className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                👑
              </motion.span>
            </motion.div>
            
            <motion.h2 
              className="text-3xl md:text-5xl font-display text-foreground mb-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              প্রিয় <span className="text-primary">MD Rayhan Ali</span> স্যার
            </motion.h2>
            
            <motion.p
              className="text-lg font-body text-muted-foreground"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              মাননীয় AGM মহোদয়
            </motion.p>
          </div>

          <motion.div
            className="bg-muted/30 rounded-xl p-6 mb-6 border-2 border-dashed border-primary/30"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p className="text-lg md:text-xl font-body text-foreground leading-relaxed text-center">
              স্যার, আমি ইতিমধ্যে 
              <motion.span 
                className="inline-block mx-2 px-3 py-1 bg-accent/30 rounded-lg font-bold text-accent"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                ছুটিতে আছি
              </motion.span>
              এবং আপনার কাছে বিনীত অনুরোধ এটা 
              <motion.span 
                className="inline-block mx-2 px-3 py-1 bg-secondary/30 rounded-lg font-bold text-secondary"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                approve
              </motion.span>
              করে দিন! 🙏
            </p>
          </motion.div>

          <ReasonsList />

          <motion.div
            className="mt-8 p-4 bg-accent/10 rounded-xl border border-accent/30 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.p 
              className="font-display text-2xl text-foreground"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              🥺 স্যার প্লিজ! একবার approve করে দিন! 🥺
            </motion.p>
            <p className="font-body text-sm text-muted-foreground mt-2">
              আমি ছুটি থেকে ফিরে দ্বিগুণ কাজ করব! 💪
            </p>
          </motion.div>
        </PleadingCard>

        {/* Accept Button */}
        <motion.div 
          className="flex justify-center mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <AcceptButton onClick={handleAccept} accepted={accepted} />
        </motion.div>

        {/* Footer */}
        <motion.footer
          className="text-center mt-12 pb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          <p className="font-body text-muted-foreground">
            আপনার বিশ্বস্ত কর্মচারী 💕
          </p>
          <motion.p 
            className="font-display text-xl text-primary mt-2"
            animate={{ scale: [1, 1.03, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            ❤️ আপনি সেরা AGM! ❤️
          </motion.p>
        </motion.footer>
      </div>
    </div>
  );
};

export default Index;
