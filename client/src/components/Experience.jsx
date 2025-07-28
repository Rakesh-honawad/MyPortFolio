import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const experiences = [
  {
    title: 'Signal Communication Intern',
    company: 'South Western Railways',
    duration: 'February 2024 - April 2024',
    points: [
      'Conducted a thorough analysis of the Railway Intranet and Network Management System, enhancing my understanding of telecom infrastructure and contributing to operational efficiency.',
      'Gained hands-on experience in Telecom Exchange and ISDN operations, deepening understanding of railway telecommunications.',
      'Completed internship training with a 95% satisfaction rating and commendation from supervisors.'
    ],
  },
  {
    title: 'IoT Intern',
    company: 'SGC Infotech',
    duration: 'August 2021 - September 2021',
    points: [
      'Designed and implemented various IoT applications with Arduino, GSM, and Blynk, optimizing real-time monitoring and enhancing response times by 30%.',
      'Integrated GSM and GPS modules for efficient remote communication and tracking, ensuring a high accuracy rate of 95% for real-time alerts.',
      'Delivered multiple IoT projects, demonstrating strong skills in embedded systems and real-time monitoring.'
    ],
  },
];

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section
      id="experience"
      className="section-container py-16 px-4 sm:px-8"
      style={{ background: 'var(--background)', color: 'var(--slate)' }}
    >
      <div className="text-center mb-10" data-aos="fade-down">
        <h2
          className="text-2xl sm:text-3xl font-extrabold tracking-wide"
          style={{ color: 'var(--green)' }}
        >
          Experience
        </h2>
        <p
          className="mt-2 max-w-xl mx-auto text-sm sm:text-base"
          style={{ color: 'var(--light-slate)' }}
        >
          Where I’ve worked and grown professionally.
        </p>
      </div>

      <div className="space-y-8 sm:space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="p-5 sm:p-6 rounded-xl shadow-lg transition hover:shadow-xl text-sm sm:text-base"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              color: 'var(--slate)',
            }}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h4
              className="text-lg sm:text-xl font-semibold mb-1"
              style={{ color: 'var(--lightest-slate)' }}
            >
              {exp.title}
            </h4>
            <p style={{ color: 'var(--light-slate)' }}>
              <a
                href={exp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--green)] underline hover:opacity-80"
              >
                {exp.company}
              </a>{' '}
              • {exp.duration}
            </p>
            <ul className="list-disc ml-4 mt-3 space-y-1 text-sm sm:text-base">
              {exp.points.map((point, i) => (
                <li key={i} style={{ color: 'var(--light-slate)' }}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
