// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/navigation";
// const RECIPES = [
//   {
//     id: 1,
//     title: "Nordic Salmon Bowl",
//     tags: ["Healthy", "Seafood"],
//     time: "15 min",
//     trending: true,
//     img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
//   },
//   {
//     id: 2,
//     title: "Truffle Mushroom Pasta",
//     tags: ["Italian", "Vegetarian"],
//     time: "25 min",
//     trending: false,
//     img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
//   },
//   {
//     id: 3,
//     title: "Wagyu Beef Tataki",
//     tags: ["Japanese", "Premium"],
//     time: "30 min",
//     trending: true,
//     img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
//   },
//   {
//     id: 4,
//     title: "Miso Glazed Aubergine",
//     tags: ["Vegan", "Asian"],
//     time: "20 min",
//     trending: false,
//     img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
//   },
//   {
//     id: 5,
//     title: "Saffron Lobster Bisque",
//     tags: ["Seafood", "Gourmet"],
//     time: "45 min",
//     trending: true,
//     img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
//   },
//   {
//     id: 6,
//     title: "Nordic Salmon Bowl",
//     tags: ["Healthy", "Seafood"],
//     time: "15 min",
//     trending: true,
//     img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&q=80",
//   },
//   {
//     id: 7,
//     title: "Truffle Mushroom Pasta",
//     tags: ["Italian", "Vegetarian"],
//     time: "25 min",
//     trending: false,
//     img: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=600&q=80",
//   },
//   {
//     id: 8,
//     title: "Wagyu Beef Tataki",
//     tags: ["Japanese", "Premium"],
//     time: "30 min",
//     trending: true,
//     img: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=80",
//   },
//   {
//     id: 9,
//     title: "Miso Glazed Aubergine",
//     tags: ["Vegan", "Asian"],
//     time: "20 min",
//     trending: false,
//     img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80",
//   },
//   {
//     id: 10,
//     title: "Saffron Lobster Bisque",
//     tags: ["Seafood", "Gourmet"],
//     time: "45 min",
//     trending: true,
//     img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=600&q=80",
//   },
// ];

// export default function PopularRecipes() {
//   const navigate = useNavigate();
//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <section className="bg-[#0f0d0b] py-10">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="px-5 mb-6">
//           <h2 className="text-2xl font-bold text-[#f5f0ea]">
//             Trending Recipes
//           </h2>

//           <p className="text-sm text-[#6b6259]">
//             Hand-picked seasonal inspirations
//           </p>
//         </div>

//         <Swiper
//           modules={[Navigation, Autoplay]}
//           navigation
//           spaceBetween={16}
//           slidesPerView={"auto"}
//           className="px-5"
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//             pauseOnMouseEnter: true,
//           }}
//           loop={true}
//           className="px-5"
//         >
//           {RECIPES.map((recipe) => (
//             <SwiperSlide key={recipe.id} className="!w-[280px]">
//               <div
//                 onClick={() => navigate(`/recipes/${recipe.id}`)}
//                 onMouseEnter={() => setHoveredId(recipe.id)}
//                 onMouseLeave={() => setHoveredId(null)}
//                 className={`
//                 overflow-hidden
//                 rounded-2xl
//                 bg-[#1a1612]
//                 border
//                 cursor-pointer
//                 transition-all
//                 duration-300
//                 ${
//                   hoveredId === recipe.id
//                     ? "border-[#e8a04a]/40 shadow-2xl -translate-y-1"
//                     : "border-white/10"
//                 }
//               `}
//               >
//                 <img
//                   src={recipe.img}
//                   alt={recipe.title}
//                   className="h-80 w-full object-cover"
//                 />

//                 <div className="p-4">
//                   <h3 className="text-white font-bold mb-2">{recipe.title}</h3>

//                   <div className="flex flex-wrap gap-2">
//                     {recipe.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="px-2 py-1 rounded-full bg-white/5 text-xs text-gray-400"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }



