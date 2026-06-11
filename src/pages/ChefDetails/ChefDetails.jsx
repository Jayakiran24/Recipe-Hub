// src/pages/Chefs/ChefDetails.jsx
// Drop-in detail page — matches the dark luxury design system from Chefs.jsx
// Route: /chefs/:id   →   <Route path="/chefs/:id" element={<ChefDetails />} />

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// ─── FULL CHEF DATABASE ───────────────────────────────────────────────────────
// Each entry extends the listing data with profile-page fields:
//   story, awards, cuisines[], specials[], menuItems[], gallery[], availability
const CHEFS = [
  {
    id: 1,
    name: "Chef Imtiaz Qureshi",
    badge: "Master",
    rating: 5.0,
    sessions: 890,
    price: 8500,
    experience: "50 Years",
    specialty: "Awadhi • Dum Pukht Cuisine",
    category: "mughlai",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000&q=80",
    coverImg:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1400&q=80",
    location: "Delhi / Lucknow",
    languages: ["Hindi", "Urdu", "English"],
    story:
      "Padma Shri awardee and the architect of modern Dum Pukht cuisine. Over five decades, Chef Imtiaz has cooked for heads of state, royal families, and intimate home gatherings alike. His mastery of slow-flame sealed-vessel cooking transforms humble lentils and aromatic rice into poetry on a plate.",
    awards: [
      { title: "Padma Shri", year: "2016", body: "Government of India" },
      {
        title: "Lifetime Achievement",
        year: "2019",
        body: "Indian Culinary Forum",
      },
      { title: "Best Regional Chef", year: "2011", body: "Times Food Awards" },
    ],
    cuisines: ["Awadhi", "Mughlai", "Biryani", "Kebabs"],
    specials: [
      {
        name: "Dum Gosht Biryani",
        desc: "Aged basmati sealed in a deg with 24-hour marinated mutton",
        price: 4200,
        time: "90 min",
        icon: "🍚",
      },
      {
        name: "Galouti Kebab",
        desc: "160-spice ground lamb melted on tawa with warqi paratha",
        price: 1800,
        time: "45 min",
        icon: "🍖",
      },
      {
        name: "Nihari Nahari",
        desc: "Overnight slow-braised shank in bone marrow broth",
        price: 2800,
        time: "120 min",
        icon: "🥘",
      },
      {
        name: "Shahi Korma",
        desc: "Royal Lucknowi white korma with saffron and kewra",
        price: 2200,
        time: "60 min",
        icon: "🍛",
      },
    ],
    menuItems: [
      {
        category: "Starters",
        items: ["Kakori Kebab", "Shami Kebab", "Seekh Kebab", "Murgh Gilafi"],
      },
      {
        category: "Mains",
        items: [
          "Dum Biryani",
          "Korma Nawabi",
          "Raan-e-Peshawari",
          "Nihari",
          "Pasanda",
        ],
      },
      {
        category: "Breads",
        items: ["Warqi Paratha", "Sheermal", "Bakarkhani", "Rogni Naan"],
      },
      {
        category: "Desserts",
        items: ["Shahi Tukda", "Muzaffar", "Firni", "Sewai Kheer"],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1574966740025-5b4e4a2b0e43?w=600&q=80",
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
      "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
      "https://images.unsplash.com/photo-1571167530149-c1105da4c2c0?w=600&q=80",
    ],
    availability: {
      mon: true,
      tue: false,
      wed: true,
      thu: true,
      fri: false,
      sat: true,
      sun: true,
    },
    totalItems: 32,
    eventsHosted: 890,
    serviceRadius: "40 km",
    minGuests: 4,
    maxGuests: 60,
  },
  {
    id: 2,
    name: "Chef Meena Pillai",
    badge: "Top Rated",
    rating: 4.8,
    sessions: 312,
    price: 1800,
    experience: "12 Years",
    specialty: "Kerala Sadhya • Malabar Cuisine",
    category: "south",
    img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80",
    coverImg:
      "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=1400&q=80",
    location: "Kochi / Bangalore",
    languages: ["Malayalam", "Tamil", "English"],
    story:
      "Raised in a joint family in Thrissur where every festival meant a 20-dish sadhya on banana leaves, Meena turned her grandmother's handwritten recipe journals into a professional practice. She specialises in Kerala's rich tapestry — from delicate stew to fiery fish curry — bringing authentic Malabar fire to modern homes.",
    awards: [
      { title: "Best Home Chef", year: "2022", body: "Kerala Tourism" },
      {
        title: "Regional Excellence",
        year: "2020",
        body: "South India Culinary Awards",
      },
    ],
    cuisines: ["Kerala", "Malabar", "Chettinad", "Coastal"],
    specials: [
      {
        name: "Kerala Sadhya (Full)",
        desc: "26-dish traditional feast on banana leaf — all courses",
        price: 3200,
        time: "3 hr",
        icon: "🍃",
      },
      {
        name: "Malabar Fish Curry",
        desc: "Kingfish in kokum-tamarind gravy with coconut milk",
        price: 800,
        time: "40 min",
        icon: "🐟",
      },
      {
        name: "Thalassery Biryani",
        desc: "Fragrant Kaima rice with bone-in chicken and fried onions",
        price: 1200,
        time: "75 min",
        icon: "🍚",
      },
      {
        name: "Appam & Stew",
        desc: "Lacy rice hoppers with coconut milk chicken stew",
        price: 600,
        time: "30 min",
        icon: "🫕",
      },
    ],
    menuItems: [
      {
        category: "Breakfast",
        items: ["Puttu & Kadala", "Appam & Stew", "Idiyappam", "Pathiri"],
      },
      {
        category: "Mains",
        items: [
          "Fish Curry",
          "Thalassery Biryani",
          "Prawn Moilee",
          "Beef Ularthiyathu",
        ],
      },
      {
        category: "Sadhya Dishes",
        items: ["Avial", "Olan", "Kootu Curry", "Payasam", "Sambar", "Rasam"],
      },
      {
        category: "Snacks",
        items: ["Banana Chips", "Pazham Pori", "Unniyappam", "Achappam"],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
      "https://images.unsplash.com/photo-1574966740025-5b4e4a2b0e43?w=600&q=80",
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    ],
    availability: {
      mon: true,
      tue: true,
      wed: false,
      thu: true,
      fri: true,
      sat: false,
      sun: true,
    },
    totalItems: 26,
    eventsHosted: 312,
    serviceRadius: "25 km",
    minGuests: 2,
    maxGuests: 40,
  },
  {
    id: 3,
    name: "Chef Arjun Mehta",
    badge: "Top Rated",
    rating: 4.9,
    sessions: 412,
    price: 2200,
    experience: "15 Years",
    specialty: "Punjabi BBQ • Tandoor Specialist",
    category: "mughlai",
    img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80",
    coverImg:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=1400&q=80",
    location: "Amritsar / Delhi",
    languages: ["Punjabi", "Hindi", "English"],
    story:
      "Born beside a dhaba tandoor in Amritsar, Arjun spent his teens learning the art of fire. A decade in 5-star hotel kitchens refined his technique while keeping his instincts raw and honest. He brings a proper wood-fired tandoor setup to your event — the real thing, not an oven imitation.",
    awards: [
      {
        title: "Grill Master of the Year",
        year: "2021",
        body: "BBQ India Festival",
      },
      { title: "Best Kebab Chef", year: "2018", body: "Times Food Awards" },
    ],
    cuisines: ["Punjabi", "Tandoor", "BBQ", "Mughlai"],
    specials: [
      {
        name: "Amritsari Murgh Tikka",
        desc: "Overnight marinated chicken in Kashmiri chilli and mustard oil",
        price: 1400,
        time: "50 min",
        icon: "🍗",
      },
      {
        name: "Sarson da Saag",
        desc: "Winter mustard greens with makki di roti — Amritsari style",
        price: 900,
        time: "60 min",
        icon: "🥬",
      },
      {
        name: "Peshwari Seekh Platter",
        desc: "Lamb seekh with three chutneys and laccha pyaaz",
        price: 1600,
        time: "40 min",
        icon: "🍖",
      },
      {
        name: "Butter Chicken Classic",
        desc: "Old Delhi style — tomato-cream gravy with charred tikka",
        price: 1100,
        time: "45 min",
        icon: "🍛",
      },
    ],
    menuItems: [
      {
        category: "From the Tandoor",
        items: [
          "Murgh Tikka",
          "Seekh Kebab",
          "Tandoori Raan",
          "Paneer Tikka",
          "Achari Fish",
        ],
      },
      {
        category: "Mains",
        items: ["Butter Chicken", "Dal Makhani", "Sarson Saag", "Rara Gosht"],
      },
      {
        category: "Breads",
        items: ["Makki di Roti", "Aloo Paratha", "Amritsari Kulcha", "Naan"],
      },
      {
        category: "BBQ Platters",
        items: ["Mixed Grill Platter", "Paneer BBQ", "Seekh + Tikka Combo"],
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80",
      "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80",
      "https://images.unsplash.com/photo-1583394293214-0b3f9c2b9e5f?w=600&q=80",
      "https://images.unsplash.com/photo-1571167530149-c1105da4c2c0?w=600&q=80",
    ],
    availability: {
      mon: false,
      tue: true,
      wed: true,
      thu: false,
      fri: true,
      sat: true,
      sun: false,
    },
    totalItems: 28,
    eventsHosted: 412,
    serviceRadius: "30 km",
    minGuests: 6,
    maxGuests: 80,
  },
];

// fallback for unlisted IDs
const FALLBACK = CHEFS[0];

const fmt = (n) =>
  n >= 1000 ? `₹${(n / 1000).toFixed(1).replace(".0", "")}k` : `₹${n}`;

const badgeColor = (b) =>
  ({
    Master: { bg: "#3b1f6b", color: "#c4b5fd" },
    "Top Rated": { bg: "#14532d", color: "#4ade80" },
    Rising: { bg: "#713f12", color: "#fde68a" },
  })[b] || { bg: "#1e3a5f", color: "#93c5fd" };

const DAYS = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const DAY_LABELS = ["M", "T", "W", "T", "F", "S", "S"];

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function ChefDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const chef = CHEFS.find((c) => c.id === Number(id)) || FALLBACK;

  const [activeTab, setActiveTab] = useState("specials"); // specials | menu | gallery
  const [galleryOpen, setGalleryOpen] = useState(null); // index or null
  const bc = badgeColor(chef.badge);

  return (
    <div
      style={{
        background: "#0c0a08",
        minHeight: "100vh",
        fontFamily: "'Trebuchet MS', sans-serif",
        color: "#f5f0ea",
      }}
    >
      <style>{`
        * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
        ::-webkit-scrollbar { display: none; }

        /* ── layout wrappers ── */
        .cd-wrap { max-width: 1200px; margin: 0 auto; padding: 0 16px; }
        @media (min-width: 900px)  { .cd-wrap { padding: 0 28px; } }
        @media (min-width: 1200px) { .cd-wrap { padding: 0 40px; } }

        /* ── two-col content area ── */
        .cd-content {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          padding: 24px 16px 56px;
          max-width: 1200px;
          margin: 0 auto;
        }
        @media (min-width: 900px) {
          .cd-content {
            grid-template-columns: 1fr 320px;
            gap: 28px;
            padding: 32px 28px 64px;
          }
        }
        @media (min-width: 1200px) {
          .cd-content { padding: 36px 40px 72px; }
        }

        /* ── gallery grid ── */
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
        @media (min-width: 600px) { .gallery-grid { grid-template-columns: repeat(3, 1fr); } }

        /* ── menu grid ── */
        .menu-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        @media (min-width: 600px) { .menu-grid { grid-template-columns: repeat(2, 1fr); } }

        /* ── interactions ── */
        .cd-back-btn {
          display: inline-flex; align-items: center; gap: 6px;
          padding: 8px 16px; border-radius: 30px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.09);
          color: #9a8f85; font-size: 0.78rem;
          cursor: pointer; transition: all .2s;
          font-family: 'Trebuchet MS', sans-serif;
          margin: 16px 16px 0;
        }
        @media (min-width:900px) { .cd-back-btn { margin: 20px 28px 0; } }
        @media (min-width:1200px) { .cd-back-btn { margin: 24px 40px 0; } }
        .cd-back-btn:hover { background: rgba(255,255,255,.08); color: #f5f0ea; }

        .book-btn {
          padding: 13px 28px; border-radius: 30px;
          background: linear-gradient(135deg, #e8a04a, #c97c28);
          border: none; color: #0c0a08; font-weight: bold; font-size: 0.88rem;
          cursor: pointer; letter-spacing: 0.04em;
          transition: filter .2s; font-family: 'Trebuchet MS', sans-serif;
          width: 100%;
        }
        .book-btn:hover { filter: brightness(1.12); }

        .tab-btn {
          flex: 1; padding: 10px 8px; border: none;
          background: transparent;
          border-bottom: 2px solid transparent;
          color: #6b6259; font-size: 0.8rem; font-weight: 600;
          cursor: pointer; letter-spacing: 0.04em;
          transition: all .2s;
          font-family: 'Trebuchet MS', sans-serif;
          white-space: nowrap;
        }
        .tab-btn.active {
          color: #e8a04a;
          border-bottom-color: #e8a04a;
        }
        .tab-btn:hover:not(.active) { color: #9a8f85; }

        .special-card {
          border-radius: 16px; padding: 16px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          display: flex; gap: 14px; align-items: flex-start;
          transition: border-color .2s, background .2s;
          cursor: default;
        }
        .special-card:hover {
          border-color: rgba(232,160,74,.3);
          background: rgba(232,160,74,.04);
        }

        .gallery-item {
          border-radius: 12px; overflow: hidden;
          aspect-ratio: 1; cursor: pointer;
          position: relative;
        }
        .gallery-item img {
          width: 100%; height: 100%; object-fit: cover; object-position: center;
          transition: transform .4s ease;
          display: block;
        }
        .gallery-item:hover img { transform: scale(1.07); }
        .gallery-item::after {
          content: ''; position: absolute; inset: 0;
          background: rgba(0,0,0,0); transition: background .2s;
        }
        .gallery-item:hover::after { background: rgba(232,160,74,.08); }

        .lightbox-overlay {
          position: fixed; inset: 0; z-index: 999;
          background: rgba(0,0,0,.92); backdrop-filter: blur(12px);
          display: flex; align-items: center; justify-content: center;
          padding: 20px;
        }
        .lightbox-overlay img {
          max-width: 90vw; max-height: 86vh;
          border-radius: 16px; object-fit: contain;
          box-shadow: 0 24px 72px rgba(0,0,0,.8);
        }

        .avail-dot {
          width: 34px; height: 34px; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          font-size: 0.65rem; font-weight: bold; letter-spacing: 0.03em;
        }

        .stat-pill {
          display: flex; flex-direction: column; align-items: center;
          padding: 12px 16px; border-radius: 14px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.07);
          flex: 1;
        }

        @keyframes fadeUp { from { opacity:0; transform:translateY(18px); } to { opacity:1; transform:translateY(0); } }
        .fade-up { animation: fadeUp .45s ease forwards; }
        .fade-up-d1 { animation: fadeUp .45s .08s ease both; }
        .fade-up-d2 { animation: fadeUp .45s .16s ease both; }
      `}</style>

      {/* ── BACK ── */}
      <button className="cd-back-btn" onClick={() => navigate(-1)}>
        <svg
          width="14"
          height="14"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        All Chefs
      </button>

      {/* ══ COVER HERO ══════════════════════════════════════════════════════ */}
      <div
        className="cd-wrap fade-up"
        style={{ marginTop: "16px", position: "relative" }}
      >
        {/* Cover image */}
        <div
          style={{
            borderRadius: "22px",
            overflow: "hidden",
            height: "clamp(180px, 30vw, 320px)",
            position: "relative",
          }}
        >
          <img
            src={chef.coverImg}
            alt="kitchen"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
              display: "block",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(12,10,8,.15) 0%, rgba(12,10,8,.75) 100%)",
            }}
          />
          {/* Cuisine tags on cover */}
          <div
            style={{
              position: "absolute",
              bottom: "14px",
              left: "16px",
              display: "flex",
              gap: "6px",
              flexWrap: "wrap",
            }}
          >
            {chef.cuisines.map((c) => (
              <span
                key={c}
                style={{
                  padding: "3px 10px",
                  borderRadius: "20px",
                  background: "rgba(12,10,8,.75)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,.12)",
                  fontSize: "0.62rem",
                  color: "#c9a96e",
                }}
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Profile strip */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "16px",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: "20px",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,.07)",
          }}
        >
          {/* Left: name + meta */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
            {/* Avatar */}
            <div
              style={{
                width: "72px",
                height: "72px",
                borderRadius: "50%",
                overflow: "hidden",
                flexShrink: 0,
                border: "2px solid rgba(232,160,74,.4)",
                boxShadow: "0 4px 18px rgba(0,0,0,.6)",
              }}
            >
              <img
                src={chef.img}
                alt={chef.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
            </div>
            <div>
              {/* Badge + rating */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  marginBottom: "5px",
                }}
              >
                <span
                  style={{
                    padding: "2px 9px",
                    borderRadius: "20px",
                    background: bc.bg,
                    color: bc.color,
                    fontSize: "0.6rem",
                    fontWeight: "bold",
                    letterSpacing: "0.06em",
                  }}
                >
                  {chef.badge}
                </span>
                <span
                  style={{
                    fontSize: "0.7rem",
                    color: "#fbbf24",
                    fontWeight: "bold",
                  }}
                >
                  ★ {chef.rating}
                </span>
                <span style={{ fontSize: "0.68rem", color: "#6b6259" }}>
                  ({chef.sessions} sessions)
                </span>
              </div>
              <h1
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "clamp(1.2rem, 3vw, 1.8rem)",
                  fontWeight: "bold",
                  color: "#f5f0ea",
                  lineHeight: 1.15,
                  marginBottom: "4px",
                }}
              >
                {chef.name}
              </h1>
              <p style={{ color: "#6b6259", fontSize: "0.75rem" }}>
                {chef.specialty} · {chef.location}
              </p>
            </div>
          </div>

          {/* Right: price + quick stats */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ textAlign: "right" }}>
              <p
                style={{
                  fontSize: "0.62rem",
                  color: "#6b6259",
                  marginBottom: "2px",
                }}
              >
                Starting at
              </p>
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1.7rem",
                  fontWeight: "bold",
                  color: "#e8a04a",
                  lineHeight: 1,
                }}
              >
                {fmt(chef.price)}
                <span style={{ fontSize: "0.72rem", color: "#9a8f85" }}>
                  /hr
                </span>
              </p>
              <p
                style={{
                  fontSize: "0.62rem",
                  color: "#9a8f85",
                  marginTop: "2px",
                }}
              >
                {chef.experience}
              </p>
            </div>
          </div>
        </div>

        {/* Quick stat row */}
        <div
          className="fade-up-d1"
          style={{
            display: "flex",
            gap: "10px",
            marginTop: "16px",
            flexWrap: "wrap",
          }}
        >
          {[
            { label: "Total Items", val: `${chef.totalItems}+` },
            { label: "Events Hosted", val: chef.eventsHosted },
            { label: "Guests (max)", val: chef.maxGuests },
            { label: "Service Radius", val: chef.serviceRadius },
          ].map((s) => (
            <div key={s.label} className="stat-pill">
              <p
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "1.05rem",
                  fontWeight: "bold",
                  color: "#f5f0ea",
                  lineHeight: 1,
                }}
              >
                {s.val}
              </p>
              <p
                style={{
                  fontSize: "0.6rem",
                  color: "#6b6259",
                  marginTop: "3px",
                  letterSpacing: "0.04em",
                }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ══ TWO-COL CONTENT ════════════════════════════════════════════════ */}
      <div className="cd-content">
        {/* ── LEFT COLUMN ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Story */}
          <div className="fade-up-d1">
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.05rem",
                fontWeight: "bold",
                color: "#f5f0ea",
                marginBottom: "10px",
              }}
            >
              About
            </h2>
            <p
              style={{
                color: "#9a8f85",
                fontSize: "0.82rem",
                lineHeight: 1.75,
              }}
            >
              {chef.story}
            </p>
            {/* Languages */}
            <div
              style={{
                display: "flex",
                gap: "6px",
                marginTop: "12px",
                flexWrap: "wrap",
              }}
            >
              {chef.languages.map((l) => (
                <span
                  key={l}
                  style={{
                    padding: "3px 10px",
                    borderRadius: "20px",
                    background: "rgba(255,255,255,.05)",
                    border: "1px solid rgba(255,255,255,.09)",
                    fontSize: "0.65rem",
                    color: "#9a8f85",
                  }}
                >
                  {l}
                </span>
              ))}
            </div>
          </div>

          {/* Awards */}
          <div className="fade-up-d1">
            <h2
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1.05rem",
                fontWeight: "bold",
                color: "#f5f0ea",
                marginBottom: "12px",
              }}
            >
              Awards & Recognition
            </h2>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "10px" }}
            >
              {chef.awards.map((a, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "12px 14px",
                    borderRadius: "14px",
                    background: "rgba(232,160,74,.06)",
                    border: "1px solid rgba(232,160,74,.15)",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>🏅</span>
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontSize: "0.82rem",
                        fontWeight: "bold",
                        color: "#f5f0ea",
                        lineHeight: 1.2,
                      }}
                    >
                      {a.title}
                    </p>
                    <p
                      style={{
                        fontSize: "0.68rem",
                        color: "#6b6259",
                        marginTop: "2px",
                      }}
                    >
                      {a.body}
                    </p>
                  </div>
                  <span
                    style={{
                      padding: "3px 10px",
                      borderRadius: "20px",
                      background: "rgba(232,160,74,.12)",
                      fontSize: "0.65rem",
                      color: "#c9a96e",
                      fontWeight: "bold",
                    }}
                  >
                    {a.year}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Tabs: Specials / Full Menu / Gallery */}
          <div className="fade-up-d2">
            {/* Tab bar */}
            <div
              style={{
                display: "flex",
                borderBottom: "1px solid rgba(255,255,255,.08)",
                marginBottom: "18px",
              }}
            >
              {[
                {
                  id: "specials",
                  label: `Chef's Specials (${chef.specials.length})`,
                },
                { id: "menu", label: `Full Menu (${chef.totalItems}+ items)` },
                { id: "gallery", label: `Gallery (${chef.gallery.length})` },
              ].map((t) => (
                <button
                  key={t.id}
                  className={`tab-btn${activeTab === t.id ? " active" : ""}`}
                  onClick={() => setActiveTab(t.id)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* ── SPECIALS tab ── */}
            {activeTab === "specials" && (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {chef.specials.map((s, i) => (
                  <div key={i} className="special-card">
                    <span
                      style={{
                        fontSize: "1.8rem",
                        lineHeight: 1,
                        flexShrink: 0,
                      }}
                    >
                      {s.icon}
                    </span>
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: "8px",
                        }}
                      >
                        <h3
                          style={{
                            fontFamily: "'Georgia', serif",
                            fontSize: "0.95rem",
                            fontWeight: "bold",
                            color: "#f5f0ea",
                            marginBottom: "4px",
                          }}
                        >
                          {s.name}
                        </h3>
                        <div style={{ textAlign: "right", flexShrink: 0 }}>
                          <p
                            style={{
                              fontFamily: "'Georgia', serif",
                              fontSize: "0.95rem",
                              fontWeight: "bold",
                              color: "#e8a04a",
                              lineHeight: 1,
                            }}
                          >
                            {fmt(s.price)}
                          </p>
                          <p
                            style={{
                              fontSize: "0.62rem",
                              color: "#6b6259",
                              marginTop: "2px",
                            }}
                          >
                            ⏱ {s.time}
                          </p>
                        </div>
                      </div>
                      <p
                        style={{
                          fontSize: "0.75rem",
                          color: "#6b6259",
                          lineHeight: 1.6,
                        }}
                      >
                        {s.desc}
                      </p>
                    </div>
                  </div>
                ))}
                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "#6b6259",
                    textAlign: "center",
                    marginTop: "4px",
                  }}
                >
                  Prices are per serving. Final quote based on guest count &
                  customisation.
                </p>
              </div>
            )}

            {/* ── MENU tab ── */}
            {activeTab === "menu" && (
              <div className="menu-grid">
                {chef.menuItems.map((cat, i) => (
                  <div
                    key={i}
                    style={{
                      borderRadius: "16px",
                      padding: "16px",
                      background: "#181410",
                      border: "1px solid rgba(255,255,255,.07)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        marginBottom: "12px",
                      }}
                    >
                      <div
                        style={{
                          width: "3px",
                          height: "16px",
                          borderRadius: "2px",
                          background:
                            "linear-gradient(135deg, #e8a04a, #c97c28)",
                          flexShrink: 0,
                        }}
                      />
                      <h3
                        style={{
                          fontFamily: "'Georgia', serif",
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                          color: "#f5f0ea",
                        }}
                      >
                        {cat.category}
                      </h3>
                      <span
                        style={{
                          marginLeft: "auto",
                          fontSize: "0.6rem",
                          color: "#6b6259",
                        }}
                      >
                        {cat.items.length} items
                      </span>
                    </div>
                    <ul
                      style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                      }}
                    >
                      {cat.items.map((item, j) => (
                        <li
                          key={j}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            fontSize: "0.78rem",
                            color: "#9a8f85",
                          }}
                        >
                          <span
                            style={{
                              width: "4px",
                              height: "4px",
                              borderRadius: "50%",
                              background: "#e8a04a",
                              flexShrink: 0,
                              opacity: 0.6,
                            }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* ── GALLERY tab ── */}
            {activeTab === "gallery" && (
              <>
                <div className="gallery-grid">
                  {chef.gallery.map((url, i) => (
                    <div
                      key={i}
                      className="gallery-item"
                      onClick={() => setGalleryOpen(i)}
                    >
                      <img src={url} alt={`dish-${i + 1}`} />
                    </div>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "#6b6259",
                    textAlign: "center",
                    marginTop: "12px",
                  }}
                >
                  Click any photo to enlarge
                </p>
              </>
            )}
          </div>
        </div>

        {/* ── RIGHT COLUMN (sticky sidebar) ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {/* Booking CTA card */}
          <div
            style={{
              borderRadius: "18px",
              padding: "22px",
              background: "#181410",
              border: "1px solid rgba(255,255,255,.07)",
              boxShadow: "0 8px 28px rgba(0,0,0,.5)",
              position: "sticky",
              top: "16px",
            }}
          >
            <h3
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "1rem",
                fontWeight: "bold",
                color: "#f5f0ea",
                marginBottom: "4px",
              }}
            >
              Book a Session
            </h3>
            <p
              style={{
                fontSize: "0.7rem",
                color: "#6b6259",
                marginBottom: "18px",
              }}
            >
              {chef.minGuests}–{chef.maxGuests} guests · up to{" "}
              {chef.serviceRadius} from you
            </p>

            {/* Price breakdown */}
            <div
              style={{
                padding: "12px 14px",
                borderRadius: "12px",
                background: "rgba(232,160,74,.06)",
                border: "1px solid rgba(232,160,74,.12)",
                marginBottom: "14px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "#9a8f85" }}>
                  Chef fee
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    color: "#e8a04a",
                  }}
                >
                  {fmt(chef.price)}/hr
                </span>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "6px",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "#9a8f85" }}>
                  Ingredients
                </span>
                <span style={{ fontSize: "0.75rem", color: "#6b6259" }}>
                  Quoted separately
                </span>
              </div>
              <div
                style={{
                  borderTop: "1px solid rgba(255,255,255,.06)",
                  paddingTop: "8px",
                  marginTop: "4px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "#9a8f85" }}>
                  Min. booking
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                  }}
                >
                  2 hours
                </span>
              </div>
            </div>

            <button
              className="book-btn"
              //   onClick={() => alert("Navigate to booking flow")}
              onClick={() => navigate(`/chefs/${chef.id}/book`)}
            >
              Check Availability & Book
            </button>

            <p
              style={{
                fontSize: "0.65rem",
                color: "#6b6259",
                textAlign: "center",
                marginTop: "10px",
              }}
            >
              Free cancellation up to 48 hrs before
            </p>
          </div>

          {/* Weekly availability */}
          <div
            style={{
              borderRadius: "18px",
              padding: "18px",
              background: "#181410",
              border: "1px solid rgba(255,255,255,.07)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "14px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Georgia', serif",
                  fontSize: "0.9rem",
                  fontWeight: "bold",
                  color: "#f5f0ea",
                }}
              >
                Weekly Availability
              </h3>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.62rem",
                  color: "#4ade80",
                }}
              >
                <span
                  style={{
                    width: "5px",
                    height: "5px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "inline-block",
                    boxShadow: "0 0 5px #4ade80",
                  }}
                />
                Updated
              </span>
            </div>
            <div
              style={{
                display: "flex",
                gap: "6px",
                justifyContent: "space-between",
              }}
            >
              {DAYS.map((d, i) => (
                <div
                  key={d}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <div
                    className="avail-dot"
                    style={{
                      background: chef.availability[d]
                        ? "rgba(74,222,128,.15)"
                        : "rgba(255,255,255,.04)",
                      border: chef.availability[d]
                        ? "1px solid rgba(74,222,128,.4)"
                        : "1px solid rgba(255,255,255,.08)",
                      color: chef.availability[d] ? "#4ade80" : "#3a3430",
                    }}
                  >
                    {chef.availability[d] ? "✓" : ""}
                  </div>
                  <span style={{ fontSize: "0.58rem", color: "#6b6259" }}>
                    {DAY_LABELS[i]}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Cuisine tags */}
          <div
            style={{
              borderRadius: "18px",
              padding: "18px",
              background: "#181410",
              border: "1px solid rgba(255,255,255,.07)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#f5f0ea",
                marginBottom: "12px",
              }}
            >
              Cuisine Expertise
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "7px" }}>
              {chef.cuisines.map((c) => (
                <span
                  key={c}
                  style={{
                    padding: "5px 12px",
                    borderRadius: "20px",
                    background: "rgba(232,160,74,.1)",
                    border: "1px solid rgba(232,160,74,.25)",
                    fontSize: "0.72rem",
                    color: "#c9a96e",
                    letterSpacing: "0.03em",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Event types */}
          <div
            style={{
              borderRadius: "18px",
              padding: "18px",
              background: "#181410",
              border: "1px solid rgba(255,255,255,.07)",
            }}
          >
            <h3
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#f5f0ea",
                marginBottom: "12px",
              }}
            >
              Ideal For
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "8px" }}
            >
              {[
                { icon: "🎉", label: "Private Dinner Parties" },
                { icon: "💍", label: "Wedding Functions" },
                { icon: "🏢", label: "Corporate Lunches" },
                { icon: "🎂", label: "Birthday Celebrations" },
                { icon: "🕌", label: "Festival Feasts" },
              ].map((e) => (
                <div
                  key={e.label}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "0.78rem",
                    color: "#9a8f85",
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>{e.icon}</span>
                  {e.label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ══ LIGHTBOX ════════════════════════════════════════════════════════ */}
      {galleryOpen !== null && (
        <div className="lightbox-overlay" onClick={() => setGalleryOpen(null)}>
          <img src={chef.gallery[galleryOpen]} alt="full view" />
          <button
            onClick={() => setGalleryOpen(null)}
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              background: "rgba(255,255,255,.1)",
              border: "1px solid rgba(255,255,255,.2)",
              borderRadius: "50%",
              width: "36px",
              height: "36px",
              color: "#f5f0ea",
              fontSize: "1.1rem",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
          >
            ✕
          </button>
          {/* Prev / Next */}
          {galleryOpen > 0 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGalleryOpen(galleryOpen - 1);
              }}
              style={{
                position: "absolute",
                left: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,.1)",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                color: "#f5f0ea",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ‹
            </button>
          )}
          {galleryOpen < chef.gallery.length - 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setGalleryOpen(galleryOpen + 1);
              }}
              style={{
                position: "absolute",
                right: "16px",
                top: "50%",
                transform: "translateY(-50%)",
                background: "rgba(255,255,255,.1)",
                border: "1px solid rgba(255,255,255,.2)",
                borderRadius: "50%",
                width: "40px",
                height: "40px",
                color: "#f5f0ea",
                fontSize: "1.2rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
}
