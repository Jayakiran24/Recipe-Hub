import React, { useState } from "react";
import { Link } from "react-router-dom";
// const NAV_LINKS = ["Home", "Browse", "Chefs", "Pricing"];
const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Order Food", path: "/order-food" },
  { name: "Book a Chef", path: "/chefs" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      {/* ── NAVBAR ── */}
      {/* <nav className="flex items-center px-6 py-4 relative z-50"> */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4"
        style={{
          background: "#0f0d0b",
          backdropFilter: "blur(10px)",
        }}
      >
        {/* Left: Hamburger (mobile) + Logo (desktop) */}
        <div className="flex items-center gap-4 flex-1">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
            aria-label="Menu"
          >
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none">
              <rect y="0" width="22" height="2" rx="1" fill="#e8a04a" />
              <rect y="8" width="16" height="2" rx="1" fill="#e8a04a" />
              <rect y="16" width="22" height="2" rx="1" fill="#e8a04a" />
            </svg>
          </button>

          {/* Logo — visible on desktop in normal flow */}
          <span
            className="hidden md:inline"
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.35rem",
              fontWeight: "bold",
              color: "#e8a04a",
              letterSpacing: "0.02em",
            }}
          >
            Recipe Hub
          </span>
        </div>

        {/* Center: Logo on mobile (absolute), Nav links on desktop */}
        {/* Mobile logo — absolutely centered */}
        <div className="absolute left-1/2 -translate-x-1/2 md:hidden">
          <span
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.35rem",
              fontWeight: "bold",
              color: "#e8a04a",
              letterSpacing: "0.02em",
            }}
          >
            Recipe Hub
          </span>
        </div>

        {/* Desktop nav links — centered */}
        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {/* {NAV_LINKS.map((link) => (
            // <Link
            //   key={link.name}
            //   to={link.path}
            //   className="text-gray-300 hover:text-white transition-colors duration-200 tracking-wide"
            //   style={{
            //     fontFamily: "'Trebuchet MS', sans-serif",
            //     fontSize: "0.875rem",
            //   }}
            // >
            //   {link.name}
            // </Link>
          ))} */}
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                if (link.path === "/") {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }
              }}
              className="text-gray-300 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Icons */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <button className="text-gray-300 hover:text-white transition-colors">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          {/* <div
            className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold"
            style={{ background: "#e8a04a", color: "#0f0d0b" }}
          >
            JK
          </div> */}
          <Link
            to="/register"
            className="w-8 h-8 rounded-full flex items-center justify-center border border-[#e8a04a] text-[#e8a04a] hover:bg-[#e8a04a] hover:text-[#0f0d0b] transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 12a4 4 0 100-8 4 4 0 000 8zm0 2c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
              />
            </svg>
          </Link>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden absolute top-16 left-0 right-0 z-40 py-4 px-6 flex flex-col gap-4"
          style={{ background: "#1a1410" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white text-sm tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
