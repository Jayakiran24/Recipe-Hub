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
//         <div
//           ref={wrapperRef}
//           className="mt-10 relative z-10 w-full max-w-md px-2"
//         >
//           {/* ── MOBILE: stacked layout ── */}
//           <div className="flex flex-col gap-3 sm:hidden">
//             {/* Input pill */}
//             <div
//               className="flex items-center w-full rounded-full"
//               style={{
//                 background: "rgba(255,255,255,0.06)",
//                 border: `1px solid ${locError ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`,
//                 backdropFilter: "blur(12px)",
//               }}
//             >
//               <span className="pl-4 pr-2 text-gray-400 flex-shrink-0">
//                 <svg
//                   width="16"
//                   height="16"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   viewBox="0 0 24 24"
//                 >
//                   <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
//                   <circle cx="12" cy="9" r="2.5" />
//                 </svg>
//               </span>
//               <input
//                 type="text"
//                 placeholder="Area, city or pincode…"
//                 value={address}
//                 onChange={handleAddressChange}
//                 onFocus={() => suggestions.length > 0 && setDropdownOpen(true)}
//                 className="flex-1 bg-transparent outline-none py-3 text-sm text-gray-200 placeholder-gray-500 min-w-0"
//                 style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
//               />
//               {/* GPS */}
//               <button
//                 onClick={detectLocation}
//                 disabled={locLoading}
//                 title="Detect my location"
//                 className="flex items-center justify-center flex-shrink-0 px-3 py-3 transition-colors"
//                 style={{ color: locLoading ? "#6b5e50" : "#e8a04a" }}
//               >
//                 {locLoading ? (
//                   <svg
//                     width="17"
//                     height="17"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     className="animate-spin"
//                   >
//                     <circle cx="12" cy="12" r="10" strokeOpacity="0.25" />
//                     <path d="M12 2a10 10 0 0110 10" />
//                   </svg>
//                 ) : (
//                   <svg
//                     width="17"
//                     height="17"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     <circle cx="12" cy="12" r="3" />
//                     <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
//                     <path
//                       d="M12 2a10 10 0 100 20A10 10 0 0012 2z"
//                       strokeOpacity="0.3"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>

//             {/* Explore button — full width on mobile */}
//             <button
//               onClick={handleExplore}
//               className="w-full py-3.5 text-sm font-semibold rounded-full transition-all duration-200 hover:brightness-110 active:scale-95"
//               style={{
//                 background: "linear-gradient(135deg, #e8a04a 0%, #c97c28 100%)",
//                 color: "#0f0d0b",
//                 fontFamily: "'Trebuchet MS', sans-serif",
//                 letterSpacing: "0.05em",
//               }}
//             >
//               Explore
//             </button>
//           </div>

//           {/* ── DESKTOP: single pill layout ── */}
//           <div
//             className="hidden sm:flex items-center w-full rounded-full"
//             style={{
//               background: "rgba(255,255,255,0.06)",
//               border: `1px solid ${locError ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`,
//               backdropFilter: "blur(12px)",
//             }}
//           >
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
//               className="flex-1 bg-transparent outline-none py-3 pr-1 text-sm text-gray-200 placeholder-gray-500 min-w-0"
//               style={{ fontFamily: "'Trebuchet MS', sans-serif" }}
//             />
//             {/* GPS */}
//             <button
//               onClick={detectLocation}
//               disabled={locLoading}
//               title="Detect my location"
//               className="flex items-center justify-center flex-shrink-0 px-2 transition-colors"
//               style={{ color: locLoading ? "#6b5e50" : "#e8a04a" }}
//             >
//               {locLoading ? (
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
//             {/* Explore */}
//             <button
//               onClick={handleExplore}
//               className="px-6 py-3 text-sm font-semibold rounded-full transition-all duration-200 hover:brightness-110 active:scale-95 flex-shrink-0"
//               style={{
//                 background: "linear-gradient(135deg, #e8a04a 0%, #c97c28 100%)",
//                 color: "#0f0d0b",
//                 fontFamily: "'Trebuchet MS', sans-serif",
//                 margin: "4px",
//                 letterSpacing: "0.03em",
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

import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";

// ── Debounce helper ──────────────────────────────────────────────
function useDebounce(value, delay) {
  const [debounced, setDebounced] = useState(value);
  useEffect(() => {
    const t = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(t);
  }, [value, delay]);
  return debounced;
}

// ── Pin icon (shared) ────────────────────────────────────────────
const PinIcon = ({ size = 16, color = "currentColor", opacity = 1 }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke={color}
    strokeWidth="2"
    viewBox="0 0 24 24"
    style={{ opacity }}
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" />
  </svg>
);

