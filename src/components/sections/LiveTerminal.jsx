import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const LiveTerminal = () => {
  const [text, setText] = useState("");
  const fullText = `> Initialize system...
> Loading neural weights... [OK]
> Fetching repos... [OK]
> Compiling UI components... 
> Connection established. 
> Status: READY`;

  useEffect(() => {
    let currentText = "";
    let currentIndex = 0;

    const startDelay = setTimeout(() => {
      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          currentText += fullText[currentIndex];
          setText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 50);
      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(startDelay);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="hidden xl:flex flex-col absolute top-20 right-8 2xl:top-32 2xl:right-12 w-[300px] 2xl:w-[350px] bg-surface/50 backdrop-blur-md border border-border rounded-lg overflow-hidden shadow-2xl z-0"
    >
      {/* Terminal Header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-black/20">
        <div className="w-3 h-3 rounded-full bg-accent/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <span className="ml-4 font-mono text-[10px] text-secondary tracking-widest uppercase">
          system_log.sh
        </span>
      </div>
      {/* Terminal Body */}
      <div className="p-6 font-mono text-xs text-secondary whitespace-pre-wrap leading-relaxed min-h-[160px]">
        {text}
        <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse"></span>
      </div>
    </motion.div>
  );
};
