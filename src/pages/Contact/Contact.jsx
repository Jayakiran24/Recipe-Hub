import React, { useState } from "react";

const faqs = [
  {
    question: "How do I book a chef?",
    answer:
      "Browse available chefs, select your preferred chef, choose a date and time, and confirm your booking.",
  },
  {
    question: "How can I cancel an order?",
    answer:
      "You can cancel eligible orders from your account dashboard before preparation begins.",
  },
  {
    question: "Do chefs cook at my home?",
    answer:
      "Yes, chefs can visit your location and prepare meals according to your booking requirements.",
  },
  {
    question: "How do refunds work?",
    answer:
      "Refunds are processed to your original payment method according to our refund policy.",
  },
];

const Contact = () => {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <div
      className="min-h-screen text-white"
      style={{ backgroundColor: "#0f0d0b" }}
    >
      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <h1 className="text-5xl font-bold mb-6">Get In Touch</h1>

        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Have questions about food orders, chef bookings, partnerships, or
          support? Our team is here to help you anytime.
        </p>
      </section>

      {/* Contact Cards */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div
          className="rounded-xl p-6 text-center"
          style={{ backgroundColor: "#1a1410" }}
        >
          <div className="text-4xl mb-4">📧</div>
          <h3 className="text-xl font-semibold mb-2">Email</h3>
          <p className="text-gray-400">support@recipehub.com</p>
          <p className="text-sm text-gray-500 mt-2">Response within 24 hours</p>
        </div>

        <div
          className="rounded-xl p-6 text-center"
          style={{ backgroundColor: "#1a1410" }}
        >
          <div className="text-4xl mb-4">📞</div>
          <h3 className="text-xl font-semibold mb-2">Phone</h3>
          <p className="text-gray-400">+91 98765 43210</p>
          <p className="text-sm text-gray-500 mt-2">
            Mon - Sat | 9:00 AM - 8:00 PM
          </p>
        </div>

        <div
          className="rounded-xl p-6 text-center"
          style={{ backgroundColor: "#1a1410" }}
        >
          <div className="text-4xl mb-4">📍</div>
          <h3 className="text-xl font-semibold mb-2">Location</h3>
          <p className="text-gray-400">Bangalore, Karnataka</p>
          <p className="text-sm text-gray-500 mt-2">India</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="rounded-2xl p-8" style={{ backgroundColor: "#1a1410" }}>
          <h2 className="text-3xl font-bold mb-8 text-center">
            Send Us a Message
          </h2>

          <form className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Full Name"
              className="bg-[#2a211b] p-4 rounded-lg outline-none"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="bg-[#2a211b] p-4 rounded-lg outline-none"
            />

            <input
              type="tel"
              placeholder="Phone Number"
              className="bg-[#2a211b] p-4 rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Subject"
              className="bg-[#2a211b] p-4 rounded-lg outline-none"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="bg-[#2a211b] p-4 rounded-lg outline-none md:col-span-2"
            />

            <button
              type="submit"
              className="md:col-span-2 py-4 rounded-lg font-semibold transition"
              style={{
                backgroundColor: "#e8a04a",
                color: "#0f0d0b",
              }}
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Support Cards */}
      <section className="max-w-6xl mx-auto px-6 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Quick Support</h2>

        <div className="grid md:grid-cols-2 gap-6">
          <div
            className="rounded-xl p-8"
            style={{ backgroundColor: "#1a1410" }}
          >
            <h3 className="text-2xl font-semibold mb-4">🍔 Order Support</h3>

            <p className="text-gray-400 mb-6">
              Need help with food delivery, payments, refunds, or tracking your
              order?
            </p>

            <button
              className="px-6 py-3 rounded-lg font-medium"
              style={{
                backgroundColor: "#e8a04a",
                color: "#0f0d0b",
              }}
            >
              Order Support
            </button>
          </div>

          <div
            className="rounded-xl p-8"
            style={{ backgroundColor: "#1a1410" }}
          >
            <h3 className="text-2xl font-semibold mb-4">👨‍🍳 Chef Support</h3>

            <p className="text-gray-400 mb-6">
              Need assistance with chef bookings, schedules, availability, or
              custom events?
            </p>

            <button
              className="px-6 py-3 rounded-lg font-medium"
              style={{
                backgroundColor: "#e8a04a",
                color: "#0f0d0b",
              }}
            >
              Chef Support
            </button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-10">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden"
              style={{ backgroundColor: "#1a1410" }}
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full text-left px-6 py-5 flex justify-between items-center"
              >
                <span>{faq.question}</span>

                <span>{openFaq === index ? "-" : "+"}</span>
              </button>

              {openFaq === index && (
                <div className="px-6 pb-5 text-gray-400">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 text-center">
        <div
          className="max-w-5xl mx-auto rounded-2xl p-12"
          style={{ backgroundColor: "#1a1410" }}
        >
          <h2 className="text-4xl font-bold mb-6">Ready For Your Next Meal?</h2>

          <p className="text-gray-400 mb-8">
            Order delicious food or book a professional chef for your next
            special occasion.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              className="px-8 py-4 rounded-lg font-semibold"
              style={{
                backgroundColor: "#e8a04a",
                color: "#0f0d0b",
              }}
            >
              Order Food
            </button>

            <button className="border border-[#e8a04a] text-[#e8a04a] px-8 py-4 rounded-lg font-semibold">
              Book a Chef
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
