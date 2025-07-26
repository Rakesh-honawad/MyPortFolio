import React, { useEffect, useState } from "react";
import "../styles/Achievements.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aws from "../assets/AWS.jpg"
import agile from "../assets/IBM_agile.jpg"
import web from '../assets/IBM_WEB.jpg'
import  edu from '../assets/ibm_edunet.jpg'
import quiz from '../assets/quiz.jpg'
import sgc from '../assets/sgc.jpg'
import swr from '../assets/swr.jpg'

const achievements = [
  {
    title: "AWS Cloud Practitioner Essentials",
    description:
      "Completed AWS Cloud Practitioner Essentials training by AWS. Gained foundational knowledge of AWS Cloud concepts, services, security, and billing. Developed cloud fluency to support technical roles and career growth in cloud computing.",
    issuedBy: "Amazon Web Services (AWS)",
    year: "2025",
    link:aws,
  },
  {
    title: "Agile Explorer",
    description:
      "This certification demonstrates a foundational understanding of Agile principles and practices, including Scrum roles, Agile ceremonies, and iterative development cycles. It reflects my commitment to modern software development methodologies and collaborative project delivery.",
    issuedBy: "IBM SkillsBuild",
    year: "2025",
    link:agile,
  },
  {
    title: "Web Development Fundamentals",
    description:
      "This certification validates proficiency in core web development concepts including HTML, CSS, and JavaScript. It covers responsive web design, browser rendering, and fundamental front-end programming practices..",
    issuedBy: "IBM SkillsBuild",
    year: "2025",
    link:web,
  },
  {
    title: "Intership - Emerging Technologies",
    description:
      "Completed a 2-week virtual internship on Emerging Technologies under the IBM SkillsBuild program. Gained practical exposure to AI, Cybersecurity, Data Analytics, Front-end Development, and Excel & Statistics.",
    issuedBy: "Edunet Foundation",
    year: "2023",
    link:edu,
  },
  {
    title: "IEEE Technical Quiz",
    description:
      "Achieved 1st place in a Technical Quiz Competition organized by IEEE PES Day at Ramaiah Institute of Technology. Demonstrated quick thinking and strong technical knowledge among peer competitors. Recognized by the IEEE PES Student Chapter for academic excellence in engineering.",
    issuedBy: "IEEE PES",
    year: "2022",
    link:quiz,
  },
    {
    title: "",
    description:
      "Achieved 1st plogy. for academic excellence in engineering.",
    issuedBy: "IEEE PES",
    year: "2022",
    link:aws,
  },
    {
    title: "IoT- Internship",
    description:
      "Successfully completed an inplant training on Internet of Things (IoT) at SGC Infotech. Gained hands-on exposure to IoT hardware and communication protocols. Demonstrated strong commitment and a commendable work ethic throughout the program.",
      issuedBy:"SGC Infotech",
    year: "2021",
    link:sgc,
  },
    {
    title: "Internship - Signal Communication",
    description:
      "Completed a 2-month internship at South Western Railway, Bangalore, in the Signal & Telecommunication department. Worked on Railway Intranet, Telecom Exchange, Solid State Interlocking, and ISDN systems. Gained hands-on experience in network management and railway telecom operations.",
    issuedBy: "South Western Railways",
    year: "2024",
    link:swr,
  },
];

const Achievements = () => {
  const [openCertificate, setOpenCertificate] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const closeModal = () => {
    setOpenCertificate(null);
  };

  return (
    <section id="achievements" className="section-container py-20">
      <h2
        className="section-title text-3xl md:text-4xl font-extrabold tracking-wide text-[var(--green)]"
        data-aos="fade-up"
      >
        Certifications & Achievements
      </h2>

      <div className="grid md:grid-cols-2 gap-10 mt-12">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="achievement-card bg-primary p-8 rounded-2xl shadow-xl flex flex-col justify-between min-h-[280px]"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div>
              <h3 className="text-2xl font-bold text-[var(--slate)] mb-3">
                {item.title}
              </h3>
              <p className="text-[var(--light-slate)] mb-3 text-sm">
                {item.description}
              </p>
              <div className="text-xs font-mono text-[var(--green)]">
                {item.issuedBy} &middot; {item.year}
              </div>
            </div>

            {/* View Button */}
            <div className="mt-6">
              <button
                onClick={() => setOpenCertificate(item.link)}
                className="inline-block px-4 py-2 text-sm font-semibold text-white bg-[var(--green)] rounded hover:bg-[var(--light-slate)] transition-colors"
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openCertificate && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={closeModal}>
              &times;
            </button>
            {/* Display as image or iframe */}
            {openCertificate.endsWith(".pdf") ? (
              <iframe
                src={openCertificate}
                width="100%"
                height="100%"
                title="Certificate"
              />
            ) : (
              <img
                src={openCertificate}
                alt="Certificate"
                className="max-h-full max-w-full"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
