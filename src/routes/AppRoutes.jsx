import { Routes, Route } from "react-router-dom";

// Layout
import MainLayout from "../layouts/MainLayout";

// Pages
import Home from "../pages/Home/Home";
import Chefs from "../pages/Chefs/Chefs";

import Order from "../pages/Booking/Order";
import Contact from "../pages/Contact/Contact";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Cart from "../components/cards/RecipeCard";
import Checkout from "../pages/Checkout/Checkout";
import RecipeDetail from "../pages/RecipeDetails/RecipeDetails";
import ChefDetails from "../pages/ChefDetails/ChefDetails";
import BookingPage from "../pages/Booking/BookingPage";

export default function AppRoutes() {
  return (
    // <BrowserRouter>
    <Routes>
      {/* ── All routes share Navbar + Footer via MainLayout ── */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/order-food" element={<Order />} />
        <Route path="/chefs" element={<Chefs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order/:id" element={<RecipeDetail />} />
        <Route path="/chefs/:id" element={<ChefDetails />} />
        <Route path="/chefs/:id/book" element={<BookingPage />} />
      </Route>
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    // </BrowserRouter>
  );
}
