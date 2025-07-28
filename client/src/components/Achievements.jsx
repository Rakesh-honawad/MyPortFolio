import React, { useEffect, useState } from "react";
import "../styles/Achievements.css";
import AOS from "aos";
import "aos/dist/aos.css";
import aws from "../assets/AWS.jpg";
import agile from "../assets/IBM_agile.jpg";
import web from "../assets/IBM_WEB.jpg";
import edu from "../assets/ibm_edunet.jpg";
import quiz from "../assets/quiz.jpg";
import sgc from "../assets/sgc.jpg";
import swr from "../assets/swr.jpg";

const achievements = [
  {
    title: "AWS Cloud Practitioner Essentials",
    description:
      "Completed AWS Cloud Practitioner Essentials training by AWS. Gained foundational knowledge of AWS Cloud concepts, services, security, and billing.",
    issuedBy: "Amazon Web Services (AWS)",
    year: "2025",
    link: aws,
  },
  {
    title: "Agile Explorer",
    description:
      "This certification demonstrates a foundational understanding of Agile principles and practices, including Scrum roles, Agile ceremonies, and iterative development cycles.",
    issuedBy: "IBM SkillsBuild",
    year: "2025",
    link: agile,
  },
  {
    title: "Web Development Fundamentals",
    description:
      "This certification validates proficiency in HTML, CSS, JavaScript, and responsive design with fundamental front-end concepts.",
    issuedBy: "IBM SkillsBuild",
    year: "2025",
    link: web,
  },
  {
    title: "Internship - Emerging Technologies",
    description:
      "2-week virtual internship under IBM SkillsBuild. Gained practical exposure to AI, Cybersecurity, Data Analytics, and Front-end Development.",
    issuedBy: "Edunet Foundation",
    year: "2023",
    link: edu,
  },
  {
    title: "IEEE Technical Quiz",
    description:
      "Achieved 1st place in a Technical Quiz Competition organized by IEEE PES Day at Ramaiah Institute of Technology.",
    issuedBy: "IEEE PES",
    year: "2022",
    link: quiz,
  },
  {
    title: "IoT - Internship",
    description:
      "Completed inplant training at SGC Infotech. Worked on IoT hardware and protocols with hands-on project experience.",
    issuedBy: "SGC Infotech",
    year: "2021",
    link: sgc,
  },
  {
    title: "Internship - Signal Communication",
    description:
      "2-month internship at South Western Railway, Bangalore. Gained experience in telecom exchange, ISDN, and railway intranet.",
    issuedBy: "South Western Railways",
    year: "2024",
    link: swr,
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
    <section id="achievements" className="section-container py-12 px-4 sm:px-6">
      <h2
        className="section-title text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-wide text-[var(--green)] text-center"
        data-aos="fade-up"
      >
        Certifications & Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mt-10">
        {achievements.map((item, idx) => (
          <div
            key={idx}
            className="achievement-card bg-primary p-5 sm:p-6 rounded-xl shadow-xl flex flex-col justify-between"
            data-aos={idx % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-[var(--slate)] mb-2">
                {item.title}
              </h3>
              <p className="text-[var(--light-slate)] text-sm sm:text-base mb-3">
                {item.description}
              </p>
              <div className="text-xs font-mono text-[var(--green)]">
                {item.issuedBy} &middot; {item.year}
              </div>
            </div>
            <div className="mt-4">
              <button
                onClick={() => setOpenCertificate(item.link)}
                className="px-4 py-2 text-sm font-semibold text-white bg-[var(--green)] rounded hover:bg-[var(--light-slate)] transition-colors"
              >
                View Certificate
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {openCertificate && (
        <div className="modal-overlay fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
          <div className="modal-content bg-white p-4 rounded-lg max-w-3xl w-[90%] max-h-[90vh] overflow-y-auto relative">
            <button
              className="absolute top-2 right-4 text-2xl text-gray-600 hover:text-red-600"
              onClick={closeModal}
            >
              &times;
            </button>
            {openCertificate.endsWith(".pdf") ? (
              <iframe
                src={openCertificate}
                width="100%"
                height="500px"
                title="Certificate"
              />
            ) : (
              <img
                src={openCertificate}
                alt="Certificate"
                className="w-full h-auto object-contain rounded"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Achievements;
