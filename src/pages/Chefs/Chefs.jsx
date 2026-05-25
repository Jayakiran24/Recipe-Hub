// // src/pages/Chefs/Chefs.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // ─── DATA ────────────────────────────────────────────────────────────────────

// const HERO_CHEF = {
//   id: 1,
//   name: "Chef Marco Valentino",
//   tags: ["Italian", "Private Events"],
//   bio: "Michelin-star background specialising in authentic Tuscan gastronomy and experimental fusion.",
//   rating: 4.9,
//   price: 180,
//   experience: "18 Years Experience",
//   badge: "Master Chef Verified",
//   img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000&q=80",
// };

// const LIVE_STATUS = {
//   weekendAvailability: "High",
//   serviceRadius: "30 km",
//   trending: ["South Indian", "Dum Biryani", "Molecular"],
// };

// const GRID_CHEFS = [
//   {
//     id: 2,
//     name: "Chef Priya Sharma",
//     specialty: "South Indian • Private Events",
//     price: 145,
//     experience: "8 Years Exp.",
//     tag: "Available Now",
//     tagGreen: true,
//     rating: 4.7,
//     img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80",
//   },
//   {
//     id: 3,
//     name: "Chef Arjun Mehta",
//     specialty: "Kebabs & BBQ Elite",
//     price: 120,
//     experience: "Top Rated (238)",
//     tag: "Grill Master",
//     tagGreen: false,
//     rating: 4.8,
//     img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80",
//   },
//   {
//     id: 4,
//     name: "Chef Kavya Nair",
//     specialty: "Pastry & Dessert Art",
//     price: 160,
//     experience: "Celebrity Chef",
//     tag: "Trending",
//     tagGreen: false,
//     rating: 5.0,
//     img: "https://images.unsplash.com/photo-1574966739987-65a8b4e5ff8b?w=600&q=80",
//   },
// ];

// const ALL_CHEFS = [
//   {
//     id: 5,
//     name: "Chef Saleem Khan",
//     specialty: "Hyderabadi • Mughlai",
//     price: 200,
//     experience: "15 Years",
//     rating: 4.9,
//     sessions: 312,
//     badge: "Master",
//     img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80",
//     category: "mughlai",
//   },
//   {
//     id: 6,
//     name: "Chef Yuki Tanaka",
//     specialty: "Omakase & Kaiseki",
//     price: 250,
//     experience: "20 Years",
//     rating: 5.0,
//     sessions: 421,
//     badge: "Master",
//     img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
//     category: "japanese",
//   },
//   {
//     id: 7,
//     name: "Chef Gurpreet Singh",
//     specialty: "Punjabi • Dal Makhani",
//     price: 110,
//     experience: "10 Years",
//     rating: 4.6,
//     sessions: 198,
//     badge: "Rising",
//     img: "https://images.unsplash.com/photo-1583394293214-0b3f9c2b9e5f?w=600&q=80",
//     category: "punjabi",
//   },
//   {
//     id: 8,
//     name: "Chef Meena Pillai",
//     specialty: "Kerala • Chettinad",
//     price: 130,
//     experience: "12 Years",
//     rating: 4.7,
//     sessions: 154,
//     badge: "Top Rated",
//     img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
//     category: "south",
//   },
//   {
//     id: 9,
//     name: "Chef Rahul Verma",
//     specialty: "Molecular Gastronomy",
//     price: 350,
//     experience: "14 Years",
//     rating: 4.9,
//     sessions: 89,
//     badge: "Master",
//     img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
//     category: "molecular",
//   },
//   {
//     id: 10,
//     name: "Chef Amara Diallo",
//     specialty: "Continental • French",
//     price: 220,
//     experience: "16 Years",
//     rating: 4.8,
//     sessions: 267,
//     badge: "Top Rated",
//     img: "https://images.unsplash.com/photo-1574966740025-5b4e4a2b0e43?w=600&q=80",
//     category: "french",
//   },
//   {
//     id: 11,
//     name: "Chef Sunita Rao",
//     specialty: "Rajasthani • Street Food",
//     price: 90,
//     experience: "7 Years",
//     rating: 4.5,
//     sessions: 132,
//     badge: "Rising",
//     img: "https://images.unsplash.com/photo-1571167530149-c1105da4c2c0?w=600&q=80",
//     category: "south",
//   },
//   {
//     id: 12,
//     name: "Chef David Rodrigues",
//     specialty: "Mediterranean • Tapas",
//     price: 190,
//     experience: "13 Years",
//     rating: 4.7,
//     sessions: 201,
//     badge: "Top Rated",
//     img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
//     category: "french",
//   },
// ];

// const SPECIALIZATION_FILTERS = [
//   { id: "all", label: "All Specialisations" },
//   { id: "mughlai", label: "Mughlai" },
//   { id: "punjabi", label: "Punjabi" },
//   { id: "south", label: "South Indian" },
//   { id: "molecular", label: "Molecular" },
//   { id: "japanese", label: "Japanese" },
//   { id: "french", label: "French" },
// ];

// // ─── COMPONENT ───────────────────────────────────────────────────────────────

// export default function Chefs() {
//   const navigate = useNavigate();
//   const [filter, setFilter] = useState("all");

//   const filtered =
//     filter === "all"
//       ? ALL_CHEFS
//       : ALL_CHEFS.filter((c) => c.category === filter);

//   const badgeColor = (b) =>
//     ({
//       Master: { bg: "#3b1f6b", color: "#c4b5fd" },
//       "Top Rated": { bg: "#14532d", color: "#4ade80" },
//       Rising: { bg: "#713f12", color: "#fde68a" },
//     })[b] || { bg: "#1e3a5f", color: "#93c5fd" };

//   return (
//     <div
//       style={{
//         background: "#0c0a08",
//         minHeight: "100vh",
//         fontFamily: "'Trebuchet MS', sans-serif",
//         color: "#f5f0ea",
//       }}
//     >
//       <style>{`
//         * { box-sizing: border-box; -webkit-tap-highlight-color: transparent; }
//         ::-webkit-scrollbar { display: none; }

//         /* ── Hero layout ── */
//         .chefs-hero {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 16px;
//           padding: 20px 16px;
//           max-width: 1600px;
//           margin: 0 auto;
//         }
//         @media (min-width: 900px) {
//           .chefs-hero {
//             grid-template-columns: 1fr 340px;
//             gap: 24px;
//             padding: 32px 28px;
//           }
//         }
//         @media (min-width: 1200px) {
//           .chefs-hero {
//             grid-template-columns: 1fr 380px;
//             padding: 40px 40px;
//           }
//         }

//         /* ── Bottom 3-card spotlight grid ── */
//         .spotlight-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 14px;
//           padding: 0 16px;
//           max-width: 1600px;
//           margin: 0 auto;
//         }
//         @media (min-width: 560px) {
//           .spotlight-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; padding: 0 16px; }
//         }
//         @media (min-width: 900px) {
//           .spotlight-grid { grid-template-columns: repeat(3, 1fr); gap: 20px; padding: 0 28px; }
//         }
//         @media (min-width: 1200px) {
//           .spotlight-grid { padding: 0 40px; }
//         }

//         /* ── All chefs grid ── */
//         .all-chefs-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 14px;
//           padding: 0 16px;
//           max-width: 1600px;
//           margin: 0 auto;
//         }
//         @media (min-width: 560px)  { .all-chefs-grid { grid-template-columns: repeat(2, 1fr); gap: 16px; } }
//         @media (min-width: 900px)  { .all-chefs-grid { grid-template-columns: repeat(3, 1fr); gap: 18px; padding: 0 28px; } }
//         @media (min-width: 1200px) { .all-chefs-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; padding: 0 40px; } }
//         @media (min-width: 1600px) { .all-chefs-grid { grid-template-columns: repeat(5, 1fr); } }

//         /* ── Filter pills scroll ── */
//         .filter-row {
//           display: flex;
//           gap: 10px;
//           overflow-x: auto;
//           padding: 0 16px 4px;
//           max-width: 1600px;
//           margin: 0 auto;
//           scrollbar-width: none;
//         }
//         @media (min-width: 900px)  { .filter-row { padding: 0 28px 4px; } }
//         @media (min-width: 1200px) { .filter-row { padding: 0 40px 4px; flex-wrap: wrap; overflow-x: visible; } }

