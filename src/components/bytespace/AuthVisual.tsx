"use client";

import React from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";

export default function AuthVisual() {
  return (
    <div className="relative w-full max-w-[540px] h-[520px] select-none pointer-events-none">
      {/* 3D Torus (Top Left) */}
      <div className="absolute -top-4 left-10 w-28 h-28 z-20">
        <Image
          src="/assets/f9c0e0fd05db48405aa72287b20d04b9a01feb51.png"
          alt="3D Ring"
          width={112}
          height={112}
          className="object-contain"
        />
      </div>

      {/* 3D Cone (Bottom Left) */}
      <div className="absolute -bottom-6 -left-6 w-32 h-32 z-20">
        <Image
          src="/assets/92fc70a39c36138c0e55699b18b3e88bd1f86a59.png"
          alt="3D Cone"
          width={128}
          height={128}
          className="object-contain"
        />
      </div>

      {/* 3D Squiggle Ribbon (Bottom Right) */}
      <div className="absolute bottom-12 right-0 w-32 h-32 z-30 opacity-95">
        <Image
          src="/assets/5b3686bc5eadc510e3e04da588f9299d8bd3194c.png"
          alt="3D Ribbon"
          width={128}
          height={128}
          className="object-contain"
        />
      </div>

      {/* Background Partial Card (Build Digital Asset) */}
      <div className="absolute top-10 left-0 w-[300px] bg-white/90 rounded-3xl p-4 shadow-xl border border-white/20 blur-[0.5px] scale-95 opacity-80 -rotate-3 z-0">
        <div className="relative w-full h-32 rounded-xl overflow-hidden bg-gray-100">
          <Image
            src="/assets/c88264191d691ba3300ad4f82a942429bb912fa5.png"
            alt="Build Digital Asset"
            fill
            className="object-cover"
          />
        </div>
        <h4 className="font-heading font-bold text-gray-900 mt-2 text-sm">
          Build Digital Asset
        </h4>
        <span className="text-xs text-[#003BE2] font-semibold">$25/lifetime</span>
      </div>

      {/* Foreground Main Card (the Power of Big Data) */}
      <div className="absolute top-6 left-16 sm:left-24 w-[330px] sm:w-[350px] bg-white rounded-3xl p-4 sm:p-5 shadow-2xl border border-gray-100 z-10">
        <div className="relative w-full h-40 rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src="/assets/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.png"
            alt="the Power of Big Data"
            fill
            className="object-cover"
          />
          <div className="absolute bottom-2 left-2 right-2 bg-white/70 backdrop-blur-md rounded-full py-1 px-2.5 flex items-center justify-between text-[10px] font-medium text-gray-800">
            <span>17 Lessons</span>
            <span>2 hours 16 mins</span>
            <span>59 Comments</span>
          </div>
        </div>

        <div className="mt-3 flex items-start justify-between">
          <div>
            <h4 className="font-heading font-bold text-gray-900 text-base leading-snug">
              the Power of Big Data
            </h4>
            <p className="text-[11px] text-[#003BE2] font-medium mt-0.5">
              by purepearl studio
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
            <span>4.5</span>
            <Star className="w-3.5 h-3.5 fill-[#CBFC01] text-[#CBFC01]" />
          </div>
        </div>

        <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F5F5F6] text-gray-700 text-[10px] font-medium">
            <BarChart2 className="w-3 h-3 text-gray-500" />
            <span>Beginner</span>
          </div>

          <div className="flex items-center -space-x-1.5">
            <Image
              src="/assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png"
              alt="Avatar"
              width={22}
              height={22}
              className="w-5 h-5 rounded-full border border-white object-cover"
            />
            <Image
              src="/assets/3fe559181733e0fb69226caee836e40092facb44.png"
              alt="Avatar"
              width={22}
              height={22}
              className="w-5 h-5 rounded-full border border-white object-cover"
            />
            <div className="w-5 h-5 rounded-full bg-black text-white text-[8px] font-bold flex items-center justify-center border border-white">
              26+
            </div>
          </div>
        </div>

        <div className="mt-2.5 flex items-baseline gap-1">
          <span className="font-heading font-extrabold text-base text-[#003BE2]">
            $25
          </span>
          <span className="text-[10px] text-gray-500">/lifetime</span>
        </div>
      </div>

      {/* Floating Lime Card: Happy Students */}
      <div className="absolute -bottom-2 right-4 sm:right-10 bg-[#CBFC01] rounded-2xl p-3.5 shadow-2xl z-20 border border-black/10">
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="font-bold text-xs text-gray-950">Happy Students</span>
          <div className="flex items-center gap-1 text-xs font-bold text-gray-900">
            <span>4.5</span>
            <span className="text-gray-600 font-normal">(240)</span>
            <Star className="w-3.5 h-3.5 fill-black text-black" />
          </div>
        </div>
        <div className="flex items-center -space-x-2">
          <Image
            src="/assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png"
            alt="Student"
            width={28}
            height={28}
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
          />
          <Image
            src="/assets/3fe559181733e0fb69226caee836e40092facb44.png"
            alt="Student"
            width={28}
            height={28}
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
          />
          <Image
            src="/assets/0577f0e9b7fca2f32639871454da0de95f951709.png"
            alt="Student"
            width={28}
            height={28}
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
          />
          <Image
            src="/assets/d0cd3adb501c64c1b4cf766de6abb9fe8925fb5f.png"
            alt="Student"
            width={28}
            height={28}
            className="w-7 h-7 rounded-full border-2 border-white object-cover"
          />
          <div className="w-7 h-7 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
            2K+
          </div>
        </div>
      </div>
    </div>
  );
}
