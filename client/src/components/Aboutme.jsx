import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { CanvasRevealEffect } from "@/components/ui/canvas-reveal-effect"; // Adjust the path if needed

const aboutBlocks = [
  {
    id: 'whoami',
    title: 'Who I Am',
    icon: '👋',
    content: `I'm Rakesh Honawad, a full-stack developer who thrives on turning ideas into reality with clean, maintainable code.`,
  },
  {
    id: 'passion',
    title: 'My Passion',
    icon: '💡',
    content: `I love exploring new frameworks and architectures, constantly pushing the boundaries of what's possible on the web.`,
  },
  {
    id: 'education',
    title: 'Education',
    icon: '🎓',
    content: `B.E. in E&C Engineering (MS Ramaiah Institute, 2021–24) • Diploma in E&C (Govt Polytechnic Belagavi, 2018–21)`,
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 700, once: true, easing: 'ease-out-back' });
  }, []);

  return (
    <section
      id="about-me"
      className="section-container min-h-screen relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Section Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 tracking-wide">
          About Me
        </h2>
        <span className="h-1 bg-green-400 mx-auto mt-2 rounded-full animate-pulse" />
      </div>

      {/* About Cards with CanvasRevealEffect */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-stretch">
        {aboutBlocks.map((block, idx) => (
          <div
            key={block.id}
            className="relative group rounded-2xl overflow-hidden border border-white/20 flex flex-col justify-between"
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            {/* Canvas Reveal Effect */}
            <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
              <CanvasRevealEffect
                animationSpeed={3}
                containerClassName="h-full w-full"
                dotSize={2}
                showGradient
                gradientBackgroundStart="rgba(255,255,255,0)"
                gradientBackgroundEnd="rgba(255,255,255,0.2)"
              />
            </div>

            {/* Card Content */}
            <div className="relative z-10 p-6 sm:p-8 md:p-10 backdrop-blur-md bg-white/60 shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer h-full">
              <div className="text-5xl mb-4">{block.icon}</div>
              <h3 className="text-xl font-semibold text-slate-800">
                {block.title}
              </h3>
              <p className="text-slate-600">{block.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
