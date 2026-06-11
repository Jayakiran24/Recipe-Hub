// src/pages/Booking/BookingPage.jsx
// The booking flow that comes after ChefDetails
// Route: /chefs/:id/book   →   <Route path="/chefs/:id/book" element={<BookingPage />} />

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// ─── CHEF DATA (same as ChefDetails) ─────────────────────────────────────────
const CHEFS = [
  {
    id: 1,
    name: "Chef Imtiaz Qureshi",
    badge: "Master",
    rating: 5.0,
    price: 8500,
    experience: "50 Years",
    specialty: "Awadhi • Dum Pukht Cuisine",
    img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=400&q=80",
    minGuests: 4,
    maxGuests: 60,
    cuisines: ["Awadhi", "Mughlai", "Biryani", "Kebabs"],
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
  },
  {
    id: 2,
    name: "Chef Meena Pillai",
    badge: "Top Rated",
    rating: 4.8,
    price: 1800,
    experience: "12 Years",
    specialty: "Kerala Sadhya • Malabar Cuisine",
    img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=400&q=80",
    minGuests: 2,
    maxGuests: 40,
    cuisines: ["Kerala", "Malabar", "Chettinad", "Coastal"],
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
  },
  {
    id: 3,
    name: "Chef Arjun Mehta",
    badge: "Top Rated",
    rating: 4.9,
    price: 2200,
    experience: "15 Years",
    specialty: "Punjabi BBQ • Tandoor Specialist",
    img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=400&q=80",
    minGuests: 6,
    maxGuests: 80,
    cuisines: ["Punjabi", "Tandoor", "BBQ", "Mughlai"],
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
  },
];

const FALLBACK = CHEFS[0];

const fmt = (n) =>
  n >= 1000 ? `₹${(n / 1000).toFixed(1).replace(".0", "")}k` : `₹${n}`;

const badgeColor = (b) =>
  ({
    Master: { bg: "#3b1f6b", color: "#c4b5fd" },
    "Top Rated": { bg: "#14532d", color: "#4ade80" },
    Rising: { bg: "#713f12", color: "#fde68a" },
  })[b] || { bg: "#1e3a5f", color: "#93c5fd" };

const MEAL_TYPES = [
  "Breakfast",
  "Brunch",
  "Lunch",
  "High Tea",
  "Dinner",
  "Late Night",
];
const EVENT_TYPES = [
  "Private Dinner",
  "Birthday Party",
  "Wedding Function",
  "Corporate Lunch",
  "Festival Feast",
  "Kitty Party",
  "Date Night",
  "Family Gathering",
];
const TIME_SLOTS = [
  "8:00 AM",
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "4:00 PM",
  "6:00 PM",
  "7:00 PM",
  "8:00 PM",
  "9:00 PM",
];

// Steps
const STEPS = [
  "Date & Time",
  "Menu Selection",
  "Your Details",
  "Confirm & Pay",
];