import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Each recipe maps to a restaurantId so clicking opens that restaurant's detail page
const RECIPES = [
  {
    id: 1,
    restaurantId: 3, // Paradise Biryani
    title: "Hyderabadi Dum Biryani",
    tags: ["Biryani", "Spicy"],
    time: "30 min",
    trending: true,
    img: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
  },
  {
    id: 2,
    restaurantId: 2, // Pind Balluchi
    title: "Butter Chicken Masala",
    tags: ["Punjabi", "Creamy"],
    time: "25 min",
    trending: false,
    img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&q=80",
  },
  {
    id: 3,
    restaurantId: 5, // Barbeque Nation
    title: "Seekh Kebab Platter",
    tags: ["BBQ", "Non-Veg"],
    time: "30 min",
    trending: true,
    img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80",
  },
  {
    id: 4,
    restaurantId: 8, // Rajdhani Thali
    title: "Rajasthani Dal Baati",
    tags: ["Vegetarian", "Traditional"],
    time: "20 min",
    trending: false,
    img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&q=80",
  },
  {
    id: 5,
    restaurantId: 9, // Gulab Sweets
    title: "Gulab Jamun Special",
    tags: ["Sweets", "Dessert"],
    time: "45 min",
    trending: true,
    img: "https://images.unsplash.com/photo-1666190616490-1e60bb39c9f2?w=600&q=80",
  },
  {
    id: 6,
    restaurantId: 6, // Wow Momo
    title: "Steamed Chicken Momos",
    tags: ["Tibetan", "Snacks"],
    time: "15 min",
    trending: true,
    img: "https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=600&q=80",
  },
  {
    id: 7,
    restaurantId: 7, // Rolls Mania
    title: "Kathi Chicken Roll",
    tags: ["Rolls", "Street Food"],
    time: "15 min",
    trending: false,
    img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&q=80",
  },
  {
    id: 8,
    restaurantId: 4, // Haldiram's
    title: "Pani Puri Chaat",
    tags: ["Chaat", "Vegetarian"],
    time: "10 min",
    trending: true,
    img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
  },
  {
    id: 9,
    restaurantId: 10, // Keventers
    title: "Mango Milkshake",
    tags: ["Drinks", "Cold"],
    time: "5 min",
    trending: false,
    img: "https://images.unsplash.com/photo-1541518763669-27fef04b14ea?w=600&q=80",
  },
  {
    id: 10,
    restaurantId: 1, // Behrouz Biryani
    title: "Mughlai Mutton Biryani",
    tags: ["Mughlai", "Premium"],
    time: "40 min",
    trending: true,
    img: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&q=80",
  },
];

export default function PopularRecipes() {
  const navigate = useNavigate();
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className="bg-[#0f0d0b] py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="px-5 mb-6">
          <h2 className="text-2xl font-bold text-[#f5f0ea]">
            Trending Recipes
          </h2>
          <p className="text-sm text-[#6b6259]">
            Hand-picked seasonal inspirations
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          spaceBetween={16}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          className="px-5"
        >
          {RECIPES.map((recipe) => (
            <SwiperSlide key={recipe.id} className="!w-[280px]">
              <div
                onClick={() => navigate(`/order/${recipe.restaurantId}`)}
                onMouseEnter={() => setHoveredId(recipe.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`
                  overflow-hidden
                  rounded-2xl
                  bg-[#1a1612]
                  border
                  cursor-pointer
                  transition-all
                  duration-300
                  ${
                    hoveredId === recipe.id
                      ? "border-[#e8a04a]/40 shadow-2xl -translate-y-1"
                      : "border-white/10"
                  }
                `}
              >
                {/* Card image */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={recipe.img}
                    alt={recipe.title}
                    className="h-full w-full object-cover transition-transform duration-500"
                    style={{
                      transform: hoveredId === recipe.id ? "scale(1.05)" : "scale(1)",
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0d0b]/80 via-transparent to-transparent" />

                  {/* Trending badge */}
                  {recipe.trending && (
                    <div
                      className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-[0.6rem] font-bold tracking-wider uppercase"
                      style={{
                        background: "rgba(232,160,74,0.15)",
                        border: "1px solid rgba(232,160,74,0.4)",
                        color: "#e8a04a",
                      }}
                    >
                      🔥 Trending
                    </div>
                  )}

                  {/* Time badge */}
                  <div
                    className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded-full text-[0.65rem]"
                    style={{
                      background: "rgba(10,8,5,0.75)",
                      backdropFilter: "blur(8px)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#9a8f85",
                    }}
                  >
                    ⏱ {recipe.time}
                  </div>
                </div>

                {/* Card body */}
                <div className="p-4">
                  <h3
                    className="font-bold mb-2 text-[#f5f0ea]"
                    style={{ fontFamily: "'Georgia', serif", fontSize: "0.95rem" }}
                  >
                    {recipe.title}
                  </h3>

                  <div className="flex flex-wrap gap-2 mb-3">
                    {recipe.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-full text-xs"
                        style={{
                          background: "rgba(232,160,74,0.07)",
                          border: "1px solid rgba(232,160,74,0.18)",
                          color: "#c9a96e",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Order Now CTA */}
                  <div
                    className="flex items-center justify-between pt-3"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
                  >
                    <span className="text-[0.7rem] text-[#6b6259]">
                      Tap to view & order
                    </span>
                    <div
                      className="flex items-center gap-1 text-[0.72rem] font-bold"
                      style={{ color: "#e8a04a" }}
                    >
                      Order Now
                      <span style={{ fontSize: "0.8rem" }}>→</span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}