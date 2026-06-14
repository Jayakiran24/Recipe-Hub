// // import { useState } from "react";

// // // const CARDS = [
// // //   {
// // //     id: 1,
// // //     img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=80",
// // //     tag: "Fine Dining",
// // //     title: "Candlelit Elegance",
// // //   },
// // //   {
// // //     id: 2,
// // //     img: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&q=80",
// // //     tag: "Master Chef",
// // //     title: "World-Class Talent",
// // //   },
// // // ];

// // export default function HeroSection() {
// //   const [address, setAddress] = useState("");

// //   return (
// //     <div
// //       style={{
// //         fontFamily: "'Georgia', serif",
// //         background: "#0f0d0b",
// //         minHeight: "100vh",
// //       }}
// //       className="text-white"
// //     >
// //       {/* ── HERO ── */}
// //       <section
// //         className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
// //         style={{ minHeight: "88vh", paddingTop: "2rem", paddingBottom: "4rem" }}
// //       >
// //         {/* Radial glow */}
// //         <div
// //           className="absolute inset-0 pointer-events-none"
// //           style={{
// //             background:
// //               "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(232,160,74,0.13) 0%, transparent 70%)",
// //           }}
// //         />

// //         {/* Floating food card — left */}
// //         <div
// //           className="absolute hidden md:block"
// //           style={{
// //             left: "3%",
// //             top: "10%",
// //             width: "170px",
// //             borderRadius: "20px",
// //             overflow: "hidden",
// //             boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
// //             transform: "rotate(-6deg)",
// //             border: "2px solid rgba(232,160,74,0.2)",
// //           }}
// //         >
// //           <img
// //             src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80"
// //             alt="Chef"
// //             style={{
// //               width: "100%",
// //               height: "200px",
// //               objectFit: "cover",
// //               display: "block",
// //             }}
// //           />
// //         </div>

// //         {/* Floating food card — right */}
// //         <div
// //           className="absolute hidden md:block"
// //           style={{
// //             right: "3%",
// //             top: "8%",
// //             width: "170px",
// //             borderRadius: "20px",
// //             overflow: "hidden",
// //             boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
// //             transform: "rotate(5deg)",
// //             border: "2px solid rgba(232,160,74,0.2)",
// //           }}
// //         >
// //           <img
// //             src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80"
// //             alt="Fine dining plate"
// //             style={{
// //               width: "100%",
// //               height: "200px",
// //               objectFit: "cover",
// //               display: "block",
// //             }}
// //           />
// //         </div>

// //         {/* Badge */}
// //         <div
// //           className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
// //           style={{
// //             background: "rgba(232,160,74,0.12)",
// //             border: "1px solid rgba(232,160,74,0.35)",
// //             color: "#e8a04a",
// //             fontFamily: "'Trebuchet MS', sans-serif",
// //             letterSpacing: "0.18em",
// //           }}
// //         >
// //           Culinary Excellence
// //         </div>

// //         {/* Headline */}
// //         <h1
// //           className="relative z-10 leading-tight"
// //           style={{
// //             fontFamily: "'Georgia', serif",
// //             fontSize: "clamp(2.6rem, 7vw, 5.2rem)",
// //             fontWeight: "bold",
// //             maxWidth: "750px",
// //             lineHeight: 1.12,
// //             color: "#f5f0ea",
// //           }}
// //         >
// //           Savor the Art of{" "}
// //           <em
// //             style={{
// //               fontStyle: "italic",
// //               color: "#e8a04a",
// //               display: "inline-block",
// //             }}
// //           >
// //             Fine
// //             <br />
// //             Dining
// //           </em>{" "}
// //           at Home
// //         </h1>

// //         {/* Subtext */}
// //         <p
// //           className="mt-6 relative z-10"
// //           style={{
// //             fontFamily: "'Trebuchet MS', sans-serif",
// //             fontSize: "0.95rem",
// //             color: "#9a8f85",
// //             maxWidth: "480px",
// //             lineHeight: 1.7,
// //           }}
// //         >
// //           Connect with world-class master chefs or order artisan meals delivered
// //           straight to your table. Experience gastronomy redefined.
// //         </p>

