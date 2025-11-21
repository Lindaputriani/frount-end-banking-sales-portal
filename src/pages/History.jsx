import React, { useState } from "react";
import { toggleTheme } from "../theme";

const History = () => {
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
          <h1>Riwayat</h1>
        </div>

        <div className="header-right">
          {/* Theme Toggle */}
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
          Halaman ini untuk riwayat aktivitas / log interaksi dengan nasabah
          seperti telepon, email, meeting, follow up, dsb. Data bisa diambil
          dari backend / activity log.
        </p>
      </div>
    </>
  );
};

export default History;
