import { useRef } from "react";
import { ArrowUpRight, Smartphone } from "lucide-react";
import { ScrambleText } from "../ui/ScrambleText";
import { MagneticButton } from "../ui/MagneticButton";
import { GithubIcon } from "../ui/Icons";
import { AndroidMockup, MacMockup } from "./Mockups";

export const StickyProjectCard = ({ project, index, total }) => {
  const containerRef = useRef(null);

  return (
    <div
      ref={containerRef}
      className="flex items-start justify-center w-full mb-32 md:mb-48 last:mb-0"
    >
      <div
        className={`group w-full rounded-[3rem] border border-border bg-[#0a0a0a] p-8 md:p-12 transition-all duration-500 hover:border-white/20 hover:bg-[#111111] flex flex-col lg:flex-row gap-8 lg:gap-16 items-stretch relative overflow-hidden shadow-2xl ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
      >
        {/* Giant Watermark Number */}
        <div className="absolute -bottom-10 -right-10 md:bottom-[-20%] md:right-[-5%] font-display text-[15rem] md:text-[20rem] leading-none text-fill-transparent text-stroke-1 opacity-20 pointer-events-none select-none z-0">
          0{index + 1}
        </div>

        {/* Project Content (Left) */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between relative z-20">
          <div>
            <div className="flex gap-4 items-center mb-6">
              <span className="font-mono text-xs text-secondary tracking-widest uppercase bg-background px-3 py-1 border border-border rounded-full">
                <ScrambleText text={project.tags[0]} />
              </span>
            </div>
            <h3 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-wider mb-6 group-hover:text-accent transition-colors">
              <ScrambleText text={project.title} />
            </h3>
            <p className="text-secondary text-lg font-light leading-relaxed mb-8 bg-background/50 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-border/50">
              {project.description}
            </p>

            {/* Technical Highlights (New!) */}
            {project.features && (
              <div className="flex flex-col gap-3 mb-8">
                <h4 className="text-accent font-mono text-sm tracking-widest uppercase mb-2">
                  Technical Highlights
                </h4>
                {project.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shadow-[0_0_8px_rgba(225,6,0,0.8)] flex-shrink-0" />
                    <span className="text-secondary/80 text-sm md:text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div>
            <div className="flex gap-4 mb-8">
              {project.links.github && (
                <MagneticButton
                  href={project.links.github}
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-white hover:text-black transition-all"
                >
                  <GithubIcon className="w-5 h-5" />
                </MagneticButton>
              )}
              {project.links.live && (
                <MagneticButton
                  href={project.links.live}
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-white hover:text-black transition-all"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </MagneticButton>
              )}
              {project.links.playstore && (
                <MagneticButton
                  href={project.links.playstore}
                  target="_blank"
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-white hover:text-black transition-all"
                >
                  <Smartphone className="w-5 h-5" />
                </MagneticButton>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono text-xs text-secondary uppercase tracking-widest"
                >
                  [{tag}]
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project Image/Mockup (Right) */}
        <div className="w-full lg:w-1/2 relative z-20 flex items-center justify-center p-4 lg:p-8">
          {project.tags.includes("React Native") ||
          project.tags.includes("Expo") ? (
            <AndroidMockup image={project.image} title={project.title} />
          ) : (
            <MacMockup image={project.image} title={project.title} />
          )}
        </div>
      </div>
    </div>
  );
};