// //         {/* Search bar */}
// //         <div
// //           className="mt-10 relative z-10 flex items-center w-full max-w-md rounded-full overflow-hidden"
// //           style={{
// //             background: "rgba(255,255,255,0.06)",
// //             border: "1px solid rgba(255,255,255,0.12)",
// //             backdropFilter: "blur(12px)",
// //           }}
// //         >
// //           <span className="pl-5 pr-2 text-gray-400 flex-shrink-0">
// //             <svg
// //               width="18"
// //               height="18"
// //               fill="none"
// //               stroke="currentColor"
// //               strokeWidth="2"
// //               viewBox="0 0 24 24"
// //             >
// //               <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
// //               <circle cx="12" cy="9" r="2.5" />
// //             </svg>
// //           </span>
// //           <input
// //             type="text"
// //             placeholder="Enter your delivery address..."
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //             className="flex-1 bg-transparent outline-none py-3 pr-2 text-sm text-gray-200 placeholder-gray-500"
// //             style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
// //           />
// //           <button
// //             className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
// //             style={{
// //               background: "linear-gradient(135deg, #e8a04a 0%, #c97c28 100%)",
// //               color: "#0f0d0b",
// //               fontFamily: "'Trebuchet MS', sans-serif",
// //               margin: "4px",
// //               letterSpacing: "0.03em",
// //             }}
// //           >
// //             Explore
// //           </button>
// //         </div>
// //       </section>

// //       {/* ── PREVIEW CARDS ── */}
// //     </div>
// //   );
// // }

// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // Indian cities/areas for pincode + name lookup
// const LOCATION_DB = [
//   { pincode: "560001", area: "MG Road", city: "Bengaluru", state: "Karnataka" },
//   {
//     pincode: "560002",
//     area: "Shivajinagar",
//     city: "Bengaluru",
//     state: "Karnataka",
//   },
//   {
//     pincode: "560008",
//     area: "Malleshwaram",
//     city: "Bengaluru",
//     state: "Karnataka",
//   },
//   {
//     pincode: "560034",
//     area: "Jayanagar",
//     city: "Bengaluru",
//     state: "Karnataka",
//   },
//   {
//     pincode: "560037",
//     area: "Koramangala",
//     city: "Bengaluru",
//     state: "Karnataka",
//   },
//   {
//     pincode: "560038",
//     area: "HSR Layout",
//     city: "Bengaluru",
//     state: "Karnataka",
//   },
//   {
//     pincode: "560066",
//     area: "Whitefield",
//     city: "Bengaluru",
//     state: "Karnataka",
//   },
//   {
//     pincode: "560076",
//     area: "Electronic City",
//     city: "Bengaluru",
//     state: "Karnataka",
//   },
//   { pincode: "560103", area: "Hebbal", city: "Bengaluru", state: "Karnataka" },
//   {
//     pincode: "110001",
//     area: "Connaught Place",
//     city: "New Delhi",
//     state: "Delhi",
//   },
//   { pincode: "110025", area: "Hauz Khas", city: "New Delhi", state: "Delhi" },
//   { pincode: "110048", area: "Vasant Kunj", city: "New Delhi", state: "Delhi" },
//   { pincode: "400001", area: "Fort", city: "Mumbai", state: "Maharashtra" },
//   {
//     pincode: "400050",
//     area: "Bandra West",
//     city: "Mumbai",
//     state: "Maharashtra",
//   },
//   { pincode: "400076", area: "Powai", city: "Mumbai", state: "Maharashtra" },
//   {
//     pincode: "600001",
//     area: "Parrys Corner",
//     city: "Chennai",
//     state: "Tamil Nadu",
//   },
//   { pincode: "600020", area: "Adyar", city: "Chennai", state: "Tamil Nadu" },
//   {
//     pincode: "500001",
//     area: "Secunderabad",
//     city: "Hyderabad",
//     state: "Telangana",
//   },
//   {
//     pincode: "500081",
//     area: "Gachibowli",
//     city: "Hyderabad",
//     state: "Telangana",
//   },
//   {
//     pincode: "411001",
//     area: "Shivajinagar",
//     city: "Pune",
//     state: "Maharashtra",
//   },
//   {
//     pincode: "380001",
//     area: "Lal Darwaja",
//     city: "Ahmedabad",
//     state: "Gujarat",
//   },
//   {
//     pincode: "700001",
//     area: "Dalhousie",
//     city: "Kolkata",
//     state: "West Bengal",
//   },
//   {
//     pincode: "700019",
//     area: "Ballygunge",
//     city: "Kolkata",
//     state: "West Bengal",
//   },
// ];

