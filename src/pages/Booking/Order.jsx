// // src/pages/Order/Order.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// // ─── DATA ──────────────────────────────────────────────────────────────────

// const CATEGORIES = [
//   { id: "all", label: "All", emoji: "🍽️" },
//   { id: "biryani", label: "Biryani", emoji: "🍚" },
//   { id: "curry", label: "Curry", emoji: "🍛" },
//   { id: "snacks", label: "Snacks", emoji: "🥟" },
//   { id: "rolls", label: "Rolls", emoji: "🌯" },
//   { id: "thali", label: "Thali", emoji: "🍱" },
//   { id: "desserts", label: "Sweets", emoji: "🍮" },
//   { id: "drinks", label: "Drinks", emoji: "🥤" },
// ];

// const RESTAURANTS = [
//   {
//     id: 1,
//     name: "Behrouz Biryani",
//     subtitle: "Mughlai • Dum Biryani • $50",
//     rating: 4.5,
//     time: "35–45 min",
//     distance: "2.1 km",
//     tag: "FREE DELIVERY",
//     tagBg: "#14532d",
//     tagColor: "#4ade80",
//     category: "biryani",
//     chef: "By Chef Irfan",
//     img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
//   },
//   {
//     id: 2,
//     name: "Pind Balluchi",
//     subtitle: "Punjabi • Butter Chicken • $25",
//     rating: 4.3,
//     time: "25–35 min",
//     distance: "1.4 km",
//     tag: "10% OFF",
//     tagBg: "#7c2d12",
//     tagColor: "#fdba74",
//     category: "curry",
//     chef: "By Chef Gurpreet",
//     img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
//   },
//   {
//     id: 3,
//     name: "Paradise Biryani",
//     subtitle: "Hyderabadi • Dum Gosht • $$35",
//     rating: 4.8,
//     time: "30–40 min",
//     distance: "3.2 km",
//     tag: "FREE DELIVERY",
//     tagBg: "#14532d",
//     tagColor: "#4ade80",
//     category: "biryani",
//     chef: "By Chef Saleem",
//     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
//   },
//   {
//     id: 4,
//     name: "Haldiram's",
//     subtitle: "Snacks • Chaat • Mithai • $45",
//     rating: 4.6,
//     time: "20–30 min",
//     distance: "0.9 km",
//     tag: "BESTSELLER",
//     tagBg: "#713f12",
//     tagColor: "#fde68a",
//     category: "snacks",
//     chef: "By Chef Ramesh",
//     img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
//   },
//   {
//     id: 5,
//     name: "Barbeque Nation",
//     subtitle: "BBQ • Kebabs • Live Grill • 125",
//     rating: 4.4,
//     time: "40–50 min",
//     distance: "2.8 km",
//     tag: "20% OFF",
//     tagBg: "#7c2d12",
//     tagColor: "#fdba74",
//     category: "thali",
//     chef: "By Chef Arjun",
//     img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
//   },
//   {
//     id: 6,
//     name: "Wow Momo",
//     subtitle: "Momos • Rolls • Snacks • $100",
//     rating: 4.2,
//     time: "15–25 min",
//     distance: "0.7 km",
//     tag: "TRENDING",
//     tagBg: "#1e3a5f",
//     tagColor: "#93c5fd",
//     category: "snacks",
//     chef: "By Chef Tenzing",
//     img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
//   },
//   {
//     id: 7,
//     name: "Rolls Mania",
//     subtitle: "Kathi Rolls • Wraps • $55",
//     rating: 4.1,
//     time: "15–20 min",
//     distance: "1.0 km",
//     tag: "15% OFF",
//     tagBg: "#7c2d12",
//     tagColor: "#fdba74",
//     category: "rolls",
//     chef: "By Chef Priya",
//     img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
//   },
//   {
//     id: 8,
//     name: "Rajdhani Thali",
//     subtitle: "Gujarati • Rajasthani Thali • $119",
//     rating: 4.6,
//     time: "25–35 min",
//     distance: "2.3 km",
//     tag: "FREE DELIVERY",
//     tagBg: "#14532d",
//     tagColor: "#4ade80",
//     category: "thali",
//     chef: "By Chef Meena",
//     img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
//   },
//   {
//     id: 9,
//     name: "Gulab Sweets",
//     subtitle: "Indian Sweets • Desserts • $29",
//     rating: 4.7,
//     time: "20–30 min",
//     distance: "1.6 km",
//     tag: "POPULAR",
//     tagBg: "#713f12",
//     tagColor: "#fde68a",
//     category: "desserts",
//     chef: "By Chef Suresh",
//     img: "https://images.unsplash.com/photo-1666190616490-1e60bb39c9f2?w=800&q=80",
//   },
//   {
//     id: 10,
//     name: "Keventers",
//     subtitle: "Milkshakes • Cold Drinks • $56",
//     rating: 4.5,
//     time: "10–20 min",
//     distance: "0.5 km",
//     tag: "FREE DELIVERY",
//     tagBg: "#14532d",
//     tagColor: "#4ade80",
//     category: "drinks",
//     chef: "By Chef Sneha",
//     img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&q=80",
//   },
// ];
// // const RESTAURANTS = [
// //   {
// //     id: 1,
// //     name: "Behrouz Biryani",
// //     subtitle: "Mughlai • Dum Biryani • $50",
// //     rating: 4.5,
// //     time: "35–45 min",
// //     distance: "2.1 km",
// //     tag: "FREE DELIVERY",
// //     tagBg: "#14532d",
// //     tagColor: "#4ade80",
// //     category: "biryani",
// //     chef: "By Chef Irfan",
// //     img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
// //   },
// //   {
// //     id: 2,
// //     name: "Pind Balluchi",
// //     subtitle: "Punjabi • Butter Chicken • $25",
// //     rating: 4.3,
// //     time: "25–35 min",
// //     distance: "1.4 km",
// //     tag: "10% OFF",
// //     tagBg: "#7c2d12",
// //     tagColor: "#fdba74",
// //     category: "curry",
// //     chef: "By Chef Gurpreet",
// //     img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
// //   },
// //   {
// //     id: 3,
// //     name: "Paradise Biryani",
// //     subtitle: "Hyderabadi • Dum Gosht • $$35",
// //     rating: 4.8,
// //     time: "30–40 min",
// //     distance: "3.2 km",
// //     tag: "FREE DELIVERY",
// //     tagBg: "#14532d",
// //     tagColor: "#4ade80",
// //     category: "biryani",
// //     chef: "By Chef Saleem",
// //     img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
// //   },
// //   {
// //     id: 4,
// //     name: "Haldiram's",
// //     subtitle: "Snacks • Chaat • Mithai • $45",
// //     rating: 4.6,
// //     time: "20–30 min",
// //     distance: "0.9 km",
// //     tag: "BESTSELLER",
// //     tagBg: "#713f12",
// //     tagColor: "#fde68a",
// //     category: "snacks",
// //     chef: "By Chef Ramesh",
// //     img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
// //   },
// //   {
// //     id: 5,
// //     name: "Barbeque Nation",
// //     subtitle: "BBQ • Kebabs • Live Grill • 125",
// //     rating: 4.4,
// //     time: "40–50 min",
// //     distance: "2.8 km",
// //     tag: "20% OFF",
// //     tagBg: "#7c2d12",
// //     tagColor: "#fdba74",
// //     category: "thali",
// //     chef: "By Chef Arjun",
// //     img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
// //   },
// //   {
// //     id: 6,
// //     name: "Wow Momo",
// //     subtitle: "Momos • Rolls • Snacks • $100",
// //     rating: 4.2,
// //     time: "15–25 min",
// //     distance: "0.7 km",
// //     tag: "TRENDING",
// //     tagBg: "#1e3a5f",
// //     tagColor: "#93c5fd",
// //     category: "snacks",
// //     chef: "By Chef Tenzing",
// //     img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
// //   },
// //   {
// //     id: 7,
// //     name: "Rolls Mania",
// //     subtitle: "Kathi Rolls • Wraps • $55",
// //     rating: 4.1,
// //     time: "15–20 min",
// //     distance: "1.0 km",
// //     tag: "15% OFF",
// //     tagBg: "#7c2d12",
// //     tagColor: "#fdba74",
// //     category: "rolls",
// //     chef: "By Chef Priya",
// //     img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
// //   },
// //   {
// //     id: 8,
// //     name: "Rajdhani Thali",
// //     subtitle: "Gujarati • Rajasthani Thali • $119",
// //     rating: 4.6,
// //     time: "25–35 min",
// //     distance: "2.3 km",
// //     tag: "FREE DELIVERY",
// //     tagBg: "#14532d",
// //     tagColor: "#4ade80",
// //     category: "thali",
// //     chef: "By Chef Meena",
// //     img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
// //   },
// //   {
// //     id: 9,
// //     name: "Gulab Sweets",
// //     subtitle: "Indian Sweets • Desserts • $29",
// //     rating: 4.7,
// //     time: "20–30 min",
// //     distance: "1.6 km",
// //     tag: "POPULAR",
// //     tagBg: "#713f12",
// //     tagColor: "#fde68a",
// //     category: "desserts",
// //     chef: "By Chef Suresh",
// //     img: "https://images.unsplash.com/photo-1666190616490-1e60bb39c9f2?w=800&q=80",
// //   },
// //   {
// //     id: 10,
// //     name: "Keventers",
// //     subtitle: "Milkshakes • Cold Drinks • $56",
// //     rating: 4.5,
// //     time: "10–20 min",
// //     distance: "0.5 km",
// //     tag: "FREE DELIVERY",
// //     tagBg: "#14532d",
// //     tagColor: "#4ade80",
// //     category: "drinks",
// //     chef: "By Chef Sneha",
// //     img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&q=80",
// //   },
// // ];

