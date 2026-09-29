"use client";

import React from "react";
import Image from "next/image";

interface Testimonial {
  name: string;
  role: string;
  quote: string;
  avatar: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/0577f0e9b7fca2f32639871454da0de95f951709.png",
    quote:
      "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/63c4be83222c85e6c852819bc5d4b24a87a87fb6.png",
    quote:
      "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/728c3b1d33fe647a46f9bf668322f8c1d94ed937.png",
    quote:
      "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 md:py-28 bg-[#FAFAFA] overflow-hidden">
      {/* Soft gradient background glow matching Figma */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-[#CBFC01]/10 rounded-full blur-[140px] pointer-events-none -z-0" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-[#003BE2]/5 rounded-full blur-[140px] pointer-events-none -z-0" />

      <div className="relative z-10 max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[46px] font-bold text-gray-900 tracking-tight leading-[1.2]">
            Discover What Our <br className="hidden sm:inline" />
            Community Is Saying
          </h2>
          <p className="font-body text-gray-600 text-sm sm:text-base leading-relaxed">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        {/* 3 Testimonials Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-3xl p-8 border border-[#E5E6E8] hover:border-gray-300 transition-all duration-300 hover:shadow-xl flex flex-col justify-between"
            >
              <div>
                {/* Author Info with Circular Avatar matching Figma */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full overflow-hidden bg-gray-100 shrink-0 border-2 border-white shadow-sm">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={56}
                      height={56}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-gray-900 text-lg leading-tight">
                      {t.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#003BE2] mt-0.5">
                      {t.role}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <p className="font-body text-gray-600 text-sm sm:text-[15px] leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
