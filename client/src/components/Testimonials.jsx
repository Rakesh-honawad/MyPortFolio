import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const testimonials = [
  {
    feedback: "Excellent work and communication throughout the project.",
    name: "John Doe",
    role: "CEO",
    animation: "fade-right",
  },
  {
    feedback: "Delivered the project on time with great quality.",
    name: "Jane Smith",
    role: "CTO",
    animation: "fade-left",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section id="testimonials" className="section-container px-4 py-20">
      <h2
        className="section-title text-3xl md:text-4xl mb-12 text-center text-green-400"
        data-aos="fade-up"
      >
        Client's Feedback
      </h2>
      <div className="grid md:grid-cols-2 gap-10">
        {testimonials.map((t, index) => (
          <div            key={index}
            data-aos={t.animation}
            className="bg-[#112240] p-6 md:p-8 rounded-xl shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="border-l-4 border-green-400 pl-4 mb-4">
              <p className="italic text-slate text-lg leading-relaxed">"{t.feedback}"</p>
            </div>
            <p className="text-green-300 font-semibold mt-4">{t.name}</p>
            <p className="text-slate text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;

