"use client";

import React from "react";
import Image from "next/image";

interface Category {
  name: string;
  svg: string;
}

const CATEGORIES: Category[] = [
  { name: "Design", svg: "/svgs/cat_design.svg" },
  { name: "Development", svg: "/svgs/cat_development.svg" },
  { name: "IT & Software", svg: "/svgs/cat_it.svg" },
  { name: "Business", svg: "/svgs/cat_business.svg" },
  { name: "Marketing", svg: "/svgs/cat_marketing.svg" },
  { name: "Photography", svg: "/svgs/cat_photography.svg" },
];

export default function CategoriesSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[44px] font-bold text-gray-900 tracking-tight leading-[1.2]">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="font-body text-gray-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there&apos;s something for everyone. Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        {/* Categories 6 Grid */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.name}
              className="group bg-white rounded-3xl p-6 sm:p-7 border border-[#E5E6E8] hover:border-[#CBFC01] hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer hover:-translate-y-1"
            >
              {/* Icon Container with lime yellow circle */}
              <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-[#CBFC01] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Image
                  src={cat.svg}
                  alt={cat.name}
                  width={34}
                  height={34}
                  className="w-8 h-8 sm:w-9 sm:h-9 object-contain"
                />
              </div>

              {/* Title */}
              <h3 className="mt-5 font-heading font-semibold text-gray-900 text-base sm:text-lg group-hover:text-[#003BE2] transition-colors">
                {cat.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
