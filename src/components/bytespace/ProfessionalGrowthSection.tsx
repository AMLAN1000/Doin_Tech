"use client";

import React from "react";
import Image from "next/image";

export default function ProfessionalGrowthSection() {
  return (
    <section className="w-full py-16 md:py-24 bg-[#FAFAFA] border-t border-[#E5E6E8] overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[46px] font-bold text-gray-900 tracking-tight leading-[1.18]">
              Your Path to Professional <br className="hidden sm:inline" />
              Growth Starts Here!
            </h2>
            <p className="font-body text-gray-600 text-base sm:text-lg mt-5 leading-relaxed max-w-xl">
              Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
            </p>

            {/* Stats Row */}
            <div className="mt-10 sm:mt-12 grid grid-cols-3 gap-6 max-w-md pt-8 border-t border-gray-200">
              <div>
                <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003BE2] block">
                  12K
                </span>
                <span className="text-gray-600 text-sm sm:text-base font-medium mt-1 block">
                  Students
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003BE2] block">
                  70+
                </span>
                <span className="text-gray-600 text-sm sm:text-base font-medium mt-1 block">
                  Courses
                </span>
              </div>
              <div>
                <span className="font-heading text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#003BE2] block">
                  16
                </span>
                <span className="text-gray-600 text-sm sm:text-base font-medium mt-1 block">
                  Creators
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex justify-center items-center">
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/renders/growth_visual.png"
                alt="Student growth progress"
                width={800}
                height={800}
                priority
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
