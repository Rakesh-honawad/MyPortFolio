import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import AppRoutes from "./Router";
import ScrollToTop from "./components/ScrollToTop";
import WireAlert from './components/WireAlert';

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
  // Initialize AOS
  AOS.init({ duration: 1000, once: true });

  // ✅ Force light mode on first load
  document.documentElement.classList.remove("dark");

  // Optional: fetch hello message
  fetch("http://localhost:5000/api/hello")
    .then((res) => res.json())
    .then((data) => setMessage(data.message));
}, []);

  return (
    <BrowserRouter>
    <ScrollToTop />
      <Header />
      <Sidebar />
      <WireAlert/>
      {/* ✅ Updated: Responsive to theme */}
      <main className="min-h-screen px-4 sm:px-6 lg:px-24 py-8 transition-all duration-300 bg-[var(--background)] text-[var(--slate)]">
        <AppRoutes />

        {message && (
          <div data-aos="fade-up" className="text-center mt-10">
            <h2 className="text-green-500 font-semibold text-xl">{message}</h2>
          </div>
        )}
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
