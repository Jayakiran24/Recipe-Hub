// import { useNavigate } from "react-router-dom";
// import { Trash2 } from "lucide-react";
// import { useState } from "react";

// export default function Cart() {
//   const navigate = useNavigate();
//   const [cartItems, setCartItems] = useState(() => {
//     const savedCart = localStorage.getItem("cartItems");
//     return savedCart ? JSON.parse(savedCart) : [];
//   });
//   // const [cartItems, setCartItems] = useState([
//   //   {
//   //     id: 1,
//   //     name: "Hyderabadi Dum Biryani",
//   //     restaurant: "Paradise Biryani",
//   //     price: 399,
//   //     quantity: 2,
//   //     image:
//   //       "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&q=80",
//   //   },
//   //   {
//   //     id: 2,
//   //     name: "Butter Chicken",
//   //     restaurant: "Pind Balluchi",
//   //     price: 299,
//   //     quantity: 1,
//   //     image:
//   //       "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&q=80",
//   //   },
//   // ]);

//   // const increaseQty = (id) => {
//   //   setCartItems((prev) =>
//   //     prev.map((item) =>
//   //       item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
//   //     ),
//   //   );
//   // };

//   // const decreaseQty = (id) => {
//   //   setCartItems((prev) =>
//   //     prev
//   //       .map((item) =>
//   //         item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
//   //       )
//   //       .filter((item) => item.quantity > 0),
//   //   );
//   // };

//   // const removeItem = (id) => {
//   //   setCartItems((prev) => prev.filter((item) => item.id !== id));
//   // };

//   const increaseQty = (id) => {
//     const updated = cartItems.map((item) =>
//       item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
//     );

//     setCartItems(updated);
//     localStorage.setItem("cartItems", JSON.stringify(updated));
//   };

//   const decreaseQty = (id) => {
//     const updated = cartItems
//       .map((item) =>
//         item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
//       )
//       .filter((item) => item.quantity > 0);

//     setCartItems(updated);
//     localStorage.setItem("cartItems", JSON.stringify(updated));
//   };

//   const removeItem = (id) => {
//     const updated = cartItems.filter((item) => item.id !== id);

//     setCartItems(updated);
//     localStorage.setItem("cartItems", JSON.stringify(updated));
//   };

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.price * item.quantity,
//     0,
//   );

//   const deliveryFee = 49;
//   const gst = Math.round(subtotal * 0.05);
//   const total = subtotal + deliveryFee + gst;

//   return (
//     <div className="min-h-screen bg-[#0f0d0b] text-white py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Heading */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-[#f5f0ea]">Shopping Cart</h1>
//           <p className="text-gray-400 mt-2">Review your selected items</p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Cart Items */}
//           <div className="lg:col-span-2 space-y-5">
//             {cartItems.length === 0 ? (
//               <div className="bg-[#1a1612] rounded-2xl p-10 text-center border border-gray-800">
//                 <h2 className="text-2xl font-bold mb-3">Cart is Empty</h2>

//                 <button
//                   onClick={() => navigate("/order")}
//                   className="mt-4 px-6 py-3 rounded-xl bg-[#e8a04a] text-black font-semibold"
//                 >
//                   Browse Food
//                 </button>
//               </div>
//             ) : (
//               cartItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-[#1a1612] border border-gray-800 rounded-2xl overflow-hidden"
//                 >
//                   <div className="flex flex-col md:flex-row">
//                     {/* Image */}
//                     <img
//                       src={item.img}
//                       alt={item.name}
//                       className="w-full md:w-40 h-40 object-cover"
//                     />
//                     {/* <p
//                       style={{
//                         color: "#e8a04a",
//                         fontSize: "0.9rem",
//                         fontWeight: "bold",
//                         marginBottom: "10px",
//                       }}
//                     >
//                       ₹{r.price}
//                     </p> */}
//                     {/* Details */}
//                     <div className="flex-1 p-5">
//                       <div className="flex justify-between">
//                         <div>
//                           <h2 className="text-xl font-bold">{item.name}</h2>

//                           <p className="text-gray-400 text-sm mt-1">
//                             {item.restaurant}
//                           </p>
//                         </div>

//                         <button
//                           onClick={() => removeItem(item.id)}
//                           className="text-red-400 hover:text-red-500"
//                         >
//                           <Trash2 size={20} />
//                         </button>
//                       </div>

//                       <div className="flex justify-between items-center mt-6">
//                         <span className="text-2xl font-bold text-[#e8a04a]">
//                           ₹{item.price}
//                         </span>

//                         <div className="flex items-center gap-3">
//                           <button
//                             onClick={() => decreaseQty(item.id)}
//                             className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600"
//                           >
//                             -
//                           </button>

//                           <span className="font-semibold text-lg">
//                             {item.quantity}
//                           </span>

//                           <button
//                             onClick={() => increaseQty(item.id)}
//                             className="w-9 h-9 rounded-full bg-[#e8a04a] text-black font-bold"
//                           >
//                             +
//                           </button>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             )}
//           </div>

