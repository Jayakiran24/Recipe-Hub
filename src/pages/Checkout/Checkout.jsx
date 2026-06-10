// import { useNavigate } from "react-router-dom";

// export default function Checkout() {
//   const navigate = useNavigate();

//   const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

//   const subtotal = cartItems.reduce(
//     (acc, item) => acc + item.quantity * 299,
//     0,
//   );

//   const deliveryFee = 49;
//   const gst = Math.round(subtotal * 0.05);
//   const total = subtotal + deliveryFee + gst;

//   return (
//     <div className="min-h-screen bg-[#0f0d0b] text-white py-10 px-4">
//       <div className="max-w-7xl mx-auto">
//         {/* Header */}
//         <div className="mb-8">
//           <h1 className="text-4xl font-bold text-[#f5f0ea]">Checkout</h1>

//           <p className="text-gray-400 mt-2">Complete your order details</p>
//         </div>

//         <div className="grid lg:grid-cols-3 gap-8">
//           {/* Left Side */}
//           <div className="lg:col-span-2 space-y-6">
//             {/* Delivery Address */}
//             <div className="bg-[#1a1612] border border-gray-800 rounded-2xl p-6">
//               <h2 className="text-2xl font-bold mb-5">Delivery Address</h2>

//               <div className="grid md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Full Name"
//                   className="bg-[#2b241d] border border-gray-700 rounded-xl p-3 outline-none focus:border-[#e8a04a]"
//                 />

//                 <input
//                   type="tel"
//                   placeholder="Phone Number"
//                   className="bg-[#2b241d] border border-gray-700 rounded-xl p-3 outline-none focus:border-[#e8a04a]"
//                 />

//                 <input
//                   type="email"
//                   placeholder="Email Address"
//                   className="md:col-span-2 bg-[#2b241d] border border-gray-700 rounded-xl p-3 outline-none focus:border-[#e8a04a]"
//                 />

//                 <textarea
//                   rows="4"
//                   placeholder="House No, Street, Area, Landmark..."
//                   className="md:col-span-2 bg-[#2b241d] border border-gray-700 rounded-xl p-3 outline-none focus:border-[#e8a04a]"
//                 />
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="bg-[#1a1612] border border-gray-800 rounded-2xl p-6">
//               <h2 className="text-2xl font-bold mb-5">Payment Method</h2>

//               <div className="space-y-4">
//                 <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 cursor-pointer hover:border-[#e8a04a]">
//                   <input type="radio" name="payment" />
//                   <span>UPI Payment</span>
//                 </label>

//                 <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 cursor-pointer hover:border-[#e8a04a]">
//                   <input type="radio" name="payment" />
//                   <span>Credit / Debit Card</span>
//                 </label>

//                 <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 cursor-pointer hover:border-[#e8a04a]">
//                   <input type="radio" name="payment" />
//                   <span>Cash On Delivery</span>
//                 </label>
//               </div>
//             </div>
//           </div>

//           {/* Right Side */}
//           <div>
//             <div className="bg-[#1a1612] border border-gray-800 rounded-2xl p-6 sticky top-6">
//               <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

//               {/* Items */}
//               <div className="space-y-4 mb-6">
//                 {cartItems.map((item) => (
//                   <div key={item.id} className="flex justify-between">
//                     <span>
//                       {item.name} × {item.quantity}
//                     </span>

//                     <span>₹{item.quantity * 299}</span>
//                   </div>
//                 ))}
//               </div>

//               <hr className="border-gray-700 mb-4" />

//               <div className="space-y-3">
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

//               <button className="w-full mt-6 py-3 rounded-xl bg-[#e8a04a] text-black font-bold hover:opacity-90">
//                 Place Order
//               </button>

//               <button
//                 onClick={() => navigate("/cart")}
//                 className="w-full mt-3 py-3 rounded-xl border border-gray-700 hover:border-[#e8a04a]"
//               >
//                 Back To Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import { useNavigate } from "react-router-dom";

export default function Checkout() {
  const navigate = useNavigate();

  const cartItems = JSON.parse(localStorage.getItem("cartItems") || "[]");

  // FIX: use item.price instead of the hardcoded 299
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0,
  );

  const deliveryFee = 49;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + gst;

  return (
    <div className="min-h-screen bg-[#0f0d0b] text-white py-10 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-[#f5f0ea]">Checkout</h1>
          <p className="text-gray-400 mt-2">Complete your order details</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Side */}
          <div className="lg:col-span-2 space-y-6">
            {/* Delivery Address */}
            <div className="bg-[#1a1612] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-5">Delivery Address</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="bg-[#2b241d] border border-gray-700 rounded-xl p-3 outline-none focus:border-[#e8a04a] text-white placeholder-gray-500"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="bg-[#2b241d] border border-gray-700 rounded-xl p-3 outline-none focus:border-[#e8a04a] text-white placeholder-gray-500"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  className="md:col-span-2 bg-[#2b241d] border border-gray-700 rounded-xl p-3 outline-none focus:border-[#e8a04a] text-white placeholder-gray-500"
                />

                <textarea
                  rows="4"
                  placeholder="House No, Street, Area, Landmark..."
                  className="md:col-span-2 bg-[#2b241d] border border-gray-700 rounded-xl p-3 outline-none focus:border-[#e8a04a] text-white placeholder-gray-500 resize-none"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-[#1a1612] border border-gray-800 rounded-2xl p-6">
              <h2 className="text-2xl font-bold mb-5">Payment Method</h2>

              <div className="space-y-4">
                <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 cursor-pointer hover:border-[#e8a04a] transition">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-[#e8a04a]"
                  />
                  <span>UPI Payment</span>
                </label>

                <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 cursor-pointer hover:border-[#e8a04a] transition">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-[#e8a04a]"
                  />
                  <span>Credit / Debit Card</span>
                </label>

                <label className="flex items-center gap-3 p-4 rounded-xl border border-gray-700 cursor-pointer hover:border-[#e8a04a] transition">
                  <input
                    type="radio"
                    name="payment"
                    className="accent-[#e8a04a]"
                  />
                  <span>Cash On Delivery</span>
                </label>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div>
            <div className="bg-[#1a1612] border border-gray-800 rounded-2xl p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

              {/* Items — FIX: use item.price not hardcoded 299 */}
              <div className="space-y-3 mb-6">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between text-sm text-gray-300"
                  >
                    <span className="truncate pr-2">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="flex-shrink-0">
                      ₹{item.quantity * item.price}
                    </span>
                  </div>
                ))}
              </div>

              <hr className="border-gray-700 mb-4" />

              <div className="space-y-3">
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

              <button className="w-full mt-6 py-3 rounded-xl bg-[#e8a04a] text-black font-bold hover:opacity-90 transition">
                Place Order
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="w-full mt-3 py-3 rounded-xl border border-gray-700 hover:border-[#e8a04a] transition"
              >
                Back To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
