import React, { useState } from "react";
import { toggleTheme } from "../theme";

const Analytics = () => {
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
          <h1>Analytics</h1>
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
          Halaman analytics: grafik tambahan, tren konversi, performa sales,
          dsb. Nanti tinggal diisi pakai data dari backend.
        </p>
      </div>
    </>
  );
};

export default Analytics;