// export default function Order() {
//   const navigate = useNavigate();
//   const [activeCategory, setActiveCategory] = useState("all");
//   const [cart, setCart] = useState({});

//   const add = (id) => setCart((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));
//   const remove = (id) =>
//     setCart((p) => {
//       const n = { ...p };
//       if (n[id] > 1) n[id]--;
//       else delete n[id];
//       return n;
//     });

//   const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

//   const filtered =
//     activeCategory === "all"
//       ? RESTAURANTS
//       : RESTAURANTS.filter((r) => r.category === activeCategory);

//   return (
//     <div
//       style={{
//         background: "#0f0d0b",
//         minHeight: "100vh",
//         fontFamily: "'Trebuchet MS', sans-serif",
//         color: "#f5f0ea",
//         paddingBottom: totalItems > 0 ? "110px" : "48px",
//       }}
//     >
//       {/* ══ ANNOUNCEMENT BAR ══════════════════════════════════════════════ */}
//       <div
//         style={{
//           background: "linear-gradient(90deg, #2a1f0e 0%, #1c1510 100%)",
//           borderBottom: "1px solid rgba(232,160,74,0.15)",
//           padding: "8px 16px",
//           textAlign: "center",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           gap: "8px",
//         }}
//       >
//         <span style={{ fontSize: "0.7rem", color: "#e8a04a" }}>🎉</span>
//         <span
//           style={{
//             fontSize: "0.72rem",
//             color: "#c9a96e",
//             letterSpacing: "0.03em",
//           }}
//         >
//           Extra 10% OFF on your first 3 orders!
//         </span>
//       </div>

