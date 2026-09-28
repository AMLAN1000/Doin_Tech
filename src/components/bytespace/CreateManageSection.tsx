"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

export default function CreateManageSection() {
  return (
    <section id="creators" className="w-full py-16 md:py-24 bg-white border-t border-[#E5E6E8] overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Visual */}
          <div className="relative flex justify-center items-center order-2 lg:order-1">
            <div className="relative w-full max-w-[560px]">
              <Image
                src="/renders/revenue_visual.png"
                alt="Create & manage courses easily with ByteSpace"
                width={800}
                height={800}
                priority
                className="w-full h-auto object-contain drop-shadow-xl"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-[46px] font-bold text-gray-900 tracking-tight leading-[1.18]">
              Create & Manage <br className="hidden sm:inline" />
              Courses Easily.
            </h2>
            <p className="font-body text-gray-600 text-base sm:text-lg mt-5 leading-relaxed max-w-xl">
              <strong className="text-gray-900 font-semibold">ByteSpace</strong> supports individuals or entities in the creation, publication, and administration of educational courses.
            </p>

            {/* Feature Checklist */}
            <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">
              {FEATURES.map((feat) => (
                <div key={feat} className="flex items-center gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-[#003BE2] flex items-center justify-center shrink-0 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-white stroke-[2.5]" />
                  </div>
                  <span className="font-heading text-base sm:text-lg font-semibold text-gray-800 group-hover:text-[#003BE2] transition-colors">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
