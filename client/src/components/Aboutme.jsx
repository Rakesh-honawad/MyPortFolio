import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

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
      className="section-container min-h-screen py-24 px-4 sm:px-6 lg:px-8"
      style={{ background: 'var(--background)' }}
    >
      {/* Section Header */}
      <div className="text-center mb-14" data-aos="fade-down">
        <h2 className="text-3xl md:text-4xl font-extrabold text-green-400 tracking-wide">
          About Me
        </h2>
        <span className="h-1 bg-green-400 mx-auto mt-2 rounded-full animate-pulse" />
      </div>

      {/* About Blocks */}
      <div className="grid gap-10 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {aboutBlocks.map((block, idx) => (
          <div
            key={block.id}
            className="p-6 sm:p-8 md:p-10 backdrop-blur-md rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 cursor-pointer"
            style={{ backgroundColor: 'rgba(255, 255, 255, 0.6)' }}
            data-aos="zoom-in"
            data-aos-delay={idx * 150}
          >
            <div className="text-5xl mb-4">{block.icon}</div>
            <h3 className="text-xl font-semibold" style={{ color: 'var(--slate)' }}>
              {block.title}
            </h3>
            <p style={{ color: 'var(--light-slate)' }}>{block.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