// ── GPS icon ─────────────────────────────────────────────────────
const GpsIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
    <circle cx="12" cy="12" r="9" strokeOpacity="0.25" />
  </svg>
);

// ── Spinner ───────────────────────────────────────────────────────
const Spinner = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{ animation: "spin 0.8s linear infinite" }}
  >
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    <circle cx="12" cy="12" r="10" strokeOpacity="0.2" />
    <path d="M12 2a10 10 0 0110 10" />
  </svg>
);

// ── Parse Nominatim result into clean display strings ─────────────
function parseNominatim(item) {
  const a = item.address || {};

  const neighbourhood =
    a.neighbourhood || a.suburb || a.quarter || a.village || a.hamlet || "";

  const city =
    a.city || a.town || a.municipality || a.county || a.state_district || "";

  const state = a.state || "";
  const pincode = a.postcode || "";
  const country = a.country_code?.toUpperCase() || "";

  // Primary label: most specific available
  const primary = neighbourhood
    ? `${neighbourhood}, ${city}`
    : city || item.display_name.split(",")[0];

  // Secondary label: state + pincode
  const secondary = [state, pincode, country === "IN" ? "India" : country]
    .filter(Boolean)
    .join(" · ");

  return {
    primary,
    secondary,
    neighbourhood,
    city,
    state,
    pincode,
    lat: item.lat,
    lon: item.lon,
  };
}

