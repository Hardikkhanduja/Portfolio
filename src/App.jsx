import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { projects } from "./data";

import { FadeIn } from "./components/ui/FadeIn";
import { NoiseLayer } from "./components/ui/NoiseLayer";
import { Preloader } from "./components/ui/Preloader";
import { ScrambleText } from "./components/ui/ScrambleText";
import { TiltCard } from "./components/ui/TiltCard";
import { MagneticButton } from "./components/ui/MagneticButton";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./components/ui/Icons";

import { LiveTerminal } from "./components/sections/LiveTerminal";
import { HackerTerminal } from "./components/sections/HackerTerminal";
import { TechMarquee } from "./components/sections/TechMarquee";
import { StickyProjectCard } from "./components/sections/ProjectCard";

function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="bg-background min-h-screen text-primary selection:bg-accent selection:text-white overflow-x-hidden font-sans">
      <NoiseLayer />

      <AnimatePresence>
        {!appLoaded && <Preloader onComplete={() => setAppLoaded(true)} />}
      </AnimatePresence>

      <div
        className={`transition-opacity duration-1000 ${appLoaded ? "opacity-100" : "opacity-0"}`}
      >
        {/* Navigation */}
        <nav className="fixed top-0 w-full p-6 md:p-8 flex justify-between items-center z-50 mix-blend-difference">
          <div className="font-display text-2xl tracking-tighter">HK.</div>
          <div className="hidden md:flex gap-8 font-mono text-xs uppercase tracking-widest text-secondary">
            <a href="#work" className="hover:text-accent transition-colors">
              Work
            </a>
            <a href="#origin" className="hover:text-accent transition-colors">
              Origin
            </a>
            <a href="#contact" className="hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center p-6 md:p-12 overflow-hidden">
          <LiveTerminal />

          <div className="w-full max-w-7xl mx-auto flex flex-col justify-between min-h-[80vh] relative z-10 pt-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-12">
              <FadeIn delay={0.3}>
                <div className="flex items-center gap-3 bg-surface/50 backdrop-blur-md px-4 py-2 rounded-full border border-border">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent"></span>
                  </span>
                  <span className="font-mono text-xs uppercase tracking-widest text-secondary">
                    Available for new opportunities
                  </span>
                </div>
              </FadeIn>

              {/* Massive Typography */}
              {appLoaded && (
                <motion.div style={{ y, opacity, scale }} className="w-full">
                  <FadeIn delay={0.1}>
                    <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter uppercase m-0">
                      <ScrambleText text="Hardik" />
                    </h1>
                  </FadeIn>
                  <FadeIn delay={0.2}>
                    <h1 className="font-display text-[15vw] md:text-[12vw] leading-[0.8] tracking-tighter uppercase m-0 text-secondary flex items-end gap-4 md:gap-8 flex-wrap">
                      <ScrambleText text="Khanduja" />
                      <span className="font-sans text-lg md:text-2xl font-light tracking-normal normal-case text-primary max-w-sm mb-2 md:mb-6 leading-snug">
                        Building AI systems, modern web apps, and thoughtful
                        digital experiences.
                      </span>
                    </h1>
                  </FadeIn>
                </motion.div>
              )}
            </div>

            {/* Spinning Circular Badge (Desktop Only) */}
            <div className="hidden md:flex relative shrink-0 w-32 h-32 items-center justify-center mb-6">
              <div className="absolute inset-0 animate-spin-slow">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full fill-secondary text-[10px] font-mono uppercase tracking-widest overflow-visible"
                >
                  <path
                    id="circlePath"
                    d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    fill="none"
                  />
                  <text>
                    <textPath href="#circlePath" startOffset="0%">
                      • AVAILABLE GLOBALLY • BASED IN INDIA • AVAILABLE GLOBALLY
                      • BASED IN INDIA
                    </textPath>
                  </text>
                </svg>
              </div>
              <ArrowUpRight className="w-8 h-8 text-accent relative z-10" />
            </div>
          </div>
        </section>

        <TechMarquee />

        {/* Origin Section (Bento Grid) */}
        <section id="origin" className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
          <FadeIn>
            <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider mb-16 flex items-center gap-4">
              <span className="text-accent">/</span> Origin
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 min-h-[600px]">
            {/* Terminal Card */}
            <div className="md:col-span-3 rounded-[2rem] bg-gradient-to-br from-[#111111] to-[#0a0a0a] border border-border p-8 md:p-12 shadow-2xl relative overflow-hidden group">
              <HackerTerminal />
            </div>

            {/* Micro Cards */}
            <div className="md:col-span-1 flex flex-col gap-6">
              <FadeIn delay={0.2} className="group">
                <TiltCard className="h-full rounded-[2rem] bg-surface border border-border p-8 flex flex-col justify-between transition-colors duration-500 hover:border-accent hover:bg-surface-hover">
                  <MapPin className="w-8 h-8 text-secondary group-hover:text-accent transition-colors relative z-20" />
                  <div className="relative z-20">
                    <p className="font-mono text-sm text-secondary uppercase tracking-widest mb-2">
                      Base
                    </p>
                    <p className="font-display text-4xl uppercase tracking-wider">
                      India
                    </p>
                  </div>
                </TiltCard>
              </FadeIn>

              {/* Stats Card */}
              <FadeIn delay={0.3} className="group">
                <TiltCard className="h-full rounded-[2rem] bg-surface border border-border p-8 flex flex-col justify-between transition-colors duration-500 hover:border-accent hover:bg-surface-hover">
                  <p className="font-mono text-sm text-secondary uppercase tracking-widest relative z-20">
                    Projects
                  </p>
                  <p className="font-display text-8xl uppercase tracking-tighter text-accent relative z-20">
                    12<span className="text-4xl text-primary">+</span>
                  </p>
                  <p className="font-mono text-xs text-secondary uppercase tracking-widest relative z-20">
                    Shipped to production
                  </p>
                </TiltCard>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Selected Work */}
        <section
          id="work"
          className="py-32 px-6 md:px-12 border-t border-border bg-[#050505]"
        >
          <div className="max-w-7xl mx-auto">
            <FadeIn>
              <h2 className="font-display text-4xl md:text-6xl uppercase tracking-wider mb-24 flex items-center gap-4">
                <span className="text-accent">/</span> Best Work
              </h2>
            </FadeIn>

            <div className="flex flex-col">
              {projects.map((project, index) => (
                <FadeIn key={project.id} delay={0.2}>
                  <StickyProjectCard
                    project={project}
                    index={index}
                    total={projects.length}
                  />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>

        {/* Massive Footer */}
        <section
          id="contact"
          className="py-32 px-6 md:px-12 flex flex-col items-center justify-center min-h-[80vh] relative border-t border-border bg-[#050505]"
        >
          <div className="text-center w-full z-10">
            <h2 className="font-display text-[12vw] leading-none tracking-tighter uppercase mb-8 hover:text-accent transition-colors duration-500 cursor-default">
              <ScrambleText text="Let's Build It" />
            </h2>

            <MagneticButton
              href="mailto:khanduja.hardik001@gmail.com"
              className="bg-white text-black font-mono uppercase tracking-widest text-sm md:text-base px-10 py-5 rounded-full hover:bg-accent hover:text-white transition-colors flex items-center gap-3 shadow-[0_0_40px_rgba(255,255,255,0.1)]"
            >
              Start a project <ArrowUpRight className="w-5 h-5" />
            </MagneticButton>

            <div className="flex gap-4 md:gap-6 mt-16">
              {[
                { Icon: Mail, href: "mailto:khanduja.hardik001@gmail.com" },
                { Icon: GithubIcon, href: "https://github.com/Hardikkhanduja" },
                {
                  Icon: LinkedinIcon,
                  href: "https://www.linkedin.com/in/hardik-khanduja-60a9a6287",
                },
                { Icon: TwitterIcon, href: "https://x.com/HardikKhanduja" },
              ].map(({ Icon, href }, i) => (
                <MagneticButton
                  key={i}
                  href={href}
                  target="_blank"
                  className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-white hover:text-black transition-all bg-surface backdrop-blur-md"
                >
                  <Icon className="w-6 h-6 md:w-7 md:h-7" />
                </MagneticButton>
              ))}
            </div>
          </div>

          <div className="absolute bottom-8 flex justify-between w-full px-6 md:px-12 font-mono text-xs uppercase tracking-widest text-secondary opacity-50">
            <span>© {new Date().getFullYear()}</span>
            <span>Engineered in India</span>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
