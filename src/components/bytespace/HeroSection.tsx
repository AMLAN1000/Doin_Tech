"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Search, Star } from "lucide-react";

export default function HeroSection() {
  const [query, setQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const coursesEl = document.getElementById("courses");
      coursesEl?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full bg-[#003BE2] pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden text-white">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating 3D Ornaments matching Figma Screenshot 1 */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        {/* Top Left: Lime Green Spiral Spring */}
        <div className="absolute -left-6 top-24 sm:left-4 sm:top-28 md:left-8 md:top-32 w-32 sm:w-44 md:w-52 h-32 sm:h-44 md:h-52 opacity-95">
          <Image
            src="/assets/8670b841eac7883ecb790f84eb349c6c01db588b.png"
            alt="3D Spiral"
            width={220}
            height={220}
            className="object-contain"
          />
        </div>

        {/* Mid Left: White Squiggle Ribbon */}
        <div className="absolute left-6 top-80 sm:left-16 sm:top-96 md:left-24 md:top-[420px] w-24 sm:w-32 md:w-36 h-24 sm:h-32 md:h-36 opacity-95">
          <Image
            src="/assets/5b3686bc5eadc510e3e04da588f9299d8bd3194c.png"
            alt="3D Ribbon"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Bottom Left: Large White Torus Ring */}
        <div className="absolute -left-10 bottom-6 sm:left-6 sm:bottom-12 md:left-12 md:bottom-16 w-36 sm:w-48 md:w-56 h-36 sm:h-48 md:h-56 opacity-95">
          <Image
            src="/assets/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png"
            alt="3D Torus"
            width={240}
            height={240}
            className="object-contain"
          />
        </div>

        {/* Mid Right: White 3D Cone / Pyramid */}
        <div className="absolute right-4 top-72 sm:right-16 sm:top-80 md:right-28 md:top-96 w-28 sm:w-36 md:w-44 h-28 sm:h-36 md:h-44 opacity-95">
          <Image
            src="/assets/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png"
            alt="3D Cone"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        {/* Bottom Right: White Squiggle Ribbon */}
        <div className="absolute -right-6 bottom-10 sm:right-8 sm:bottom-16 md:right-16 md:bottom-20 w-32 sm:w-40 md:w-48 h-32 sm:h-40 md:h-48 opacity-95">
          <Image
            src="/assets/5b3686bc5eadc510e3e04da588f9299d8bd3194c.png"
            alt="3D Ribbon"
            width={200}
            height={200}
            className="object-contain"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        {/* Main Heading matching Figma Screenshot 1 */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-[64px] leading-[1.12] font-bold tracking-tight text-white max-w-4xl mx-auto">
          Get Access to Hundreds <br className="hidden sm:inline" />
          Courses Available
        </h1>

        {/* Subtitle */}
        <p className="font-body text-base sm:text-lg text-white/80 max-w-2xl mt-5 leading-relaxed">
          Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        {/* Search Bar */}
        <form
          onSubmit={handleSearch}
          className="mt-8 sm:mt-10 w-full max-w-[540px] bg-white rounded-full p-2 pl-6 flex items-center shadow-2xl shadow-black/20 transition-all focus-within:ring-4 focus-within:ring-[#CBFC01]/40"
        >
          <Search className="w-5 h-5 text-gray-400 mr-3 shrink-0" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Course, topic, creator"
            className="w-full bg-transparent text-gray-900 placeholder:text-gray-400 text-sm md:text-base outline-none font-medium"
          />
          <button
            type="submit"
            className="px-6 sm:px-8 py-3 bg-[#CBFC01] hover:bg-[#b5e200] text-black font-semibold text-sm md:text-base rounded-full transition-all duration-200 shrink-0 shadow-sm hover:shadow cursor-pointer"
          >
            Search
          </button>
        </form>

        {/* Hero Visual Area with Student & Floating Cards */}
        <div className="relative mt-12 md:mt-16 w-full max-w-[860px] flex justify-center items-end">
          {/* Green circle backdrop behind student */}
          <div className="absolute bottom-6 w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[460px] md:h-[460px] rounded-full bg-[#CBFC01] -z-0 opacity-95 shadow-inner" />

          {/* Student Cutout Image */}
          <div className="relative z-10 w-[300px] sm:w-[420px] md:w-[500px] h-auto pointer-events-none">
            <Image
              src="/renders/hero_student.png"
              alt="Student with laptop and headphones"
              width={600}
              height={600}
              priority
              className="w-full h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Floating Card 1: UI/UX Design (Left) matching Figma Screenshot 1 without icon */}
          <div className="absolute left-2 sm:left-4 md:-left-8 top-16 sm:top-24 md:top-28 z-20 bg-white text-gray-900 rounded-2xl px-5 py-4 shadow-2xl border border-gray-100 text-left">
            <h4 className="font-heading font-bold text-sm sm:text-base text-gray-900 leading-tight">
              UI/UX Design
            </h4>
            <p className="text-xs text-gray-500 font-medium mt-1">
              200 Courses • 1000+ Students
            </p>
          </div>

          {/* Floating Card 2: Learning Progress (Right) */}
          <div className="absolute right-2 sm:right-4 md:-right-8 top-20 sm:top-28 md:top-32 z-20 bg-white text-gray-900 rounded-2xl p-4 sm:p-5 shadow-2xl border border-gray-100 text-left min-w-[170px] sm:min-w-[190px]">
            <span className="text-xs text-gray-500 font-medium block">
              Learning Progress
            </span>
            <div className="font-heading text-2xl sm:text-3xl font-extrabold text-gray-900 mt-0.5">
              55%
            </div>
            <div className="w-full bg-gray-100 h-2 rounded-full mt-2.5 overflow-hidden">
              <div className="bg-[#CBFC01] h-full w-[55%] rounded-full" />
            </div>
          </div>

          {/* Floating Card 3: Happy Students (Bottom Left) */}
          <div className="absolute left-0 sm:left-6 md:-left-4 bottom-4 sm:bottom-8 z-20 bg-white text-gray-900 rounded-2xl p-3.5 sm:p-4 shadow-2xl border border-gray-100 text-left">
            <div className="flex items-center justify-between gap-4 mb-2">
              <span className="font-bold text-xs sm:text-sm text-gray-900">
                Happy Students
              </span>
              <div className="flex items-center gap-1 text-xs font-bold text-gray-800">
                <span>4.5</span>
                <span className="text-gray-400 font-normal">(240)</span>
                <Star className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01]" />
              </div>
            </div>
            {/* Avatars Stack */}
            <div className="flex items-center -space-x-2">
              <Image
                src="/assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png"
                alt="Student 1"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/assets/3fe559181733e0fb69226caee836e40092facb44.png"
                alt="Student 2"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/assets/0577f0e9b7fca2f32639871454da0de95f951709.png"
                alt="Student 3"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <Image
                src="/assets/d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f.png"
                alt="Student 4"
                width={32}
                height={32}
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border-2 border-white object-cover"
              />
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#CBFC01] text-gray-950 text-[10px] font-extrabold flex items-center justify-center border-2 border-white">
                2K+
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