//       {/* ══ PROMO BANNER ══════════════════════════════════════════════════ */}
//       <div
//         style={{
//           position: "relative",
//           margin: "12px 14px 0",
//           borderRadius: "18px",
//           overflow: "hidden",
//           minHeight: "160px",
//         }}
//       >
//         <img
//           src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80"
//           alt="Promo"
//           style={{
//             position: "absolute",
//             inset: 0,
//             width: "100%",
//             height: "100%",
//             objectFit: "cover",
//             opacity: 0.4,
//           }}
//         />
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             background:
//               "linear-gradient(110deg, rgba(10,8,5,0.95) 45%, rgba(10,8,5,0.5) 100%)",
//           }}
//         />
//         <div style={{ position: "relative", zIndex: 2, padding: "22px 20px" }}>
//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "5px",
//               border: "1px solid rgba(232,160,74,0.4)",
//               borderRadius: "20px",
//               padding: "2px 10px",
//               background: "rgba(232,160,74,0.08)",
//               marginBottom: "8px",
//             }}
//           >
//             <span
//               style={{
//                 fontSize: "0.6rem",
//                 color: "#e8a04a",
//                 letterSpacing: "0.14em",
//                 textTransform: "uppercase",
//               }}
//             >
//               Limited Offer
//             </span>
//           </div>

//           <div
//             style={{
//               fontFamily: "'Georgia', serif",
//               fontSize: "clamp(2.2rem, 9vw, 3.2rem)",
//               fontWeight: "bold",
//               color: "#f5f0ea",
//               lineHeight: 1.0,
//               marginBottom: "6px",
//             }}
//           >
//             50% OFF
//           </div>
//           <p
//             style={{
//               color: "#9a8f85",
//               fontSize: "0.78rem",
//               marginBottom: "16px",
//             }}
//           >
//             First order at Master Chef's Kitchen
//           </p>
//           <button
//             style={{
//               padding: "9px 22px",
//               borderRadius: "30px",
//               background: "linear-gradient(135deg, #e8a04a 0%, #c97c28 100%)",
//               border: "none",
//               color: "#0f0d0b",
//               fontSize: "0.8rem",
//               fontWeight: "bold",
//               cursor: "pointer",
//               letterSpacing: "0.04em",
//             }}
//           >
//             Claim Now
//           </button>
//         </div>
//       </div>

//       {/* ══ CATEGORIES ════════════════════════════════════════════════════ */}
//       <div style={{ padding: "20px 14px 0" }}>
//         <div
//           style={{
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             marginBottom: "14px",
//           }}
//         >
//           <h2
//             style={{
//               fontFamily: "'Georgia', serif",
//               fontSize: "1.2rem",
//               fontWeight: "bold",
//               color: "#f5f0ea",
//             }}
//           >
//             Categories
//           </h2>
//           <span
//             style={{ fontSize: "0.78rem", color: "#e8a04a", cursor: "pointer" }}
//           >
//             View All
//           </span>
//         </div>

//         {/* Scrollable category icons — exactly like screenshot */}
//         <div
//           style={{
//             display: "flex",
//             gap: "18px",
//             overflowX: "auto",
//             paddingBottom: "6px",
//             scrollbarWidth: "none",
//           }}
//         >
//           {CATEGORIES.map((cat) => {
//             const active = activeCategory === cat.id;
//             return (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveCategory(cat.id)}
//                 style={{
//                   display: "flex",
//                   flexDirection: "column",
//                   alignItems: "center",
//                   gap: "6px",
//                   flexShrink: 0,
//                   background: "none",
//                   border: "none",
//                   cursor: "pointer",
//                   padding: 0,
//                 }}
//               >
//                 {/* Circle */}
//                 <div
//                   style={{
//                     width: "56px",
//                     height: "56px",
//                     borderRadius: "50%",
//                     display: "flex",
//                     alignItems: "center",
//                     justifyContent: "center",
//                     fontSize: "1.45rem",
//                     background: active
//                       ? "linear-gradient(135deg, #e8a04a, #c97c28)"
//                       : "rgba(255,255,255,0.06)",
//                     border: active
//                       ? "2.5px solid #e8a04a"
//                       : "2px solid rgba(255,255,255,0.09)",
//                     boxShadow: active
//                       ? "0 4px 18px rgba(232,160,74,0.35)"
//                       : "none",
//                     transition: "all 0.22s ease",
//                   }}
//                 >
//                   {cat.emoji}
//                 </div>
//                 <span
//                   style={{
//                     fontSize: "0.67rem",
//                     color: active ? "#e8a04a" : "#6b6259",
//                     fontWeight: active ? "700" : "400",
//                     letterSpacing: "0.02em",
//                     whiteSpace: "nowrap",
//                     transition: "color 0.2s",
//                   }}
//                 >
//                   {cat.label}
//                 </span>
//               </button>
//             );
//           })}
//         </div>
//       </div>

//       {/* ══ POPULAR NEAR YOU — heading ════════════════════════════════════ */}
//       <div style={{ padding: "22px 14px 14px" }}>
//         <h2
//           style={{
//             fontFamily: "'Georgia', serif",
//             fontSize: "1.2rem",
//             fontWeight: "bold",
//             color: "#f5f0ea",
//           }}
//         >
//           Popular Near You
//         </h2>
//       </div>