// ═══════════════════════════════════════════════════════════════════
export default function HeroSection() {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedLocation, setSelected] = useState(null);
  const [searching, setSearching] = useState(false); // Nominatim search loading
  const [gpsLoading, setGpsLoading] = useState(false); // GPS loading
  const [error, setError] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(-1); // keyboard nav

  const wrapperRef = useRef(null);
  const inputRef = useRef(null);
  const abortRef = useRef(null); // abort previous fetch
  const navigate = useNavigate();

  const debouncedQuery = useDebounce(query, 350);

  // ── Close on outside click ───────────────────────────────────────
  useEffect(() => {
    const fn = (e) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setDropdownOpen(false);
        setActiveIdx(-1);
      }
    };
    document.addEventListener("mousedown", fn);
    return () => document.removeEventListener("mousedown", fn);
  }, []);

  // ── Nominatim search on debounced query ──────────────────────────
  useEffect(() => {
    const q = debouncedQuery.trim();
    if (q.length < 2) {
      setSuggestions([]);
      setDropdownOpen(false);
      return;
    }

    // Cancel previous in-flight request
    if (abortRef.current) abortRef.current.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    setSearching(true);
    setError("");

    // Nominatim free geocoding — India biased, returns JSON
    fetch(
      `https://nominatim.openstreetmap.org/search?` +
        new URLSearchParams({
          q,
          format: "json",
          addressdetails: "1",
          limit: "6",
          countrycodes: "in", // restrict to India
          "accept-language": "en",
        }),
      {
        signal: controller.signal,
        headers: { "User-Agent": "RecipeHub/1.0 (portfolio project)" },
      },
    )
      .then((r) => r.json())
      .then((data) => {
        const results = data.map(parseNominatim);
        // Deduplicate by primary label
        const seen = new Set();
        const unique = results.filter((r) => {
          if (seen.has(r.primary)) return false;
          seen.add(r.primary);
          return true;
        });
        setSuggestions(unique);
        setDropdownOpen(unique.length > 0);
        setActiveIdx(-1);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError("Could not fetch suggestions. Check your connection.");
        }
      })
      .finally(() => setSearching(false));
  }, [debouncedQuery]);

  // ── Pick a suggestion ────────────────────────────────────────────
  const pickLocation = useCallback((loc) => {
    setSelected(loc);
    setQuery(loc.primary);
    setSuggestions([]);
    setDropdownOpen(false);
    setActiveIdx(-1);
    setError("");
  }, []);

  // ── Keyboard navigation ──────────────────────────────────────────
  const handleKeyDown = (e) => {
    if (!dropdownOpen || suggestions.length === 0) return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIdx((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIdx((i) => Math.max(i - 1, -1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (activeIdx >= 0) pickLocation(suggestions[activeIdx]);
      else if (suggestions.length > 0) pickLocation(suggestions[0]);
    } else if (e.key === "Escape") {
      setDropdownOpen(false);
      setActiveIdx(-1);
    }
  };

  // ── GPS detect ───────────────────────────────────────────────────
  const detectLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported by your browser.");
      return;
    }
    setGpsLoading(true);
    setError("");
    navigator.geolocation.getCurrentPosition(
      async ({ coords: { latitude, longitude } }) => {
        try {
          const res = await fetch(
            `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json&addressdetails=1`,
            {
              headers: {
                "Accept-Language": "en",
                "User-Agent": "RecipeHub/1.0",
              },
            },
          );
          const data = await res.json();
          const loc = parseNominatim({ ...data, address: data.address });
          setSelected(loc);
          setQuery(loc.primary);
          setSuggestions([]);
          setDropdownOpen(false);
        } catch {
          setError("Could not fetch your address. Try typing manually.");
        } finally {
          setGpsLoading(false);
        }
      },
      (err) => {
        setGpsLoading(false);
        setError(
          err.code === 1
            ? "Location access denied. Please type your address."
            : "Could not detect location. Please type manually.",
        );
      },
      { timeout: 10000 },
    );
  };

  // ── Explore ──────────────────────────────────────────────────────
  const handleExplore = () => {
    if (!query.trim()) {
      setError("Please enter your delivery address first.");
      inputRef.current?.focus();
      return;
    }
    const destination =
      selectedLocation?.city || selectedLocation?.primary || query;
    navigate(`/order-food?location=${encodeURIComponent(destination)}`);
  };

  // ── Shared input props (used in both mobile & desktop) ───────────
  const inputProps = {
    ref: inputRef,
    type: "text",
    placeholder: "Search area, city or pincode…",
    value: query,
    autoComplete: "off",
    onChange: (e) => {
      setQuery(e.target.value);
      setSelected(null);
      setError("");
    },
    onFocus: () => suggestions.length > 0 && setDropdownOpen(true),
    onKeyDown: handleKeyDown,
    className:
      "flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder-gray-500 min-w-0",
    style: { fontFamily: "'Trebuchet MS', sans-serif" },
  };

  // ── GPS button ───────────────────────────────────────────────────
  const GpsButton = ({ size = 18 }) => (
    <button
      onClick={detectLocation}
      disabled={gpsLoading}
      title="Use my current location"
      className="flex items-center justify-center flex-shrink-0 transition-colors"
      style={{ color: gpsLoading ? "#6b5e50" : "#e8a04a", padding: "6px" }}
    >
      {gpsLoading ? <Spinner size={size} /> : <GpsIcon size={size} />}
    </button>
  );

  // ── Dropdown ─────────────────────────────────────────────────────
  const Dropdown = () => (
    <div
      className="absolute left-0 right-0 top-full mt-2 rounded-2xl overflow-hidden"
      style={{
        background: "#1c1611",
        border: "1px solid rgba(232,160,74,0.25)",
        boxShadow: "0 24px 48px rgba(0,0,0,0.7)",
        zIndex: 300,
      }}
    >
      {/* Header row */}
      <div
        className="flex items-center justify-between px-4 pt-3 pb-1"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.04)" }}
      >
        <span
          className="text-xs uppercase tracking-widest"
          style={{ color: "#6b5e50", fontFamily: "'Trebuchet MS', sans-serif" }}
        >
          Nearby results
        </span>
        {searching && (
          <span style={{ color: "#e8a04a" }}>
            <Spinner size={12} />
          </span>
        )}
      </div>

      {suggestions.map((loc, i) => (
        <button
          key={`${loc.primary}-${i}`}
          onClick={() => pickLocation(loc)}
          className="w-full flex items-start gap-3 px-4 py-3 text-left transition-all duration-100"
          style={{
            fontFamily: "'Trebuchet MS', sans-serif",
            background:
              i === activeIdx ? "rgba(232,160,74,0.1)" : "transparent",
            borderLeft:
              i === activeIdx ? "2px solid #e8a04a" : "2px solid transparent",
          }}
          onMouseEnter={() => setActiveIdx(i)}
          onMouseLeave={() => setActiveIdx(-1)}
        >
          {/* Pin dot */}
          <span className="mt-0.5 flex-shrink-0">
            <PinIcon
              size={15}
              color="#e8a04a"
              opacity={i === activeIdx ? 1 : 0.55}
            />
          </span>

          <div className="flex-1 min-w-0">
            {/* Highlight matching text */}
            <p className="text-sm text-gray-100 truncate leading-snug">
              {highlightMatch(loc.primary, query)}
            </p>
            {loc.secondary && (
              <p
                className="text-xs mt-0.5 truncate"
                style={{ color: "#6b5e50" }}
              >
                {loc.secondary}
              </p>
            )}
          </div>

          {/* Pincode badge */}
          {loc.pincode && (
            <span
              className="flex-shrink-0 text-xs px-2 py-0.5 rounded-full self-center"
              style={{
                background: "rgba(232,160,74,0.1)",
                color: "#e8a04a",
                border: "1px solid rgba(232,160,74,0.2)",
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {loc.pincode}
            </span>
          )}
        </button>
      ))}

      {/* No results */}
      {!searching && suggestions.length === 0 && query.trim().length >= 2 && (
        <p
          className="text-sm text-center py-5"
          style={{ color: "#6b5e50", fontFamily: "'Trebuchet MS', sans-serif" }}
        >
          No results found for "{query}"
        </p>
      )}

      <div
        className="px-4 py-2 flex items-center gap-1.5"
        style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}
      >
        <svg width="11" height="11" viewBox="0 0 24 24" fill="#6b5e50">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
        </svg>
        <span
          className="text-xs"
          style={{ color: "#3d342c", fontFamily: "'Trebuchet MS', sans-serif" }}
        >
          Powered by OpenStreetMap
        </span>
      </div>
    </div>
  );

  return (
    <div
      style={{
        fontFamily: "'Georgia', serif",
        background: "#0f0d0b",
        minHeight: "100vh",
      }}
      className="text-white"
    >
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

        {/* ── LOCATION SEARCH ── */}
        <div
          ref={wrapperRef}
          className="mt-10 relative z-10 w-full max-w-md px-2"
        >
          {/* ── MOBILE layout (< sm) ── */}
          <div className="flex flex-col gap-3 sm:hidden">
            <div
              className="flex items-center w-full rounded-full"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: `1px solid ${error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`,
                backdropFilter: "blur(12px)",
              }}
            >
              <span className="pl-4 pr-2 text-gray-500 flex-shrink-0">
                <PinIcon size={15} />
              </span>
              <input
                {...inputProps}
                className={inputProps.className + " py-3"}
              />
              {query && (
                <button
                  onClick={() => {
                    setQuery("");
                    setSuggestions([]);
                    setDropdownOpen(false);
                    setSelected(null);
                  }}
                  className="text-gray-600 hover:text-gray-400 flex-shrink-0 px-2"
                >
                  <svg
                    width="13"
                    height="13"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18 6 6 18M6 6l12 12" />
                  </svg>
                </button>
              )}
              <GpsButton size={16} />
            </div>
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

          {/* ── DESKTOP layout (≥ sm) ── */}
          <div
            className="hidden sm:flex items-center w-full rounded-full"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: `1px solid ${error ? "rgba(239,68,68,0.5)" : "rgba(255,255,255,0.12)"}`,
              backdropFilter: "blur(12px)",
            }}
          >
            <span className="pl-5 pr-2 text-gray-500 flex-shrink-0">
              <PinIcon size={17} />
            </span>
            <input {...inputProps} className={inputProps.className + " py-3"} />
            {/* Searching spinner inside input */}
            {searching && (
              <span className="flex-shrink-0 pr-1" style={{ color: "#6b5e50" }}>
                <Spinner size={14} />
              </span>
            )}
            {/* Clear button */}
            {query && !searching && (
              <button
                onClick={() => {
                  setQuery("");
                  setSuggestions([]);
                  setDropdownOpen(false);
                  setSelected(null);
                }}
                className="text-gray-600 hover:text-gray-400 flex-shrink-0 px-1"
              >
                <svg
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 6 6 18M6 6l12 12" />
                </svg>
              </button>
            )}
            <GpsButton size={17} />
            <button
              onClick={handleExplore}
              className="px-6 py-3 text-sm font-semibold rounded-full flex-shrink-0 transition-all duration-200 hover:brightness-110 active:scale-95"
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

          {/* Error */}
          {error && (
            <p
              className="mt-2 text-xs text-center"
              style={{
                color: "#ef4444",
                fontFamily: "'Trebuchet MS', sans-serif",
              }}
            >
              {error}
            </p>
          )}

          {/* Selected location confirmation pill */}
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
                Delivering to {selectedLocation.primary}
                {selectedLocation.pincode
                  ? ` · ${selectedLocation.pincode}`
                  : ""}
              </span>
            </div>
          )}

          {/* Dropdown */}
          {dropdownOpen && (suggestions.length > 0 || searching) && (
            <Dropdown />
          )}
        </div>
      </section>
    </div>
  );
}

// ── Bold-highlight the matched portion of text ───────────────────
function highlightMatch(text, query) {
  if (!query.trim()) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase().trim());
  if (idx === -1) return text;
  return (
    <>
      {text.slice(0, idx)}
      <strong style={{ color: "#e8a04a", fontWeight: 600 }}>
        {text.slice(idx, idx + query.trim().length)}
      </strong>
      {text.slice(idx + query.trim().length)}
    </>
  );
}
