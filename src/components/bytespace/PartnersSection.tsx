"use client";

import React from "react";
import Image from "next/image";

export default function PartnersSection() {
  return (
    <section className="w-full bg-[#FAFAFA] border-y border-[#E5E6E8] py-8 sm:py-10">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 flex justify-center items-center">
        <div className="w-full max-w-5xl flex justify-center items-center overflow-x-auto py-2">
          <Image
            src="/svgs/partner_logos.svg"
            alt="Trusted partner logos"
            width={1000}
            height={44}
            className="w-full max-w-[900px] h-auto object-contain opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>
      </div>
    </section>
  );
}
