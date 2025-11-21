import React, { useState } from "react";
import { toggleTheme } from "../theme";

const PriorityLeads = () => {
  // cek tema saat pertama kali load
  const [isLight, setIsLight] = useState(() => {
    if (typeof document === "undefined") return false;
    return document.documentElement.classList.contains("light");
  });

  const handleToggleTheme = () => {
    toggleTheme();
    setIsLight((prev) => !prev);
  };

  return (
    <>
      <div className="top-header">
        <div className="header-left">
          <h1>Prioritas Tinggi</h1>
        </div>

        <div className="header-right">
          {/* Kalau nanti mau ditambah search, taruh di sini juga */}
          <button
            className="header-icon"
            type="button"
            onClick={handleToggleTheme}
            aria-label="Toggle theme"
          >
            <i className={isLight ? "fas fa-sun" : "fas fa-moon"} />
          </button>
        </div>
      </div>

      <div className="leads-content">
        <p>
          Di sini nanti berisi daftar lead dengan skor tinggi (misalnya &gt;=
          85%). Tinggal dihubungkan ke dataset / API backend.
        </p>
      </div>
    </>
  );
};

export default PriorityLeads;