//         /* ── Section padding ── */
//         .sec-px { padding-left: 16px; padding-right: 16px; max-width: 1600px; margin: 0 auto; }
//         @media (min-width: 900px)  { .sec-px { padding-left: 28px; padding-right: 28px; } }
//         @media (min-width: 1200px) { .sec-px { padding-left: 40px; padding-right: 40px; } }

//         /* Stats bar */
//         .stats-bar {
//           display: flex;
//           gap: 12px;
//           padding: 12px 16px;
//           max-width: 1600px;
//           margin: 0 auto;
//         }
//         @media (min-width: 900px) { .stats-bar { padding: 16px 28px; gap: 20px; } }
//         @media (min-width: 1200px) { .stats-bar { padding: 16px 40px; } }

//         .chef-card-hover { transition: transform 0.28s ease, box-shadow 0.28s ease, border-color 0.28s ease; }
//         .chef-card-hover:hover { transform: translateY(-4px); box-shadow: 0 20px 48px rgba(0,0,0,0.7) !important; border-color: rgba(232,160,74,0.35) !important; }
//         .chef-card-hover:hover .chef-img-inner { transform: scale(1.05); }
//         .chef-img-inner { transition: transform 0.45s ease; width:100%; height:100%; object-fit:cover; object-position:top; display:block; }

//         .book-btn {
//           padding: 10px 22px;
//           border-radius: 30px;
//           background: linear-gradient(135deg, #e8a04a, #c97c28);
//           border: none;
//           color: #0c0a08;
//           font-weight: bold;
//           font-size: 0.82rem;
//           cursor: pointer;
//           letter-spacing: 0.04em;
//           white-space: nowrap;
//           transition: filter 0.2s;
//           font-family: 'Trebuchet MS', sans-serif;
//         }
//         .book-btn:hover { filter: brightness(1.12); }

//         .portfolio-btn {
//           width: 100%;
//           padding: 10px 0;
//           border-radius: 30px;
//           background: transparent;
//           border: 1px solid rgba(232,160,74,0.35);
//           color: #e8a04a;
//           font-weight: bold;
//           font-size: 0.78rem;
//           cursor: pointer;
//           letter-spacing: 0.05em;
//           transition: background 0.2s, border-color 0.2s;
//           font-family: 'Trebuchet MS', sans-serif;
//         }
//         .portfolio-btn:hover { background: rgba(232,160,74,0.1); border-color: rgba(232,160,74,0.6); }

//         .hero-img-wrap { position: relative; border-radius: 18px; overflow: hidden; }
//         .hero-img-wrap img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; transition: transform 0.5s ease; }
//         .hero-img-wrap:hover img { transform: scale(1.03); }

//         /* Animate in */
//         @keyframes fadeUp {
//           from { opacity: 0; transform: translateY(20px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//         .fade-up { animation: fadeUp 0.5s ease forwards; }
//         .fade-up-d1 { animation: fadeUp 0.5s 0.1s ease both; }
//         .fade-up-d2 { animation: fadeUp 0.5s 0.2s ease both; }
//         .fade-up-d3 { animation: fadeUp 0.5s 0.3s ease both; }
//       `}</style>

//       {/* ══ STATS BAR ════════════════════════════════════════════════════ */}
//       <div className="stats-bar">
//         {[
//           { label: "Active Chefs", val: "124" },
//           { label: "Available Tonight", val: "18" },
//           { label: "Avg Rating", val: "4.8 ★" },
//           { label: "Cities Covered", val: "32" },
//         ].map((s) => (
//           <div
//             key={s.label}
//             style={{
//               padding: "10px 18px",
//               borderRadius: "12px",
//               background: "rgba(255,255,255,0.04)",
//               border: "1px solid rgba(255,255,255,0.07)",
//               flexShrink: 0,
//             }}
//           >
//             <p
//               style={{
//                 color: "#f5f0ea",
//                 fontFamily: "'Georgia', serif",
//                 fontSize: "1.15rem",
//                 fontWeight: "bold",
//                 lineHeight: 1,
//               }}
//             >
//               {s.val}
//             </p>
//             <p
//               style={{
//                 color: "#6b6259",
//                 fontSize: "0.65rem",
//                 marginTop: "3px",
//                 letterSpacing: "0.05em",
//               }}
//             >
//               {s.label}
//             </p>
//           </div>
//         ))}
//       </div>

//       {/* ══ HERO — 2-col on desktop ════════════════════════════════════ */}
//       <div className="chefs-hero">
//         {/* LEFT — hero chef card */}
//         <div className="fade-up">
//           {/* Curated tag */}
//           <div
//             style={{
//               marginBottom: "14px",
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//             }}
//           >
//             <span
//               style={{
//                 fontSize: "0.62rem",
//                 color: "#e8a04a",
//                 letterSpacing: "0.16em",
//                 textTransform: "uppercase",
//                 border: "1px solid rgba(232,160,74,0.35)",
//                 borderRadius: "20px",
//                 padding: "3px 12px",
//                 background: "rgba(232,160,74,0.08)",
//               }}
//             >
//               Curated Talent
//             </span>
//           </div>

//           {/* Headline */}
//           <h1
//             style={{
//               fontFamily: "'Georgia', serif",
//               fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
//               fontWeight: "bold",
//               color: "#f5f0ea",
//               lineHeight: 1.18,
//               marginBottom: "16px",
//             }}
//           >
//             Master Chefs
//             <br />
//             <em style={{ color: "#e8a04a", fontStyle: "italic" }}>
//               at Your Doorstep
//             </em>
//           </h1>

//           {/* Hero card */}
//           <div
//             style={{
//               borderRadius: "20px",
//               overflow: "hidden",
//               border: "1px solid rgba(255,255,255,0.07)",
//               boxShadow: "0 16px 48px rgba(0,0,0,0.65)",
//               background: "#181410",
//             }}
//           >
//             {/* Image */}
//             <div
//               className="hero-img-wrap"
//               style={{ height: "clamp(240px, 40vw, 380px)" }}
//             >
//               {/* Tags top-left */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "14px",
//                   left: "14px",
//                   display: "flex",
//                   gap: "8px",
//                   zIndex: 2,
//                 }}
//               >
//                 {HERO_CHEF.tags.map((t) => (
//                   <span
//                     key={t}
//                     style={{
//                       padding: "4px 12px",
//                       borderRadius: "20px",
//                       background: "rgba(10,8,5,0.8)",
//                       backdropFilter: "blur(8px)",
//                       border: "1px solid rgba(255,255,255,0.12)",
//                       fontSize: "0.68rem",
//                       color: "#f5f0ea",
//                     }}
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//               <img src={HERO_CHEF.img} alt={HERO_CHEF.name} />
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background:
//                     "linear-gradient(to bottom, transparent 40%, rgba(10,8,5,0.85) 100%)",
//                 }}
//               />
//             </div>

//             {/* Info bar */}
//             <div
//               style={{
//                 padding: "18px 20px",
//                 display: "flex",
//                 flexWrap: "wrap",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 gap: "14px",
//               }}
//             >
//               <div style={{ flex: 1, minWidth: "200px" }}>
//                 {/* Rating + badge */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     marginBottom: "6px",
//                   }}
//                 >
//                   <span
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                       background: "rgba(251,191,36,0.12)",
//                       border: "1px solid rgba(251,191,36,0.3)",
//                       borderRadius: "20px",
//                       padding: "3px 10px",
//                       fontSize: "0.7rem",
//                       color: "#fbbf24",
//                       fontWeight: "bold",
//                     }}
//                   >
//                     ★ {HERO_CHEF.rating}
//                   </span>
//                   <span style={{ fontSize: "0.68rem", color: "#4ade80" }}>
//                     ✓ {HERO_CHEF.badge}
//                   </span>
//                 </div>
//                 <h2
//                   style={{
//                     fontFamily: "'Georgia', serif",
//                     fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
//                     fontWeight: "bold",
//                     color: "#f5f0ea",
//                     marginBottom: "4px",
//                   }}
//                 >
//                   {HERO_CHEF.name}
//                 </h2>
//                 <p
//                   style={{
//                     color: "#6b6259",
//                     fontSize: "0.78rem",
//                     lineHeight: 1.55,
//                     maxWidth: "420px",
//                   }}
//                 >
//                   {HERO_CHEF.bio}
//                 </p>
//               </div>

