// src/pages/Order/RestaurantDetail.jsx
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// ─── SHARED RESTAURANT DATA (same as Order.jsx) ────────────────────────────
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
    category: "biryani",
    chef: "Chef Irfan",
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=800&q=80",
    about:
      "Behrouz Biryani brings the age-old Mughal secret of slow-cooked dum biryani to your table. Every grain is kissed with saffron, sealed under dough, and cooked over low flame for hours. A royal experience, delivered.",
    tags: ["Mughlai", "Dum Style", "Spicy", "Halal"],
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
    category: "curry",
    chef: "Chef Gurpreet",
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
    about:
      "Pind Balluchi is the taste of Punjab in every bite — creamy dals, smoky tandoor breads, and the iconic butter chicken recipe passed down through three generations. Rustic, hearty, unapologetically rich.",
    tags: ["Punjabi", "Tandoor", "Creamy", "Family Style"],
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
    category: "biryani",
    chef: "Chef Saleem",
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
    about:
      "Paradise is an institution. Born in Hyderabad, perfected over decades — the dum gosht biryani here is a symphony of long-grain basmati, slow-cooked mutton, caramelised onions, and a secret spice blend you will not find anywhere else.",
    tags: ["Hyderabadi", "Dum Gosht", "Mutton", "Heritage"],
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
    category: "snacks",
    chef: "Chef Ramesh",
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&q=80",
    about:
      "Haldiram's has been India's favourite snack brand for over 80 years. From pani puri to kaju katli, every item is made with traditional recipes and the finest ingredients. The taste of home, no matter where you are.",
    tags: ["Vegetarian", "Snacks", "Sweets", "Street Food"],
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
    category: "thali",
    chef: "Chef Arjun",
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    about:
      "India's favourite casual dining chain brings the live grill experience home. Juicy seekh kebabs, tender chicken tikka, and grilled veggies marinated in Chef Arjun's signature spice rubs — straight from the fire to your plate.",
    tags: ["BBQ", "Non-Veg", "Live Grill", "Party Style"],
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
    category: "snacks",
    chef: "Chef Tenzing",
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=800&q=80",
    about:
      "Wow Momo started in a tiny stall in Kolkata and became a national obsession. Chef Tenzing's dumplings are hand-folded, steamed to perfection, and served with a fiery red chutney that will make you order twice.",
    tags: ["Tibetan", "Steamed", "Fried", "Quick Bites"],
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
    category: "rolls",
    chef: "Chef Priya",
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=800&q=80",
    about:
      "Rolls Mania brings the legendary Kolkata kathi roll to every city. Flaky parathas, marinated fillings, fresh onions, and a tangy mint chutney — rolled tight and served hot. The perfect meal on the go.",
    tags: ["Rolls", "Street Food", "Quick", "Spicy"],
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
    category: "thali",
    chef: "Chef Meena",
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=800&q=80",
    about:
      "A traditional unlimited thali experience, now at your doorstep. Chef Meena curates a spread of 15+ dishes — dal baati churma, gatte ki sabzi, missi roti, raita, and rotating seasonal specials — all cooked fresh in pure ghee.",
    tags: ["Vegetarian", "Thali", "Pure Ghee", "Traditional"],
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
    category: "desserts",
    chef: "Chef Suresh",
    img: "https://images.unsplash.com/photo-1666190616490-1e60bb39c9f2?w=800&q=80",
    about:
      "Three generations of mithai-making excellence. Chef Suresh uses original recipes and zero artificial flavours. From silky gulab jamun to flaky mawa kachori, Gulab Sweets is where Bengaluru comes for celebrations.",
    tags: ["Sweets", "Mithai", "Pure Milk", "Festive"],
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
    category: "drinks",
    chef: "Chef Sneha",
    img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=800&q=80",
    about:
      "Keventers has been serving India's most iconic milkshakes since 1925. Thick, creamy, and made with real fruit and full-fat milk — in their signature glass bottles. Cold, indulgent, and utterly timeless.",
    tags: ["Shakes", "Cold Drinks", "Dairy", "Classic"],
  },
];