//       {/* ══ RESTAURANT CARDS ══════════════════════════════════════════════ */}
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
//           gap: "24px",
//           padding: "0 14px",
//           maxWidth: "1400px",
//           margin: "0 auto",
//         }}
//       >
//         {filtered.map((r) => (
//           <div
//             key={r.id}
//             onClick={() => navigate(`/order/${r.id}`)}
//             style={{
//               borderRadius: "20px",
//               overflow: "hidden",
//               cursor: "pointer",
//               background: "#1a1612",
//               border: "1px solid rgba(255,255,255,0.07)",
//               boxShadow: "0 6px 24px rgba(0,0,0,0.55)",
//               transition: "transform 0.25s, border-color 0.25s",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.transform = "translateY(-3px)";
//               e.currentTarget.style.borderColor = "rgba(232,160,74,0.3)";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.transform = "translateY(0)";
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
//             }}
//           >
//             {/* ── Food Image ── */}
//             <div
//               style={{
//                 position: "relative",
//                 height: "200px",
//                 overflow: "hidden",
//               }}
//             >
//               <img
//                 src={r.img}
//                 alt={r.name}
//                 style={{
//                   width: "100%",
//                   height: "100%",
//                   objectFit: "cover",
//                   display: "block",
//                   transition: "transform 0.45s ease",
//                 }}
//                 onMouseEnter={(e) =>
//                   (e.currentTarget.style.transform = "scale(1.05)")
//                 }
//                 onMouseLeave={(e) =>
//                   (e.currentTarget.style.transform = "scale(1)")
//                 }
//               />
//               {/* gradient overlay */}
//               <div
//                 style={{
//                   position: "absolute",
//                   inset: 0,
//                   background:
//                     "linear-gradient(to bottom, rgba(8,6,4,0.08) 30%, rgba(8,6,4,0.72) 100%)",
//                 }}
//               />
//               {/* Star rating — top left like screenshot */}
//               <div
//                 style={{
//                   position: "absolute",
//                   top: "12px",
//                   left: "12px",
//                   display: "flex",
//                   alignItems: "center",
//                   gap: "4px",
//                   background: "rgba(10,8,5,0.78)",
//                   backdropFilter: "blur(8px)",
//                   border: "1px solid rgba(255,255,255,0.1)",
//                   borderRadius: "20px",
//                   padding: "4px 10px",
//                   fontSize: "0.72rem",
//                   color: "#f5f0ea",
//                 }}
//               >
//                 <span style={{ color: "#fbbf24" }}>★</span>
//                 <span style={{ fontWeight: "bold" }}>{r.rating}</span>
//               </div>
//             </div>

//             {/* ── Card Body ── */}
//             <div style={{ padding: "14px 14px 16px" }}>
//               {/* Name row + tag badge */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "flex-start",
//                   justifyContent: "space-between",
//                   gap: "10px",
//                   marginBottom: "4px",
//                 }}
//               >
//                 <h3
//                   style={{
//                     fontFamily: "'Georgia', serif",
//                     fontSize: "1.08rem",
//                     fontWeight: "bold",
//                     color: "#f5f0ea",
//                     lineHeight: 1.25,
//                     flex: 1,
//                   }}
//                 >
//                   {r.name}
//                 </h3>
//                 <span
//                   style={{
//                     flexShrink: 0,
//                     padding: "4px 10px",
//                     borderRadius: "7px",
//                     background: r.tagBg,
//                     color: r.tagColor,
//                     fontSize: "0.62rem",
//                     fontWeight: "bold",
//                     letterSpacing: "0.06em",
//                     marginTop: "2px",
//                   }}
//                 >
//                   {r.tag}
//                 </span>
//               </div>

//               {/* Cuisine */}
//               <p
//                 style={{
//                   color: "#6b6259",
//                   fontSize: "0.76rem",
//                   marginBottom: "12px",
//                 }}
//               >
//                 {r.subtitle}
//               </p>

//               {/* Meta + chef + add button */}
//               <div
//                 style={{
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <div
//                   style={{ display: "flex", alignItems: "center", gap: "14px" }}
//                 >
//                   {/* Time */}
//                   <span
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                       color: "#9a8f85",
//                       fontSize: "0.72rem",
//                     }}
//                   >
//                     <svg
//                       width="12"
//                       height="12"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <circle cx="12" cy="12" r="10" />
//                       <path d="M12 6v6l4 2" strokeLinecap="round" />
//                     </svg>
//                     {r.time}
//                   </span>
//                   {/* Distance */}
//                   <span
//                     style={{
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "4px",
//                       color: "#9a8f85",
//                       fontSize: "0.72rem",
//                     }}
//                   >
//                     <svg
//                       width="12"
//                       height="12"
//                       fill="none"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       viewBox="0 0 24 24"
//                     >
//                       <path
//                         d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
//                         strokeLinecap="round"
//                       />
//                       <circle cx="12" cy="9" r="2.5" />
//                     </svg>
//                     {r.distance}
//                   </span>
//                 </div>

//                 {/* Chef avatar + name + add button */}
//                 <div
//                   style={{ display: "flex", alignItems: "center", gap: "8px" }}
//                 >
//                   <div
//                     style={{
//                       width: "24px",
//                       height: "24px",
//                       borderRadius: "50%",
//                       background: "rgba(232,160,74,0.2)",
//                       border: "1px solid rgba(232,160,74,0.3)",
//                       display: "flex",
//                       alignItems: "center",
//                       justifyContent: "center",
//                       fontSize: "0.65rem",
//                       color: "#e8a04a",
//                       fontWeight: "bold",
//                       flexShrink: 0,
//                     }}
//                   >
//                     👨‍🍳
//                   </div>
//                   <span
//                     style={{
//                       fontSize: "0.68rem",
//                       color: "#6b6259",
//                       whiteSpace: "nowrap",
//                     }}
//                   >
//                     {r.chef}
//                   </span>

