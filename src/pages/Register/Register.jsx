// src/pages/Register/Register.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [accountType, setAccountType] = useState("foodie");
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [focused, setFocused] = useState("");
  const [loading, setLoading] = useState(false);
  const [step, setStep] = useState(1); // 1 = form, 2 = success

  const set = (k) => (e) => setForm((p) => ({ ...p, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setStep(2); }, 1800);
  };

  const strength = (() => {
    const p = form.password;
    if (!p) return 0;
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    return s;
  })();
  const strengthLabel = ["", "Weak", "Fair", "Good", "Strong"][strength];
  const strengthColor = ["", "#ef4444", "#f59e0b", "#22c55e", "#4ade80"][strength];

  return (
    <div style={{
      minHeight: "100vh",
      fontFamily: "'Trebuchet MS', sans-serif",
      background: "#0c0a08",
      position: "relative",
      display: "flex",
      flexDirection: "column",
    }}>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }

        /* ── Full-bleed background image (all screens) ── */
        .reg-bg {
          position: fixed; inset: 0; z-index: 0;
        }
        .reg-bg img {
          width: 100%; height: 100%; object-fit: cover; object-position: center;
          display: block;
        }
        .reg-bg-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(180deg, rgba(8,6,4,0.72) 0%, rgba(8,6,4,0.60) 50%, rgba(8,6,4,0.85) 100%);
        }

        /* ── Navbar ── */
        .reg-nav {
          position: relative; z-index: 10;
          display: flex; align-items: center; justify-content: space-between;
          padding: 14px 20px;
          background: rgba(10,8,5,0.65);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(232,160,74,0.12);
          flex-shrink: 0;
        }

        /* ── Page scroll container ── */
        .reg-scroll {
          position: relative; z-index: 5;
          flex: 1;
          display: flex;
          align-items: flex-start;
          justify-content: center;
          padding: 32px 16px 48px;
          overflow-y: auto;
        }
        @media (min-width: 768px)  { .reg-scroll { align-items: center; padding: 40px 24px; } }
        @media (min-width: 1200px) { .reg-scroll { padding: 48px 32px; } }

        /* ── Card ── */
        .reg-card {
          width: 100%;
          max-width: 460px;
          border-radius: 24px;
          background: rgba(18,14,10,0.88);
          backdrop-filter: blur(24px);
          border: 1px solid rgba(232,160,74,0.18);
          box-shadow: 0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04);
          padding: 36px 32px 32px;
        }
        @media (max-width: 400px) { .reg-card { padding: 28px 20px 24px; } }
        @media (min-width: 1200px) { .reg-card { max-width: 500px; padding: 44px 40px 38px; } }
        @media (min-width: 1600px) { .reg-card { max-width: 520px; } }

        /* ── Input ── */
        .inp-wrap { position: relative; }
        .inp {
          width: 100%;
          padding: 13px 44px 13px 40px;
          border-radius: 11px;
          background: rgba(255,255,255,0.05);
          border: 1.5px solid rgba(255,255,255,0.1);
          color: #f5f0ea;
          font-size: 0.875rem;
          font-family: 'Trebuchet MS', sans-serif;
          outline: none;
          transition: border-color 0.25s, background 0.25s, box-shadow 0.25s;
        }
        .inp::placeholder { color: rgba(255,255,255,0.22); }
        .inp:focus {
          border-color: #e8a04a;
          background: rgba(232,160,74,0.06);
          box-shadow: 0 0 0 3px rgba(232,160,74,0.13);
        }
        .inp-left-icon {
          position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
          color: rgba(255,255,255,0.28); pointer-events: none;
          display: flex; align-items: center;
          transition: color 0.2s;
        }
        .inp-right-btn {
          position: absolute; right: 12px; top: 50%; transform: translateY(-50%);
          background: none; border: none; cursor: pointer;
          color: rgba(255,255,255,0.28); display: flex; align-items: center;
          transition: color 0.2s;
        }
        .inp-right-btn:hover { color: #e8a04a; }

        /* ── Label row ── */
        .inp-label {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 7px;
          font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.4);
        }

        /* ── Account type tabs ── */
        .type-tab {
          flex: 1; padding: 12px 8px; border-radius: 11px;
          display: flex; flex-direction: column; align-items: center; gap: 5px;
          cursor: pointer; border: 1.5px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.04);
          transition: all 0.2s;
          font-family: 'Trebuchet MS', sans-serif;
        }
        .type-tab.active {
          background: rgba(232,160,74,0.15);
          border-color: #e8a04a;
          box-shadow: 0 0 0 3px rgba(232,160,74,0.1);
        }
        .type-tab span { font-size: 0.72rem; font-weight: bold; letter-spacing: 0.1em; text-transform: uppercase; color: rgba(255,255,255,0.4); }
        .type-tab.active span { color: #e8a04a; }

        /* ── Create account button ── */
        .create-btn {
          width: 100%; padding: 14px;
          border-radius: 11px;
          background: linear-gradient(135deg, #e8a04a 0%, #c97c28 100%);
          border: none; color: #0c0a08;
          font-size: 0.92rem; font-weight: bold; letter-spacing: 0.05em;
          cursor: pointer; font-family: 'Trebuchet MS', sans-serif;
          display: flex; align-items: center; justify-content: center; gap: 8px;
          transition: filter 0.2s, transform 0.15s;
        }
        .create-btn:hover:not(:disabled) { filter: brightness(1.1); transform: translateY(-1px); }
        .create-btn:active:not(:disabled) { transform: translateY(0); }
        .create-btn:disabled { opacity: 0.72; cursor: not-allowed; }

        /* ── Social circle btns ── */
        .social-circle {
          width: 42px; height: 42px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          background: rgba(255,255,255,0.06);
          border: 1.5px solid rgba(255,255,255,0.1);
          cursor: pointer; transition: background 0.2s, border-color 0.2s, transform 0.15s;
        }
        .social-circle:hover { background: rgba(255,255,255,0.12); border-color: rgba(255,255,255,0.2); transform: translateY(-2px); }

        /* ── Divider ── */
        .divider {
          display: flex; align-items: center; gap: 12px;
          font-size: 0.68rem; letter-spacing: 0.1em; text-transform: uppercase;
          color: rgba(255,255,255,0.2);
        }
        .divider::before, .divider::after { content:''; flex:1; height:1px; background: rgba(255,255,255,0.08); }

        /* ── Strength bar ── */
        .strength-bar-bg {
          height: 3px; border-radius: 2px; background: rgba(255,255,255,0.08);
          overflow: hidden; flex: 1;
        }
        .strength-bar-fill { height: 100%; border-radius: 2px; transition: width 0.35s ease, background 0.35s ease; }

        /* ── Spinner ── */
        @keyframes spin { to { transform: rotate(360deg); } }
        .spinner { width:18px; height:18px; border:2px solid rgba(12,10,8,0.25); border-top-color:#0c0a08; border-radius:50%; animation:spin 0.7s linear infinite; }

        /* ── Animations ── */
        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .a0 { animation: fadeUp 0.45s 0.05s ease both; }
        .a1 { animation: fadeUp 0.45s 0.10s ease both; }
        .a2 { animation: fadeUp 0.45s 0.16s ease both; }
        .a3 { animation: fadeUp 0.45s 0.22s ease both; }
        .a4 { animation: fadeUp 0.45s 0.28s ease both; }
        .a5 { animation: fadeUp 0.45s 0.34s ease both; }
        .a6 { animation: fadeUp 0.45s 0.40s ease both; }
        .a7 { animation: fadeUp 0.45s 0.46s ease both; }

        /* ── Success card ── */
        @keyframes scaleIn { from { opacity:0; transform:scale(0.85); } to { opacity:1; transform:scale(1); } }
        .success-card { animation: scaleIn 0.5s ease both; }

        /* ── Checkbox custom ── */
        .custom-check {
          width: 17px; height: 17px; border-radius: 5px;
          border: 1.5px solid rgba(255,255,255,0.2);
          background: rgba(255,255,255,0.04);
          flex-shrink: 0; cursor: pointer;
          transition: border-color 0.2s, background 0.2s;
          display: flex; align-items: center; justify-content: center;
        }
        .custom-check.checked { background: #e8a04a; border-color: #e8a04a; }
      `}</style>

      {/* ── FULL-BLEED BG ─────────────────────────────────────────────── */}
      <div className="reg-bg">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=85"
          alt=""
        />
        <div className="reg-bg-overlay" />
      </div>

      {/* ── NAVBAR ──────────────────────────────────────────────────────── */}
      <nav className="reg-nav">
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: "8px" }}>
          <svg width="18" height="14" viewBox="0 0 22 18" fill="none">
            <rect y="0" width="22" height="2" rx="1" fill="#e8a04a"/>
            <rect y="8" width="16" height="2" rx="1" fill="#e8a04a"/>
            <rect y="16" width="22" height="2" rx="1" fill="#e8a04a"/>
          </svg>
          <span style={{ fontFamily: "'Georgia', serif", fontSize: "1.2rem", fontWeight: "bold", color: "#e8a04a", letterSpacing: "0.02em" }}>
            Recipe Hub
          </span>
        </Link>
        <div style={{
          width: "36px", height: "36px", borderRadius: "50%",
          background: "rgba(232,160,74,0.15)",
          border: "1px solid rgba(232,160,74,0.3)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="16" height="16" fill="none" stroke="#e8a04a" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
          </svg>
        </div>
      </nav>

      {/* ── SCROLLABLE CONTENT ──────────────────────────────────────────── */}
      <div className="reg-scroll">

        {step === 2 ? (
          /* ── SUCCESS STATE ── */
          <div className="reg-card success-card" style={{ textAlign: "center" }}>
            <div style={{
              width: "72px", height: "72px", borderRadius: "50%",
              background: "linear-gradient(135deg, #e8a04a, #c97c28)",
              display: "flex", alignItems: "center", justifyContent: "center",
              margin: "0 auto 20px",
              boxShadow: "0 12px 32px rgba(232,160,74,0.35)",
            }}>
              <svg width="32" height="32" fill="none" stroke="#0c0a08" strokeWidth="2.5" viewBox="0 0 24 24">
                <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h2 style={{ fontFamily: "'Georgia', serif", fontSize: "1.5rem", fontWeight: "bold", color: "#f5f0ea", marginBottom: "8px" }}>
              Welcome to Recipe Hub!
            </h2>
            <p style={{ color: "#6b6259", fontSize: "0.85rem", lineHeight: 1.65, marginBottom: "28px" }}>
              Your account has been created. Start exploring world-class culinary experiences.
            </p>
            <button
              className="create-btn"
              onClick={() => navigate("/")}
            >
              Explore Now →
            </button>
            <p style={{ marginTop: "16px", fontSize: "0.78rem", color: "#6b6259" }}>
              Check your email for a verification link.
            </p>
          </div>
        ) : (
          /* ── REGISTRATION FORM ── */
          <div className="reg-card">

            {/* Heading */}
            <div className="a0" style={{ textAlign: "center", marginBottom: "28px" }}>
              <h1 style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.5rem, 4vw, 1.9rem)",
                fontWeight: "bold", color: "#f5f0ea", lineHeight: 1.2, marginBottom: "7px",
              }}>
                Join the Hub
              </h1>
              <p style={{ color: "#6b6259", fontSize: "0.82rem" }}>Elevate your culinary journey today.</p>
            </div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>

              {/* Full Name */}
              <div className="a1">
                <div className="inp-label"><span>Full Name</span></div>
                <div className="inp-wrap">
                  <span className="inp-left-icon" style={{ color: focused === "name" ? "#e8a04a" : undefined }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </span>
                  <input
                    className="inp"
                    type="text"
                    placeholder="Chef Ananya Sharma"
                    value={form.name}
                    onChange={set("name")}
                    onFocus={() => setFocused("name")}
                    onBlur={() => setFocused("")}
                    required
                    autoComplete="name"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="a2">
                <div className="inp-label"><span>Email Address</span></div>
                <div className="inp-wrap">
                  <span className="inp-left-icon" style={{ color: focused === "email" ? "#e8a04a" : undefined }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 7 10-7"/>
                    </svg>
                  </span>
                  <input
                    className="inp"
                    type="email"
                    placeholder="chef@recipehub.com"
                    value={form.email}
                    onChange={set("email")}
                    onFocus={() => setFocused("email")}
                    onBlur={() => setFocused("")}
                    required
                    autoComplete="email"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="a3">
                <div className="inp-label"><span>Password</span></div>
                <div className="inp-wrap">
                  <span className="inp-left-icon" style={{ color: focused === "pass" ? "#e8a04a" : undefined }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </span>
                  <input
                    className="inp"
                    type={showPass ? "text" : "password"}
                    placeholder="Min. 8 characters"
                    value={form.password}
                    onChange={set("password")}
                    onFocus={() => setFocused("pass")}
                    onBlur={() => setFocused("")}
                    required
                    minLength={8}
                    autoComplete="new-password"
                  />
                  <button type="button" className="inp-right-btn" onClick={() => setShowPass(p => !p)} aria-label="Toggle password">
                    {showPass ? (
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
                {/* Strength meter */}
                {form.password && (
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "7px" }}>
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="strength-bar-bg">
                        <div
                          className="strength-bar-fill"
                          style={{
                            width: strength >= i ? "100%" : "0%",
                            background: strengthColor,
                          }}
                        />
                      </div>
                    ))}
                    <span style={{ fontSize: "0.65rem", color: strengthColor, minWidth: "34px", fontWeight: "bold", letterSpacing: "0.06em" }}>
                      {strengthLabel}
                    </span>
                  </div>
                )}
              </div>

              {/* Confirm Password */}
              <div className="a4">
                <div className="inp-label">
                  <span>Confirm Password</span>
                  {form.confirm && form.password && (
                    <span style={{ fontSize: "0.65rem", color: form.confirm === form.password ? "#4ade80" : "#ef4444", fontWeight: "bold" }}>
                      {form.confirm === form.password ? "✓ Match" : "✗ No match"}
                    </span>
                  )}
                </div>
                <div className="inp-wrap">
                  <span className="inp-left-icon" style={{ color: focused === "confirm" ? "#e8a04a" : undefined }}>
                    <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </span>
                  <input
                    className="inp"
                    type={showConfirm ? "text" : "password"}
                    placeholder="Re-enter password"
                    value={form.confirm}
                    onChange={set("confirm")}
                    onFocus={() => setFocused("confirm")}
                    onBlur={() => setFocused("")}
                    required
                    autoComplete="new-password"
                    style={{
                      borderColor: form.confirm && form.password
                        ? form.confirm === form.password
                          ? "rgba(74,222,128,0.5)"
                          : "rgba(239,68,68,0.5)"
                        : undefined,
                    }}
                  />
                  <button type="button" className="inp-right-btn" onClick={() => setShowConfirm(p => !p)} aria-label="Toggle">
                    {showConfirm ? (
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                        <line x1="1" y1="1" x2="23" y2="23"/>
                      </svg>
                    ) : (
                      <svg width="15" height="15" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Account Type */}
              <div className="a5">
                <div className="inp-label" style={{ marginBottom: "10px" }}><span>Account Type</span></div>
                <div style={{ display: "flex", gap: "12px" }}>
                  {[
                    {
                      id: "foodie", label: "Foodie",
                      icon: (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path d="M18 8h1a4 4 0 0 1 0 8h-1"/><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/><line x1="6" y1="1" x2="6" y2="4"/><line x1="10" y1="1" x2="10" y2="4"/><line x1="14" y1="1" x2="14" y2="4"/>
                        </svg>
                      ),
                    },
                    {
                      id: "chef", label: "Chef",
                      icon: (
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                          <path d="M6 13.87A4 4 0 0 1 7.41 6a5.11 5.11 0 0 1 1.05-1.54 5 5 0 0 1 7.08 0A5.11 5.11 0 0 1 16.59 6 4 4 0 0 1 18 13.87V21H6z"/><line x1="6" y1="17" x2="18" y2="17"/>
                        </svg>
                      ),
                    },
                  ].map((t) => (
                    <button
                      key={t.id}
                      type="button"
                      className={`type-tab ${accountType === t.id ? "active" : ""}`}
                      onClick={() => setAccountType(t.id)}
                      style={{ color: accountType === t.id ? "#e8a04a" : "rgba(255,255,255,0.35)" }}
                    >
                      {t.icon}
                      <span>{t.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Terms checkbox */}
              <div className="a6" style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                <div style={{
                  width: "17px", height: "17px", borderRadius: "5px", flexShrink: 0, marginTop: "1px",
                  border: "1.5px solid rgba(255,255,255,0.2)",
                  background: "rgba(255,255,255,0.04)",
                }} />
                <p style={{ fontSize: "0.76rem", color: "#6b6259", lineHeight: 1.55 }}>
                  I agree to the{" "}
                  <a href="#" style={{ color: "#e8a04a", textDecoration: "none" }}>Terms of Service</a>
                  {" "}and{" "}
                  <a href="#" style={{ color: "#e8a04a", textDecoration: "none" }}>Privacy Policy</a>
                </p>
              </div>

              {/* Submit */}
              <div className="a6">
                <button className="create-btn" type="submit" disabled={loading}>
                  {loading ? <span className="spinner" /> : null}
                  {loading ? "Creating Account…" : "Create Account"}
                </button>
              </div>
            </form>

            {/* Divider + social */}
            <div className="a7" style={{ marginTop: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
              <div className="divider">or sign up with</div>
              <div style={{ display: "flex", justifyContent: "center", gap: "14px" }}>
                {/* Google */}
                <button className="social-circle" aria-label="Sign up with Google">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </button>
                {/* Apple */}
                <button className="social-circle" aria-label="Sign up with Apple">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#f5f0ea">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                </button>
                {/* Phone */}
                <button className="social-circle" aria-label="Sign up with phone">
                  <svg width="18" height="18" fill="none" stroke="#f5f0ea" strokeWidth="2" viewBox="0 0 24 24">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </button>
              </div>
            </div>

            {/* Login link */}
            <div className="a7" style={{ marginTop: "20px", textAlign: "center" }}>
              <p style={{ fontSize: "0.8rem", color: "#6b6259" }}>
                Already have an account?{" "}
                <Link
                  to="/login"
                  style={{ color: "#e8a04a", fontWeight: "bold", textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.8")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Login
                </Link>
              </p>
            </div>

          </div>
        )}
      </div>

      {/* ── FOOTER ─────────────────────────────────────────────────────── */}
      <div style={{
        position: "relative", zIndex: 5,
        textAlign: "center", padding: "14px 16px",
        borderTop: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(8,6,4,0.6)",
        backdropFilter: "blur(8px)",
        flexShrink: 0,
      }}>
        <p style={{ fontSize: "0.68rem", color: "rgba(255,255,255,0.18)", letterSpacing: "0.04em" }}>
          © {new Date().getFullYear()} Recipe Hub. Crafted for the Modern Kitchen.
        </p>
      </div>
    </div>
  );
}