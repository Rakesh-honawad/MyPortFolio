import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import res from '../assets/resume.pdf'

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden"
      style={{ background: 'var(--background)' }}
    >
      {/* Floating Accent Circles */}
      <div
        className="absolute -top-16 -left-16 w-72 h-72 bg-green-300 rounded-full opacity-30 animate-ping"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 bg-green-400 rounded-full opacity-20 animate-pulse"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl text-center px-6 py-12 bg-[var(--panel)] backdrop-blur-sm rounded-2xl shadow-xl transition-colors duration-300">
        <h1
          className="text-green-400 text-lg font-mono mb-2 uppercase tracking-wide"
          data-aos="fade-down"
        >
          Hello, I’m
        </h1>
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[var(--heading)] mb-4"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Rakesh Honawad
        </h2>
        <p
          className="text-xl sm:text-2xl text-[var(--slate)] mb-6 leading-relaxed"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I build <span className="text-green-400 font-semibold">modern</span> &{' '}
          <span className="text-green-400 font-semibold">user-centric</span> web
          experiences.
        </p>

        {/* Resume Button */}
        <a
          href={res}
          download
          className="inline-block px-8 py-3 rounded-full border-2 border-green-400 text-green-400 font-medium transition-all duration-300 hover:bg-green-400/20 focus:ring-4 focus:ring-green-400/40"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          📄 Download Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