//                   {/* Orange + button — exactly like screenshot */}
//                   {cart[r.id] ? (
//                     <div
//                       style={{
//                         display: "flex",
//                         alignItems: "center",
//                         gap: "8px",
//                       }}
//                     >
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           remove(r.id);
//                         }}
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           borderRadius: "50%",
//                           background: "rgba(232,160,74,0.15)",
//                           border: "1px solid rgba(232,160,74,0.4)",
//                           color: "#e8a04a",
//                           fontSize: "1.1rem",
//                           fontWeight: "bold",
//                           cursor: "pointer",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                         }}
//                       >
//                         −
//                       </button>
//                       <span
//                         style={{
//                           color: "#f5f0ea",
//                           fontSize: "0.9rem",
//                           fontWeight: "bold",
//                           minWidth: "14px",
//                           textAlign: "center",
//                         }}
//                       >
//                         {cart[r.id]}
//                       </span>
//                       <button
//                         onClick={(e) => {
//                           e.stopPropagation();
//                           add(r.id);
//                         }}
//                         style={{
//                           width: "30px",
//                           height: "30px",
//                           borderRadius: "50%",
//                           background:
//                             "linear-gradient(135deg, #e8a04a, #c97c28)",
//                           border: "none",
//                           color: "#0f0d0b",
//                           fontSize: "1.1rem",
//                           fontWeight: "bold",
//                           cursor: "pointer",
//                           display: "flex",
//                           alignItems: "center",
//                           justifyContent: "center",
//                           boxShadow: "0 4px 12px rgba(232,160,74,0.4)",
//                         }}
//                       >
//                         +
//                       </button>
//                     </div>
//                   ) : (
//                     <button
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         add(r.id);
//                       }}
//                       style={{
//                         width: "34px",
//                         height: "34px",
//                         borderRadius: "50%",
//                         background: "linear-gradient(135deg, #e8a04a, #c97c28)",
//                         border: "none",
//                         color: "#0f0d0b",
//                         fontSize: "1.3rem",
//                         fontWeight: "bold",
//                         cursor: "pointer",
//                         display: "flex",
//                         alignItems: "center",
//                         justifyContent: "center",
//                         boxShadow: "0 4px 14px rgba(232,160,74,0.4)",
//                         transition: "filter 0.2s",
//                         flexShrink: 0,
//                       }}
//                       onMouseEnter={(e) =>
//                         (e.currentTarget.style.filter = "brightness(1.15)")
//                       }
//                       onMouseLeave={(e) =>
//                         (e.currentTarget.style.filter = "brightness(1)")
//                       }
//                     >
//                       +
//                     </button>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* ══ FLOATING CART BAR ════════════════════════════════════════════ */}
//       {totalItems > 0 && (
//         <div
//           style={{
//             position: "fixed",
//             bottom: "20px",
//             left: "50%",
//             transform: "translateX(-50%)",
//             zIndex: 50,
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             gap: "24px",
//             padding: "14px 18px",
//             borderRadius: "18px",
//             background: "#1e1a14",
//             border: "1px solid rgba(232,160,74,0.4)",
//             boxShadow: "0 16px 48px rgba(0,0,0,0.75)",
//             minWidth: "260px",
//             maxWidth: "calc(100vw - 32px)",
//             backdropFilter: "blur(14px)",
//           }}
//         >
//           <div>
//             <p
//               style={{
//                 color: "#9a8f85",
//                 fontSize: "0.7rem",
//                 marginBottom: "1px",
//               }}
//             >
//               {totalItems} item{totalItems > 1 ? "s" : ""} selected
//             </p>
//             <p
//               style={{
//                 color: "#f5f0ea",
//                 fontFamily: "'Georgia', serif",
//                 fontSize: "1.05rem",
//                 fontWeight: "bold",
//               }}
//             >
//               View Cart
//             </p>
//           </div>
//           <button
//             onClick={() => {
//               localStorage.setItem(
//                 "cartItems",
//                 JSON.stringify(
//                   RESTAURANTS.filter((item) => cart[item.id]).map((item) => ({
//                     ...item,
//                     quantity: cart[item.id],
//                   })),
//                 ),
//               );

//               navigate("/cart");
//             }}
//             style={{
//               padding: "11px 24px",
//               borderRadius: "30px",
//               background: "linear-gradient(135deg, #e8a04a, #c97c28)",
//               border: "none",
//               color: "#0f0d0b",
//               fontWeight: "bold",
//               fontSize: "0.875rem",
//               cursor: "pointer",
//               letterSpacing: "0.03em",
//               whiteSpace: "nowrap",
//               transition: "filter 0.2s",
//             }}
//             onMouseEnter={(e) =>
//               (e.currentTarget.style.filter = "brightness(1.1)")
//             }
//             onMouseLeave={(e) =>
//               (e.currentTarget.style.filter = "brightness(1)")
//             }
//           >
//             View Cart →
//           </button>
//         </div>
//       )}

//       <style>{`
//         * { -webkit-tap-highlight-color: transparent; }
//         ::-webkit-scrollbar { display: none; }
//       `}</style>
//       {/* <button
//         onClick={() => {
//           localStorage.setItem(
//             "cartItems",
//             JSON.stringify(
//               RESTAURANTS.filter((item) => cart[item.id]).map((item) => ({
//                 ...item,
//                 quantity: cart[item.id],
//               })),
//             ),
//           );

