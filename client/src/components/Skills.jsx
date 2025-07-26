import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = {
   "Programming Languages": [
    { name: 'Java', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/java/java-original.svg' },
    { name: 'C++', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg' },
    { name: 'Go', logo: 'https://go.dev/blog/go-brand/Go-Logo/SVG/Go-Logo_Blue.svg' },
    { name: 'MySql', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/mysql/mysql-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/python/python-original.svg' },
  ],
  "Web & Frontend": [
    { name: 'HTML', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/html5/html5-original.svg' },
    { name: 'CSS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/css3/css3-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/javascript/javascript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/react/react-original.svg', isInvert: true },
    { name: 'Tailwind', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/tailwindcss/tailwindcss-original.svg', isInvert: true },
  ],
   "Cloud & DevOps": [
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/terraform/terraform-original.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/docker/docker-original.svg' },
    { name: 'Git', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/git/git-original.svg' },
  ],
  "Frameworks & Tools": [
    { name: 'Postman', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/postman/postman-original.svg' },
    { name: 'Junit5', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/junit/junit-original.svg' },
    { name: 'Maven', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/maven/maven-original.svg' },
    { name: 'Netlify', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/netlify/netlify-original.svg' },
    { name: 'Vercel', logo: 'https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/vercel/vercel-original.svg', isInvert: true },
  ],
};

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <section id="skills" className="section-container py-20 bg-[var(--background)]">
      <div
        className="text-center mb-12 py-8 rounded-lg shadow-md"
        data-aos="fade-down"
      >
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-wide text-[var(--green)]">
          Skills & Technologies
        </h2>
        <p className="mt-2 max-w-2xl mx-auto text-[var(--slate)]">
          Technologies I've worked with across the stack.
        </p>
      </div>

      <div className="grid gap-12">
        {Object.entries(skills).map(([category, items], catIdx) => (
          <div key={category}>
            <h3
              className="text-2xl font-bold mb-6 text-[var(--text)]"
              data-aos="fade-right"
              data-aos-delay={catIdx * 200}
            >
              {category}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {items.map((skill, idx) => {
                const props = useSpring({
                  from: { opacity: 0, transform: 'scale(0.5)' },
                  to: { opacity: 1, transform: 'scale(1)' },
                  delay: catIdx * 200 + idx * 100,
                });

                return (
                  <animated.div
                    key={skill.name}
                    style={props}
                    className="group flex flex-col items-center p-4 rounded-2xl shadow-lg transform transition duration-300 hover:-translate-y-2 hover:shadow-2xl bg-[var(--card-bg)]"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className={`h-12 w-12 mb-2 transition-transform duration-300 transform group-hover:scale-110 ${
                        skill.isInvert ? 'invert' : ''
                      }`}
                    />
                    <span className="font-medium text-[var(--slate)]">{skill.name}</span>
                  </animated.div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