export default function BookingPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const chef = CHEFS.find((c) => c.id === Number(id)) || FALLBACK;
  const bc = badgeColor(chef.badge);

  const [step, setStep] = useState(0); // 0-3
  const [booked, setBooked] = useState(false);

  // Step 0 — Date & Time
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [hours, setHours] = useState(2);
  const [guests, setGuests] = useState(chef.minGuests);
  const [mealType, setMealType] = useState("");
  const [eventType, setEventType] = useState("");

  // Step 1 — Menu
  const [selectedItems, setSelectedItems] = useState([]);

  // Step 2 — Details
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    notes: "",
  });

  // Step 3 — Payment
  const [payMode, setPayMode] = useState("full"); // full | partial

  const toggleItem = (item) =>
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item],
    );

  const chefFee = chef.price * hours;
  const serviceFee = Math.round(chefFee * 0.05);
  const total = chefFee + serviceFee;
  const partial = Math.round(total * 0.3);

  // Validation per step
  const canProceed = [
    date && timeSlot && mealType && eventType,
    selectedItems.length > 0,
    form.name && form.phone && form.address,
    true,
  ][step];

  const handleConfirm = () => setBooked(true);

  // ── SUCCESS SCREEN ──────────────────────────────────────────────────────────
  if (booked) {
    return (
      <div
        style={{
          background: "#0c0a08",
          minHeight: "100vh",
          fontFamily: "'Trebuchet MS', sans-serif",
          color: "#f5f0ea",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "24px",
        }}
      >
        <div
          style={{
            maxWidth: "480px",
            width: "100%",
            textAlign: "center",
            animation: "fadeUp .5s ease forwards",
          }}
        >
          <style>{`@keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }`}</style>
          <div
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              margin: "0 auto 24px",
              background: "rgba(74,222,128,.12)",
              border: "1px solid rgba(74,222,128,.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "2rem",
            }}
          >
            ✓
          </div>
          <h1
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.8rem",
              fontWeight: "bold",
              color: "#f5f0ea",
              marginBottom: "10px",
            }}
          >
            Booking Confirmed!
          </h1>
          <p
            style={{
              color: "#6b6259",
              fontSize: "0.85rem",
              lineHeight: 1.7,
              marginBottom: "28px",
            }}
          >
            {chef.name} has been booked for{" "}
            <strong style={{ color: "#e8a04a" }}>{date}</strong> at{" "}
            <strong style={{ color: "#e8a04a" }}>{timeSlot}</strong> for{" "}
            <strong style={{ color: "#e8a04a" }}>{guests} guests</strong>.
            You'll receive a confirmation on {form.phone || "your phone"}.
          </p>

          {/* Booking reference card */}
          <div
            style={{
              borderRadius: "18px",
              padding: "20px",
              background: "#181410",
              border: "1px solid rgba(255,255,255,.07)",
              marginBottom: "24px",
              textAlign: "left",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
              }}
            >
              <img
                src={chef.img}
                alt={chef.name}
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top",
                }}
              />
              <div>
                <p
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                  }}
                >
                  {chef.name}
                </p>
                <p style={{ fontSize: "0.68rem", color: "#6b6259" }}>
                  {chef.specialty}
                </p>
              </div>
              <div
                style={{
                  marginLeft: "auto",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: "rgba(74,222,128,.12)",
                  border: "1px solid rgba(74,222,128,.3)",
                  fontSize: "0.65rem",
                  color: "#4ade80",
                  fontWeight: "bold",
                }}
              >
                Confirmed
              </div>
            </div>
            {[
              { label: "Date", val: date },
              { label: "Time", val: timeSlot },
              { label: "Duration", val: `${hours} hours` },
              { label: "Guests", val: guests },
              { label: "Meal Type", val: mealType },
              {
                label: "Amount Paid",
                val:
                  payMode === "full" ? fmt(total) : `${fmt(partial)} (advance)`,
              },
            ].map((r) => (
              <div
                key={r.label}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "7px 0",
                  borderBottom: "1px solid rgba(255,255,255,.05)",
                  fontSize: "0.78rem",
                }}
              >
                <span style={{ color: "#6b6259" }}>{r.label}</span>
                <span style={{ color: "#f5f0ea", fontWeight: "bold" }}>
                  {r.val}
                </span>
              </div>
            ))}
            <p
              style={{
                fontSize: "0.65rem",
                color: "#6b6259",
                marginTop: "12px",
                textAlign: "center",
              }}
            >
              Booking ref: #CHF{Date.now().toString().slice(-6)}
            </p>
          </div>

          <button
            onClick={() => navigate("/chefs")}
            style={{
              width: "100%",
              padding: "13px",
              borderRadius: "30px",
              background: "linear-gradient(135deg,#e8a04a,#c97c28)",
              border: "none",
              color: "#0c0a08",
              fontWeight: "bold",
              fontSize: "0.88rem",
              cursor: "pointer",
              fontFamily: "'Trebuchet MS', sans-serif",
            }}
          >
            Browse More Chefs
          </button>
        </div>
      </div>
    );
  }

  // ── MAIN BOOKING FLOW ────────────────────────────────────────────────────────
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

        .bk-wrap { max-width: 1100px; margin: 0 auto; padding: 0 16px; }
        @media (min-width:900px)  { .bk-wrap { padding: 0 28px; } }
        @media (min-width:1200px) { .bk-wrap { padding: 0 40px; } }

        .bk-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 24px 16px 72px;
        }
        @media (min-width:900px) {
          .bk-grid {
            grid-template-columns: 1fr 300px;
            gap: 28px;
            padding: 28px 28px 80px;
          }
        }
        @media (min-width:1200px) {
          .bk-grid { padding: 32px 40px 80px; }
        }

        .bk-card {
          border-radius: 18px;
          background: #181410;
          border: 1px solid rgba(255,255,255,.07);
          padding: 22px;
        }

        .bk-input {
          width: 100%; padding: 11px 14px;
          border-radius: 12px;
          background: rgba(255,255,255,.04);
          border: 1px solid rgba(255,255,255,.1);
          color: #f5f0ea;
          font-size: 0.83rem;
          font-family: 'Trebuchet MS', sans-serif;
          outline: none;
          transition: border-color .2s;
        }
        .bk-input:focus { border-color: rgba(232,160,74,.5); }
        .bk-input::placeholder { color: #3a3430; }
        select.bk-input option { background: #181410; }

        .pill-btn {
          padding: 8px 16px; border-radius: 30px;
          background: transparent;
          border: 1px solid rgba(255,255,255,.1);
          color: #6b6259; font-size: 0.75rem;
          cursor: pointer; transition: all .2s;
          font-family: 'Trebuchet MS', sans-serif;
          white-space: nowrap;
        }
        .pill-btn.active {
          background: rgba(232,160,74,.12);
          border-color: #e8a04a;
          color: #e8a04a; font-weight: bold;
        }
        .pill-btn:hover:not(.active) { border-color: rgba(255,255,255,.2); color: #9a8f85; }

        .menu-item-btn {
          display: flex; align-items: center; gap: 10px;
          padding: 10px 14px; border-radius: 12px;
          background: rgba(255,255,255,.03);
          border: 1px solid rgba(255,255,255,.07);
          cursor: pointer; transition: all .18s;
          text-align: left; width: 100%;
          font-family: 'Trebuchet MS', sans-serif;
        }
        .menu-item-btn.selected {
          background: rgba(232,160,74,.08);
          border-color: rgba(232,160,74,.35);
        }
        .menu-item-btn:hover:not(.selected) { border-color: rgba(255,255,255,.14); }

        .check-circle {
          width: 18px; height: 18px; border-radius: 50%; flex-shrink: 0;
          border: 1.5px solid rgba(255,255,255,.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.55rem; transition: all .2s;
        }
        .check-circle.on {
          background: #e8a04a; border-color: #e8a04a; color: #0c0a08;
          font-weight: bold;
        }

        .pay-card {
          border-radius: 14px; padding: 16px;
          border: 2px solid transparent;
          cursor: pointer; transition: all .2s;
          background: rgba(255,255,255,.03);
        }
        .pay-card.selected { border-color: #e8a04a; background: rgba(232,160,74,.06); }
        .pay-card:hover:not(.selected) { border-color: rgba(255,255,255,.15); }

        .next-btn {
          width: 100%; padding: 13px; border-radius: 30px;
          background: linear-gradient(135deg,#e8a04a,#c97c28);
          border: none; color: #0c0a08;
          font-weight: bold; font-size: 0.88rem;
          cursor: pointer; letter-spacing: 0.04em;
          font-family: 'Trebuchet MS', sans-serif;
          transition: filter .2s, opacity .2s;
        }
        .next-btn:hover:not(:disabled) { filter: brightness(1.1); }
        .next-btn:disabled { opacity: .38; cursor: not-allowed; }

        .back-link {
          background: transparent; border: none;
          color: #6b6259; font-size: 0.75rem;
          cursor: pointer; font-family: 'Trebuchet MS', sans-serif;
          display: flex; align-items: center; gap: 4px;
          padding: 0; margin-bottom: 8px;
          transition: color .2s;
        }
        .back-link:hover { color: #9a8f85; }

        .stepper-dot {
          width: 8px; height: 8px; border-radius: 50%;
          transition: all .3s;
        }

        @keyframes fadeUp { from { opacity:0; transform:translateY(16px); } to { opacity:1; transform:translateY(0); } }
        .fade-in { animation: fadeUp .35s ease forwards; }

        /* counter */
        .counter-btn {
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,.06);
          border: 1px solid rgba(255,255,255,.1);
          color: #f5f0ea; font-size: 1rem;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: all .2s; font-family: 'Trebuchet MS', sans-serif;
        }
        .counter-btn:hover { background: rgba(232,160,74,.12); border-color: rgba(232,160,74,.4); }
      `}</style>

      {/* ── HEADER ── */}
      <div className="bk-wrap" style={{ paddingTop: "16px" }}>
        <button className="back-link" onClick={() => navigate(-1)}>
          <svg
            width="13"
            height="13"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            viewBox="0 0 24 24"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Chef
        </button>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "12px",
            paddingBottom: "20px",
            borderBottom: "1px solid rgba(255,255,255,.07)",
          }}
        >
          <div>
            <h1
              style={{
                fontFamily: "'Georgia', serif",
                fontSize: "clamp(1.2rem,3vw,1.7rem)",
                fontWeight: "bold",
                color: "#f5f0ea",
                lineHeight: 1.2,
              }}
            >
              Book a Session
            </h1>
            <p
              style={{
                color: "#6b6259",
                fontSize: "0.72rem",
                marginTop: "3px",
              }}
            >
              with {chef.name}
            </p>
          </div>

          {/* Stepper */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            {STEPS.map((s, i) => (
              <div
                key={s}
                style={{ display: "flex", alignItems: "center", gap: "6px" }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    opacity: i > step ? 0.35 : 1,
                  }}
                >
                  <div
                    className="stepper-dot"
                    style={{
                      background:
                        i < step
                          ? "#4ade80"
                          : i === step
                            ? "#e8a04a"
                            : "rgba(255,255,255,.15)",
                      boxShadow:
                        i === step ? "0 0 8px rgba(232,160,74,.5)" : "none",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "0.65rem",
                      color:
                        i === step
                          ? "#e8a04a"
                          : i < step
                            ? "#4ade80"
                            : "#3a3430",
                      fontWeight: i === step ? "bold" : "400",
                      display: "none",
                    }}
                  >
                    {s}
                  </span>
                </div>
                {i < STEPS.length - 1 && (
                  <div
                    style={{
                      width: "20px",
                      height: "1px",
                      background:
                        i < step
                          ? "rgba(74,222,128,.4)"
                          : "rgba(255,255,255,.1)",
                    }}
                  />
                )}
              </div>
            ))}
            <span
              style={{
                fontSize: "0.7rem",
                color: "#9a8f85",
                marginLeft: "8px",
              }}
            >
              Step {step + 1} of {STEPS.length}
            </span>
          </div>
        </div>

        {/* Step label */}
        <p
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "0.88rem",
            color: "#e8a04a",
            marginTop: "14px",
            letterSpacing: "0.04em",
          }}
        >
          {STEPS[step]}
        </p>
      </div>

      {/* ── TWO-COL LAYOUT ── */}
      <div className="bk-grid">
        {/* ── LEFT — step content ── */}
        <div className="fade-in" key={step}>
          {/* ════ STEP 0 — Date & Time ════ */}
          {step === 0 && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              {/* Date + Time row */}
              <div className="bk-card">
                <h2
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "16px",
                  }}
                >
                  When should the chef arrive?
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "12px",
                    marginBottom: "16px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: "0.68rem",
                        color: "#6b6259",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      className="bk-input"
                      value={date}
                      min={new Date().toISOString().split("T")[0]}
                      onChange={(e) => setDate(e.target.value)}
                      style={{ colorScheme: "dark" }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: "0.68rem",
                        color: "#6b6259",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Arrival Time
                    </label>
                    <select
                      className="bk-input"
                      value={timeSlot}
                      onChange={(e) => setTimeSlot(e.target.value)}
                    >
                      <option value="">Select time</option>
                      {TIME_SLOTS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Duration */}
                <div style={{ marginBottom: "16px" }}>
                  <label
                    style={{
                      fontSize: "0.68rem",
                      color: "#6b6259",
                      letterSpacing: "0.06em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: "10px",
                    }}
                  >
                    Session Duration —{" "}
                    <span style={{ color: "#e8a04a" }}>{hours} hours</span>
                  </label>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "14px",
                    }}
                  >
                    <button
                      className="counter-btn"
                      onClick={() => setHours(Math.max(2, hours - 1))}
                    >
                      −
                    </button>
                    <div
                      style={{
                        flex: 1,
                        height: "4px",
                        borderRadius: "2px",
                        background: "rgba(255,255,255,.08)",
                        position: "relative",
                      }}
                    >
                      <div
                        style={{
                          position: "absolute",
                          left: 0,
                          top: 0,
                          height: "100%",
                          borderRadius: "2px",
                          background: "linear-gradient(90deg,#e8a04a,#c97c28)",
                          width: `${((hours - 2) / 6) * 100}%`,
                          transition: "width .2s",
                        }}
                      />
                    </div>
                    <button
                      className="counter-btn"
                      onClick={() => setHours(Math.min(8, hours + 1))}
                    >
                      +
                    </button>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#9a8f85",
                        minWidth: "48px",
                      }}
                    >
                      {hours} hrs
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      color: "#6b6259",
                      marginTop: "6px",
                    }}
                  >
                    Minimum 2 hours · Maximum 8 hours
                  </p>
                </div>
              </div>

              {/* Guests */}
              <div className="bk-card">
                <h2
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "16px",
                  }}
                >
                  How many guests?
                </h2>
                <div
                  style={{ display: "flex", alignItems: "center", gap: "16px" }}
                >
                  <button
                    className="counter-btn"
                    style={{ width: "40px", height: "40px" }}
                    onClick={() =>
                      setGuests(Math.max(chef.minGuests, guests - 1))
                    }
                  >
                    −
                  </button>
                  <div style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontFamily: "'Georgia',serif",
                        fontSize: "2rem",
                        fontWeight: "bold",
                        color: "#e8a04a",
                        lineHeight: 1,
                      }}
                    >
                      {guests}
                    </p>
                    <p style={{ fontSize: "0.62rem", color: "#6b6259" }}>
                      guests
                    </p>
                  </div>
                  <button
                    className="counter-btn"
                    style={{ width: "40px", height: "40px" }}
                    onClick={() =>
                      setGuests(Math.min(chef.maxGuests, guests + 1))
                    }
                  >
                    +
                  </button>
                  <div
                    style={{
                      flex: 1,
                      height: "4px",
                      borderRadius: "2px",
                      background: "rgba(255,255,255,.08)",
                      position: "relative",
                    }}
                  >
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        top: 0,
                        height: "100%",
                        borderRadius: "2px",
                        background: "linear-gradient(90deg,#e8a04a,#c97c28)",
                        width: `${((guests - chef.minGuests) / (chef.maxGuests - chef.minGuests)) * 100}%`,
                        transition: "width .2s",
                      }}
                    />
                  </div>
                </div>
                <p
                  style={{
                    fontSize: "0.62rem",
                    color: "#6b6259",
                    marginTop: "8px",
                  }}
                >
                  This chef accepts {chef.minGuests}–{chef.maxGuests} guests
                </p>
              </div>

              {/* Meal type */}
              <div className="bk-card">
                <h2
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "14px",
                  }}
                >
                  Meal Type
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {MEAL_TYPES.map((m) => (
                    <button
                      key={m}
                      className={`pill-btn${mealType === m ? " active" : ""}`}
                      onClick={() => setMealType(m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              {/* Event type */}
              <div className="bk-card">
                <h2
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "14px",
                  }}
                >
                  Occasion
                </h2>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {EVENT_TYPES.map((e) => (
                    <button
                      key={e}
                      className={`pill-btn${eventType === e ? " active" : ""}`}
                      onClick={() => setEventType(e)}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ════ STEP 1 — Menu Selection ════ */}
          {step === 1 && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div className="bk-card" style={{ padding: "16px 16px 8px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: "4px",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "'Georgia',serif",
                      fontSize: "0.95rem",
                      fontWeight: "bold",
                      color: "#f5f0ea",
                    }}
                  >
                    Pick Your Dishes
                  </h2>
                  <span
                    style={{
                      fontSize: "0.7rem",
                      color: selectedItems.length > 0 ? "#e8a04a" : "#6b6259",
                    }}
                  >
                    {selectedItems.length} selected
                  </span>
                </div>
                <p
                  style={{
                    fontSize: "0.72rem",
                    color: "#6b6259",
                    marginBottom: "14px",
                  }}
                >
                  Choose from {chef.name.split(" ").slice(0, 2).join(" ")}'s
                  repertoire. Final customisation during pre-event consultation.
                </p>
              </div>

              {chef.menuItems.map((cat) => (
                <div key={cat.category} className="bk-card">
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      marginBottom: "14px",
                    }}
                  >
                    <div
                      style={{
                        width: "3px",
                        height: "16px",
                        borderRadius: "2px",
                        background: "linear-gradient(135deg,#e8a04a,#c97c28)",
                        flexShrink: 0,
                      }}
                    />
                    <h3
                      style={{
                        fontFamily: "'Georgia',serif",
                        fontSize: "0.9rem",
                        fontWeight: "bold",
                        color: "#f5f0ea",
                      }}
                    >
                      {cat.category}
                    </h3>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    {cat.items.map((item) => {
                      const on = selectedItems.includes(item);
                      return (
                        <button
                          key={item}
                          className={`menu-item-btn${on ? " selected" : ""}`}
                          onClick={() => toggleItem(item)}
                        >
                          <div className={`check-circle${on ? " on" : ""}`}>
                            {on ? "✓" : ""}
                          </div>
                          <span
                            style={{
                              fontSize: "0.82rem",
                              color: on ? "#f5f0ea" : "#9a8f85",
                              fontWeight: on ? "600" : "400",
                            }}
                          >
                            {item}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}

              {selectedItems.length === 0 && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "0.75rem",
                    color: "#3a3430",
                    padding: "8px",
                  }}
                >
                  Select at least one dish to continue
                </p>
              )}
            </div>
          )}

          {/* ════ STEP 2 — Your Details ════ */}
          {step === 2 && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div className="bk-card">
                <h2
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "18px",
                  }}
                >
                  Contact Details
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {[
                    {
                      key: "name",
                      label: "Full Name",
                      placeholder: "Your name",
                      type: "text",
                    },
                    {
                      key: "phone",
                      label: "Mobile Number",
                      placeholder: "+91 XXXXX XXXXX",
                      type: "tel",
                    },
                    {
                      key: "email",
                      label: "Email (optional)",
                      placeholder: "you@email.com",
                      type: "email",
                    },
                  ].map((f) => (
                    <div key={f.key}>
                      <label
                        style={{
                          fontSize: "0.68rem",
                          color: "#6b6259",
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        className="bk-input"
                        placeholder={f.placeholder}
                        value={form[f.key]}
                        onChange={(e) =>
                          setForm({ ...form, [f.key]: e.target.value })
                        }
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="bk-card">
                <h2
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "18px",
                  }}
                >
                  Event Address
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  <div>
                    <label
                      style={{
                        fontSize: "0.68rem",
                        color: "#6b6259",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Full Address
                    </label>
                    <textarea
                      className="bk-input"
                      placeholder="Flat / Villa no., Street, Area, City, PIN"
                      value={form.address}
                      onChange={(e) =>
                        setForm({ ...form, address: e.target.value })
                      }
                      rows={3}
                      style={{ resize: "vertical" }}
                    />
                  </div>
                  <div>
                    <label
                      style={{
                        fontSize: "0.68rem",
                        color: "#6b6259",
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Special Instructions (optional)
                    </label>
                    <textarea
                      className="bk-input"
                      placeholder="Dietary restrictions, allergies, preferred spice level, kitchen equipment..."
                      value={form.notes}
                      onChange={(e) =>
                        setForm({ ...form, notes: e.target.value })
                      }
                      rows={3}
                      style={{ resize: "vertical" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ════ STEP 3 — Confirm & Pay ════ */}
          {step === 3 && (
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {/* Booking summary */}
              <div className="bk-card">
                <h2
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "16px",
                  }}
                >
                  Booking Summary
                </h2>
                {[
                  { label: "Chef", val: chef.name },
                  { label: "Date", val: date },
                  { label: "Time", val: timeSlot },
                  { label: "Duration", val: `${hours} hours` },
                  { label: "Guests", val: `${guests} people` },
                  { label: "Occasion", val: `${eventType} · ${mealType}` },
                  {
                    label: "Dishes selected",
                    val: `${selectedItems.length} items`,
                  },
                  { label: "Address", val: form.address || "—" },
                ].map((r) => (
                  <div
                    key={r.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "8px 0",
                      borderBottom: "1px solid rgba(255,255,255,.05)",
                      gap: "16px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#6b6259",
                        flexShrink: 0,
                      }}
                    >
                      {r.label}
                    </span>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "#f5f0ea",
                        textAlign: "right",
                      }}
                    >
                      {r.val}
                    </span>
                  </div>
                ))}
              </div>

              {/* Payment mode */}
              <div className="bk-card">
                <h2
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "16px",
                  }}
                >
                  Payment Option
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                  }}
                >
                  <div
                    className={`pay-card${payMode === "full" ? " selected" : ""}`}
                    onClick={() => setPayMode("full")}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: "bold",
                            color: "#f5f0ea",
                            marginBottom: "3px",
                          }}
                        >
                          Pay Full Amount
                        </p>
                        <p style={{ fontSize: "0.7rem", color: "#6b6259" }}>
                          Secure booking · No reminders
                        </p>
                      </div>
                      <div>
                        <p
                          style={{
                            fontFamily: "'Georgia',serif",
                            fontSize: "1.2rem",
                            fontWeight: "bold",
                            color: "#e8a04a",
                          }}
                        >
                          {fmt(total)}
                        </p>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "4px",
                            padding: "2px 8px",
                            borderRadius: "20px",
                            background: "rgba(74,222,128,.1)",
                            border: "1px solid rgba(74,222,128,.25)",
                            fontSize: "0.6rem",
                            color: "#4ade80",
                            justifyContent: "center",
                            marginTop: "4px",
                          }}
                        >
                          Recommended
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`pay-card${payMode === "partial" ? " selected" : ""}`}
                    onClick={() => setPayMode("partial")}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <div>
                        <p
                          style={{
                            fontSize: "0.85rem",
                            fontWeight: "bold",
                            color: "#f5f0ea",
                            marginBottom: "3px",
                          }}
                        >
                          Pay 30% Advance
                        </p>
                        <p style={{ fontSize: "0.7rem", color: "#6b6259" }}>
                          Balance due on event day
                        </p>
                      </div>
                      <p
                        style={{
                          fontFamily: "'Georgia',serif",
                          fontSize: "1.2rem",
                          fontWeight: "bold",
                          color: "#e8a04a",
                        }}
                      >
                        {fmt(partial)}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* UPI / card icons */}
              <div className="bk-card" style={{ padding: "16px" }}>
                <p
                  style={{
                    fontSize: "0.68rem",
                    color: "#6b6259",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    marginBottom: "12px",
                  }}
                >
                  Accepted Payment Methods
                </p>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  {[
                    "UPI",
                    "Credit Card",
                    "Debit Card",
                    "Net Banking",
                    "Wallet",
                  ].map((m) => (
                    <span
                      key={m}
                      style={{
                        padding: "5px 12px",
                        borderRadius: "8px",
                        background: "rgba(255,255,255,.04)",
                        border: "1px solid rgba(255,255,255,.08)",
                        fontSize: "0.68rem",
                        color: "#9a8f85",
                      }}
                    >
                      {m}
                    </span>
                  ))}
                </div>
                <p
                  style={{
                    fontSize: "0.62rem",
                    color: "#3a3430",
                    marginTop: "10px",
                  }}
                >
                  🔒 All transactions are encrypted and secured by Razorpay
                </p>
              </div>

              <button className="next-btn" onClick={handleConfirm}>
                Confirm & Pay {fmt(payMode === "full" ? total : partial)}
              </button>
            </div>
          )}

          {/* ── Nav buttons (steps 0-2) ── */}
          {step < 3 && (
            <div style={{ display: "flex", gap: "10px", marginTop: "24px" }}>
              {step > 0 && (
                <button
                  onClick={() => setStep(step - 1)}
                  style={{
                    padding: "12px 24px",
                    borderRadius: "30px",
                    background: "transparent",
                    border: "1px solid rgba(255,255,255,.1)",
                    color: "#9a8f85",
                    fontSize: "0.82rem",
                    cursor: "pointer",
                    fontFamily: "'Trebuchet MS', sans-serif",
                    transition: "all .2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.25)";
                    e.currentTarget.style.color = "#f5f0ea";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,.1)";
                    e.currentTarget.style.color = "#9a8f85";
                  }}
                >
                  ← Back
                </button>
              )}
              <button
                className="next-btn"
                disabled={!canProceed}
                onClick={() => setStep(step + 1)}
                style={{ flex: 1 }}
              >
                {step === 2 ? "Review Booking →" : "Continue →"}
              </button>
            </div>
          )}
        </div>

        {/* ── RIGHT — sticky summary ── */}
        <div>
          {/* Chef summary card */}
          <div
            className="bk-card"
            style={{ marginBottom: "14px", position: "sticky", top: "16px" }}
          >
            {/* Chef mini profile */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                marginBottom: "16px",
                paddingBottom: "14px",
                borderBottom: "1px solid rgba(255,255,255,.07)",
              }}
            >
              <img
                src={chef.img}
                alt={chef.name}
                style={{
                  width: "52px",
                  height: "52px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  objectPosition: "top",
                  flexShrink: 0,
                  border: "1.5px solid rgba(232,160,74,.3)",
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    marginBottom: "3px",
                  }}
                >
                  <span
                    style={{
                      padding: "1px 7px",
                      borderRadius: "20px",
                      background: bc.bg,
                      color: bc.color,
                      fontSize: "0.55rem",
                      fontWeight: "bold",
                    }}
                  >
                    {chef.badge}
                  </span>
                  <span style={{ fontSize: "0.65rem", color: "#fbbf24" }}>
                    ★ {chef.rating}
                  </span>
                </div>
                <p
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.88rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {chef.name}
                </p>
                <p
                  style={{
                    fontSize: "0.65rem",
                    color: "#6b6259",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {chef.specialty}
                </p>
              </div>
            </div>

            {/* Live cost breakdown */}
            <h3
              style={{
                fontFamily: "'Georgia',serif",
                fontSize: "0.85rem",
                fontWeight: "bold",
                color: "#f5f0ea",
                marginBottom: "12px",
              }}
            >
              Cost Estimate
            </h3>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                marginBottom: "14px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.75rem", color: "#6b6259" }}>
                  {fmt(chef.price)} × {hours} hrs
                </span>
                <span style={{ fontSize: "0.75rem", color: "#f5f0ea" }}>
                  {fmt(chefFee)}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.75rem", color: "#6b6259" }}>
                  Platform fee (5%)
                </span>
                <span style={{ fontSize: "0.75rem", color: "#f5f0ea" }}>
                  {fmt(serviceFee)}
                </span>
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.75rem", color: "#6b6259" }}>
                  Ingredients
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "#6b6259",
                    fontStyle: "italic",
                  }}
                >
                  Quoted separately
                </span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                paddingTop: "12px",
                borderTop: "1px solid rgba(255,255,255,.08)",
              }}
            >
              <span
                style={{
                  fontSize: "0.78rem",
                  fontWeight: "bold",
                  color: "#f5f0ea",
                }}
              >
                Total
              </span>
              <span
                style={{
                  fontFamily: "'Georgia',serif",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#e8a04a",
                }}
              >
                {fmt(total)}
              </span>
            </div>

            {/* What's selected so far */}
            {(date || guests > chef.minGuests || selectedItems.length > 0) && (
              <div
                style={{
                  marginTop: "14px",
                  paddingTop: "12px",
                  borderTop: "1px solid rgba(255,255,255,.07)",
                }}
              >
                {date && (
                  <p
                    style={{
                      fontSize: "0.68rem",
                      color: "#9a8f85",
                      marginBottom: "4px",
                    }}
                  >
                    📅 {date}
                    {timeSlot ? ` · ${timeSlot}` : ""}
                  </p>
                )}
                {guests > 0 && (
                  <p
                    style={{
                      fontSize: "0.68rem",
                      color: "#9a8f85",
                      marginBottom: "4px",
                    }}
                  >
                    👥 {guests} guests · {hours} hours
                  </p>
                )}
                {eventType && (
                  <p
                    style={{
                      fontSize: "0.68rem",
                      color: "#9a8f85",
                      marginBottom: "4px",
                    }}
                  >
                    🎉 {eventType}
                  </p>
                )}
                {selectedItems.length > 0 && (
                  <p style={{ fontSize: "0.68rem", color: "#c9a96e" }}>
                    🍽 {selectedItems.length} dish
                    {selectedItems.length > 1 ? "es" : ""} selected
                  </p>
                )}
              </div>
            )}

            {/* Cancellation policy */}
            <div
              style={{
                marginTop: "14px",
                padding: "10px 12px",
                borderRadius: "10px",
                background: "rgba(74,222,128,.05)",
                border: "1px solid rgba(74,222,128,.12)",
              }}
            >
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "#4ade80",
                  fontWeight: "bold",
                  marginBottom: "3px",
                }}
              >
                ✓ Free Cancellation
              </p>
              <p
                style={{
                  fontSize: "0.62rem",
                  color: "#6b6259",
                  lineHeight: 1.5,
                }}
              >
                Cancel up to 48 hours before the event for a full refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
