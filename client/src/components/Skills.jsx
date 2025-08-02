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
    <section id="skills" className="section-container py-16 px-4 sm:px-8 bg-[var(--background)]">
      <div className="text-center mb-10" data-aos="fade-down">
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-wide text-[var(--green)]">
          Skills & Technologies
        </h2>
        <p className="mt-2 max-w-xl mx-auto text-sm sm:text-base text-[var(--slate)]">
          Technologies I've worked with across the stack.
        </p>
      </div>

      <div className="space-y-10">
        {Object.entries(skills).map(([category, items], catIdx) => (
          <div key={category}>
            <h3
              className="text-lg sm:text-xl font-bold mb-4 text-[var(--text)]"
              data-aos="fade-right"
              data-aos-delay={catIdx * 150}
            >
              {category}
            </h3>
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6">
              {items.map((skill, idx) => {
                const props = useSpring({
                  from: { opacity: 0, transform: 'scale(0.5)' },
                  to: { opacity: 1, transform: 'scale(1)' },
                  delay: catIdx * 200 + idx * 80,
                });

                return (
                  <animated.div
                    key={skill.name}
                    style={props}
                    className="group flex flex-col items-center p-3 sm:p-4 rounded-xl shadow-md hover:shadow-xl bg-[var(--card-bg)]"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className={`h-8 w-8 sm:h-10 sm:w-10 mb-2 transition-transform transform group-hover:scale-110 ${
                        skill.isInvert ? 'invert' : ''
                      }`}
                    />
                    <span className="text-xs sm:text-sm font-medium text-[var(--slate)] text-center">{skill.name}</span>
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
