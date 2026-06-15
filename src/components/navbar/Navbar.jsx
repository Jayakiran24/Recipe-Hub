import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Order Food", path: "/order-food" },
  { name: "Book a Chef", path: "/chefs" },
  { name: "Contact", path: "/contact" },
];

// Quick search suggestions — swap with real data/API later
const SEARCH_SUGGESTIONS = [
  {
    label: "Butter Chicken",
    type: "dish",
    path: "/order-food?q=butter+chicken",
  },
  { label: "Biryani", type: "dish", path: "/order-food?q=biryani" },
  { label: "Masala Dosa", type: "dish", path: "/order-food?q=masala+dosa" },
  { label: "Paneer Tikka", type: "dish", path: "/order-food?q=paneer+tikka" },
  { label: "Dal Makhani", type: "dish", path: "/order-food?q=dal+makhani" },
  {
    label: "Hyderabadi Dum Biryani",
    type: "restaurant",
    path: "/order-food?q=hyderabadi",
  },
  { label: "Chef Arjun Sharma", type: "chef", path: "/chefs?q=arjun" },
  { label: "Chef Priya Nair", type: "chef", path: "/chefs?q=priya" },
  {
    label: "South Indian",
    type: "cuisine",
    path: "/order-food?cuisine=south-indian",
  },
  { label: "Mughlai", type: "cuisine", path: "/order-food?cuisine=mughlai" },
];

const TYPE_ICON = {
  dish: (
    <svg
      width="14"
      height="14"
      fill="none"
      stroke="#e8a04a"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 11l19-9-9 19-2-8-8-2z" />
    </svg>
  ),
  restaurant: (
    <svg
      width="14"
      height="14"
      fill="none"
      stroke="#e8a04a"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    </svg>
  ),
  chef: (
    <svg
      width="14"
      height="14"
      fill="none"
      stroke="#e8a04a"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  cuisine: (
    <svg
      width="14"
      height="14"
      fill="none"
      stroke="#e8a04a"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
    </svg>
  ),
};

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);
  const navigate = useNavigate();

  // Filter suggestions based on query
  const filtered =
    searchQuery.trim().length > 0
      ? SEARCH_SUGGESTIONS.filter((s) =>
          s.label.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : SEARCH_SUGGESTIONS;

  // Open overlay and focus input
  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => searchInputRef.current?.focus(), 60);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setSearchQuery("");
  };

  // Keyboard: Escape closes, Enter navigates to first result
  useEffect(() => {
    if (!searchOpen) return;
    const handler = (e) => {
      if (e.key === "Escape") closeSearch();
      if (e.key === "Enter" && filtered.length > 0) {
        navigate(filtered[0].path);
        closeSearch();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [searchOpen, filtered, navigate]);

  return (
    <div>
      {/* ── NAVBAR ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center px-6 py-4"
        style={{ background: "#0f0d0b", backdropFilter: "blur(10px)" }}
      >
        {/* Left: Hamburger + Logo (desktop) */}
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

        {/* Center: Mobile logo / Desktop nav links */}
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

        <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => {
                if (link.path === "/")
                  window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-gray-300 hover:text-white transition-colors duration-200 tracking-wide"
              style={{
                fontFamily: "'Trebuchet MS', sans-serif",
                fontSize: "0.875rem",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Right: Search icon + User icon */}
        <div className="flex items-center gap-3 flex-1 justify-end">
          <button
            onClick={openSearch}
            className="text-gray-300 hover:text-[#e8a04a] transition-colors"
            aria-label="Search"
          >
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

      {/* Mobile drawer */}
      {menuOpen && (
        <div
          className="md:hidden fixed top-16 left-0 right-0 z-40 py-4 px-6 flex flex-col gap-4"
          style={{ background: "#1a1410" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="text-gray-300 hover:text-white text-sm tracking-wide"
              style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}

      {/* ── SEARCH OVERLAY ── */}
      {searchOpen && (
        <div
          className="fixed inset-0 z-[100] flex flex-col items-center"
          style={{
            background: "rgba(15,13,11,0.97)",
            backdropFilter: "blur(16px)",
          }}
        >
          {/* Close button */}
          <button
            onClick={closeSearch}
            className="absolute top-5 right-6 text-gray-400 hover:text-white transition"
            aria-label="Close search"
          >
            <svg
              width="22"
              height="22"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Search input */}
          <div className="w-full max-w-xl mt-24 px-6">
            <div
              className="flex items-center rounded-2xl px-4 py-3 gap-3"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(232,160,74,0.4)",
              }}
            >
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="#e8a04a"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                placeholder="Search dishes, chefs, cuisines…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 bg-transparent outline-none text-white placeholder-gray-500 text-base"
                style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="text-gray-500 hover:text-white"
                >
                  <svg
                    width="16"
                    height="16"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>

            {/* Suggestions */}
            <div className="mt-4">
              <p
                className="text-xs uppercase tracking-widest mb-3"
                style={{
                  color: "#6b5e50",
                  fontFamily: "'Trebuchet MS', sans-serif",
                }}
              >
                {searchQuery ? "Results" : "Popular searches"}
              </p>

              <div className="flex flex-col gap-1">
                {filtered.length === 0 ? (
                  <p
                    className="text-gray-500 text-sm py-4 text-center"
                    style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
                  >
                    No results for "{searchQuery}"
                  </p>
                ) : (
                  filtered.map((item) => (
                    <Link
                      key={item.label}
                      to={item.path}
                      onClick={closeSearch}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-150 group"
                      style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.background =
                          "rgba(232,160,74,0.08)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.background = "transparent")
                      }
                    >
                      <span className="opacity-70 group-hover:opacity-100">
                        {TYPE_ICON[item.type]}
                      </span>
                      <span className="text-gray-300 group-hover:text-white text-sm flex-1">
                        {item.label}
                      </span>
                      <span
                        className="text-xs capitalize px-2 py-0.5 rounded-full"
                        style={{
                          background: "rgba(232,160,74,0.12)",
                          color: "#e8a04a",
                          border: "1px solid rgba(232,160,74,0.2)",
                        }}
                      >
                        {item.type}
                      </span>
                    </Link>
                  ))
                )}
              </div>
            </div>

            <p
              className="text-center text-xs mt-8"
              style={{
                color: "#3d342c",
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
              Press{" "}
              <kbd
                className="px-1 py-0.5 rounded"
                style={{ background: "#1a1410", color: "#6b5e50" }}
              >
                Esc
              </kbd>{" "}
              to close &nbsp;·&nbsp;
              <kbd
                className="px-1 py-0.5 rounded"
                style={{ background: "#1a1410", color: "#6b5e50" }}
              >
                Enter
              </kbd>{" "}
              to go to first result
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
