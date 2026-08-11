import { motion } from "framer-motion";

export const HackerTerminal = () => {
  const lines = [
    "> Initialize Hardik_Khanduja.exe...",
    "> Status: Online & Ready",
    "> Role: Software Developer & Tech Innovator",
    "> Passion: Building intelligent systems that survive the real world.",
    "> Intellectual_Property: Co-invented a published AI Smart Elevator Patent",
    "> Background: National-Level Athlete (Lawn & Soft Tennis)",
    "> System.out.println('Discipline meets engineering.');",
    "_",
  ];

  return (
    <div className="w-full bg-[#050505] rounded-2xl border border-white/10 overflow-hidden flex flex-col font-mono text-sm shadow-2xl relative z-20 group-hover:border-white/20 transition-colors duration-500">
      {/* Mac OS Header */}
      <div className="w-full bg-[#0a0a0a] border-b border-white/5 px-4 py-3 flex items-center gap-2 relative">
        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40 text-xs text-white">
          guest@hardik: ~
        </div>
      </div>

      {/* Terminal Body */}
      <div className="p-6 md:p-8 flex flex-col gap-4 text-secondary/80 text-sm md:text-base">
        <p className="text-primary opacity-50 text-xs">
          Last login: {new Date().toDateString()} on ttys000
        </p>
        <div className="flex flex-col gap-3">
          {lines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              {line === "_" ? (
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                  className="inline-block w-2.5 h-5 bg-accent ml-1 -mb-1"
                />
              ) : (
                <span
                  className={
                    line.startsWith("> System") ||
                    line.includes("Intellectual") ||
                    line.includes("Background")
                      ? "text-accent"
                      : ""
                  }
                >
                  {line}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent/5 blur-[80px] pointer-events-none z-0"></div>
    </div>
  );
};