// ─── MENU DATA per restaurant ──────────────────────────────────────────────
const MENU_DATA = {
  1: {
    tabs: ["Biryani", "Starters", "Breads", "Drinks"],
    Biryani: [
      {
        id: 101,
        name: "Behrouz Dum Biryani – Chicken",
        desc: "Slow-cooked dum biryani with saffron, whole spices & tender chicken",
        price: 350,
        veg: false,
        bestseller: true,
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
      },
      {
        id: 102,
        name: "Royal Mutton Biryani",
        desc: "Aged basmati, slow-cooked mutton, fried onions & rose water",
        price: 420,
        veg: false,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
      },
      {
        id: 103,
        name: "Paneer Dum Biryani",
        desc: "Layered biryani with cottage cheese, cashews & saffron milk",
        price: 299,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
      },
      {
        id: 104,
        name: "Prawns Biryani",
        desc: "Fresh tiger prawns marinated in coastal spices, dum cooked",
        price: 480,
        veg: false,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
      },
    ],
    Starters: [
      {
        id: 105,
        name: "Seekh Kebab",
        desc: "Minced lamb with green chillies, ginger & charcoal smoke",
        price: 249,
        veg: false,
        bestseller: true,
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
      },
      {
        id: 106,
        name: "Hara Bhara Kebab",
        desc: "Crispy spinach & paneer patties with mint chutney",
        price: 199,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
      },
    ],
    Breads: [
      {
        id: 107,
        name: "Butter Naan",
        desc: "Soft tandoor bread brushed with salted butter",
        price: 59,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
      },
      {
        id: 108,
        name: "Garlic Kulcha",
        desc: "Stuffed with garlic paste, baked in clay oven",
        price: 79,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
      },
    ],
    Drinks: [
      {
        id: 109,
        name: "Saffron Lassi",
        desc: "Thick chilled yoghurt drink with kesar & rose petals",
        price: 99,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&q=80",
      },
      {
        id: 110,
        name: "Roohafza Sharbat",
        desc: "Chilled rose-basil drink, sweet & refreshing",
        price: 79,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80",
      },
    ],
  },
  2: {
    tabs: ["Mains", "Starters", "Breads", "Desserts"],
    Mains: [
      {
        id: 201,
        name: "Butter Chicken",
        desc: "Tender chicken in velvety tomato-cashew gravy, finished with cream",
        price: 299,
        veg: false,
        bestseller: true,
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
      },
      {
        id: 202,
        name: "Dal Makhani",
        desc: "Slow-cooked black lentils, lots of butter, overnight preparation",
        price: 229,
        veg: true,
        bestseller: true,
        img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
      },
      {
        id: 203,
        name: "Sarson Da Saag",
        desc: "Seasonal mustard greens with makki roti — the soul of Punjab",
        price: 249,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
      },
      {
        id: 204,
        name: "Pind Da Murgh",
        desc: "Village-style whole chicken curry in desi ghee & whole spices",
        price: 349,
        veg: false,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&q=80",
      },
    ],
    Starters: [
      {
        id: 205,
        name: "Amritsari Fish",
        desc: "Crispy battered sole fish with ajwain & chaat masala",
        price: 279,
        veg: false,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
      },
      {
        id: 206,
        name: "Paneer Tikka",
        desc: "Charred cottage cheese cubes, peppers, onion in tandoor",
        price: 249,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=400&q=80",
      },
    ],
    Breads: [
      {
        id: 207,
        name: "Makki di Roti",
        desc: "Cornmeal flatbread — traditional Punjab staple",
        price: 49,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
      },
      {
        id: 208,
        name: "Tandoori Paratha",
        desc: "Whole wheat paratha with ghee finish from the tandoor",
        price: 69,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&q=80",
      },
    ],
    Desserts: [
      {
        id: 209,
        name: "Phirni",
        desc: "Chilled ground rice pudding in earthen pot with cardamom",
        price: 119,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1666190616490-1e60bb39c9f2?w=400&q=80",
      },
      {
        id: 210,
        name: "Gajar Halwa",
        desc: "Slow-cooked carrot pudding with khoya & silver leaf",
        price: 139,
        veg: true,
        bestseller: false,
        img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&q=80",
      },
    ],
  },
};