//           {/* Summary */}
//           <div>
//             <div className="bg-[#1a1612] border border-gray-800 rounded-2xl p-6 sticky top-6">
//               <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

//               <div className="space-y-4">
//                 <div className="flex justify-between text-gray-300">
//                   <span>Subtotal</span>
//                   <span>₹{subtotal}</span>
//                 </div>

//                 <div className="flex justify-between text-gray-300">
//                   <span>Delivery Fee</span>
//                   <span>₹{deliveryFee}</span>
//                 </div>

//                 <div className="flex justify-between text-gray-300">
//                   <span>GST</span>
//                   <span>₹{gst}</span>
//                 </div>

//                 <hr className="border-gray-700" />

//                 <div className="flex justify-between text-xl font-bold">
//                   <span>Total</span>
//                   <span className="text-[#e8a04a]">₹{total}</span>
//                 </div>
//               </div>

//               <button
//                 onClick={() => navigate("/checkout")}
//                 className="w-full mt-6 py-3 rounded-xl bg-[#e8a04a] text-black font-bold hover:opacity-90 transition"
//               >
//                 Proceed To Checkout
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import { useState } from "react";

export default function Cart() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem("cartItems");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const increaseQty = (id) => {
    const updated = cartItems.map((item) =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item,
    );
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const decreaseQty = (id) => {
    const updated = cartItems
      .map((item) =>
        item.id === id ? { ...item, quantity: item.quantity - 1 } : item,
      )
      .filter((item) => item.quantity > 0);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter((item) => item.id !== id);
    setCartItems(updated);
    localStorage.setItem("cartItems", JSON.stringify(updated));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );

  const deliveryFee = 49;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + gst;

  return (
    <div className="min-h-screen bg-[#0f0d0b] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#f5f0ea]">Shopping Cart</h1>
          <p className="text-gray-400 mt-2">Review your selected items</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-5">
            {cartItems.length === 0 ? (
              <div className="bg-[#1a1612] rounded-2xl p-10 text-center border border-gray-800">
                <h2 className="text-2xl font-bold mb-3">Your cart is empty</h2>
                <p className="text-gray-400 text-sm mb-4">
                  Add some delicious food to get started.
                </p>
                <button
                  onClick={() => navigate("/order")}
                  className="mt-4 px-6 py-3 rounded-xl bg-[#e8a04a] text-black font-semibold"
                >
                  Browse Food
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#1a1612] border border-gray-800 rounded-2xl overflow-hidden"
                >
                  <div className="flex flex-col md:flex-row">
                    {/* Image — key is `img` as set in Order.jsx */}
                    <img
                      src={item.img}
                      alt={item.name}
                      className="w-full md:w-40 h-40 object-cover"
                    />

                    {/* Details */}
                    <div className="flex-1 p-5">
                      <div className="flex justify-between">
                        <div>
                          <h2 className="text-xl font-bold">{item.name}</h2>
                          {/* subtitle holds cuisine info; chef shows who prepared it */}
                          <p className="text-gray-400 text-sm mt-1">
                            {item.subtitle}
                          </p>
                          <p className="text-[#e8a04a] text-xs mt-0.5">
                            {item.chef}
                          </p>
                        </div>

                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-400 hover:text-red-500"
                        >
                          <Trash2 size={20} />
                        </button>
                      </div>

                      <div className="flex justify-between items-center mt-6">
                        {/* price comes from the `price` field added in Order.jsx */}
                        <span className="text-2xl font-bold text-[#e8a04a]">
                          ₹{item.price}
                        </span>

                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => decreaseQty(item.id)}
                            className="w-9 h-9 rounded-full bg-gray-700 hover:bg-gray-600"
                          >
                            -
                          </button>

                          <span className="font-semibold text-lg">
                            {item.quantity}
                          </span>

                          <button
                            onClick={() => increaseQty(item.id)}
                            className="w-9 h-9 rounded-full bg-[#e8a04a] text-black font-bold"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      {/* Line total */}
                      <p className="text-gray-500 text-xs mt-2 text-right">
                        ₹{item.price} × {item.quantity} = ₹
                        {item.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Summary */}
          <div>
            <div className="bg-[#1a1612] border border-gray-800 rounded-2xl p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>₹{subtotal}</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>Delivery Fee</span>
                  <span>₹{deliveryFee}</span>
                </div>

                <div className="flex justify-between text-gray-300">
                  <span>GST (5%)</span>
                  <span>₹{gst}</span>
                </div>

                <hr className="border-gray-700" />

                <div className="flex justify-between text-xl font-bold">
                  <span>Total</span>
                  <span className="text-[#e8a04a]">₹{total}</span>
                </div>
              </div>

              <button
                onClick={() => navigate("/checkout")}
                className="w-full mt-6 py-3 rounded-xl bg-[#e8a04a] text-black font-bold hover:opacity-90 transition"
              >
                Proceed To Checkout
              </button>

              <button
                onClick={() => navigate("/order")}
                className="w-full mt-3 py-3 rounded-xl border border-gray-700 hover:border-[#e8a04a] transition text-sm"
              >
                ← Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
