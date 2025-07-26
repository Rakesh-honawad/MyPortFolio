import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import DarkModeWire from './DarkModeWire';// ✅ Same folder import

const Sidebar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const socialLinks = [
    {
      href: "https://github.com/rakesh-honawad",
      label: "GitHub",
      svgPath:
        "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.727-4.033-1.416-4.033-1.416C4.422 17.6 3.633 17.3 3.633 17.3c-1.087-.744.083-.729.083-.729 1.204.084 1.836 1.236 1.836 1.236 1.07 1.835 2.809 1.305 3.495.997.107-.775.42-1.306.762-1.606-2.665-.3-5.466-1.334-5.466-5.933 0-1.31.468-2.382 1.235-3.22-.123-.302-.535-1.522.117-3.176 0 0 1.008-.323 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.553 3.296-1.23 3.296-1.23.653 1.654.241 2.874.12 3.176.77.838 1.233 1.91 1.233 3.22 0 4.61-2.804 5.63-5.475 5.922.431.372.816 1.103.816 2.222v3.293c0 .32.192.694.8.576C20.565 21.795 24 17.295 24 12c0-6.63-5.373-12-12-12z",
    },
    {
      href: "https://linkedin.com/in/rakesh-honawad",
      label: "LinkedIn",
      svgPath:
        "M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.76 2.239 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.761-2.24-5-5-5zM7 19H4v-9h3v9zm-1.5-10.268c-.966 0-1.75-.795-1.75-1.775s.784-1.775 1.75-1.775c.967 0 1.75.795 1.75 1.775S6.467 8.732 5.5 8.732zM20 19h-3v-4.5c0-1.122-.883-2-2-2s-2 .878-2 2V19h-3v-9h3v1.296C14.25 9.053 15.481 8 17 8c2.209 0 3 1.342 3 3.105V19z",
    },
    {
      href: "mailto:rakeshhonawad46@gmail.com",
      label: "Email",
      svgPath:
        "M1.5 4.5h21a.5.5 0 01.5.5v14a.5.5 0 01-.5.5h-21a.5.5 0 01-.5-.5v-14a.5.5 0 01.5-.5zm10.5 6l10.5-6H2L12 10.5z",
    },
  ];

  return (
    <>
      {/* Dark Mode Wire (Hanging top-right) */}
      <DarkModeWire />

      {/* Left Social Sidebar */}
      <div
        className="hidden lg:block fixed bottom-0 left-8 z-10"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <ul className="flex flex-col items-center space-y-4 after:block after:w-[1px] after:h-20 after:bg-slate-400">
          {socialLinks.map(({ href, label, svgPath }, i) => (
            <li key={i}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-slate-600 hover:text-green-400 transition-all duration-300 transform hover:scale-125"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d={svgPath} />
                </svg>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Email Sidebar */}
      <div
        className="hidden lg:block fixed bottom-0 right-8 z-10"
        data-aos="fade-up"
        data-aos-delay="700"
      >
        <div className="flex flex-col items-center after:block after:w-[1px] after:h-20 after:bg-slate-400">
          <a
            href="mailto:rakeshhonawad46@gmail.com"
            className="text-slate-600 hover:text-green-400 vertical-text font-mono text-sm tracking-wide transition-all duration-300 hover:scale-105"
          >
            rakeshhonawad46@gmail.com
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