//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "flex-end",
//                   gap: "10px",
//                   flexShrink: 0,
//                 }}
//               >
//                 <div>
//                   <p
//                     style={{
//                       color: "#6b6259",
//                       fontSize: "0.65rem",
//                       textAlign: "right",
//                       marginBottom: "2px",
//                     }}
//                   >
//                     Starting at
//                   </p>
//                   <p
//                     style={{
//                       fontFamily: "'Georgia', serif",
//                       fontSize: "1.6rem",
//                       fontWeight: "bold",
//                       color: "#e8a04a",
//                       lineHeight: 1,
//                     }}
//                   >
//                     ₹{HERO_CHEF.price * 83}
//                     <span style={{ fontSize: "0.75rem", color: "#9a8f85" }}>
//                       /hr
//                     </span>
//                   </p>
//                 </div>
//                 <button
//                   className="book-btn"
//                   onClick={() => navigate("/booking")}
//                 >
//                   Book Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* RIGHT — Live Status + Elite */}
//         <div
//           className="fade-up-d1"
//           style={{ display: "flex", flexDirection: "column", gap: "16px" }}
//         >
//           {/* Live Status card */}
//           <div
//             style={{
//               borderRadius: "18px",
//               padding: "20px",
//               background: "#181410",
//               border: "1px solid rgba(255,255,255,0.07)",
//               boxShadow: "0 8px 28px rgba(0,0,0,0.5)",
//             }}
//           >
//             <div
//               style={{
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "space-between",
//                 marginBottom: "16px",
//               }}
//             >
//               <h3
//                 style={{
//                   fontFamily: "'Georgia', serif",
//                   fontSize: "1rem",
//                   fontWeight: "bold",
//                   color: "#f5f0ea",
//                 }}
//               >
//                 Live Status
//               </h3>
//               <span
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "5px",
//                   fontSize: "0.65rem",
//                   color: "#4ade80",
//                 }}
//               >
//                 <span
//                   style={{
//                     width: "6px",
//                     height: "6px",
//                     borderRadius: "50%",
//                     background: "#4ade80",
//                     display: "inline-block",
//                     boxShadow: "0 0 6px #4ade80",
//                   }}
//                 />
//                 Real-time
//               </span>
//             </div>

//             {[
//               {
//                 icon: "📅",
//                 label: "Weekend Availability",
//                 val: LIVE_STATUS.weekendAvailability,
//                 valColor: "#4ade80",
//               },
//               {
//                 icon: "📍",
//                 label: "Service Radius",
//                 val: LIVE_STATUS.serviceRadius,
//                 valColor: "#c9a96e",
//               },
//             ].map((row) => (
//               <div
//                 key={row.label}
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   padding: "12px 0",
//                   borderBottom: "1px solid rgba(255,255,255,0.05)",
//                 }}
//               >
//                 <span
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "8px",
//                     fontSize: "0.78rem",
//                     color: "#9a8f85",
//                   }}
//                 >
//                   <span>{row.icon}</span>
//                   {row.label}
//                 </span>
//                 <span
//                   style={{
//                     fontSize: "0.78rem",
//                     fontWeight: "bold",
//                     color: row.valColor,
//                   }}
//                 >
//                   {row.val}
//                 </span>
//               </div>
//             ))}

//             <div style={{ marginTop: "14px" }}>
//               <p
//                 style={{
//                   fontSize: "0.65rem",
//                   color: "#6b6259",
//                   letterSpacing: "0.1em",
//                   textTransform: "uppercase",
//                   marginBottom: "8px",
//                 }}
//               >
//                 Trending Specialisation
//               </p>
//               <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
//                 {LIVE_STATUS.trending.map((t) => (
//                   <span
//                     key={t}
//                     style={{
//                       padding: "4px 10px",
//                       borderRadius: "20px",
//                       background: "rgba(232,160,74,0.1)",
//                       border: "1px solid rgba(232,160,74,0.25)",
//                       fontSize: "0.65rem",
//                       color: "#c9a96e",
//                       letterSpacing: "0.04em",
//                     }}
//                   >
//                     {t}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           </div>

//           {/* Elite Membership card */}
//           <div
//             style={{
//               borderRadius: "18px",
//               padding: "24px",
//               background:
//                 "linear-gradient(140deg, #e8a04a 0%, #c97c28 60%, #a85e18 100%)",
//               boxShadow: "0 12px 36px rgba(232,160,74,0.3)",
//               position: "relative",
//               overflow: "hidden",
//             }}
//           >
//             {/* Decorative circles */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: "-30px",
//                 right: "-30px",
//                 width: "120px",
//                 height: "120px",
//                 borderRadius: "50%",
//                 background: "rgba(255,255,255,0.08)",
//               }}
//             />
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: "-20px",
//                 left: "-20px",
//                 width: "80px",
//                 height: "80px",
//                 borderRadius: "50%",
//                 background: "rgba(255,255,255,0.06)",
//               }}
//             />

//             <div style={{ position: "relative", zIndex: 1 }}>
//               <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>🏆</div>
//               <h3
//                 style={{
//                   fontFamily: "'Georgia', serif",
//                   fontSize: "1.15rem",
//                   fontWeight: "bold",
//                   color: "#0c0a08",
//                   marginBottom: "8px",
//                 }}
//               >
//                 Elite Membership
//               </h3>
//               <p
//                 style={{
//                   fontSize: "0.78rem",
//                   color: "rgba(12,10,8,0.7)",
//                   lineHeight: 1.6,
//                   marginBottom: "18px",
//                 }}
//               >
//                 Get priority booking and zero service fees on all culinary
//                 experiences.
//               </p>
//               <button
//                 style={{
//                   width: "100%",
//                   padding: "12px 0",
//                   borderRadius: "30px",
//                   background: "#0c0a08",
//                   border: "none",
//                   color: "#e8a04a",
//                   fontWeight: "bold",
//                   fontSize: "0.85rem",
//                   cursor: "pointer",
//                   letterSpacing: "0.05em",
//                   fontFamily: "'Trebuchet MS', sans-serif",
//                   transition: "opacity 0.2s",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
//                 onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
//               >
//                 Upgrade Now
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ══ SPOTLIGHT GRID (3 mini cards) ═════════════════════════════════ */}
//       <div
//         className="spotlight-grid fade-up-d2"
//         style={{ marginBottom: "32px" }}
//       >
//         {GRID_CHEFS.map((chef) => (
//           <div
//             key={chef.id}
//             className="chef-card-hover"
//             onClick={() => navigate(`/chefs/${chef.id}`)}
//             style={{
//               borderRadius: "18px",
//               overflow: "hidden",
//               cursor: "pointer",
//               background: "#181410",
//               border: "1px solid rgba(255,255,255,0.07)",
//               boxShadow: "0 8px 28px rgba(0,0,0,0.55)",
//             }}
//           >
//             {/* Image */}
//             <div
//               style={{
//                 position: "relative",
//                 height: "200px",
//                 overflow: "hidden",
//               }}
//             >
//               <img className="chef-img-inner" src={chef.img} alt={chef.name} />
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background:
//                     "linear-gradient(to bottom, transparent 40%, rgba(10,8,5,0.85) 100%)",
//                 }}
//               />
//               {/* Available / tag badge */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "10px",
//                   right: "10px",
//                   padding: "4px 10px",
//                   borderRadius: "20px",
//                   background: chef.tagGreen
//                     ? "rgba(20,83,45,0.88)"
//                     : "rgba(10,8,5,0.8)",
//                   backdropFilter: "blur(8px)",
//                   border: chef.tagGreen
//                     ? "1px solid #4ade80"
//                     : "1px solid rgba(255,255,255,0.12)",
//                   fontSize: "0.62rem",
//                   color: chef.tagGreen ? "#4ade80" : "#c9a96e",
//                   fontWeight: "bold",
//                 }}
//               >
//                 {chef.tag}
//               </div>
//             </div>

