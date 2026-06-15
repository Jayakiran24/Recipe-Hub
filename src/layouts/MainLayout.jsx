import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

function MainLayout() {
  return (
    <>
      <Navbar />

      {/* Spacer — pushes all page content below the fixed 64px navbar */}
      <div style={{ height: "64px" }} />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}

export default MainLayout;
