import { useEffect, useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [touched, setTouched] = useState({});
  const [isMailSending, setIsMailSending] = useState(false);
  const [uploadMessage, setUploadMessage] = useState("");
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (uploadMessage) {
      const timer = setTimeout(() => setUploadMessage(""), 5000);
      return () => clearTimeout(timer);
    }
  }, [uploadMessage]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));
  };

  const isValid = () => {
    return (
      form.name.trim() &&
      /\S+@\S+\.\S+/.test(form.email) &&
      form.message.trim()
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValid()) return;

    setIsMailSending(true);
    setIsError(false);

    try {
      const res = await fetch("http://localhost:5000/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to send email");

      setUploadMessage(data.message || "Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setTouched({});
    } catch (error) {
      setIsError(true);
      setUploadMessage(error.message);
    } finally {
      setIsMailSending(false);
    }
  };

  return (
    <section
      id="contact"
      className="section-container text-center py-24 px-4 sm:px-6 lg:px-8"
      style={{
        background: "var(--background)",
        color: "var(--slate)",
      }}
    >
      <h2 className="section-title justify-center" data-aos="fade-up">
        What's Next?
      </h2>
      <h3
        className="text-4xl font-bold mb-4"
        style={{ color: "var(--slate)" }}
        data-aos="fade-up"
        data-aos-delay="50"
      >
        Get In Touch
      </h3>
      <p
        className="max-w-lg mx-auto mb-12"
        style={{ color: "var(--light-slate)" }}
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Let’s Chat! Whether you have a question, a project idea, or just want to
        connect, I’m always happy to hear from you. Drop me a message, and I’ll
        be in touch soon!
      </p>

      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto space-y-6"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name"
            className="w-full px-4 py-3 border rounded focus:border-green-400 focus:outline-none"
            style={{ background: "var(--lightest-slate)", color: "var(--slate)" }}
          />
          {touched.name && !form.name && (
            <div className="text-red-500">Name is required.</div>
          )}
        </div>

        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Email"
            className="w-full px-4 py-3 border rounded focus:border-green-400 focus:outline-none"
            style={{ background: "var(--lightest-slate)", color: "var(--slate)" }}
          />
          {touched.email && !/\S+@\S+\.\S+/.test(form.email) && (
            <div className="text-red-500">Valid email is required.</div>
          )}
        </div>

        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="4"
            placeholder="Message"
            className="w-full px-4 py-3 border rounded focus:border-green-400 focus:outline-none"
            style={{ background: "var(--lightest-slate)", color: "var(--slate)" }}
          />
          {touched.message && !form.message && (
            <div className="text-red-500">Message is required.</div>
          )}
        </div>

        <button
          type="submit"
          disabled={!isValid() || isMailSending}
          className="w-full px-8 py-4 border border-green-400 text-green-400 rounded hover:bg-green-400/10 transition-all"
        >
          {isMailSending ? (
            <svg
              aria-hidden="true"
              role="status"
              className="inline w-4 h-4 mr-2 text-white animate-spin"
              viewBox="0 0 100 101"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="50"
                cy="50"
                r="45"
                stroke="#4ade80"
                strokeWidth="10"
                strokeDasharray="283"
                strokeDashoffset="75"
                strokeLinecap="round"
              />
            </svg>
          ) : null}
          Say Hello
        </button>

        {uploadMessage && (
          <p
            className={`text-center font-medium ${
              isError ? "text-red-700" : "text-green-700"
            }`}
          >
            {uploadMessage}
          </p>
        )}
      </form>
    </section>
  );
};

export default Contact;