//             {/* Body */}
//             <div style={{ padding: "14px" }}>
//               <h3
//                 style={{
//                   fontFamily: "'Georgia', serif",
//                   fontSize: "0.98rem",
//                   fontWeight: "bold",
//                   color: "#f5f0ea",
//                   marginBottom: "3px",
//                 }}
//               >
//                 {chef.name}
//               </h3>
//               <p
//                 style={{
//                   color: "#6b6259",
//                   fontSize: "0.72rem",
//                   marginBottom: "10px",
//                 }}
//               >
//                 {chef.specialty}
//               </p>
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                   marginBottom: "12px",
//                 }}
//               >
//                 <div>
//                   <p
//                     style={{
//                       fontFamily: "'Georgia', serif",
//                       fontSize: "1.1rem",
//                       fontWeight: "bold",
//                       color: "#e8a04a",
//                       lineHeight: 1,
//                     }}
//                   >
//                     ₹{chef.price * 83}
//                     <span style={{ fontSize: "0.65rem", color: "#9a8f85" }}>
//                       /hr
//                     </span>
//                   </p>
//                   <p
//                     style={{
//                       fontSize: "0.62rem",
//                       color: "#6b6259",
//                       marginTop: "2px",
//                     }}
//                   >
//                     {chef.experience}
//                   </p>
//                 </div>
//                 <span
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "3px",
//                     fontSize: "0.72rem",
//                     color: "#fbbf24",
//                   }}
//                 >
//                   ★ {chef.rating}
//                 </span>
//               </div>
//               <button
//                 className="portfolio-btn"
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   navigate(`/chefs/${chef.id}`);
//                 }}
//               >
//                 View Portfolio
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ══ FILTERS ═══════════════════════════════════════════════════════ */}
//       <div className="sec-px fade-up-d3" style={{ marginBottom: "16px" }}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginBottom: "14px",
//             flexWrap: "wrap",
//             gap: "10px",
//           }}
//         >
//           <div>
//             <h2
//               style={{
//                 fontFamily: "'Georgia', serif",
//                 fontSize: "clamp(1rem, 2.5vw, 1.35rem)",
//                 fontWeight: "bold",
//                 color: "#f5f0ea",
//                 marginBottom: "2px",
//               }}
//             >
//               All Chefs
//             </h2>
//             <p style={{ color: "#6b6259", fontSize: "0.72rem" }}>
//               {filtered.length} chefs available
//             </p>
//           </div>
//           <div
//             style={{
//               padding: "8px 16px",
//               borderRadius: "30px",
//               background: "rgba(255,255,255,0.04)",
//               border: "1px solid rgba(255,255,255,0.09)",
//               fontSize: "0.75rem",
//               color: "#9a8f85",
//               display: "flex",
//               alignItems: "center",
//               gap: "6px",
//               cursor: "pointer",
//             }}
//           >
//             <svg
//               width="12"
//               height="12"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               viewBox="0 0 24 24"
//             >
//               <line x1="4" y1="6" x2="20" y2="6" />
//               <line x1="8" y1="12" x2="20" y2="12" />
//               <line x1="12" y1="18" x2="20" y2="18" />
//             </svg>
//             Sort & Filter
//           </div>
//         </div>
//       </div>

//       <div className="filter-row" style={{ marginBottom: "20px" }}>
//         {SPECIALIZATION_FILTERS.map((f) => {
//           const active = filter === f.id;
//           return (
//             <button
//               key={f.id}
//               onClick={() => setFilter(f.id)}
//               style={{
//                 flexShrink: 0,
//                 padding: "8px 18px",
//                 borderRadius: "30px",
//                 background: active ? "rgba(232,160,74,0.15)" : "transparent",
//                 border: active
//                   ? "1px solid #e8a04a"
//                   : "1px solid rgba(255,255,255,0.1)",
//                 color: active ? "#e8a04a" : "#6b6259",
//                 fontSize: "0.78rem",
//                 fontWeight: active ? "700" : "400",
//                 cursor: "pointer",
//                 letterSpacing: "0.03em",
//                 transition: "all 0.2s",
//                 fontFamily: "'Trebuchet MS', sans-serif",
//                 whiteSpace: "nowrap",
//               }}
//             >
//               {f.label}
//             </button>
//           );
//         })}
//       </div>

//       {/* ══ ALL CHEFS GRID ════════════════════════════════════════════════ */}
//       <div className="all-chefs-grid" style={{ paddingBottom: "56px" }}>
//         {filtered.map((chef) => {
//           const bc = badgeColor(chef.badge);
//           return (
//             <div
//               key={chef.id}
//               className="chef-card-hover"
//               onClick={() => navigate(`/chefs/${chef.id}`)}
//               style={{
//                 borderRadius: "18px",
//                 overflow: "hidden",
//                 cursor: "pointer",
//                 background: "#181410",
//                 border: "1px solid rgba(255,255,255,0.07)",
//                 boxShadow: "0 6px 22px rgba(0,0,0,0.5)",
//               }}
//             >
//               {/* Image */}
//               <div
//                 style={{
//                   position: "relative",
//                   height: "180px",
//                   overflow: "hidden",
//                 }}
//               >
//                 <img
//                   className="chef-img-inner"
//                   src={chef.img}
//                   alt={chef.name}
//                 />
//                 <div
//                   style={{
//                     position: "absolute",
//                     inset: 0,
//                     background:
//                       "linear-gradient(to bottom, transparent 35%, rgba(10,8,5,0.82) 100%)",
//                   }}
//                 />
//                 {/* Badge */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "10px",
//                     left: "10px",
//                     padding: "3px 9px",
//                     borderRadius: "20px",
//                     background: bc.bg,
//                     color: bc.color,
//                     fontSize: "0.6rem",
//                     fontWeight: "bold",
//                     letterSpacing: "0.06em",
//                   }}
//                 >
//                   {chef.badge}
//                 </div>
//                 {/* Rating */}
//                 <div
//                   style={{
//                     position: "absolute",
//                     top: "10px",
//                     right: "10px",
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "3px",
//                     background: "rgba(10,8,5,0.78)",
//                     backdropFilter: "blur(8px)",
//                     border: "1px solid rgba(255,255,255,0.1)",
//                     borderRadius: "20px",
//                     padding: "3px 9px",
//                     fontSize: "0.68rem",
//                     color: "#fbbf24",
//                     fontWeight: "bold",
//                   }}
//                 >
//                   ★ {chef.rating}
//                 </div>
//               </div>

//               {/* Body */}
//               <div style={{ padding: "13px 13px 15px" }}>
//                 <h3
//                   style={{
//                     fontFamily: "'Georgia', serif",
//                     fontSize: "0.95rem",
//                     fontWeight: "bold",
//                     color: "#f5f0ea",
//                     marginBottom: "3px",
//                     whiteSpace: "nowrap",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                   }}
//                 >
//                   {chef.name}
//                 </h3>
//                 <p
//                   style={{
//                     color: "#6b6259",
//                     fontSize: "0.7rem",
//                     marginBottom: "10px",
//                     whiteSpace: "nowrap",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                   }}
//                 >
//                   {chef.specialty}
//                 </p>

//                 {/* Stats row */}
//                 <div
//                   style={{
//                     display: "flex",
//                     alignItems: "center",
//                     gap: "10px",
//                     marginBottom: "12px",
//                   }}
//                 >
//                   <div style={{ flex: 1 }}>
//                     <p
//                       style={{
//                         fontFamily: "'Georgia', serif",
//                         fontSize: "1rem",
//                         fontWeight: "bold",
//                         color: "#e8a04a",
//                         lineHeight: 1,
//                       }}
//                     >
//                       ₹{chef.price * 83}
//                       <span style={{ fontSize: "0.6rem", color: "#9a8f85" }}>
//                         /hr
//                       </span>
//                     </p>
//                     <p
//                       style={{
//                         fontSize: "0.6rem",
//                         color: "#6b6259",
//                         marginTop: "2px",
//                       }}
//                     >
//                       {chef.experience}
//                     </p>
//                   </div>
//                   <div style={{ textAlign: "right" }}>
//                     <p
//                       style={{
//                         fontSize: "0.7rem",
//                         color: "#f5f0ea",
//                         fontWeight: "bold",
//                       }}
//                     >
//                       {chef.sessions}
//                     </p>
//                     <p style={{ fontSize: "0.6rem", color: "#6b6259" }}>
//                       sessions
//                     </p>
//                   </div>
//                 </div>