// // Fuzzy match by city/area name
// function searchLocations(query) {
//   const q = query.toLowerCase().trim();
//   if (!q) return [];
//   // Pincode search
//   if (/^\d+$/.test(q)) {
//     return LOCATION_DB.filter((l) => l.pincode.startsWith(q)).slice(0, 5);
//   }
//   // Name search
//   return LOCATION_DB.filter(
//     (l) =>
//       l.area.toLowerCase().includes(q) ||
//       l.city.toLowerCase().includes(q) ||
//       l.state.toLowerCase().includes(q),
//   ).slice(0, 5);
// }

// export default function HeroSection() {
//   const [address, setAddress] = useState("");
//   const [suggestions, setSuggestions] = useState([]);
//   const [selectedLocation, setSelectedLocation] = useState(null);
//   const [locLoading, setLocLoading] = useState(false);
//   const [locError, setLocError] = useState("");
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const wrapperRef = useRef(null);
//   const navigate = useNavigate();

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handler = (e) => {
//       if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
//         setDropdownOpen(false);
//       }
//     };
//     document.addEventListener("mousedown", handler);
//     return () => document.removeEventListener("mousedown", handler);
//   }, []);

//   // Live suggestions as user types
//   const handleAddressChange = (e) => {
//     const val = e.target.value;
//     setAddress(val);
//     setSelectedLocation(null);
//     setLocError("");
//     if (val.trim().length >= 2) {
//       setSuggestions(searchLocations(val));
//       setDropdownOpen(true);
//     } else {
//       setSuggestions([]);
//       setDropdownOpen(false);
//     }
//   };

//   const pickLocation = (loc) => {
//     setSelectedLocation(loc);
//     setAddress(`${loc.area}, ${loc.city}`);
//     setSuggestions([]);
//     setDropdownOpen(false);
//     setLocError("");
//   };

//   // GPS detection
//   const detectLocation = () => {
//     if (!navigator.geolocation) {
//       setLocError("Geolocation not supported by your browser.");
//       return;
//     }
//     setLocLoading(true);
//     setLocError("");
//     navigator.geolocation.getCurrentPosition(
//       async (pos) => {
//         try {
//           // Reverse geocode using free Nominatim API (no key required)
//           const { latitude, longitude } = pos.coords;
//           const res = await fetch(
//             `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
//             { headers: { "Accept-Language": "en" } },
//           );
//           const data = await res.json();
//           const addr = data.address || {};
//           const area =
//             addr.neighbourhood ||
//             addr.suburb ||
//             addr.quarter ||
//             addr.village ||
//             addr.town ||
//             addr.city_district ||
//             "";
//           const city = addr.city || addr.town || addr.county || "";
//           const pincode = addr.postcode || "";
//           const displayName = area ? `${area}, ${city}` : city;
//           setAddress(displayName);
//           setSelectedLocation({ area, city, pincode, state: addr.state || "" });
//         } catch {
//           setLocError("Could not fetch address. Try typing manually.");
//         } finally {
//           setLocLoading(false);
//         }
//       },
//       (err) => {
//         setLocLoading(false);
//         if (err.code === 1)
//           setLocError("Location permission denied. Please type your address.");
//         else setLocError("Could not detect location. Please type manually.");
//       },
//       { timeout: 8000 },
//     );
//   };

//   const handleExplore = () => {
//     if (!address.trim()) {
//       setLocError("Please enter your delivery address first.");
//       return;
//     }
//     const query = selectedLocation?.city || address;
//     navigate(`/order-food?location=${encodeURIComponent(query)}`);
//   };

//   return (
//     <div
//       style={{
//         fontFamily: "'Georgia', serif",
//         background: "#0f0d0b",
//         minHeight: "100vh",
//       }}
//       className="text-white"
//     >
//       {/* ── HERO ── */}
//       <section
//         className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
//         style={{ minHeight: "88vh", paddingTop: "2rem", paddingBottom: "4rem" }}
//       >
//         {/* Radial glow */}
//         <div
//           className="absolute inset-0 pointer-events-none"
//           style={{
//             background:
//               "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(232,160,74,0.13) 0%, transparent 70%)",
//           }}
//         />

//         {/* Floating card — left */}
//         <div
//           className="absolute hidden md:block"
//           style={{
//             left: "3%",
//             top: "10%",
//             width: "170px",
//             borderRadius: "20px",
//             overflow: "hidden",
//             boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
//             transform: "rotate(-6deg)",
//             border: "2px solid rgba(232,160,74,0.2)",
//           }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80"
//             alt="Chef"
//             style={{
//               width: "100%",
//               height: "200px",
//               objectFit: "cover",
//               display: "block",
//             }}
//           />
//         </div>

//         {/* Floating card — right */}
//         <div
//           className="absolute hidden md:block"
//           style={{
//             right: "3%",
//             top: "8%",
//             width: "170px",
//             borderRadius: "20px",
//             overflow: "hidden",
//             boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
//             transform: "rotate(5deg)",
//             border: "2px solid rgba(232,160,74,0.2)",
//           }}
//         >
//           <img
//             src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80"
//             alt="Fine dining plate"
//             style={{
//               width: "100%",
//               height: "200px",
//               objectFit: "cover",
//               display: "block",
//             }}
//           />
//         </div>

//         {/* Badge */}
//         <div
//           className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
//           style={{
//             background: "rgba(232,160,74,0.12)",
//             border: "1px solid rgba(232,160,74,0.35)",
//             color: "#e8a04a",
//             fontFamily: "'Trebuchet MS', sans-serif",
//             letterSpacing: "0.18em",
//           }}
//         >
//           Culinary Excellence
//         </div>

//         {/* Headline */}
//         <h1
//           className="relative z-10 leading-tight"
//           style={{
//             fontFamily: "'Georgia', serif",
//             fontSize: "clamp(2.6rem, 7vw, 5.2rem)",
//             fontWeight: "bold",
//             maxWidth: "750px",
//             lineHeight: 1.12,
//             color: "#f5f0ea",
//           }}
//         >
//           Savor the Art of{" "}
//           <em
//             style={{
//               fontStyle: "italic",
//               color: "#e8a04a",
//               display: "inline-block",
//             }}
//           >
//             Fine
//             <br />
//             Dining
//           </em>{" "}
//           at Home
//         </h1>

//         {/* Subtext */}
//         <p
//           className="mt-6 relative z-10"
//           style={{
//             fontFamily: "'Trebuchet MS', sans-serif",
//             fontSize: "0.95rem",
//             color: "#9a8f85",
//             maxWidth: "480px",
//             lineHeight: 1.7,
//           }}
//         >
//           Connect with world-class master chefs or order artisan meals delivered
//           straight to your table. Experience gastronomy redefined.
//         </p>

//         {/* ── LOCATION SEARCH BAR ── */}
//         <div ref={wrapperRef} className="mt-10 relative z-10 w-full max-w-md">
//           {/* Input row */}
//           <div
//             className="flex items-center w-full rounded-full overflow-visible"
//             style={{
//               background: "rgba(255,255,255,0.06)",
//               border: `1px solid ${locError ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`,
//               backdropFilter: "blur(12px)",
//               position: "relative",
//             }}
//           >
//             {/* Pin icon */}
//             <span className="pl-5 pr-2 text-gray-400 flex-shrink-0">
//               <svg
//                 width="18"
//                 height="18"
//                 fill="none"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 viewBox="0 0 24 24"
//               >
//                 <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
//                 <circle cx="12" cy="9" r="2.5" />
//               </svg>
//             </span>

//             <input
//               type="text"
//               placeholder="Enter area, city or pincode…"
//               value={address}
//               onChange={handleAddressChange}
//               onFocus={() => suggestions.length > 0 && setDropdownOpen(true)}
//               className="flex-1 bg-transparent outline-none py-3 pr-2 text-sm text-gray-200 placeholder-gray-500"
//               style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
//             />

//             {/* GPS button */}
//             <button
//               onClick={detectLocation}
//               disabled={locLoading}
//               title="Detect my location"
//               className="flex items-center justify-center transition-colors mr-1"
//               style={{
//                 color: locLoading ? "#6b5e50" : "#e8a04a",
//                 padding: "6px",
//               }}
//             >
//               {locLoading ? (
//                 /* spinner */
//                 <svg
//                   width="18"
//                   height="18"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   className="animate-spin"
//                 >
//                   <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
//                   <path d="M12 2a10 10 0 0110 10" />
//                 </svg>
//               ) : (
//                 <svg
//                   width="18"
//                   height="18"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <circle cx="12" cy="12" r="3" />
//                   <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
//                   <path
//                     d="M12 2a10 10 0 100 20A10 10 0 0012 2z"
//                     strokeOpacity="0.3"
//                   />
//                 </svg>
//               )}
//             </button>

//             {/* Explore button */}
//             <button
//               onClick={handleExplore}
//               className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
//               style={{
//                 background: "linear-gradient(135deg, #e8a04a 0%, #c97c28 100%)",
//                 color: "#0f0d0b",
//                 fontFamily: "'Trebuchet MS', sans-serif",
//                 margin: "4px",
//                 letterSpacing: "0.03em",
//                 flexShrink: 0,
//               }}
//             >
//               Explore
//             </button>
//           </div>

//           {/* Error message */}
//           {locError && (
//             <p
//               className="mt-2 text-xs text-center"
//               style={{
//                 color: "#ef4444",
//                 fontFamily: "'Trebuchet MS', sans-serif",
//               }}
//             >
//               {locError}
//             </p>
//           )}

//           {/* Selected location pill */}
//           {selectedLocation && !dropdownOpen && (
//             <div className="mt-2 flex justify-center">
//               <span
//                 className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs"
//                 style={{
//                   background: "rgba(232,160,74,0.12)",
//                   border: "1px solid rgba(232,160,74,0.3)",
//                   color: "#e8a04a",
//                   fontFamily: "'Trebuchet MS', sans-serif",
//                 }}
//               >
//                 <svg width="10" height="10" fill="#e8a04a" viewBox="0 0 20 20">
//                   <path
//                     fillRule="evenodd"
//                     d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
//                     clipRule="evenodd"
//                   />
//                 </svg>
//                 {selectedLocation.pincode
//                   ? `${selectedLocation.area}, ${selectedLocation.city} – ${selectedLocation.pincode}`
//                   : `${selectedLocation.area}, ${selectedLocation.city}`}
//               </span>
//             </div>
//           )}

//           {/* Suggestions dropdown */}
//           {dropdownOpen && suggestions.length > 0 && (
//             <div
//               className="absolute left-0 right-0 top-full mt-2 rounded-2xl overflow-hidden"
//               style={{
//                 background: "#1a1410",
//                 border: "1px solid rgba(232,160,74,0.2)",
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
//                 zIndex: 200,
//               }}
//             >
//               {suggestions.map((loc) => (
//                 <button
//                   key={loc.pincode}
//                   onClick={() => pickLocation(loc)}
//                   className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
//                   style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
//                   onMouseEnter={(e) =>
//                     (e.currentTarget.style.background = "rgba(232,160,74,0.08)")
//                   }
//                   onMouseLeave={(e) =>
//                     (e.currentTarget.style.background = "transparent")
//                   }
//                 >
//                   <svg
//                     width="14"
//                     height="14"
//                     fill="none"
//                     stroke="#e8a04a"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
//                     <circle cx="12" cy="9" r="2.5" />
//                   </svg>
//                   <div className="flex-1 min-w-0">
//                     <p className="text-sm text-gray-200 truncate">
//                       {loc.area}, {loc.city}
//                     </p>
//                     <p className="text-xs" style={{ color: "#6b5e50" }}>
//                       {loc.state} · {loc.pincode}
//                     </p>
//                   </div>
//                 </button>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// }

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// Indian cities/areas for pincode + name lookup
const LOCATION_DB = [
  { pincode: "560001", area: "MG Road", city: "Bengaluru", state: "Karnataka" },
  {
    pincode: "560002",
    area: "Shivajinagar",
    city: "Bengaluru",
    state: "Karnataka",
  },
  {
    pincode: "560008",
    area: "Malleshwaram",
    city: "Bengaluru",
    state: "Karnataka",
  },
  {
    pincode: "560034",
    area: "Jayanagar",
    city: "Bengaluru",
    state: "Karnataka",
  },
  {
    pincode: "560037",
    area: "Koramangala",
    city: "Bengaluru",
    state: "Karnataka",
  },
  {
    pincode: "560038",
    area: "HSR Layout",
    city: "Bengaluru",
    state: "Karnataka",
  },
  {
    pincode: "560066",
    area: "Whitefield",
    city: "Bengaluru",
    state: "Karnataka",
  },
  {
    pincode: "560076",
    area: "Electronic City",
    city: "Bengaluru",
    state: "Karnataka",
  },
  { pincode: "560103", area: "Hebbal", city: "Bengaluru", state: "Karnataka" },
  {
    pincode: "110001",
    area: "Connaught Place",
    city: "New Delhi",
    state: "Delhi",
  },
  { pincode: "110025", area: "Hauz Khas", city: "New Delhi", state: "Delhi" },
  { pincode: "110048", area: "Vasant Kunj", city: "New Delhi", state: "Delhi" },
  { pincode: "400001", area: "Fort", city: "Mumbai", state: "Maharashtra" },
  {
    pincode: "400050",
    area: "Bandra West",
    city: "Mumbai",
    state: "Maharashtra",
  },
  { pincode: "400076", area: "Powai", city: "Mumbai", state: "Maharashtra" },
  {
    pincode: "600001",
    area: "Parrys Corner",
    city: "Chennai",
    state: "Tamil Nadu",
  },
  { pincode: "600020", area: "Adyar", city: "Chennai", state: "Tamil Nadu" },
  {
    pincode: "500001",
    area: "Secunderabad",
    city: "Hyderabad",
    state: "Telangana",
  },
  {
    pincode: "500081",
    area: "Gachibowli",
    city: "Hyderabad",
    state: "Telangana",
  },
  {
    pincode: "411001",
    area: "Shivajinagar",
    city: "Pune",
    state: "Maharashtra",
  },
  {
    pincode: "380001",
    area: "Lal Darwaja",
    city: "Ahmedabad",
    state: "Gujarat",
  },
  {
    pincode: "700001",
    area: "Dalhousie",
    city: "Kolkata",
    state: "West Bengal",
  },
  {
    pincode: "700019",
    area: "Ballygunge",
    city: "Kolkata",
    state: "West Bengal",
  },
];

// Fuzzy match by city/area name
function searchLocations(query) {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  // Pincode search
  if (/^\d+$/.test(q)) {
    return LOCATION_DB.filter((l) => l.pincode.startsWith(q)).slice(0, 5);
  }
  // Name search
  return LOCATION_DB.filter(
    (l) =>
      l.area.toLowerCase().includes(q) ||
      l.city.toLowerCase().includes(q) ||
      l.state.toLowerCase().includes(q),
  ).slice(0, 5);
}

export default function HeroSection() {
  const [address, setAddress] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [locLoading, setLocLoading] = useState(false);
  const [locError, setLocError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef(null);
  const navigate = useNavigate();

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Live suggestions as user types
  const handleAddressChange = (e) => {
    const val = e.target.value;
    setAddress(val);
    setSelectedLocation(null);
    setLocError("");
    if (val.trim().length >= 2) {
      setSuggestions(searchLocations(val));
      setDropdownOpen(true);
    } else {
      setSuggestions([]);
      setDropdownOpen(false);
    }
  };

  const pickLocation = (loc) => {
    setSelectedLocation(loc);
    setAddress(`${loc.area}, ${loc.city}`);
    setSuggestions([]);
    setDropdownOpen(false);
    setLocError("");
  };

  // GPS detection
  const detectLocation = () => {
    if (!navigator.geolocation) {
      setLocError("Geolocation not supported by your browser.");
      return;
    }
    setLocLoading(true);
    setLocError("");
    navigator.geolocation.getCurrentPosition(
      async (pos) => {
        try {
          // Reverse geocode using free Nominatim API (no key required)
          const { latitude, longitude } = pos.coords;
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
            { headers: { "Accept-Language": "en" } },
          );
          const data = await res.json();
          const addr = data.address || {};
          const area =
            addr.neighbourhood ||
            addr.suburb ||
            addr.quarter ||
            addr.village ||
            addr.town ||
            addr.city_district ||
            "";
          const city = addr.city || addr.town || addr.county || "";
          const pincode = addr.postcode || "";
          const displayName = area ? `${area}, ${city}` : city;
          setAddress(displayName);
          setSelectedLocation({ area, city, pincode, state: addr.state || "" });
        } catch {
          setLocError("Could not fetch address. Try typing manually.");
        } finally {
          setLocLoading(false);
        }
      },
      (err) => {
        setLocLoading(false);
        if (err.code === 1)
          setLocError("Location permission denied. Please type your address.");
        else setLocError("Could not detect location. Please type manually.");
      },
      { timeout: 8000 },
    );
  };

  const handleExplore = () => {
    if (!address.trim()) {
      setLocError("Please enter your delivery address first.");
      return;
    }
    const query = selectedLocation?.city || address;
    navigate(`/order-food?location=${encodeURIComponent(query)}`);
  };

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#0f0d0b",
        minHeight: "100vh",
      }}
      className="text-white"
    >
      {/* ── HERO ── */}
      <section
        className="relative flex flex-col items-center justify-center text-center px-6 overflow-hidden"
        style={{ minHeight: "88vh", paddingTop: "2rem", paddingBottom: "4rem" }}
      >
        {/* Radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(232,160,74,0.13) 0%, transparent 70%)",
          }}
        />

        {/* Floating card — left */}
        <div
          className="absolute hidden md:block"
          style={{
            left: "3%",
            top: "10%",
            width: "170px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
            transform: "rotate(-6deg)",
            border: "2px solid rgba(232,160,74,0.2)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&q=80"
            alt="Chef"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Floating card — right */}
        <div
          className="absolute hidden md:block"
          style={{
            right: "3%",
            top: "8%",
            width: "170px",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 24px 60px rgba(0,0,0,0.7)",
            transform: "rotate(5deg)",
            border: "2px solid rgba(232,160,74,0.2)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&q=80"
            alt="Fine dining plate"
            style={{
              width: "100%",
              height: "200px",
              objectFit: "cover",
              display: "block",
            }}
          />
        </div>

        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-xs tracking-widest uppercase"
          style={{
            background: "rgba(232,160,74,0.12)",
            border: "1px solid rgba(232,160,74,0.35)",
            color: "#e8a04a",
            fontFamily: "'Trebuchet MS', sans-serif",
            letterSpacing: "0.18em",
          }}
        >
          Culinary Excellence
        </div>

        {/* Headline */}
        <h1
          className="relative z-10 leading-tight"
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "clamp(2.6rem, 7vw, 5.2rem)",
            fontWeight: "bold",
            maxWidth: "750px",
            lineHeight: 1.12,
            color: "#f5f0ea",
          }}
        >
          Savor the Art of{" "}
          <em
            style={{
              fontStyle: "italic",
              color: "#e8a04a",
              display: "inline-block",
            }}
          >
            Fine
            <br />
            Dining
          </em>{" "}
          at Home
        </h1>

        {/* Subtext */}
        <p
          className="mt-6 relative z-10"
          style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            fontSize: "0.95rem",
            color: "#9a8f85",
            maxWidth: "480px",
            lineHeight: 1.7,
          }}
        >
          Connect with world-class master chefs or order artisan meals delivered
          straight to your table. Experience gastronomy redefined.
        </p>

        {/* ── LOCATION SEARCH BAR ── */}
        <div
          ref={wrapperRef}
          className="mt-10 relative z-10 w-full max-w-md px-2"
        >
          {/* ── MOBILE: stacked layout ── */}
          <div className="flex flex-col gap-3 sm:hidden">
            {/* Input pill */}
            <div
              className="flex items-center w-full rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${locError ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`,
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="pl-4 pr-2 text-gray-400 flex-shrink-0">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  <circle cx="12" cy="9" r="2.5" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Area, city or pincode…"
                value={address}
                onChange={handleAddressChange}
                onFocus={() => suggestions.length > 0 && setDropdownOpen(true)}
                className="flex-1 bg-transparent outline-none py-3 text-sm text-gray-200 placeholder-gray-500 min-w-0"
                style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
              />
              {/* GPS */}
              <button
                onClick={detectLocation}
                disabled={locLoading}
                title="Detect my location"
                className="flex items-center justify-center flex-shrink-0 px-3 py-3 transition-colors"
                style={{ color: locLoading ? "#6b5e50" : "#e8a04a" }}
              >
                {locLoading ? (
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="animate-spin"
                  >
                    <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                    <path d="M12 2a10 10 0 0110 10" />
                  </svg>
                ) : (
                  <svg
                    width="17"
                    height="17"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="12" cy="12" r="3" />
                    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                    <path
                      d="M12 2a10 10 0 100 20A10 10 0 0012 2z"
                      strokeOpacity="0.3"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* Explore button — full width on mobile */}
            <button
              onClick={handleExplore}
              className="w-full py-3.5 text-sm font-semibold rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                background: "linear-gradient(135deg, #e8a04a 0%, #c97c28 100%)",
                color: "#0f0d0b",
                fontFamily: "'Trebuchet MS', sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              Explore
            </button>
          </div>

          {/* ── DESKTOP: single pill layout ── */}
          <div
            className="hidden sm:flex items-center w-full rounded-full"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${locError ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`,
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="pl-5 pr-2 text-gray-400 flex-shrink-0">
              <svg
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Enter area, city or pincode…"
              value={address}
              onChange={handleAddressChange}
              onFocus={() => suggestions.length > 0 && setDropdownOpen(true)}
              className="flex-1 bg-transparent outline-none py-3 pr-1 text-sm text-gray-200 placeholder-gray-500 min-w-0"
              style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
            />
            {/* GPS */}
            <button
              onClick={detectLocation}
              disabled={locLoading}
              title="Detect my location"
              className="flex items-center justify-center flex-shrink-0 px-2 transition-colors"
              style={{ color: locLoading ? "#6b5e50" : "#e8a04a" }}
            >
              {locLoading ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="animate-spin"
                >
                  <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
                  <path d="M12 2a10 10 0 0110 10" />
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                  <path
                    d="M12 2a10 10 0 100 20A10 10 0 0012 2z"
                    strokeOpacity="0.3"
                  />
                </svg>
              )}
            </button>
            {/* Explore */}
            <button
              onClick={handleExplore}
              className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 flex-shrink-0"
              style={{
                background: "linear-gradient(135deg, #e8a04a 0%, #c97c28 100%)",
                color: "#0f0d0b",
                fontFamily: "'Trebuchet MS', sans-serif",
                margin: "4px",
                letterSpacing: "0.03em",
              }}
            >
              Explore
            </button>
          </div>

          {/* Error message */}
          {locError && (
            <p
              className="mt-2 text-xs text-center"
              style={{
                color: "#ef4444",
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
              {locError}
            </p>
          )}

          {/* Selected location pill */}
          {selectedLocation && !dropdownOpen && (
            <div className="mt-2 flex justify-center">
              <span
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs"
                style={{
                  background: "rgba(232,160,74,0.12)",
                  border: "1px solid rgba(232,160,74,0.3)",
                  color: "#e8a04a",
                  fontFamily: "'Trebuchet MS', sans-serif",
                }}
              >
                <svg width="10" height="10" fill="#e8a04a" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L8.414 15 3.293 9.879a1 1 0 011.414-1.414L8.414 12.172l6.879-6.879a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                {selectedLocation.pincode
                  ? `${selectedLocation.area}, ${selectedLocation.city} – ${selectedLocation.pincode}`
                  : `${selectedLocation.area}, ${selectedLocation.city}`}
              </span>
            </div>
          )}

          {/* Suggestions dropdown */}
          {dropdownOpen && suggestions.length > 0 && (
            <div
              className="absolute left-0 right-0 top-full mt-2 rounded-2xl overflow-hidden"
              style={{
                background: "#1a1410",
                border: "1px solid rgba(232,160,74,0.2)",
                boxShadow: "0 20px 40px rgba(0,0,0,0.6)",
                zIndex: 200,
              }}
            >
              {suggestions.map((loc) => (
                <button
                  key={loc.pincode}
                  onClick={() => pickLocation(loc)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left transition-colors"
                  style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(232,160,74,0.08)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.background = "transparent")
                  }
                >
                  <svg
                    width="14"
                    height="14"
                    fill="none"
                    stroke="#e8a04a"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                    <circle cx="12" cy="9" r="2.5" />
                  </svg>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-200 truncate">
                      {loc.area}, {loc.city}
                    </p>
                    <p className="text-xs" style={{ color: "#6b5e50" }}>
                      {loc.state} · {loc.pincode}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
