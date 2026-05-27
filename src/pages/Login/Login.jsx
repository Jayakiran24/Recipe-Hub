// src/pages/Login/Login.jsx
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [remember, setRemember] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/");
    }, 1800);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        background: "#0c0a08",
        fontFamily: "'Trebuchet MS',sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        *,*::before,*::after{ box-sizing:border-box; margin:0; padding:0; -webkit-tap-highlight-color:transparent; }

        /* ── SPLIT ──────────────────────────────────────────────────────── */
        .l-left  { display:none; position:relative; overflow:hidden; flex-shrink:0; }
        .l-right {
          width:100%; min-height:100vh;
          display:flex; flex-direction:column;
          justify-content:center; align-items:center;
          padding:48px 24px;
          position:relative; overflow-y:auto;
          background:#0c0a08;
        }

        /* tablet */
        @media(min-width:768px){
          .l-left  { display:block; width:50%; }
          .l-right { width:50%; padding:56px 44px; }
        }
        /* laptop */
        @media(min-width:1024px){
          .l-left  { width:52%; }
          .l-right { width:48%; padding:64px 56px; }
        }
        /* desktop */
        @media(min-width:1280px){
          .l-left  { width:55%; }
          .l-right { width:45%; padding:72px 72px; }
        }
        /* large */
        @media(min-width:1536px){
          .l-left  { width:58%; }
          .l-right { width:42%; padding:80px 96px; }
        }
        /* ultra-wide */
        @media(min-width:1920px){
          .l-left  { width:60%; }
          .l-right { width:40%; padding:88px 112px; }
        }

        /* form always max-width so it doesn't stretch on huge screens */
        .form-box{ width:100%; max-width:400px; }
        @media(min-width:1536px){ .form-box{ max-width:420px; } }

        /* ── MOBILE HINT BG ─────────────────────────────────────────────── */
        .mob-bg{ display:block; position:fixed; inset:0; z-index:0; pointer-events:none; }
        @media(min-width:768px){ .mob-bg{ display:none; } }

        /* ── LEFT OVERLAY ───────────────────────────────────────────────── */
        .l-grad-v  { position:absolute; inset:0; background:linear-gradient(180deg,rgba(10,8,5,0.18) 0%,rgba(10,8,5,0.48) 55%,rgba(10,8,5,0.94) 100%); z-index:1; }
        .l-grad-h  { position:absolute; inset:0; background:linear-gradient(90deg,transparent 52%,#0c0a08 100%); z-index:2; }

        /* left panel text */
        .l-text{
          position:absolute; bottom:0; left:0; right:0; z-index:3;
          padding:44px 48px;
        }
        @media(min-width:1280px){ .l-text{ padding:52px 60px; } }
        @media(min-width:1536px){ .l-text{ padding:60px 72px; } }

        /* ── INPUTS ─────────────────────────────────────────────────────── */
        .inp-wrap{ position:relative; }
        .inp{
          width:100%; padding:13px 42px 13px 15px;
          border-radius:10px;
          background:rgba(255,255,255,0.05);
          border:1.5px solid rgba(255,255,255,0.1);
          color:#f5f0ea; font-size:0.875rem;
          font-family:'Trebuchet MS',sans-serif;
          outline:none;
          transition:border-color .22s,background .22s,box-shadow .22s;
        }
        .inp::placeholder{ color:rgba(255,255,255,0.22); }
        .inp:focus{
          border-color:#e8a04a;
          background:rgba(232,160,74,0.06);
          box-shadow:0 0 0 3px rgba(232,160,74,0.13);
        }
        .inp-icon-r{
          position:absolute; right:13px; top:50%; transform:translateY(-50%);
          color:rgba(255,255,255,0.28); background:none; border:none;
          display:flex; align-items:center; cursor:pointer;
          transition:color .2s;
        }
        .inp-icon-r:hover{ color:#e8a04a; }

        /* label row */
        .inp-label{
          display:flex; align-items:center; justify-content:space-between;
          margin-bottom:7px;
          font-size:0.68rem; letter-spacing:0.1em; text-transform:uppercase;
          color:rgba(255,255,255,0.38);
        }

        /* ── SOCIAL BTNS ────────────────────────────────────────────────── */
        .soc-btn{
          flex:1; display:flex; align-items:center; justify-content:center; gap:8px;
          padding:11px 10px; border-radius:10px;
          background:rgba(255,255,255,0.05);
          border:1.5px solid rgba(255,255,255,0.1);
          color:#c8bfb5; font-size:0.78rem; font-weight:600;
          cursor:pointer; font-family:'Trebuchet MS',sans-serif; white-space:nowrap;
          transition:background .2s,border-color .2s,transform .15s;
        }
        .soc-btn:hover{ background:rgba(255,255,255,0.09); border-color:rgba(255,255,255,0.2); transform:translateY(-1px); }
        .soc-btn:active{ transform:translateY(0); }

        /* ── SIGN IN BTN ────────────────────────────────────────────────── */
        .sign-btn{
          width:100%; padding:14px; border-radius:10px;
          background:linear-gradient(135deg,#e8a04a 0%,#c97c28 100%);
          border:none; color:#0c0a08;
          font-size:0.95rem; font-weight:bold; letter-spacing:0.06em;
          cursor:pointer; font-family:'Trebuchet MS',sans-serif;
          display:flex; align-items:center; justify-content:center; gap:8px;
          box-shadow:0 8px 24px rgba(232,160,74,0.28);
          transition:filter .2s,transform .15s;
        }
        .sign-btn:hover:not(:disabled){ filter:brightness(1.1); transform:translateY(-1px); }
        .sign-btn:active:not(:disabled){ transform:translateY(0); }
        .sign-btn:disabled{ opacity:.72; cursor:not-allowed; }

        /* ── DIVIDER ────────────────────────────────────────────────────── */
        .divider{
          display:flex; align-items:center; gap:12px;
          font-size:0.68rem; letter-spacing:0.12em; text-transform:uppercase;
          color:rgba(255,255,255,0.2);
        }
        .divider::before,.divider::after{ content:''; flex:1; height:1px; background:rgba(255,255,255,0.09); }

        /* ── SPINNER ────────────────────────────────────────────────────── */
        @keyframes spin{ to{ transform:rotate(360deg); } }
        .spinner{ width:18px; height:18px; border:2px solid rgba(12,10,8,0.25); border-top-color:#0c0a08; border-radius:50%; animation:spin .7s linear infinite; }

        /* ── ANIMATIONS ─────────────────────────────────────────────────── */
        @keyframes fadeUp  { from{ opacity:0; transform:translateY(20px); } to{ opacity:1; transform:translateY(0); } }
        @keyframes fadeLft { from{ opacity:0; transform:translateX(-20px); } to{ opacity:1; transform:translateX(0); } }
        @keyframes pulse   { 0%,100%{ opacity:1; } 50%{ opacity:0.35; } }
        .a0{ animation:fadeUp  .5s 0.04s ease both; }
        .a1{ animation:fadeUp  .5s 0.10s ease both; }
        .a2{ animation:fadeUp  .5s 0.16s ease both; }
        .a3{ animation:fadeUp  .5s 0.22s ease both; }
        .a4{ animation:fadeUp  .5s 0.28s ease both; }
        .a5{ animation:fadeUp  .5s 0.34s ease both; }
        .a6{ animation:fadeUp  .5s 0.40s ease both; }
        .la{ animation:fadeLft .7s 0.30s ease both; }
        .pulse-dot{ animation:pulse 2s ease-in-out infinite; }

        /* footer links */
        .ft-link{
          font-size:0.7rem; color:rgba(255,255,255,0.18);
          text-decoration:none; letter-spacing:0.03em;
          transition:color .2s;
        }
        .ft-link:hover{ color:#9a8f85; }
      `}</style>

      {/* ── MOBILE BG HINT ──────────────────────────────────────────────── */}
      <div className="mob-bg">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=60"
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.07,
          }}
        />
      </div>

      {/* ══ LEFT — hero image ════════════════════════════════════════════ */}
      <div className="l-left">
        <img
          src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1600&q=85"
          alt="Chef cooking"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            display: "block",
          }}
        />
        <div className="l-grad-v" />
        <div className="l-grad-h" />

        {/* Text */}
        <div className="l-text la">
          {/* badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              padding: "5px 14px",
              borderRadius: "20px",
              background: "rgba(232,160,74,0.12)",
              border: "1px solid rgba(232,160,74,0.3)",
              marginBottom: "18px",
            }}
          >
            <span
              className="pulse-dot"
              style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "#e8a04a",
                display: "inline-block",
                boxShadow: "0 0 6px #e8a04a",
              }}
            />
            <span
              style={{
                fontSize: "0.65rem",
                color: "#e8a04a",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Culinary Excellence
            </span>
          </div>

          <h2
            style={{
              fontFamily: "'Georgia',serif",
              fontSize: "clamp(1.8rem,3vw,3rem)",
              fontWeight: "bold",
              color: "#f5f0ea",
              lineHeight: 1.12,
              marginBottom: "14px",
            }}
          >
            Master the Art of
            <br />
            <em style={{ color: "#e8a04a", fontStyle: "italic" }}>Flavour</em>
          </h2>
          <p
            style={{
              color: "rgba(245,240,234,0.5)",
              fontSize: "0.87rem",
              lineHeight: 1.72,
              maxWidth: "320px",
              marginBottom: "30px",
            }}
          >
            A community of professional chefs and home enthusiasts dedicated to
            culinary excellence.
          </p>

          {/* stats */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid rgba(255,255,255,0.08)",
              paddingTop: "22px",
            }}
          >
            {[
              { val: "2,400+", label: "Recipes" },
              { val: "180+", label: "Chefs" },
              { val: "50k+", label: "Members" },
            ].map((s, i) => (
              <div
                key={s.label}
                style={{
                  flex: 1,
                  paddingLeft: i > 0 ? "20px" : "0",
                  borderLeft:
                    i > 0 ? "1px solid rgba(255,255,255,0.1)" : "none",
                  marginLeft: i > 0 ? "20px" : "0",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "1.25rem",
                    fontWeight: "bold",
                    color: "#e8a04a",
                    lineHeight: 1,
                  }}
                >
                  {s.val}
                </p>
                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "rgba(255,255,255,0.32)",
                    marginTop: "4px",
                    letterSpacing: "0.06em",
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══ RIGHT — login form ═══════════════════════════════════════════ */}
      <div className="l-right">
        <div className="form-box" style={{ position: "relative", zIndex: 1 }}>
          {/* Logo */}
          <div className="a0" style={{ marginBottom: "32px" }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <span
                style={{
                  fontFamily: "'Georgia',serif",
                  fontSize: "1.35rem",
                  fontWeight: "bold",
                  color: "#e8a04a",
                  letterSpacing: "0.02em",
                }}
              >
                Recipe Hub
              </span>
            </Link>
          </div>

          {/* Heading */}
          <div className="a1" style={{ marginBottom: "26px" }}>
            <h1
              style={{
                fontFamily: "'Georgia',serif",
                fontSize: "clamp(1.55rem,3.5vw,2rem)",
                fontWeight: "bold",
                color: "#f5f0ea",
                lineHeight: 1.18,
                marginBottom: "7px",
              }}
            >
              Welcome Back
            </h1>
            <p
              style={{ color: "#6b6259", fontSize: "0.83rem", lineHeight: 1.6 }}
            >
              Log in to access your curated kitchen workspace.
            </p>
          </div>

          {/* Social */}
          <div
            className="a2"
            style={{ display: "flex", gap: "10px", marginBottom: "20px" }}
          >
            <button className="soc-btn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </button>
            <button className="soc-btn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#f5f0ea">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              Apple
            </button>
          </div>

          {/* Divider */}
          <div className="a2 divider" style={{ marginBottom: "20px" }}>
            or email
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            style={{ display: "flex", flexDirection: "column", gap: "16px" }}
          >
            {/* Email */}
            <div className="a3">
              <div className="inp-label">
                <span>Email Address</span>
              </div>
              <div className="inp-wrap">
                <input
                  className="inp"
                  type="email"
                  placeholder="chef@recipehub.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused("")}
                  required
                  autoComplete="email"
                />
                <span
                  className="inp-icon-r"
                  style={{
                    color: focused === "email" ? "#e8a04a" : undefined,
                    cursor: "default",
                  }}
                >
                  <svg
                    width="15"
                    height="15"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m2 7 10 7 10-7" />
                  </svg>
                </span>
              </div>
            </div>

            {/* Password */}
            <div className="a4">
              <div className="inp-label">
                <span>Password</span>
                <Link
                  to="/forgot-password"
                  style={{
                    color: "#e8a04a",
                    fontSize: "0.68rem",
                    textDecoration: "none",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    fontWeight: "bold",
                  }}
                >
                  Forgot?
                </Link>
              </div>
              <div className="inp-wrap">
                <input
                  className="inp"
                  type={showPass ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  onFocus={() => setFocused("pass")}
                  onBlur={() => setFocused("")}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="inp-icon-r"
                  onClick={() => setShowPass((p) => !p)}
                  style={{ color: focused === "pass" ? "#e8a04a" : undefined }}
                  aria-label={showPass ? "Hide password" : "Show password"}
                >
                  {showPass ? (
                    <svg
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                      <line x1="1" y1="1" x2="23" y2="23" />
                    </svg>
                  ) : (
                    <svg
                      width="15"
                      height="15"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div
              className="a4"
              style={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <div
                onClick={() => setRemember((p) => !p)}
                style={{
                  width: "17px",
                  height: "17px",
                  borderRadius: "5px",
                  flexShrink: 0,
                  border: remember
                    ? "1.5px solid #e8a04a"
                    : "1.5px solid rgba(255,255,255,0.2)",
                  background: remember ? "#e8a04a" : "rgba(255,255,255,0.04)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all .2s",
                }}
              >
                {remember && (
                  <svg
                    width="10"
                    height="10"
                    fill="none"
                    stroke="#0c0a08"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M20 6L9 17l-5-5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </div>
              <span
                style={{
                  fontSize: "0.78rem",
                  color: "#6b6259",
                  cursor: "pointer",
                }}
                onClick={() => setRemember((p) => !p)}
              >
                Remember me for 30 days
              </span>
            </div>

            {/* Submit */}
            <div className="a5">
              <button className="sign-btn" type="submit" disabled={loading}>
                {loading && <span className="spinner" />}
                {loading ? "Signing in…" : "Sign In"}
              </button>
            </div>
          </form>

          {/* Register link */}
          <div
            className="a6"
            style={{ marginTop: "22px", textAlign: "center" }}
          >
            <p style={{ fontSize: "0.82rem", color: "#6b6259" }}>
              Don't have an account?{" "}
              <Link
                to="/register"
                style={{
                  color: "#e8a04a",
                  fontWeight: "bold",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Create Account
              </Link>
            </p>
          </div>

          {/* Footer */}
          <div
            className="a6"
            style={{
              marginTop: "44px",
              display: "flex",
              justifyContent: "center",
              gap: "24px",
            }}
          >
            <a href="#" className="ft-link">
              Privacy Policy
            </a>
            <a href="#" className="ft-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
