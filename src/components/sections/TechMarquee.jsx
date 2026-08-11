import { motion } from "framer-motion";

export const TechMarquee = () => {
  const stack = [
    "React Native",
    "Node.js",
    "LangGraph",
    "Gemini AI",
    "PostgreSQL",
    "System Architecture",
    "TypeScript",
    "TailwindCSS",
  ];
  const marqueeContent = stack.join(" • ");

  return (
    <div className="w-full overflow-hidden border-y border-border py-6 bg-[#050505] flex whitespace-nowrap relative z-20 shadow-2xl">
      <motion.div
        className="flex"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 40, ease: "linear" }}
      >
        <span className="font-display text-5xl md:text-7xl uppercase tracking-tighter text-secondary opacity-80 px-4 hover:opacity-100 hover:text-accent transition-all duration-500 cursor-default">
          {marqueeContent} • {marqueeContent} • {marqueeContent} •{" "}
          {marqueeContent} • {marqueeContent} • {marqueeContent} •
        </span>
      </motion.div>
    </div>
  );
};
