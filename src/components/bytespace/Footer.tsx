"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast from "react-hot-toast";

export default function ByteSpaceFooter() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) {
      toast.error("Please enter a valid email");
      return;
    }
    toast.success("Thank you for subscribing!", {
      style: {
        background: "#003BE2",
        color: "#fff",
      },
    });
    setEmail("");
  };

  return (
    <footer className="w-full bg-white border-t border-[#E5E6E8] pt-16 pb-12">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12">
        {/* Top Grid: Newsletter + Links */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Logo & Newsletter (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <Link href="/" className="inline-block mb-6">
              <Image
                src="/svgs/header_logo.svg"
                alt="ByteSpace"
                width={150}
                height={34}
                className="h-8 w-auto object-contain brightness-0"
              />
            </Link>

            <p className="font-body text-sm sm:text-base text-gray-700 leading-relaxed max-w-md">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter input form */}
            <form onSubmit={handleNewsletter} className="mt-6 flex flex-col sm:flex-row gap-3 max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white border border-[#E5E6E8] rounded-full px-5 py-3 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#003BE2] transition"
              />
              <button
                type="submit"
                className="px-7 py-3 bg-[#CBFC01] hover:bg-[#b5e200] text-black font-semibold text-sm rounded-full transition-all duration-200 shrink-0 cursor-pointer shadow-sm"
              >
                Search
              </button>
            </form>

            <p className="font-body text-xs text-gray-400 mt-3 leading-normal max-w-md">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Columns: Links (7 cols) */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Column 1 */}
            <div className="flex flex-col gap-3.5">
              <Link href="#courses" className="text-sm font-semibold text-gray-900 hover:text-[#003BE2] transition-colors">
                Featured Courses
              </Link>
              <Link href="#courses" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Featured Categories
              </Link>
              <Link href="#courses" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Business
              </Link>
              <Link href="#courses" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                IT
              </Link>
              <Link href="#courses" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-3.5">
              <Link href="#courses" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Development
              </Link>
              <Link href="#courses" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Marketing
              </Link>
              <Link href="#courses" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Photography
              </Link>
              <Link href="#courses" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Finance
              </Link>
              <Link href="#courses" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-3.5">
              <Link href="/register" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Become a Creator
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Affiliate Program
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                Help
              </Link>
              <Link href="#" className="text-sm text-gray-600 hover:text-[#003BE2] transition-colors">
                About
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Line & Legal */}
        <div className="mt-14 pt-8 border-t border-[#E5E6E8] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© 2023 ByteSpace. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
