"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShoppingBag, Menu, X } from "lucide-react";

export default function ByteSpaceNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full absolute top-0 left-0 z-50 transition-all duration-200">
      <div className="max-w-[1360px] mx-auto px-6 lg:px-12 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <Image
            src="/svgs/header_logo.svg"
            alt="ByteSpace"
            width={160}
            height={36}
            priority
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-white/90">
          <Link
            href="/"
            className="hover:text-white transition-colors duration-150 relative py-1 text-white font-semibold after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-[2px] after:bg-[#CBFC01] after:rounded-full"
          >
            Home
          </Link>
          <Link
            href="#courses"
            className="hover:text-white text-white/80 transition-colors duration-150"
          >
            Courses
          </Link>
          <Link
            href="#creators"
            className="hover:text-white text-white/80 transition-colors duration-150"
          >
            Creators
          </Link>
        </nav>

        {/* Right CTA Actions */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/login"
            className="text-[15px] font-medium text-white/90 hover:text-white transition-colors px-2 py-1"
          >
            Sign In
          </Link>
          <Link
            href="/register"
            className="px-5 py-2.5 rounded-full border border-white/60 hover:border-white text-white text-[14px] font-semibold transition-all duration-200 hover:bg-white hover:text-[#003BE2] shadow-sm"
          >
            Join Us
          </Link>
          <button
            type="button"
            aria-label="Shopping Cart"
            className="text-white hover:text-[#CBFC01] transition-colors p-2 relative"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
            <span className="sr-only">Cart</span>
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0034C7] border-b border-white/10 px-6 py-6 space-y-4 text-white shadow-2xl backdrop-blur-lg">
          <nav className="flex flex-col gap-4 text-base font-medium">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#CBFC01] font-semibold"
            >
              Home
            </Link>
            <Link
              href="#courses"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white"
            >
              Courses
            </Link>
            <Link
              href="#creators"
              onClick={() => setMobileMenuOpen(false)}
              className="text-white/80 hover:text-white"
            >
              Creators
            </Link>
          </nav>
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <Link
              href="/login"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-xl border border-white/30 text-white font-medium hover:bg-white/10"
            >
              Sign In
            </Link>
            <Link
              href="/register"
              onClick={() => setMobileMenuOpen(false)}
              className="text-center py-2.5 rounded-xl bg-[#CBFC01] text-black font-semibold hover:bg-[#bbf000]"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
