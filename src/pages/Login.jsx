import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toggleTheme } from "../theme";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    identity: "",
    password: "",
  });

  const [isLight, setIsLight] = useState(
    () =>
      typeof document !== "undefined" &&
      document.documentElement.classList.contains("light")
  );

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleToggleTheme = () => {
    toggleTheme();
    setIsLight((prev) => !prev);
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    if (!form.identity || !form.password) {
      setErrorMsg("Email/username dan password wajib diisi.");
      return;
    }

    try {
      setLoading(true);

      // 🔁 SESUAIKAN URL & NAMA FIELD DENGAN BACKEND-MU
      const res = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          identity: form.identity,
          password: form.password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        // sesuaikan key `message` kalau backend pakai nama lain
        setErrorMsg(data.message || "Login gagal. Periksa kembali data Anda.");
        return;
      }

      // ✅ simpan informasi user (sesuaikan field `user.name` & `user.role`)
      if (data.token) {
        localStorage.setItem("token", data.token);
      }

      if (data.user) {
        localStorage.setItem("userName", data.user.name || "User");
        localStorage.setItem("userRole", data.user.role || "Sales");
      }

      // setelah login sukses, arahkan ke dashboard
      navigate("/dashboard");
    } catch (err) {
      console.error("Login error:", err);
      setErrorMsg("Terjadi kesalahan server. Coba beberapa saat lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* toggle theme */}
      <button
        className="auth-theme-toggle"
        onClick={handleToggleTheme}
        aria-label="Toggle Theme"
      >
        <i className={isLight ? "fas fa-sun" : "fas fa-moon"} />
      </button>

      <div className="auth-page">
        <div className="auth-container">
          {/* Kiri */}
          <div className="auth-left">
            <div className="auth-branding">
              <i className="fas fa-chart-line" />
              <h1>Banking Sales Portal</h1>
              <p>Predictive Lead Scoring untuk Deposito Berjangka</p>
            </div>

            <div className="auth-features">
              <div className="feature-item">
                <i className="fas fa-bullseye" />
                <div>
                  <h3>Prediksi Akurat</h3>
                  <p>Model ML mendeteksi calon nasabah potensial</p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fas fa-users" />
                <div>
                  <h3>Prioritas Lead</h3>
                  <p>Fokus pada nasabah probabilitas tertinggi</p>
                </div>
              </div>
              <div className="feature-item">
                <i className="fas fa-chart-bar" />
                <div>
                  <h3>Dashboard Interaktif</h3>
                  <p>Visualisasi data untuk keputusan tepat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Kanan */}
          <div className="auth-right">
            <div className="auth-form-container">
              <h2>Selamat Datang</h2>
              <p className="auth-subtitle">
                Masuk menggunakan Username atau Email dan Password
              </p>

              <form className="auth-form" onSubmit={handleSubmit}>
                {/* Identity (username/email) */}
                <div className="form-group">
                  <label htmlFor="identity">
                    <i className="fas fa-user" /> Username atau Email
                  </label>
                  <input
                    type="text"
                    id="identity"
                    name="identity"
                    required
                    placeholder="contoh: rizki123 atau rizki@bank.com"
                    value={form.identity}
                    onChange={handleChange}
                  />
                </div>

                {/* Password */}
                <div className="form-group">
                  <label htmlFor="password">
                    <i className="fas fa-lock" /> Password
                  </label>
                  <div className="password-input">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      name="password"
                      required
                      placeholder="Masukkan password"
                      value={form.password}
                      onChange={handleChange}
                    />
                    <button
                      type="button"
                      className="toggle-password"
                      onClick={() => setShowPassword((v) => !v)}
                    >
                      <i
                        className={`fas fa-eye${showPassword ? "-slash" : ""}`}
                      />
                    </button>
                  </div>
                </div>

                {/* Error message */}
                {errorMsg && (
                  <p
                    style={{
                      color: "#fca5a5",
                      fontSize: "0.85rem",
                      marginTop: "0.2rem",
                    }}
                  >
                    {errorMsg}
                  </p>
                )}

                <div className="form-group checkbox-group">
                  <label className="checkbox-label">
                    <input type="checkbox" id="remember" />
                    <span>Ingat saya</span>
                    <button type="button" className="btn-link">
                      Lupa password?
                    </button>
                  </label>
                </div>

                <button
                  type="submit"
                  className="btn btn-primary btn-block"
                  disabled={loading}
                >
                  {loading ? (
                    "Memproses..."
                  ) : (
                    <>
                      <i className="fas fa-sign-in-alt" /> Masuk
                    </>
                  )}
                </button>

                <div className="auth-divider">
                  <span>atau</span>
                </div>

                <div className="social-login">
                  <button type="button" className="btn btn-social btn-google">
                    <i className="fab fa-google" /> Google
                  </button>
                  <button
                    type="button"
                    className="btn btn-social btn-microsoft"
                  >
                    <i className="fab fa-microsoft" /> Microsoft
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
