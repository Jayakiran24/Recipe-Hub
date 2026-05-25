import React from "react";
import HeroSection from "../../components/home/HeroSection";
import CategoriesSection from "../../components/home/CategoriesSection";
import PopularRecipes from "../../components/home/PopularRecipes";
import StatsSection from "../../components/home/StatsSection";
import FeaturedChefs from "../../components/home/FeacturedChefs";
import TestimonialSlider from "../../components/home/Testimonials";

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <CategoriesSection />
      <PopularRecipes />
      <StatsSection />
      <FeaturedChefs />
      <TestimonialSlider />
    </div>
  );
};

export default Home;
