import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ConfettiPiece {
  id: number;
  x: number;
  color: string;
  delay: number;
  size: number;
}

interface ConfettiProps {
  isActive: boolean;
}

const colors = [
  "hsl(35, 95%, 55%)", // gold
  "hsl(350, 80%, 60%)", // coral
  "hsl(175, 60%, 45%)", // teal
  "hsl(280, 70%, 60%)", // purple
  "hsl(45, 100%, 50%)", // yellow
  "hsl(10, 80%, 65%)", // orange
];

const Confetti = ({ isActive }: ConfettiProps) => {
  const [pieces, setPieces] = useState<ConfettiPiece[]>([]);

  useEffect(() => {
    if (isActive) {
      const newPieces: ConfettiPiece[] = [];
      for (let i = 0; i < 100; i++) {
        newPieces.push({
          id: i,
          x: Math.random() * 100,
          color: colors[Math.floor(Math.random() * colors.length)],
          delay: Math.random() * 0.5,
          size: 8 + Math.random() * 8,
        });
      }
      setPieces(newPieces);

      // Clear confetti after animation
      const timer = setTimeout(() => {
        setPieces([]);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, [isActive]);

  return (
    <AnimatePresence>
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${piece.x}%`,
            top: -20,
            width: piece.size,
            height: piece.size,
            backgroundColor: piece.color,
            borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          }}
          initial={{ y: -20, opacity: 1, rotate: 0 }}
          animate={{
            y: window.innerHeight + 100,
            opacity: 0,
            rotate: 720 * (Math.random() > 0.5 ? 1 : -1),
            x: (Math.random() - 0.5) * 200,
          }}
          transition={{
            duration: 2.5 + Math.random(),
            delay: piece.delay,
            ease: "easeOut",
          }}
          exit={{ opacity: 0 }}
        />
      ))}
    </AnimatePresence>
  );
};

export default Confetti;
