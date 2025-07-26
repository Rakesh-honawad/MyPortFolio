import React, { useState, useRef, useEffect } from 'react';
import '../styles/Project.css';
import bookstore from '../assets/bookstore.jpg';
import procter from '../assets/procterVisionAI.png';
import emailbot from '../assets/emailbot.jpg'
import keyboard from '../assets/keyboard.jpg'
import exam  from '../assets/exam.jpg'
import port from '../assets/port.png'
const projectData = [
  {
    title: "My-PortFolio",
    image:port,
    technologies: ["React","Tailwindcss","css","vite","Framer Motions","Draggable Interface"],
    description: "A fully responsive and interactive personal portfolio website designed to highlight my skills, projects, and experience. The site features a unique book-style project layout, draggable Read More panels, custom dark mode toggle with animation, and smooth transitions — all optimized for performance and mobile responsiveness. Built to reflect both design and development proficiency.",
    github: "https://github.com/Rakesh-honawad/Portfolio.git"
  },
  {
    title: "ProcterVisionAI",
    image:procter,
    technologies: ["Python", "OpenCV", "MediaPipe","Gdrive"],
    description: "An AI-powered proctoring tool that records video only when multiple people are detected in the frame for over 3 seconds. This ensures intentional monitoring and reduces false alerts, enhancing exam security through smart computer vision.",
    github: "https://github.com/Rakesh-honawad/ProctorVisionAI"
  },

   {
    title: "Online Exam Proctering System",
    image:exam,
    technologies: ["Node.js+Express.js","React.js","TenserFlow","Jwt",],
    description: "An AI-powered web platform that enables secure online exams without human proctors. It supports real-time face monitoring, automatic cheating detection (like multiple faces, mobile phones, or absence of the user), and auto-submission of exams. Admins can track logs, scores, and manage exams efficiently.",
    github: "https://github.com/Rakesh-honawad/"
  },
   {
    title: "MystiGlyph",
    image:keyboard,
    technologies: ["On - progress"],
    description: "MystiGlyph is a custom keyboard prototype designed to type in a symbolic or encrypted language for private messaging. It allows users to communicate using visually encoded symbols, enhancing privacy. Future plans include integrating AI for dynamic encryption and automated decoding.",
    github: "https://github.com/Rakesh-honawad/MystiGlyph"
  },  
    {
    title: "Email-Bot",
    image:emailbot,
    technologies: ["Python", "PyPDF2", "Regex","email.mime","dotenv"],
    description: "A Python-based Email Automation Bot that reads recipient data from PDF files and sends customized emails to each person. Designed for bulk communication, it personalizes messages based on fields like name, email, and company. Ideal for marketing, HR, or academic use.",
    github: "https://github.com/Rakesh-honawad/Email-Bot"
  },
  {
    title: "Bookstore Management",
    image: bookstore,
    technologies: ["Go", "MySQL", "Gorilla Mux", "GORM"],
    description: "A backend service built using Go, Gorilla Mux, and GORM with MySQL integration. It supports full CRUD operations to manage book data via RESTful endpoints. Focused on performance, clean architecture, and efficient database handling.",
    github: "https://github.com/Rakesh-honawad/Book-store"
  },
  
];

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [readMoreIndex, setReadMoreIndex] = useState(null);
  const panelRef = useRef(null);
  const velocity = useRef({ x: 0, y: 0 });
  const animationFrame = useRef(null);

  const toggleReadMore = (index) => {
    setReadMoreIndex(readMoreIndex === index ? null : index);
  };

  const nextPage = () => {
    if (currentPage < projectData.length) {
      setCurrentPage(prev => prev + 1);
      setReadMoreIndex(null);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(prev => prev - 1);
      setReadMoreIndex(null);
    }
  };

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    const container = document.querySelector('.project-page.active');
    if (!container) return;

    let isDragging = false;
    let offsetX = 0;
    let offsetY = 0;
    let lastX = 0;
    let lastY = 0;

    const onMouseDown = (e) => {
      isDragging = true;
      offsetX = e.clientX - panel.getBoundingClientRect().left;
      offsetY = e.clientY - panel.getBoundingClientRect().top;
      lastX = e.clientX;
      lastY = e.clientY;
      cancelAnimationFrame(animationFrame.current);
      panel.style.transition = 'none';
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      velocity.current = { x: dx, y: dy };
      lastX = e.clientX;
      lastY = e.clientY;

      let newX = e.clientX - offsetX - container.getBoundingClientRect().left;
      let newY = e.clientY - offsetY - container.getBoundingClientRect().top;

      newX = Math.max(0, Math.min(container.clientWidth - panel.offsetWidth, newX));
      newY = Math.max(0, Math.min(container.clientHeight - panel.offsetHeight, newY));

      panel.style.left = `${newX}px`;
      panel.style.top = `${newY}px`;
    };

    const onMouseUp = () => {
      isDragging = false;
      throwPanel();
    };

    const onTouchStart = (e) => {
      if (e.touches.length > 0) {
        isDragging = true;
        const touch = e.touches[0];
        offsetX = touch.clientX - panel.getBoundingClientRect().left;
        offsetY = touch.clientY - panel.getBoundingClientRect().top;
        lastX = touch.clientX;
        lastY = touch.clientY;
        cancelAnimationFrame(animationFrame.current);
        panel.style.transition = 'none';
      }
    };

    const onTouchMove = (e) => {
      if (!isDragging || e.touches.length === 0) return;
      const touch = e.touches[0];
      const dx = touch.clientX - lastX;
      const dy = touch.clientY - lastY;
      velocity.current = { x: dx, y: dy };
      lastX = touch.clientX;
      lastY = touch.clientY;

      let newX = touch.clientX - offsetX - container.getBoundingClientRect().left;
      let newY = touch.clientY - offsetY - container.getBoundingClientRect().top;

      newX = Math.max(0, Math.min(container.clientWidth - panel.offsetWidth, newX));
      newY = Math.max(0, Math.min(container.clientHeight - panel.offsetHeight, newY));

      panel.style.left = `${newX}px`;
      panel.style.top = `${newY}px`;
    };

    const onTouchEnd = () => {
      isDragging = false;
      throwPanel();
    };

    const throwPanel = () => {
      const animate = () => {
        let newX = panel.offsetLeft + velocity.current.x;
        let newY = panel.offsetTop + velocity.current.y;

        if (newX < 0 || newX + panel.offsetWidth > container.clientWidth) {
          velocity.current.x *= -0.8;
          newX = Math.max(0, Math.min(container.clientWidth - panel.offsetWidth, newX));
        }
        if (newY < 0 || newY + panel.offsetHeight > container.clientHeight) {
          velocity.current.y *= -0.8;
          newY = Math.max(0, Math.min(container.clientHeight - panel.offsetHeight, newY));
        }

        panel.style.left = `${newX}px`;
        panel.style.top = `${newY}px`;

        velocity.current.x *= 0.95;
        velocity.current.y *= 0.95;

        if (Math.abs(velocity.current.x) > 0.5 || Math.abs(velocity.current.y) > 0.5) {
          animationFrame.current = requestAnimationFrame(animate);
        }
      };

      animationFrame.current = requestAnimationFrame(animate);
    };

    panel.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    panel.addEventListener('touchstart', onTouchStart);
    window.addEventListener('touchmove', onTouchMove);
    window.addEventListener('touchend', onTouchEnd);

    return () => {
      panel.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);

      panel.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [readMoreIndex]);

  return (
    <div className="book-container" id="projects">
      <div className="book-page">
        <div className={`project-page ${currentPage === 0 ? 'active' : 'inactive'}`}>
          <h1 className="project-title">📘 Projects</h1>
          <p className="project-description">
            Explore my personal and professional projects by flipping the pages.
          </p>
        </div>

        {projectData.map((project, index) => {
          const isCurrent = index + 1 === currentPage;
          const isExpanded = readMoreIndex === index;

          return (
            <div
              key={index}
              className={`project-page ${isCurrent ? 'active' : 'inactive'}`}
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                
              }}
            >
              <h2 className="project-title ">{project.title}</h2>
              <div className="project-content">
                <div className="tech-list-inline">
                  {`{ ${project.technologies.join(', ')} }`}
                </div>
                <div className="project-links">
                  <a href={project.github} className="book-btn" target="_blank" rel="noreferrer">GitHub</a>
                  <button className="book-btn" onClick={() => toggleReadMore(index)}>
                    {isExpanded ? 'Close' : 'Read More'}
                  </button>
                </div>

                {isExpanded && (
                  <div
                    ref={panelRef}
                    className="readmore-panel draggable"
                  >
                    <p>{project.description}</p>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <div className="book-controls">
        <button onClick={prevPage} disabled={currentPage === 0}>◀ Prev</button>
        <button onClick={nextPage} disabled={currentPage === projectData.length}>Next ▶</button>
      </div>
    </div>
  );
};

export default Projects;
