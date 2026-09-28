"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, BarChart2 } from "lucide-react";

interface Course {
  id: string;
  title: string;
  author: string;
  rating: number;
  level: string;
  price: string;
  pricePeriod: string;
  lessons: string;
  duration: string;
  comments: string;
  thumbnail: string;
  category: string;
}

const COURSES: Course[] = [
  {
    id: "1",
    title: "Learn Figma from Basic",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    thumbnail: "/assets/93ad9f9e6bdb3c7f3c478820624ee19ad7320072.png",
    category: "UI/UX Design",
  },
  {
    id: "2",
    title: "Build Digital Asset",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    thumbnail: "/assets/c88264191d691ba3300ad4f82a942429bb912fa5.png",
    category: "Design",
  },
  {
    id: "3",
    title: "the Power of Big Data",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    thumbnail: "/assets/4f3bdea5688b1a654db7a29b0bc5dd3563059d11.png",
    category: "Data Science",
  },
  {
    id: "4",
    title: "Balancing Productivity and Self-Care",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    thumbnail: "/assets/72e18d90fb9ddac1944e3483a501f3cdae505f57.png",
    category: "Productivity",
  },
  {
    id: "5",
    title: "Mastering Money Management",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    thumbnail: "/assets/a89789455304dbf5cadc8e011bc26c97145aa56c.png",
    category: "Business",
  },
  {
    id: "6",
    title: "From Idea to Startup Success",
    author: "by purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: "$25",
    pricePeriod: "/lifetime",
    lessons: "17 Lessons",
    duration: "2 hours 16 mins",
    comments: "59 Comments",
    thumbnail: "/assets/69362b026219ac3eb8b4e77e8bbe4e18c4464b44.png",
    category: "Marketing",
  },
];

const CATEGORIES = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
  "+ More",
];

export default function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section id="courses" className="w-full py-20 md:py-28 bg-white">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-[46px] font-bold text-gray-900 tracking-tight leading-[1.2]">
            Discover Your Passion, <br className="hidden sm:inline" />
            Build Your Skills
          </h2>
          <p className="font-body text-gray-600 text-sm sm:text-base mt-4 leading-relaxed max-w-2xl mx-auto">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different fields, from technology to the arts, and make a difference in your career and life.
          </p>
        </div>

        {/* Category Pills */}
        <div className="mt-10 md:mt-12 flex flex-wrap justify-center items-center gap-2.5 max-w-5xl mx-auto">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-[13px] font-medium transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#CBFC01] text-gray-950 font-bold shadow-sm scale-105"
                    : "bg-[#F5F5F6] hover:bg-[#EBEBEB] text-gray-700 border border-transparent"
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Courses Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course) => (
            <div
              key={course.id}
              className="group bg-white rounded-3xl p-4 sm:p-5 border border-[#E5E6E8] hover:border-gray-300 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Thumbnail Container */}
              <div className="relative w-full aspect-[16/11] rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Floating pill badge on thumbnail */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/70 backdrop-blur-md rounded-full py-1.5 px-3 flex items-center justify-between text-[11px] font-medium text-gray-800 shadow-sm">
                  <span>{course.lessons}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  <span>{course.duration}</span>
                  <span className="w-1 h-1 bg-gray-400 rounded-full" />
                  <span>{course.comments}</span>
                </div>
              </div>

              {/* Course Info */}
              <div className="mt-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="font-heading font-bold text-gray-900 text-lg leading-snug line-clamp-1 group-hover:text-[#003BE2] transition-colors">
                      {course.title}
                    </h3>
                    <div className="flex items-center gap-1 text-sm font-bold text-gray-900 shrink-0">
                      <span>{course.rating.toFixed(1)}</span>
                      <Star className="w-4 h-4 fill-[#CBFC01] text-[#CBFC01]" />
                    </div>
                  </div>
                  <p className="text-xs text-[#003BE2] font-medium mt-1">
                    {course.author}
                  </p>
                </div>

                {/* Level and Avatars */}
                <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#F5F5F6] text-gray-700 text-xs font-medium">
                    <BarChart2 className="w-3.5 h-3.5 text-gray-500" />
                    <span>{course.level}</span>
                  </div>

                  {/* Overlapping student avatars */}
                  <div className="flex items-center -space-x-1.5">
                    <Image
                      src="/assets/b44979e1c98ecb3ec92ac86805fe55581fbeaa60.png"
                      alt="Student"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/assets/3fe559181733e0fb69226caee836e40092facb44.png"
                      alt="Student"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    />
                    <Image
                      src="/assets/0577f0e9b7fca2f32639871454da0de95f951709.png"
                      alt="Student"
                      width={24}
                      height={24}
                      className="w-6 h-6 rounded-full border-2 border-white object-cover"
                    />
                    <div className="w-6 h-6 rounded-full bg-black text-white text-[9px] font-bold flex items-center justify-center border-2 border-white">
                      26+
                    </div>
                  </div>
                </div>

                {/* Price */}
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-heading font-extrabold text-xl text-[#003BE2]">
                    {course.price}
                  </span>
                  <span className="text-xs text-gray-500 font-medium">
                    {course.pricePeriod}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
