import React, { useState } from "react";
import { toggleTheme } from "../theme";

const FollowUp = () => {
  // cek tema saat pertama load
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
          <h1>Follow Up</h1>
        </div>

        <div className="header-right">
          {/* Toggle Tema */}
          <button
            className="header-icon"
            type="button"
            onClick={handleToggleTheme}
            aria-label="Toggle Theme"
          >
            <i className={isLight ? "fas fa-sun" : "fas fa-moon"} />
          </button>
        </div>
      </div>

      <div className="leads-content">
        <p>
          Halaman ini bisa menampilkan semua lead dengan status{" "}
          <strong>Follow Up</strong> atau jadwal follow up hari ini.
        </p>
      </div>
    </>
  );
};

export default FollowUp;