//           navigate("/cart");
//         }}
//         style={{
//           padding: "11px 24px",
//           borderRadius: "30px",
//           background: "linear-gradient(135deg, #e8a04a, #c97c28)",
//           border: "none",
//           color: "#0f0d0b",
//           fontWeight: "bold",
//           fontSize: "0.875rem",
//           cursor: "pointer",
//           letterSpacing: "0.03em",
//           whiteSpace: "nowrap",
//           transition: "filter 0.2s",
//         }}
//       >
//         View Cart →
//       </button> */}
//     </div>
//   );
// }

// src/pages/Order/Order.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// ─── DATA ──────────────────────────────────────────────────────────────────

const CATEGORIES = [
  { id: "all", label: "All", emoji: "🍽️" },
  { id: "biryani", label: "Biryani", emoji: "🍚" },
  { id: "curry", label: "Curry", emoji: "🍛" },
  { id: "snacks", label: "Snacks", emoji: "🥟" },
  { id: "rolls", label: "Rolls", emoji: "🌯" },
  { id: "thali", label: "Thali", emoji: "🍱" },
  { id: "desserts", label: "Sweets", emoji: "🍮" },
  { id: "drinks", label: "Drinks", emoji: "🥤" },
];

const RESTAURANTS = [
  {
    id: 1,
    name: "Behrouz Biryani",
    subtitle: "Mughlai • Dum Biryani",
    price: 350,
    rating: 4.5,
    time: "35–45 min",
    distance: "2.1 km",
    tag: "FREE DELIVERY",
    tagBg: "#14532d",
    tagColor: "#4ade80",
    category: "biryani",
    chef: "By Chef Irfan",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
  },
  {
    id: 2,
    name: "Pind Balluchi",
    subtitle: "Punjabi • Butter Chicken",
    price: 299,
    rating: 4.3,
    time: "25–35 min",
    distance: "1.4 km",
    tag: "10% OFF",
    tagBg: "#7c2d12",
    tagColor: "#fdba74",
    category: "curry",
    chef: "By Chef Gurpreet",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
  },
  {
    id: 3,
    name: "Paradise Biryani",
    subtitle: "Hyderabadi • Dum Gosht",
    price: 420,
    rating: 4.8,
    time: "30–40 min",
    distance: "3.2 km",
    tag: "FREE DELIVERY",
    tagBg: "#14532d",
    tagColor: "#4ade80",
    category: "biryani",
    chef: "By Chef Saleem",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
  },
  {
    id: 4,
    name: "Haldiram's",
    subtitle: "Snacks • Chaat • Mithai",
    price: 199,
    rating: 4.6,
    time: "20–30 min",
    distance: "0.9 km",
    tag: "BESTSELLER",
    tagBg: "#713f12",
    tagColor: "#fde68a",
    category: "snacks",
    chef: "By Chef Ramesh",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
  },
  {
    id: 5,
    name: "Barbeque Nation",
    subtitle: "BBQ • Kebabs • Live Grill",
    price: 799,
    rating: 4.4,
    time: "40–50 min",
    distance: "2.8 km",
    tag: "20% OFF",
    tagBg: "#7c2d12",
    tagColor: "#fdba74",
    category: "thali",
    chef: "By Chef Arjun",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
  },
  {
    id: 6,
    name: "Wow Momo",
    subtitle: "Momos • Rolls • Snacks",
    price: 249,
    rating: 4.2,
    time: "15–25 min",
    distance: "0.7 km",
    tag: "TRENDING",
    tagBg: "#1e3a5f",
    tagColor: "#93c5fd",
    category: "snacks",
    chef: "By Chef Tenzing",
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
  },
  {
    id: 7,
    name: "Rolls Mania",
    subtitle: "Kathi Rolls • Wraps",
    price: 179,
    rating: 4.1,
    time: "15–20 min",
    distance: "1.0 km",
    tag: "15% OFF",
    tagBg: "#7c2d12",
    tagColor: "#fdba74",
    category: "rolls",
    chef: "By Chef Priya",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
  },
  {
    id: 8,
    name: "Rajdhani Thali",
    subtitle: "Gujarati • Rajasthani Thali",
    price: 549,
    rating: 4.6,
    time: "25–35 min",
    distance: "2.3 km",
    tag: "FREE DELIVERY",
    tagBg: "#14532d",
    tagColor: "#4ade80",
    category: "thali",
    chef: "By Chef Meena",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
  },
  {
    id: 9,
    name: "Gulab Sweets",
    subtitle: "Indian Sweets • Desserts",
    price: 299,
    rating: 4.7,
    time: "20–30 min",
    distance: "1.6 km",
    tag: "POPULAR",
    tagBg: "#713f12",
    tagColor: "#fde68a",
    category: "desserts",
    chef: "By Chef Suresh",
    img: "https://images.unsplash.com/photo-1666190616490-1e60bb39c9f2?w=800&q=80",
  },
  {
    id: 10,
    name: "Keventers",
    subtitle: "Milkshakes • Cold Drinks",
    price: 199,
    rating: 4.5,
    time: "10–20 min",
    distance: "0.5 km",
    tag: "FREE DELIVERY",
    tagBg: "#14532d",
    tagColor: "#4ade80",
    category: "drinks",
    chef: "By Chef Sneha",
    img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&q=80",
  },
];

