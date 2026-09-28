"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CreatorCTASection() {
  return (
    <section className="relative w-full bg-[#003BE2] py-24 md:py-32 overflow-hidden text-white">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.08] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating 3D Ornaments Overlay matching Figma */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden flex items-center justify-center">
        <div className="relative w-full max-w-[1440px] h-full min-h-[500px]">
          <Image
            src="/renders/cta_decor.png"
            alt="3D Ornaments"
            fill
            className="object-contain object-center opacity-95"
            priority
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12 flex flex-col items-center text-center">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-[50px] font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.15]">
          Unlock Your Potential as a <br className="hidden sm:inline" />
          Creator with ByteSpace
        </h2>

        <p className="font-body text-white/85 text-sm sm:text-base md:text-lg max-w-2xl mt-5 leading-relaxed">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>

        <div className="mt-10">
          <Link
            href="/register"
            className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#CBFC01] hover:bg-[#b5e200] text-black font-heading font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105 cursor-pointer"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