// Default menu for restaurants without specific data
const DEFAULT_MENU = (r) => ({
  tabs: ["Signature", "Starters", "Drinks"],
  Signature: [
    {
      id: r.id * 100 + 1,
      name: `${r.name} Special`,
      desc: `Our chef's signature preparation — the dish that started it all`,
      price: r.price,
      veg: false,
      bestseller: true,
      img: r.img,
    },
    {
      id: r.id * 100 + 2,
      name: `Classic ${r.subtitle.split("•")[0].trim()} Platter`,
      desc: "A generous platter featuring our most-loved flavours",
      price: Math.round(r.price * 1.2),
      veg: false,
      bestseller: false,
      img: r.img,
    },
    {
      id: r.id * 100 + 3,
      name: `Veg Delight`,
      desc: "A fresh, colourful vegetarian option curated by our kitchen",
      price: Math.round(r.price * 0.85),
      veg: true,
      bestseller: false,
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=400&q=80",
    },
    {
      id: r.id * 100 + 4,
      name: `${r.chef.replace("By ", "")} Exclusive`,
      desc: "A limited dish personally crafted and plated by our head chef",
      price: Math.round(r.price * 1.5),
      veg: false,
      bestseller: false,
      img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&q=80",
    },
  ],
  Starters: [
    {
      id: r.id * 100 + 5,
      name: "Crispy Starters Combo",
      desc: "Assorted fried snacks with house dipping sauces",
      price: 199,
      veg: false,
      bestseller: false,
      img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&q=80",
    },
    {
      id: r.id * 100 + 6,
      name: "Garden Fresh Salad",
      desc: "Seasonal greens, cherry tomatoes, house lemon dressing",
      price: 149,
      veg: true,
      bestseller: false,
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=400&q=80",
    },
  ],
  Drinks: [
    {
      id: r.id * 100 + 7,
      name: "Fresh Lime Soda",
      desc: "Sweet & salt, served ice cold",
      price: 69,
      veg: true,
      bestseller: false,
      img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=400&q=80",
    },
    {
      id: r.id * 100 + 8,
      name: "Masala Chai",
      desc: "Ginger-cardamom tea brewed strong with full-fat milk",
      price: 49,
      veg: true,
      bestseller: false,
      img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=400&q=80",
    },
  ],
});

