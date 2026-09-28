"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function CreatorCTASection() {
  return (
    <section className="relative w-full bg-[#003BE2] py-24 md:py-32 overflow-hidden text-white">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating 3D Ornaments */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        {/* Left top ribbon */}
        <div className="absolute -left-10 top-8 md:left-8 md:top-12 w-36 md:w-48 h-36 md:h-48 opacity-90">
          <Image
            src="/assets/8670b841eac7883ecb790f84eb349c6c01db588b.png"
            alt="3D Ornament"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        {/* Right top cone */}
        <div className="absolute right-2 top-8 md:right-12 md:top-10 w-28 md:w-40 h-28 md:h-40 opacity-90">
          <Image
            src="/assets/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png"
            alt="3D Cone"
            width={160}
            height={160}
            className="object-contain"
          />
        </div>

        {/* Left bottom torus */}
        <div className="absolute -left-8 bottom-6 md:left-12 md:bottom-12 w-32 md:w-44 h-32 md:h-44 opacity-95">
          <Image
            src="/assets/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png"
            alt="3D Torus"
            width={180}
            height={180}
            className="object-contain"
          />
        </div>

        {/* Right bottom ribbon */}
        <div className="absolute -right-6 bottom-8 md:right-14 md:bottom-12 w-32 md:w-44 h-32 md:h-44 opacity-90">
          <Image
            src="/assets/5b3686bc5eadc510e3e04da588f9299d8bd3194c.png"
            alt="3D Ribbon"
            width={180}
            height={180}
            className="object-contain"
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
            className="inline-flex items-center justify-center px-9 py-4 rounded-full bg-[#CBFC01] hover:bg-[#b5e200] text-black font-heading font-bold text-base transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-105"
          >
            Join as Creator
          </Link>
        </div>
      </div>
    </section>
  );
}
