import Image from "next/image";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedCakes from "./components/FeaturedCakes";
import CustomOrderBanner from "./components/CustomOrderBanner";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CategoriesSection />
      <FeaturedCakes />
      <CustomOrderBanner />
    </div>
  );
}