// ─── COMPONENT ─────────────────────────────────────────────────────────────
export default function RecipeDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const restaurant = RESTAURANTS.find((r) => r.id === parseInt(id));

  const menuData = MENU_DATA[parseInt(id)] || DEFAULT_MENU(restaurant);
  const [activeTab, setActiveTab] = useState(menuData.tabs[0]);
  const [cart, setCart] = useState({});

  if (!restaurant) {
    return (
      <div
        style={{
          background: "#0f0d0b",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{ textAlign: "center", color: "#f5f0ea" }}>
          <p style={{ fontSize: "1.2rem", marginBottom: "16px" }}>
            Restaurant not found.
          </p>
          <button
            onClick={() => navigate("/order")}
            style={{
              padding: "10px 24px",
              background: "#e8a04a",
              border: "none",
              borderRadius: "12px",
              color: "#0f0d0b",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            ← Back to Order
          </button>
        </div>
      </div>
    );
  }

  const addToCart = (itemId) =>
    setCart((p) => ({ ...p, [itemId]: (p[itemId] || 0) + 1 }));
  const removeFromCart = (itemId) =>
    setCart((p) => {
      const n = { ...p };
      if (n[itemId] > 1) n[itemId]--;
      else delete n[itemId];
      return n;
    });

  const totalItems = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalPrice = Object.entries(cart).reduce((acc, [itemId, qty]) => {
    const allItems = Object.values(menuData).flat().filter(Array.isArray);
    // search across all tab arrays
    let found = null;
    menuData.tabs.forEach((tab) => {
      const match = menuData[tab]?.find((i) => i.id === parseInt(itemId));
      if (match) found = match;
    });
    return acc + (found ? found.price * qty : 0);
  }, 0);

  const handleViewCart = () => {
    // Collect selected items from this restaurant menu
    const selectedItems = [];
    menuData.tabs.forEach((tab) => {
      menuData[tab]?.forEach((item) => {
        if (cart[item.id]) {
          selectedItems.push({
            ...item,
            img: item.img,
            quantity: cart[item.id],
          });
        }
      });
    });

    // Merge with existing cart from localStorage
    const existing = JSON.parse(localStorage.getItem("cartItems") || "[]");
    const merged = [...existing];
    selectedItems.forEach((newItem) => {
      const idx = merged.findIndex((e) => e.id === newItem.id);
      if (idx > -1) merged[idx].quantity += newItem.quantity;
      else merged.push(newItem);
    });

    localStorage.setItem("cartItems", JSON.stringify(merged));
    navigate("/cart");
  };

  const currentMenuItems = menuData[activeTab] || [];

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
      {/* ══ HERO IMAGE SECTION ════════════════════════════════════════════ */}
      <div
        style={{ position: "relative", height: "320px", overflow: "hidden" }}
      >
        <img
          src={restaurant.img}
          alt={restaurant.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
          }}
        />
        {/* Deep gradient overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(8,6,4,0.35) 0%, rgba(8,6,4,0.92) 100%)",
          }}
        />

        {/* Back button */}
        <button
          onClick={() => navigate("/order")}
          style={{
            position: "absolute",
            top: "16px",
            left: "16px",
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "rgba(10,8,5,0.75)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255,255,255,0.12)",
            color: "#f5f0ea",
            fontSize: "1.1rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ←
        </button>

        {/* Hero content at bottom of image */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            padding: "0 20px 20px",
          }}
        >
          {/* Tag badge */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "5px",
              border: "1px solid rgba(232,160,74,0.4)",
              borderRadius: "20px",
              padding: "3px 12px",
              background: "rgba(232,160,74,0.1)",
              marginBottom: "10px",
            }}
          >
            <span
              style={{
                fontSize: "0.62rem",
                color: "#e8a04a",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                fontWeight: "bold",
              }}
            >
              {restaurant.tag}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Georgia', serif",
              fontSize: "clamp(1.8rem, 6vw, 2.6rem)",
              fontWeight: "bold",
              color: "#f5f0ea",
              lineHeight: 1.1,
              marginBottom: "6px",
            }}
          >
            {restaurant.name}
          </h1>
          <p
            style={{
              color: "#9a8f85",
              fontSize: "0.82rem",
              marginBottom: "14px",
            }}
          >
            {restaurant.subtitle}
          </p>

          {/* Stats row */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                background: "rgba(10,8,5,0.6)",
                backdropFilter: "blur(8px)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "20px",
                padding: "5px 12px",
              }}
            >
              <span style={{ color: "#fbbf24", fontSize: "0.85rem" }}>★</span>
              <span style={{ fontWeight: "bold", fontSize: "0.82rem" }}>
                {restaurant.rating}
              </span>
              <span style={{ color: "#6b6259", fontSize: "0.72rem" }}>
                rating
              </span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "#9a8f85",
                fontSize: "0.78rem",
              }}
            >
              <svg
                width="13"
                height="13"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" strokeLinecap="round" />
              </svg>
              {restaurant.time}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                color: "#9a8f85",
                fontSize: "0.78rem",
              }}
            >
              <svg
                width="13"
                height="13"
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
              {restaurant.distance}
            </div>
          </div>
        </div>
      </div>

      {/* ══ ABOUT SECTION ═════════════════════════════════════════════════ */}
      <div
        style={{
          margin: "20px 16px",
          padding: "18px 20px",
          background: "#1a1612",
          borderRadius: "18px",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
          {/* Chef avatar */}
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background:
                "linear-gradient(135deg, rgba(232,160,74,0.25), rgba(232,160,74,0.08))",
              border: "1.5px solid rgba(232,160,74,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.4rem",
              flexShrink: 0,
            }}
          >
            👨‍🍳
          </div>
          <div style={{ flex: 1 }}>
            <p
              style={{
                color: "#e8a04a",
                fontSize: "0.72rem",
                fontWeight: "bold",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                marginBottom: "3px",
              }}
            >
              {restaurant.chef}
            </p>
            <p
              style={{ color: "#9a8f85", fontSize: "0.82rem", lineHeight: 1.6 }}
            >
              {restaurant.about}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            marginTop: "14px",
            flexWrap: "wrap",
          }}
        >
          {restaurant.tags.map((tag) => (
            <span
              key={tag}
              style={{
                padding: "4px 12px",
                borderRadius: "20px",
                background: "rgba(232,160,74,0.08)",
                border: "1px solid rgba(232,160,74,0.2)",
                color: "#c9a96e",
                fontSize: "0.68rem",
                letterSpacing: "0.04em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* ══ MENU SECTION ══════════════════════════════════════════════════ */}
      <div style={{ padding: "0 16px" }}>
        {/* Section heading */}
        <h2
          style={{
            fontFamily: "'Georgia', serif",
            fontSize: "1.3rem",
            fontWeight: "bold",
            color: "#f5f0ea",
            marginBottom: "16px",
          }}
        >
          Our Menu
        </h2>

        {/* Tab bar */}
        <div
          style={{
            display: "flex",
            gap: "8px",
            overflowX: "auto",
            paddingBottom: "4px",
            scrollbarWidth: "none",
            marginBottom: "20px",
          }}
        >
          {menuData.tabs.map((tab) => {
            const active = activeTab === tab;
            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  flexShrink: 0,
                  padding: "8px 20px",
                  borderRadius: "30px",
                  border: active
                    ? "1.5px solid #e8a04a"
                    : "1.5px solid rgba(255,255,255,0.1)",
                  background: active
                    ? "linear-gradient(135deg, rgba(232,160,74,0.2), rgba(232,160,74,0.06))"
                    : "rgba(255,255,255,0.04)",
                  color: active ? "#e8a04a" : "#6b6259",
                  fontSize: "0.78rem",
                  fontWeight: active ? "700" : "400",
                  cursor: "pointer",
                  letterSpacing: "0.03em",
                  transition: "all 0.2s ease",
                }}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Menu items */}
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {currentMenuItems.map((item) => (
            <div
              key={item.id}
              style={{
                display: "flex",
                gap: "14px",
                padding: "14px",
                background: "#1a1612",
                borderRadius: "16px",
                border: "1px solid rgba(255,255,255,0.06)",
                alignItems: "flex-start",
                transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(232,160,74,0.2)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)")
              }
            >
              {/* Food image */}
              <div
                style={{
                  width: "90px",
                  height: "90px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  flexShrink: 0,
                  position: "relative",
                }}
              >
                <img
                  src={item.img}
                  alt={item.name}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                {item.bestseller && (
                  <div
                    style={{
                      position: "absolute",
                      bottom: "4px",
                      left: "4px",
                      background: "#e8a04a",
                      color: "#0f0d0b",
                      fontSize: "0.52rem",
                      fontWeight: "bold",
                      padding: "2px 6px",
                      borderRadius: "4px",
                      letterSpacing: "0.06em",
                    }}
                  >
                    BEST
                  </div>
                )}
              </div>

              {/* Item details */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "6px",
                    marginBottom: "3px",
                  }}
                >
                  {/* Veg/Non-veg indicator */}
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "2px",
                      border: `2px solid ${item.veg ? "#4ade80" : "#f87171"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "2px",
                    }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: item.veg ? "#4ade80" : "#f87171",
                      }}
                    />
                  </div>
                  <h4
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "0.92rem",
                      fontWeight: "bold",
                      color: "#f5f0ea",
                      lineHeight: 1.3,
                    }}
                  >
                    {item.name}
                  </h4>
                </div>

                <p
                  style={{
                    color: "#6b6259",
                    fontSize: "0.72rem",
                    lineHeight: 1.5,
                    marginBottom: "10px",
                  }}
                >
                  {item.desc}
                </p>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Georgia', serif",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      color: "#e8a04a",
                    }}
                  >
                    ₹{item.price}
                  </span>

                  {/* Add/Remove controls */}
                  {cart[item.id] ? (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <button
                        onClick={() => removeFromCart(item.id)}
                        style={{
                          width: "30px",
                          height: "30px",
                          borderRadius: "50%",
                          background: "rgba(232,160,74,0.12)",
                          border: "1px solid rgba(232,160,74,0.35)",
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
                          fontWeight: "bold",
                          fontSize: "0.95rem",
                          minWidth: "16px",
                          textAlign: "center",
                        }}
                      >
                        {cart[item.id]}
                      </span>
                      <button
                        onClick={() => addToCart(item.id)}
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
                          boxShadow: "0 4px 12px rgba(232,160,74,0.35)",
                        }}
                      >
                        +
                      </button>
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart(item.id)}
                      style={{
                        padding: "7px 20px",
                        borderRadius: "30px",
                        background: "linear-gradient(135deg, #e8a04a, #c97c28)",
                        border: "none",
                        color: "#0f0d0b",
                        fontSize: "0.78rem",
                        fontWeight: "bold",
                        cursor: "pointer",
                        letterSpacing: "0.03em",
                        boxShadow: "0 4px 12px rgba(232,160,74,0.3)",
                        transition: "filter 0.2s",
                      }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.filter = "brightness(1.12)")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.filter = "brightness(1)")
                      }
                    >
                      Add +
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
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
            boxShadow: "0 16px 48px rgba(0,0,0,0.8)",
            minWidth: "280px",
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
              {totalItems} item{totalItems > 1 ? "s" : ""} · ₹{totalPrice}
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
            onClick={handleViewCart}
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
            Go to Cart →
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
