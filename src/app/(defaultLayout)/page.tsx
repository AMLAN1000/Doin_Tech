import React from "react";
import HeroSection from "@/components/bytespace/HeroSection";
import PartnersSection from "@/components/bytespace/PartnersSection";
import CoursesSection from "@/components/bytespace/CoursesSection";
import CategoriesSection from "@/components/bytespace/CategoriesSection";
import ProfessionalGrowthSection from "@/components/bytespace/ProfessionalGrowthSection";
import CreateManageSection from "@/components/bytespace/CreateManageSection";
import CreatorCTASection from "@/components/bytespace/CreatorCTASection";
import TestimonialsSection from "@/components/bytespace/TestimonialsSection";

export default function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      <HeroSection />
      <PartnersSection />
      <CoursesSection />
      <CategoriesSection />
      <ProfessionalGrowthSection />
      <CreateManageSection />
      <CreatorCTASection />
      <TestimonialsSection />
    </div>
  );
}
