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
    const response = await fetch("/api/email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    const data = await response.json();
    setUploadMessage(data.message || "Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
    setTouched({});
  } catch (err) {
    setIsError(true);
    setUploadMessage(err.message || "Something went wrong");
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
        {/* Name Input */}
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Name"
            className="w-full px-4 py-3 rounded border outline-none transition-all duration-200 placeholder:text-gray-500"
            style={{
              background: "var(--lightest-slate)",
              color: "var(--slate)",
              borderColor: touched.name && !form.name ? "red" : "var(--border)",
            }}
          />
          {touched.name && !form.name && (
            <div className="text-red-500 text-sm mt-1">Name is required.</div>
          )}
        </div>

        {/* Email Input */}
{/* Email Input */}
<div>
  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    onBlur={handleBlur}
    placeholder="Your email ID" // ✅ updated placeholder
    className="w-full px-4 py-3 rounded border outline-none transition-all duration-200 placeholder:text-gray-500"
    style={{
      background: "var(--lightest-slate)",
      color: "var(--slate)",
      borderColor:
        touched.email && !/\S+@\S+\.\S+/.test(form.email)
          ? "red"
          : "var(--border)",
    }}
  />
  {touched.email && !/\S+@\S+\.\S+/.test(form.email) && (
    <div className="text-red-500 text-sm mt-1">
      Valid email is required.
    </div>
  )}
</div>


        {/* Message Input */}
        <div>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
            placeholder="Message"
            className="w-full px-4 py-3 rounded border outline-none transition-all duration-200 placeholder:text-gray-500 resize-none"
            style={{
              background: "var(--lightest-slate)",
              color: "var(--slate)",
              borderColor:
                touched.message && !form.message
                  ? "red"
                  : "var(--border)",
            }}
          />
          {touched.message && !form.message && (
            <div className="text-red-500 text-sm mt-1">
              Message is required.
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!isValid() || isMailSending}
          className="w-full px-8 py-4 border border-green-400 text-green-400 rounded hover:bg-green-400/10 transition-all font-semibold"
        >
          {isMailSending ? (
            <span className="flex items-center justify-center gap-2">
              <svg
                className="w-4 h-4 animate-spin text-green-400"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Say Hello"
          )}
        </button>

        {/* Upload Message */}
        {uploadMessage && (
          <p
            className={`text-center text-sm font-medium ${
              isError ? "text-red-600" : "text-green-600"
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
