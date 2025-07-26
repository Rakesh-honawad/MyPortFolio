import { useEffect } from "react";

function StarsEffect() {
  useEffect(() => {
    const container = document.querySelector(".shooting-stars-bg");

    for (let i = 0; i < 60; i++) {
      const star = document.createElement("span");
      star.style.top = `${Math.random() * 100}%`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      container.appendChild(star);
    }

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div className="shooting-stars-bg"></div>;
}

export default StarsEffect;
