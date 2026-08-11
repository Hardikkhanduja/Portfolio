export const MacMockup = ({ image, title }) => (
  <div className="w-full relative rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-[#111111] group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] transition-all duration-500">
    {/* Mac Window Header */}
    <div className="h-8 bg-[#1a1a1a] flex items-center px-4 gap-2 border-b border-white/5">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
    </div>
    {/* Image Content */}
    <div className="relative bg-black overflow-hidden w-full">
      {image ? (
        <img
          src={image}
          alt={title}
          className="w-full h-auto block opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
        />
      ) : (
        <div className="w-full aspect-video bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center p-6 text-center">
          <span className="font-display tracking-widest text-secondary uppercase opacity-30 text-2xl">
            {title}
          </span>
        </div>
      )}
    </div>
  </div>
);

export const AndroidMockup = ({ image, title }) => (
  <div className="relative mx-auto w-[200px] lg:w-[240px] aspect-[9/19] rounded-[2rem] overflow-hidden border-[8px] border-[#1a1a1a] shadow-2xl bg-black group-hover:shadow-[0_20px_50px_rgba(255,255,255,0.05)] transition-all duration-500">
    {/* Android Hole-Punch Camera */}
    <div className="absolute top-2 inset-x-0 flex justify-center z-20">
      <div className="w-3 h-3 bg-[#0a0a0a] rounded-full border border-white/10"></div>
    </div>
    {/* Image Content */}
    {image ? (
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover object-top opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out"
      />
    ) : (
      <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center p-6 text-center">
        <span className="font-display tracking-widest text-secondary uppercase opacity-30 text-xl">
          {title}
        </span>
      </div>
    )}
  </div>
);
