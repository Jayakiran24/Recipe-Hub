import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import Chefs from "../pages/Chefs/Chefs";

import Order from "../pages/Booking/Order";
import Contact from "../pages/Contact/Contact";

export default function AppRoutes() {
  return (
    // <BrowserRouter>
    <Routes>
      {/* ── All routes share Navbar + Footer via MainLayout ── */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order-food" element={<Order />} />
        <Route path="/book-chef" element={<Chefs />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    // </BrowserRouter>
  );
}