export default function Order() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("all");
  const [cart, setCart] = useState({});

  const add = (id) => setCart((p) => ({ ...p, [id]: (p[id] || 0) + 1 }));
  const remove = (id) =>
    setCart((p) => {
      const n = { ...p };
      if (n[id] > 1) n[id]--;
      else delete n[id];
      return n;
    });

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);

  const filtered =
    activeCategory === "all"
      ? RESTAURANTS
      : RESTAURANTS.filter((r) => r.category === activeCategory);

  return (
    <div
      style={{
        background: "#0f0d0b",
        minHeight: "100vh",
        fontFamily: "'Trebuchet MS', sans-serif",
        color: "#f5f0ea",
        paddingBottom: totalItems > 0 ? "110px" : "48px",
      }}
    >
      {/* ══ ANNOUNCEMENT BAR ══════════════════════════════════════════════ */}
      <div
        style={{
          background: "linear-gradient(90deg, #2a1f0e 0%, #1c1510 100%)",
          borderBottom: "1px solid rgba(232,160,74,0.15)",
          padding: "8px 16px",
          textAlign: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <span style={{ fontSize: "0.7rem", color: "#e8a04a" }}>🎉</span>
        <span
          style={{
            fontSize: "0.72rem",
            color: "#c9a96e",
            letterSpacing: "0.03em",
          }}
        >
          Extra 10% OFF on your first 3 orders!
        </span>
      </div>

      {/* ══ PROMO BANNER ══════════════════════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          margin: "12px 14px 0",
          borderRadius: "18px",
          overflow: "hidden",
          minHeight: "160px",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=900&q=80"
          alt="Promo"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.4,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(110deg, rgba(10,8,5,0.95) 45%, rgba(10,8,5,0.5) 100%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2, padding: "22px 20px" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              border: "1px solid rgba(232,160,74,0.4)",
              borderRadius: "20px",
              padding: "2px 10px",
              background: "rgba(232,160,74,0.08)",
              marginBottom: "8px",
            }}
          >
            <span
              style={{
                fontSize: "0.6rem",
                color: "#e8a04a",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Limited Offer
            </span>
          </div>

          <div
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(2.2rem, 9vw, 3.2rem)",
              fontWeight: "bold",
              color: "#f5f0ea",
              lineHeight: 1.0,
              marginBottom: "6px",
            }}
          >
            50% OFF
          </div>
          <p
            style={{
              color: "#9a8f85",
              fontSize: "0.78rem",
              marginBottom: "16px",
            }}
          >
            First order at Master Chef's Kitchen
          </p>
          <button
            style={{
              padding: "9px 22px",
              borderRadius: "30px",
              background: "linear-gradient(135deg, #e8a04a 0%, #c97c28 100%)",
              border: "none",
              color: "#0f0d0b",
              fontSize: "0.8rem",
              fontWeight: "bold",
              cursor: "pointer",
              letterSpacing: "0.04em",
            }}
          >
            Claim Now
          </button>
        </div>
      </div>

      {/* ══ CATEGORIES ════════════════════════════════════════════════════ */}
      <div style={{ padding: "20px 14px 0" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "14px",
          }}
        >
          <h2
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "1.2rem",
              fontWeight: "bold",
              color: "#f5f0ea",
            }}
          >
            Categories
          </h2>
          <span
            style={{ fontSize: "0.78rem", color: "#e8a04a", cursor: "pointer" }}
          >
            View All
          </span>
        </div>

        <div
          style={{
            display: "flex",
            gap: "18px",
            overflowX: "auto",
            paddingBottom: "6px",
            scrollbarWidth: "none",
          }}
        >
          {CATEGORIES.map((cat) => {
            const active = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "6px",
                  flexShrink: 0,
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                }}
              >
                <div
                  style={{
                    width: "56px",
                    height: "56px",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.45rem",
                    background: active
                      ? "linear-gradient(135deg, #e8a04a, #c97c28)"
                      : "rgba(255,255,255,0.06)",
                    border: active
                      ? "2.5px solid #e8a04a"
                      : "2px solid rgba(255,255,255,0.09)",
                    boxShadow: active
                      ? "0 4px 18px rgba(232,160,74,0.35)"
                      : "none",
                    transition: "all 0.22s ease",
                  }}
                >
                  {cat.emoji}
                </div>
                <span
                  style={{
                    fontSize: "0.67rem",
                    color: active ? "#e8a04a" : "#6b6259",
                    fontWeight: active ? "700" : "400",
                    letterSpacing: "0.02em",
                    whiteSpace: "nowrap",
                    transition: "color 0.2s",
                  }}
                >
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ══ POPULAR NEAR YOU ══════════════════════════════════════════════ */}
      <div style={{ padding: "22px 14px 14px" }}>
        <h2
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.2rem",
            fontWeight: "bold",
            color: "#f5f0ea",
          }}
        >
          Popular Near You
        </h2>
      </div>

      {/* ══ RESTAURANT CARDS ══════════════════════════════════════════════ */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "24px",
          padding: "0 14px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        {filtered.map((r) => (
          <div
            key={r.id}
            onClick={() => navigate(`/order/${r.id}`)}
            style={{
              borderRadius: "20px",
              overflow: "hidden",
              cursor: "pointer",
              background: "#1a1612",
              border: "1px solid rgba(255,255,255,0.07)",
              boxShadow: "0 6px 24px rgba(0,0,0,0.55)",
              transition: "transform 0.25s, border-color 0.25s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.borderColor = "rgba(232,160,74,0.3)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)";
            }}
          >
            {/* ── Food Image ── */}
            <div
              style={{
                position: "relative",
                height: "200px",
                overflow: "hidden",
              }}
            >
              <img
                src={r.img}
                alt={r.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                  transition: "transform 0.45s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(to bottom, rgba(8,6,4,0.08) 30%, rgba(8,6,4,0.72) 100%)",
                }}
              />
              {/* Star rating */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px",
                  background: "rgba(10,8,5,0.78)",
                  backdropFilter: "blur(8px)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "20px",
                  padding: "4px 10px",
                  fontSize: "0.72rem",
                  color: "#f5f0ea",
                }}
              >
                <span style={{ color: "#fbbf24" }}>★</span>
                <span style={{ fontWeight: "bold" }}>{r.rating}</span>
              </div>
            </div>

            {/* ── Card Body ── */}
            <div style={{ padding: "14px 14px 16px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "space-between",
                  gap: "10px",
                  marginBottom: "4px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Georgia', serif",
                    fontSize: "1.08rem",
                    fontWeight: "bold",
                    color: "#f5f0ea",
                    lineHeight: 1.25,
                    flex: 1,
                  }}
                >
                  {r.name}
                </h3>
                <span
                  style={{
                    flexShrink: 0,
                    padding: "4px 10px",
                    borderRadius: "7px",
                    background: r.tagBg,
                    color: r.tagColor,
                    fontSize: "0.62rem",
                    fontWeight: "bold",
                    letterSpacing: "0.06em",
                    marginTop: "2px",
                  }}
                >
                  {r.tag}
                </span>
              </div>

              {/* Cuisine + Price */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginBottom: "12px",
                }}
              >
                <p style={{ color: "#6b6259", fontSize: "0.76rem" }}>
                  {r.subtitle}
                </p>
                <p
                  style={{
                    color: "#e8a04a",
                    fontSize: "0.85rem",
                    fontWeight: "bold",
                    flexShrink: 0,
                    marginLeft: "8px",
                  }}
                >
                  ₹{r.price}
                </p>
              </div>

              {/* Meta + chef + add button */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "14px" }}
                >
                  {/* Time */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#9a8f85",
                      fontSize: "0.72rem",
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
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" strokeLinecap="round" />
                    </svg>
                    {r.time}
                  </span>
                  {/* Distance */}
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                      color: "#9a8f85",
                      fontSize: "0.72rem",
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
                      <path
                        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="9" r="2.5" />
                    </svg>
                    {r.distance}
                  </span>
                </div>

                {/* Chef + add button */}
                <div
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "50%",
                      background: "rgba(232,160,74,0.2)",
                      border: "1px solid rgba(232,160,74,0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "0.65rem",
                      color: "#e8a04a",
                      fontWeight: "bold",
                      flexShrink: 0,
                    }}
                  >
                    👨‍🍳
                  </div>
                  <span
                    style={{
                      fontSize: "0.68rem",
                      color: "#6b6259",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {r.chef}
                  </span>

                  {cart[r.id] ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          remove(r.id);
                        }}
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: "rgba(232,160,74,0.15)",
                          border: "1px solid rgba(232,160,74,0.4)",
                          color: "#e8a04a",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        −
                      </button>
                      <span
                        style={{
                          color: "#f5f0ea",
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                          minWidth: "14px",
                          textAlign: "center",
                        }}
                      >
                        {cart[r.id]}
                      </span>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          add(r.id);
                        }}
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background:
                            "linear-gradient(135deg, #e8a04a, #c97c28)",
                          border: "none",
                          color: "#0f0d0b",
                          fontSize: "1.1rem",
                          fontWeight: "bold",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: "0 4px 12px rgba(232,160,74,0.4)",
                        }}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        add(r.id);
                      }}
                      style={{
                        width: "34px",
                        height: "34px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #e8a04a, #c97c28)",
                        border: "none",
                        color: "#0f0d0b",
                        fontSize: "1.3rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: "0 4px 14px rgba(232,160,74,0.4)",
                        transition: "filter 0.2s",
                        flexShrink: 0,
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = "brightness(1.15)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = "brightness(1)")
                      }
                    >
                      +
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* ══ FLOATING CART BAR ════════════════════════════════════════════ */}
      {totalItems > 0 && (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
            padding: "14px 18px",
            borderRadius: "18px",
            background: "#1e1a14",
            border: "1px solid rgba(232,160,74,0.4)",
            boxShadow: "0 16px 48px rgba(0,0,0,0.75)",
            minWidth: "260px",
            maxWidth: "calc(100vw - 32px)",
            backdropFilter: "blur(14px)",
          }}
        >
          <div>
            <p
              style={{
                color: "#9a8f85",
                fontSize: "0.7rem",
                marginBottom: "1px",
              }}
            >
              {totalItems} item{totalItems > 1 ? "s" : ""} selected
            </p>
            <p
              style={{
                color: "#f5f0ea",
                fontFamily: "'Georgia', serif",
                fontSize: "1.05rem",
                fontWeight: "bold",
              }}
            >
              View Cart
            </p>
          </div>
          <button
            onClick={() => {
              localStorage.setItem(
                "cartItems",
                JSON.stringify(
                  RESTAURANTS.filter((item) => cart[item.id]).map((item) => ({
                    ...item,
                    quantity: cart[item.id],
                  })),
                ),
              );
              navigate("/cart");
            }}
            style={{
              padding: "11px 24px",
              borderRadius: "30px",
              background: "linear-gradient(135deg, #e8a04a, #c97c28)",
              border: "none",
              color: "#0f0d0b",
              fontWeight: "bold",
              fontSize: "0.875rem",
              cursor: "pointer",
              letterSpacing: "0.03em",
              whiteSpace: "nowrap",
              transition: "filter 0.2s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.filter = "brightness(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.filter = "brightness(1)")
            }
          >
            View Cart →
          </button>
        </div>
      )}

      <style>{`
        * { -webkit-tap-highlight-color: transparent; }
        ::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}
