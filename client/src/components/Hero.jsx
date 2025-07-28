import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import res from '../assets/resume.pdf';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section
      id="hero"
      className="relative flex items-center justify-center min-h-screen overflow-hidden px-4 sm:px-6"
      style={{ background: 'var(--background)' }}
    >
      {/* Floating Accent Circles */}
      <div
        className="absolute -top-24 -left-24 w-60 h-60 sm:w-72 sm:h-72 bg-green-300 rounded-full opacity-30 animate-ping"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-green-400 rounded-full opacity-20 animate-pulse"
        aria-hidden="true"
      />
      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-center px-4 py-8 sm:px-6 sm:py-12 bg-[var(--panel)] backdrop-blur-sm rounded-2xl shadow-xl transition-colors duration-300">
        <h1
          className="text-green-400 text-sm sm:text-base font-mono mb-2 uppercase tracking-wide"
          data-aos="fade-down"
        >
          Hello, I’m
        </h1>
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[var(--heading)] mb-3 sm:mb-4 leading-tight"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Rakesh Honawad
        </h2>
        <p
          className="text-base sm:text-xl text-[var(--slate)] mb-6 sm:mb-8 leading-relaxed sm:leading-snug"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          I build{' '}
          <span className="text-green-400 font-semibold">modern</span> &{' '}
          <span className="text-green-400 font-semibold">user-centric</span> web
          experiences.
        </p>
        {/* Resume Button */}
        <a
          href={res}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full border-2 border-green-400 text-green-400 font-medium transition-all duration-300 hover:bg-green-400/20 focus:ring-4 focus:ring-green-400/40"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          📄 View Resume
        </a>
      </div>
    </section>
  );
};

export default Hero;