//                 <button
//                   className="portfolio-btn"
//                   onClick={(e) => {
//                     e.stopPropagation();
//                     navigate(`/chefs/${chef.id}`);
//                   }}
//                 >
//                   View Portfolio
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// src/pages/Chefs/Chefs.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ─── DATA ────────────────────────────────────────────────────────────────────
// All prices in ₹/hr — realistic private chef rates in India:
//   Budget home chef:   ₹800–₹1,500/hr
//   Experienced:       ₹1,500–₹3,000/hr
//   Senior / hotel:    ₹3,000–₹5,000/hr
//   Celebrity / Exec:  ₹5,000–₹10,000/hr

const HERO_CHEF = {
  id: 1,
  name: "Chef Imtiaz Qureshi",
  tags: ["Awadhi", "Private Events"],
  bio: "Padma Shri awardee and Dum Pukht legend. Brings 50 years of royal Lucknowi dum cuisine to your home kitchen.",
  rating: 5.0,
  price: 8500, // ₹8,500/hr — celebrity tier
  experience: "50 Years Experience",
  badge: "Master Chef Verified",
  img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=1000&q=80",
};

const LIVE_STATUS = {
  weekendAvailability: "High",
  serviceRadius: "30 km",
  trending: ["Dum Biryani", "Malabar Cuisine", "Korean BBQ"],
};

// ── 3 spotlight cards ──────────────────────────────────────────────────────
const GRID_CHEFS = [
  {
    id: 2,
    name: "Chef Meena Pillai",
    specialty: "Kerala Sadhya • Malabar Cuisine",
    price: 1800, // ₹1,800/hr
    experience: "12 Years Exp.",
    tag: "Available Now",
    tagGreen: true,
    rating: 4.8,
    img: "https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=600&q=80",
  },
  {
    id: 3,
    name: "Chef Arjun Mehta",
    specialty: "Punjabi BBQ • Tandoor Specialist",
    price: 2200, // ₹2,200/hr
    experience: "Top Rated (312)",
    tag: "Grill Master",
    tagGreen: false,
    rating: 4.9,
    img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80",
  },
  {
    id: 4,
    name: "Chef Kavya Krishnan",
    specialty: "Mithai • Fusion Desserts",
    price: 2500, // ₹2,500/hr
    experience: "Celebrity Pastry Chef",
    tag: "Trending",
    tagGreen: false,
    rating: 5.0,
    img: "https://images.unsplash.com/photo-1574966739987-65a8b4e5ff8b?w=600&q=80",
  },
];

// ── All chefs grid — 18 chefs across 10 cuisine categories ─────────────────
const ALL_CHEFS = [
  // ── North Indian / Mughlai ──
  {
    id: 5,
    name: "Chef Saleem Qureshi",
    specialty: "Mughlai • Dum Biryani • Seekh Kebab",
    price: 3500,
    experience: "18 Years",
    rating: 4.9,
    sessions: 412,
    badge: "Master",
    img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80",
    category: "mughlai",
  },
  {
    id: 6,
    name: "Chef Harvinder Singh",
    specialty: "Punjabi • Dal Makhani • Sarson Saag",
    price: 1600,
    experience: "10 Years",
    rating: 4.6,
    sessions: 221,
    badge: "Top Rated",
    img: "https://images.unsplash.com/photo-1583394293214-0b3f9c2b9e5f?w=600&q=80",
    category: "mughlai",
  },
  // ── South Indian ──
  {
    id: 7,
    name: "Chef Murugan Pillai",
    specialty: "Chettinad • Dosa • Sambar • Appam",
    price: 1400,
    experience: "14 Years",
    rating: 4.7,
    sessions: 298,
    badge: "Top Rated",
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
    category: "south",
  },
  {
    id: 8,
    name: "Chef Sunita Nair",
    specialty: "Kerala Fish Curry • Puttu • Kadala",
    price: 1200,
    experience: "8 Years",
    rating: 4.5,
    sessions: 143,
    badge: "Rising",
    img: "https://images.unsplash.com/photo-1571167530149-c1105da4c2c0?w=600&q=80",
    category: "south",
  },
  {
    id: 9,
    name: "Chef Selvam Rajan",
    specialty: "Tamil Brahmin • Kootu • Rasam",
    price: 1100,
    experience: "9 Years",
    rating: 4.6,
    sessions: 176,
    badge: "Rising",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    category: "south",
  },
  // ── Biryani Specialists ──
  {
    id: 10,
    name: "Chef Nawab Ali Khan",
    specialty: "Hyderabadi Dum • Kacchi Biryani",
    price: 2800,
    experience: "20 Years",
    rating: 4.9,
    sessions: 534,
    badge: "Master",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    category: "biryani",
  },
  {
    id: 11,
    name: "Chef Rashida Begum",
    specialty: "Kolkata Biryani • Rezala • Bhuna",
    price: 1800,
    experience: "16 Years",
    rating: 4.8,
    sessions: 389,
    badge: "Master",
    img: "https://images.unsplash.com/photo-1574966740025-5b4e4a2b0e43?w=600&q=80",
    category: "biryani",
  },
  // ── Chinese / Asian ──
  {
    id: 12,
    name: "Chef Wei Liang",
    specialty: "Indo-Chinese • Dim Sum • Szechuan",
    price: 2600,
    experience: "15 Years",
    rating: 4.7,
    sessions: 267,
    badge: "Top Rated",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    category: "chinese",
  },
  {
    id: 13,
    name: "Chef Yuki Tanaka",
    specialty: "Japanese • Omakase • Sushi • Ramen",
    price: 4500,
    experience: "22 Years",
    rating: 5.0,
    sessions: 198,
    badge: "Master",
    img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80",
    category: "japanese",
  },
  {
    id: 14,
    name: "Chef Park Ji-Ho",
    specialty: "Korean BBQ • Bibimbap • Bulgogi",
    price: 3200,
    experience: "12 Years",
    rating: 4.8,
    sessions: 154,
    badge: "Top Rated",
    img: "https://images.unsplash.com/photo-1583394293214-0b3f9c2b9e5f?w=600&q=80",
    category: "chinese",
  },
  // ── Continental / European ──
  {
    id: 15,
    name: "Chef Raphael Desai",
    specialty: "French Fine Dining • Soufflé • Confit",
    price: 5000,
    experience: "19 Years",
    rating: 4.9,
    sessions: 134,
    badge: "Master",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80",
    category: "continental",
  },
  {
    id: 16,
    name: "Chef Sofia Mendes",
    specialty: "Italian • Pasta • Risotto • Tiramisu",
    price: 4000,
    experience: "14 Years",
    rating: 4.8,
    sessions: 212,
    badge: "Top Rated",
    img: "https://images.unsplash.com/photo-1574966739987-65a8b4e5ff8b?w=600&q=80",
    category: "continental",
  },
  {
    id: 17,
    name: "Chef David Rodrigues",
    specialty: "Mediterranean • Tapas • Paella",
    price: 3800,
    experience: "16 Years",
    rating: 4.7,
    sessions: 189,
    badge: "Top Rated",
    img: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&q=80",
    category: "continental",
  },
  // ── Molecular / Modern ──
  {
    id: 18,
    name: "Chef Rahul Verma",
    specialty: "Molecular Gastronomy • Avant-Garde",
    price: 6500,
    experience: "14 Years",
    rating: 4.9,
    sessions: 89,
    badge: "Master",
    img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    category: "molecular",
  },
  // ── Street Food / Chaat ──
  {
    id: 19,
    name: "Chef Avinash Pawar",
    specialty: "Mumbai Street • Vada Pav • Chaat",
    price: 900,
    experience: "11 Years",
    rating: 4.6,
    sessions: 342,
    badge: "Top Rated",
    img: "https://images.unsplash.com/photo-1581299894007-aaa50297cf16?w=600&q=80",
    category: "street",
  },
  {
    id: 20,
    name: "Chef Paramjit Kaur",
    specialty: "Amritsari • Chole Bhature • Lassi",
    price: 1000,
    experience: "7 Years",
    rating: 4.5,
    sessions: 167,
    badge: "Rising",
    img: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=600&q=80",
    category: "street",
  },
  // ── Rajasthani / Gujarati ──
  {
    id: 21,
    name: "Chef Manohar Joshi",
    specialty: "Rajasthani • Dal Baati • Laal Maas",
    price: 1300,
    experience: "13 Years",
    rating: 4.7,
    sessions: 228,
    badge: "Top Rated",
    img: "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600&q=80",
    category: "rajasthani",
  },
  {
    id: 22,
    name: "Chef Rekha Patel",
    specialty: "Gujarati Thali • Dhokla • Undhiyu",
    price: 1100,
    experience: "9 Years",
    rating: 4.6,
    sessions: 198,
    badge: "Rising",
    img: "https://images.unsplash.com/photo-1574966740025-5b4e4a2b0e43?w=600&q=80",
    category: "rajasthani",
  },
];

const SPECIALIZATION_FILTERS = [
  { id: "all", label: "All Cuisines" },
  { id: "mughlai", label: "North Indian" },
  { id: "south", label: "South Indian" },
  { id: "biryani", label: "Biryani" },
  { id: "street", label: "Street Food" },
  { id: "rajasthani", label: "Rajasthani" },
  { id: "chinese", label: "Chinese / Korean" },
  { id: "japanese", label: "Japanese" },
  { id: "continental", label: "Continental" },
  { id: "molecular", label: "Molecular" },
];

// ─── HELPERS ─────────────────────────────────────────────────────────────────
const fmt = (n) =>
  n >= 1000 ? `₹${(n / 1000).toFixed(1).replace(".0", "")}k` : `₹${n}`;

// ─── COMPONENT ───────────────────────────────────────────────────────────────
export default function Chefs() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? ALL_CHEFS
      : ALL_CHEFS.filter((c) => c.category === filter);

  const badgeColor = (b) =>
    ({
      Master: { bg: "#3b1f6b", color: "#c4b5fd" },
      "Top Rated": { bg: "#14532d", color: "#4ade80" },
      Rising: { bg: "#713f12", color: "#fde68a" },
    })[b] || { bg: "#1e3a5f", color: "#93c5fd" };

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

        /* ── Hero 2-col ── */
        .chefs-hero {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
          padding: 20px 16px;
          max-width: 1600px;
          margin: 0 auto;
        }
        @media (min-width: 900px) {
          .chefs-hero { grid-template-columns: 1fr 340px; gap: 24px; padding: 32px 28px; }
        }
        @media (min-width: 1200px) {
          .chefs-hero { grid-template-columns: 1fr 380px; padding: 40px 40px; }
        }

        /* ── Spotlight 3-grid ── */
        .spotlight-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          padding: 0 16px;
          max-width: 1600px;
          margin: 0 auto;
        }
        @media (min-width: 560px)  { .spotlight-grid { grid-template-columns: repeat(2,1fr); gap:16px; } }
        @media (min-width: 900px)  { .spotlight-grid { grid-template-columns: repeat(3,1fr); gap:20px; padding:0 28px; } }
        @media (min-width: 1200px) { .spotlight-grid { padding:0 40px; } }

        /* ── All chefs grid ── */
        .all-chefs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          padding: 0 16px;
          max-width: 1600px;
          margin: 0 auto;
        }
        @media (min-width: 560px)  { .all-chefs-grid { grid-template-columns: repeat(2,1fr); gap:16px; } }
        @media (min-width: 900px)  { .all-chefs-grid { grid-template-columns: repeat(3,1fr); gap:18px; padding:0 28px; } }
        @media (min-width: 1200px) { .all-chefs-grid { grid-template-columns: repeat(4,1fr); gap:20px; padding:0 40px; } }
        @media (min-width: 1600px) { .all-chefs-grid { grid-template-columns: repeat(5,1fr); } }

        /* ── Filter pill row ── */
        .filter-row {
          display: flex;
          gap: 10px;
          overflow-x: auto;
          padding: 0 16px 4px;
          max-width: 1600px;
          margin: 0 auto;
          scrollbar-width: none;
        }
        @media (min-width: 900px)  { .filter-row { padding: 0 28px 4px; } }
        @media (min-width: 1200px) { .filter-row { padding: 0 40px 4px; flex-wrap: wrap; overflow-x: visible; } }

        /* ── Shared px ── */
        .sec-px { padding-left:16px; padding-right:16px; max-width:1600px; margin:0 auto; }
        @media (min-width:900px)  { .sec-px { padding-left:28px; padding-right:28px; } }
        @media (min-width:1200px) { .sec-px { padding-left:40px; padding-right:40px; } }

        /* ── Stats bar ── */
        .stats-bar { display:flex; gap:12px; padding:12px 16px; max-width:1600px; margin:0 auto; overflow-x:auto; scrollbar-width:none; }
        @media (min-width:900px)  { .stats-bar { padding:16px 28px; gap:20px; } }
        @media (min-width:1200px) { .stats-bar { padding:16px 40px; } }

        /* ── Card interactions ── */
        .chef-card-hover { transition: transform .28s ease, box-shadow .28s ease, border-color .28s ease; }
        .chef-card-hover:hover { transform:translateY(-4px); box-shadow:0 20px 48px rgba(0,0,0,.7) !important; border-color:rgba(232,160,74,.35) !important; }
        .chef-card-hover:hover .chef-img-inner { transform:scale(1.05); }
        .chef-img-inner { transition:transform .45s ease; width:100%; height:100%; object-fit:cover; object-position:top; display:block; }

        .book-btn {
          padding:10px 22px; border-radius:30px;
          background:linear-gradient(135deg,#e8a04a,#c97c28);
          border:none; color:#0c0a08; font-weight:bold; font-size:0.82rem;
          cursor:pointer; letter-spacing:0.04em; white-space:nowrap;
          transition:filter .2s; font-family:'Trebuchet MS',sans-serif;
        }
        .book-btn:hover { filter:brightness(1.12); }

        .portfolio-btn {
          width:100%; padding:10px 0; border-radius:30px;
          background:transparent; border:1px solid rgba(232,160,74,.35);
          color:#e8a04a; font-weight:bold; font-size:0.78rem;
          cursor:pointer; letter-spacing:0.05em;
          transition:background .2s, border-color .2s;
          font-family:'Trebuchet MS',sans-serif;
        }
        .portfolio-btn:hover { background:rgba(232,160,74,.1); border-color:rgba(232,160,74,.6); }

        .hero-img-wrap { position:relative; border-radius:18px; overflow:hidden; }
        .hero-img-wrap img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; transition:transform .5s ease; }
        .hero-img-wrap:hover img { transform:scale(1.03); }

        @keyframes fadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }
        .fade-up    { animation:fadeUp .5s ease forwards; }
        .fade-up-d1 { animation:fadeUp .5s .1s ease both; }
        .fade-up-d2 { animation:fadeUp .5s .2s ease both; }
        .fade-up-d3 { animation:fadeUp .5s .3s ease both; }
      `}</style>

      {/* ══ STATS BAR ════════════════════════════════════════════════════ */}
      <div className="stats-bar">
        {[
          { val: "124", label: "Active Chefs" },
          { val: "18", label: "Available Tonight" },
          { val: "4.8 ★", label: "Avg Rating" },
          { val: "28", label: "Cities Covered" },
          { val: "₹900+", label: "Starting Price / hr" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              padding: "10px 18px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              flexShrink: 0,
            }}
          >
            <p
              style={{
                color: "#f5f0ea",
                fontFamily: "'Georgia',serif",
                fontSize: "1.15rem",
                fontWeight: "bold",
                lineHeight: 1,
              }}
            >
              {s.val}
            </p>
            <p
              style={{
                color: "#6b6259",
                fontSize: "0.65rem",
                marginTop: "3px",
                letterSpacing: "0.05em",
              }}
            >
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* ══ HERO — featured chef + right panel ═══════════════════════════ */}
      <div className="chefs-hero">
        {/* LEFT — hero chef */}
        <div className="fade-up">
          <div style={{ marginBottom: "14px" }}>
            <span
              style={{
                fontSize: "0.62rem",
                color: "#e8a04a",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                border: "1px solid rgba(232,160,74,.35)",
                borderRadius: "20px",
                padding: "3px 12px",
                background: "rgba(232,160,74,.08)",
              }}
            >
              Curated Talent
            </span>
          </div>
          <h1
            style={{
              fontFamily: "'Georgia',serif",
              fontSize: "clamp(1.6rem,4vw,2.6rem)",
              fontWeight: "bold",
              color: "#f5f0ea",
              lineHeight: 1.18,
              marginBottom: "16px",
            }}
          >
            Master Chefs
            <br />
            <em style={{ color: "#e8a04a", fontStyle: "italic" }}>
              at Your Doorstep
            </em>
          </h1>

          {/* Hero card */}
          <div
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              border: "1px solid rgba(255,255,255,.07)",
              boxShadow: "0 16px 48px rgba(0,0,0,.65)",
              background: "#181410",
            }}
          >
            <div
              className="hero-img-wrap"
              style={{ height: "clamp(240px,40vw,380px)" }}
            >
              {HERO_CHEF.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    position: "absolute",
                    top: "14px",
                    left: HERO_CHEF.tags.indexOf(t) === 0 ? "14px" : "auto",
                    right: HERO_CHEF.tags.indexOf(t) === 1 ? "14px" : "auto",
                    padding: "4px 12px",
                    borderRadius: "20px",
                    background: "rgba(10,8,5,.8)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,.12)",
                    fontSize: "0.68rem",
                    color: "#f5f0ea",
                    zIndex: 2,
                  }}
                >
                  {t}
                </span>
              ))}
              <img src={HERO_CHEF.img} alt={HERO_CHEF.name} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(10,8,5,.88) 100%)",
                }}
              />
            </div>

            {/* Info bar */}
            <div
              style={{
                padding: "18px 20px",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "14px",
              }}
            >
              <div style={{ flex: 1, minWidth: "200px" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    marginBottom: "6px",
                  }}
                >
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      background: "rgba(251,191,36,.12)",
                      border: "1px solid rgba(251,191,36,.3)",
                      borderRadius: "20px",
                      padding: "3px 10px",
                      fontSize: "0.7rem",
                      color: "#fbbf24",
                      fontWeight: "bold",
                    }}
                  >
                    ★ {HERO_CHEF.rating}
                  </span>
                  <span style={{ fontSize: "0.68rem", color: "#4ade80" }}>
                    ✓ {HERO_CHEF.badge}
                  </span>
                </div>
                <h2
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "clamp(1.1rem,2.5vw,1.5rem)",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "4px",
                  }}
                >
                  {HERO_CHEF.name}
                </h2>
                <p
                  style={{
                    color: "#6b6259",
                    fontSize: "0.78rem",
                    lineHeight: 1.55,
                    maxWidth: "420px",
                  }}
                >
                  {HERO_CHEF.bio}
                </p>
                <p
                  style={{
                    color: "#9a8f85",
                    fontSize: "0.7rem",
                    marginTop: "4px",
                  }}
                >
                  {HERO_CHEF.experience}
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  gap: "10px",
                  flexShrink: 0,
                }}
              >
                <div>
                  <p
                    style={{
                      color: "#6b6259",
                      fontSize: "0.65rem",
                      textAlign: "right",
                      marginBottom: "2px",
                    }}
                  >
                    Starting at
                  </p>
                  <p
                    style={{
                      fontFamily: "'Georgia',serif",
                      fontSize: "1.6rem",
                      fontWeight: "bold",
                      color: "#e8a04a",
                      lineHeight: 1,
                    }}
                  >
                    {fmt(HERO_CHEF.price)}
                    <span style={{ fontSize: "0.75rem", color: "#9a8f85" }}>
                      /hr
                    </span>
                  </p>
                </div>
                <button
                  className="book-btn"
                  onClick={() => navigate("/booking")}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT — Live Status + Elite card */}
        <div
          className="fade-up-d1"
          style={{ display: "flex", flexDirection: "column", gap: "16px" }}
        >
          {/* Live Status */}
          <div
            style={{
              borderRadius: "18px",
              padding: "20px",
              background: "#181410",
              border: "1px solid rgba(255,255,255,.07)",
              boxShadow: "0 8px 28px rgba(0,0,0,.5)",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "16px",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Georgia',serif",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  color: "#f5f0ea",
                }}
              >
                Live Status
              </h3>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  fontSize: "0.65rem",
                  color: "#4ade80",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    display: "inline-block",
                    boxShadow: "0 0 6px #4ade80",
                  }}
                />
                Real-time
              </span>
            </div>

            {[
              {
                icon: "📅",
                label: "Weekend Availability",
                val: LIVE_STATUS.weekendAvailability,
                valColor: "#4ade80",
              },
              {
                icon: "📍",
                label: "Service Radius",
                val: LIVE_STATUS.serviceRadius,
                valColor: "#c9a96e",
              },
              {
                icon: "👨‍🍳",
                label: "Chefs Online Now",
                val: "18",
                valColor: "#93c5fd",
              },
            ].map((row) => (
              <div
                key={row.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "11px 0",
                  borderBottom: "1px solid rgba(255,255,255,.05)",
                }}
              >
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "0.78rem",
                    color: "#9a8f85",
                  }}
                >
                  <span>{row.icon}</span>
                  {row.label}
                </span>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: "bold",
                    color: row.valColor,
                  }}
                >
                  {row.val}
                </span>
              </div>
            ))}

            <div style={{ marginTop: "14px" }}>
              <p
                style={{
                  fontSize: "0.65rem",
                  color: "#6b6259",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  marginBottom: "8px",
                }}
              >
                Trending Now
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
                {LIVE_STATUS.trending.map((t) => (
                  <span
                    key={t}
                    style={{
                      padding: "4px 10px",
                      borderRadius: "20px",
                      background: "rgba(232,160,74,.1)",
                      border: "1px solid rgba(232,160,74,.25)",
                      fontSize: "0.65rem",
                      color: "#c9a96e",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Price guide */}
          <div
            style={{
              borderRadius: "18px",
              padding: "18px",
              background: "#181410",
              border: "1px solid rgba(255,255,255,.07)",
            }}
          >
            <h4
              style={{
                fontFamily: "'Georgia',serif",
                fontSize: "0.9rem",
                fontWeight: "bold",
                color: "#f5f0ea",
                marginBottom: "12px",
              }}
            >
              Price Guide (per hour)
            </h4>
            {[
              { tier: "Home Chef", range: "₹800 – ₹1,500", color: "#4ade80" },
              {
                tier: "Experienced",
                range: "₹1,500 – ₹3,000",
                color: "#c9a96e",
              },
              {
                tier: "Senior / Hotel",
                range: "₹3,000 – ₹5,000",
                color: "#fdba74",
              },
              {
                tier: "Celebrity",
                range: "₹5,000 – ₹10,000",
                color: "#c4b5fd",
              },
            ].map((p) => (
              <div
                key={p.tier}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "8px 0",
                  borderBottom: "1px solid rgba(255,255,255,.04)",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "#9a8f85" }}>
                  {p.tier}
                </span>
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: "bold",
                    color: p.color,
                  }}
                >
                  {p.range}
                </span>
              </div>
            ))}
          </div>

          {/* Elite Membership */}
          <div
            style={{
              borderRadius: "18px",
              padding: "24px",
              background:
                "linear-gradient(140deg,#e8a04a 0%,#c97c28 60%,#a85e18 100%)",
              boxShadow: "0 12px 36px rgba(232,160,74,.3)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-30px",
                right: "-30px",
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                background: "rgba(255,255,255,.08)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "-20px",
                left: "-20px",
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(255,255,255,.06)",
              }}
            />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ fontSize: "1.8rem", marginBottom: "10px" }}>🏆</div>
              <h3
                style={{
                  fontFamily: "'Georgia',serif",
                  fontSize: "1.15rem",
                  fontWeight: "bold",
                  color: "#0c0a08",
                  marginBottom: "8px",
                }}
              >
                Elite Membership
              </h3>
              <p
                style={{
                  fontSize: "0.78rem",
                  color: "rgba(12,10,8,.7)",
                  lineHeight: 1.6,
                  marginBottom: "18px",
                }}
              >
                Priority booking, zero service fees & exclusive access to
                Michelin-background chefs.
              </p>
              <button
                style={{
                  width: "100%",
                  padding: "12px 0",
                  borderRadius: "30px",
                  background: "#0c0a08",
                  border: "none",
                  color: "#e8a04a",
                  fontWeight: "bold",
                  fontSize: "0.85rem",
                  cursor: "pointer",
                  letterSpacing: "0.05em",
                  fontFamily: "'Trebuchet MS',sans-serif",
                  transition: "opacity .2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ══ SPOTLIGHT GRID (3 cards) ══════════════════════════════════════ */}
      <div
        className="spotlight-grid fade-up-d2"
        style={{ marginBottom: "32px" }}
      >
        {GRID_CHEFS.map((chef) => (
          <div
            key={chef.id}
            className="chef-card-hover"
            onClick={() => navigate(`/chefs/${chef.id}`)}
            style={{
              borderRadius: "18px",
              overflow: "hidden",
              cursor: "pointer",
              background: "#181410",
              border: "1px solid rgba(255,255,255,.07)",
              boxShadow: "0 8px 28px rgba(0,0,0,.55)",
            }}
          >
            <div
              style={{
                position: "relative",
                height: "200px",
                overflow: "hidden",
              }}
            >
              <img className="chef-img-inner" src={chef.img} alt={chef.name} />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, transparent 40%, rgba(10,8,5,.88) 100%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "10px",
                  right: "10px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  background: chef.tagGreen
                    ? "rgba(20,83,45,.88)"
                    : "rgba(10,8,5,.8)",
                  backdropFilter: "blur(8px)",
                  border: chef.tagGreen
                    ? "1px solid #4ade80"
                    : "1px solid rgba(255,255,255,.12)",
                  fontSize: "0.62rem",
                  color: chef.tagGreen ? "#4ade80" : "#c9a96e",
                  fontWeight: "bold",
                }}
              >
                {chef.tag}
              </div>
            </div>
            <div style={{ padding: "14px" }}>
              <h3
                style={{
                  fontFamily: "'Georgia',serif",
                  fontSize: "0.98rem",
                  fontWeight: "bold",
                  color: "#f5f0ea",
                  marginBottom: "3px",
                }}
              >
                {chef.name}
              </h3>
              <p
                style={{
                  color: "#6b6259",
                  fontSize: "0.72rem",
                  marginBottom: "10px",
                }}
              >
                {chef.specialty}
              </p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <div>
                  <p
                    style={{
                      fontFamily: "'Georgia',serif",
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "#e8a04a",
                      lineHeight: 1,
                    }}
                  >
                    {fmt(chef.price)}
                    <span style={{ fontSize: "0.65rem", color: "#9a8f85" }}>
                      /hr
                    </span>
                  </p>
                  <p
                    style={{
                      fontSize: "0.62rem",
                      color: "#6b6259",
                      marginTop: "2px",
                    }}
                  >
                    {chef.experience}
                  </p>
                </div>
                <span style={{ fontSize: "0.72rem", color: "#fbbf24" }}>
                  ★ {chef.rating}
                </span>
              </div>
              <button
                className="portfolio-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  navigate(`/chefs/${chef.id}`);
                }}
              >
                View Portfolio
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* ══ SECTION HEADING + FILTERS ═════════════════════════════════════ */}
      <div className="sec-px fade-up-d3" style={{ marginBottom: "14px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
            flexWrap: "wrap",
            gap: "10px",
          }}
        >
          <div>
            <h2
              style={{
                fontFamily: "'Georgia',serif",
                fontSize: "clamp(1rem,2.5vw,1.35rem)",
                fontWeight: "bold",
                color: "#f5f0ea",
                marginBottom: "2px",
              }}
            >
              All Chefs
            </h2>
            <p style={{ color: "#6b6259", fontSize: "0.72rem" }}>
              {filtered.length} chefs available
            </p>
          </div>
          <div
            style={{
              padding: "8px 16px",
              borderRadius: "30px",
              background: "rgba(255,255,255,.04)",
              border: "1px solid rgba(255,255,255,.09)",
              fontSize: "0.75rem",
              color: "#9a8f85",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              cursor: "pointer",
            }}
          >
            <svg
              width="12"
              height="12"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="8" y1="12" x2="20" y2="12" />
              <line x1="12" y1="18" x2="20" y2="18" />
            </svg>
            Sort & Filter
          </div>
        </div>
      </div>

      <div className="filter-row" style={{ marginBottom: "20px" }}>
        {SPECIALIZATION_FILTERS.map((f) => {
          const active = filter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setFilter(f.id)}
              style={{
                flexShrink: 0,
                padding: "8px 18px",
                borderRadius: "30px",
                background: active ? "rgba(232,160,74,.15)" : "transparent",
                border: active
                  ? "1px solid #e8a04a"
                  : "1px solid rgba(255,255,255,.1)",
                color: active ? "#e8a04a" : "#6b6259",
                fontSize: "0.78rem",
                fontWeight: active ? "700" : "400",
                cursor: "pointer",
                letterSpacing: "0.03em",
                transition: "all 0.2s",
                fontFamily: "'Trebuchet MS',sans-serif",
                whiteSpace: "nowrap",
              }}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* ══ ALL CHEFS GRID ════════════════════════════════════════════════ */}
      <div className="all-chefs-grid" style={{ paddingBottom: "56px" }}>
        {filtered.map((chef) => {
          const bc = badgeColor(chef.badge);
          return (
            <div
              key={chef.id}
              className="chef-card-hover"
              onClick={() => navigate(`/chefs/${chef.id}`)}
              style={{
                borderRadius: "18px",
                overflow: "hidden",
                cursor: "pointer",
                background: "#181410",
                border: "1px solid rgba(255,255,255,.07)",
                boxShadow: "0 6px 22px rgba(0,0,0,.5)",
              }}
            >
              <div
                style={{
                  position: "relative",
                  height: "180px",
                  overflow: "hidden",
                }}
              >
                <img
                  className="chef-img-inner"
                  src={chef.img}
                  alt={chef.name}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(to bottom, transparent 35%, rgba(10,8,5,.85) 100%)",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                    padding: "3px 9px",
                    borderRadius: "20px",
                    background: bc.bg,
                    color: bc.color,
                    fontSize: "0.6rem",
                    fontWeight: "bold",
                    letterSpacing: "0.06em",
                  }}
                >
                  {chef.badge}
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "3px",
                    background: "rgba(10,8,5,.78)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,.1)",
                    borderRadius: "20px",
                    padding: "3px 9px",
                    fontSize: "0.68rem",
                    color: "#fbbf24",
                    fontWeight: "bold",
                  }}
                >
                  ★ {chef.rating}
                </div>
              </div>

              <div style={{ padding: "13px 13px 15px" }}>
                <h3
                  style={{
                    fontFamily: "'Georgia',serif",
                    fontSize: "0.95rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    marginBottom: "3px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {chef.name}
                </h3>
                <p
                  style={{
                    color: "#6b6259",
                    fontSize: "0.7rem",
                    marginBottom: "10px",
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                  }}
                >
                  {chef.specialty}
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    marginBottom: "12px",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <p
                      style={{
                        fontFamily: "'Georgia',serif",
                        fontSize: "1rem",
                        fontWeight: "bold",
                        color: "#e8a04a",
                        lineHeight: 1,
                      }}
                    >
                      {fmt(chef.price)}
                      <span style={{ fontSize: "0.6rem", color: "#9a8f85" }}>
                        /hr
                      </span>
                    </p>
                    <p
                      style={{
                        fontSize: "0.6rem",
                        color: "#6b6259",
                        marginTop: "2px",
                      }}
                    >
                      {chef.experience}
                    </p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p
                      style={{
                        fontSize: "0.7rem",
                        color: "#f5f0ea",
                        fontWeight: "bold",
                      }}
                    >
                      {chef.sessions}
                    </p>
                    <p style={{ fontSize: "0.6rem", color: "#6b6259" }}>
                      sessions
                    </p>
                  </div>
                </div>
                <button
                  className="portfolio-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/chefs/${chef.id}`);
                  }}
                >
                  View Portfolio
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
