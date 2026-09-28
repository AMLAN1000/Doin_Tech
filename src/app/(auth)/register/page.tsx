"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthVisual from "@/components/bytespace/AuthVisual";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Account created successfully! Welcome to ByteSpace.", {
        style: {
          background: "#003BE2",
          color: "#fff",
        },
      });
      router.push("/login");
    }, 600);
  };

  return (
    <div className="min-h-screen w-full bg-[#003BE2] relative flex flex-col justify-between overflow-x-hidden selection:bg-[#CBFC01] selection:text-black">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.07] pointer-events-none bg-repeat"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Header Logo */}
      <header className="relative z-10 w-full max-w-[1360px] mx-auto px-6 lg:px-12 py-8 flex items-center">
        <Link href="/" className="inline-block">
          <Image
            src="/svgs/header_logo.svg"
            alt="ByteSpace"
            width={160}
            height={36}
            priority
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>
      </header>

      {/* Main Content Area */}
      <main className="relative z-10 flex-1 w-full max-w-[1360px] mx-auto px-6 lg:px-12 py-6 flex items-center">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading + AuthVisual (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-center text-white">
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.18]">
              Sign up and come in
            </h1>
            <p className="font-body text-white/80 text-sm sm:text-base mt-4 max-w-lg leading-relaxed">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost
            </p>

            <div className="mt-8 hidden sm:flex justify-start">
              <AuthVisual />
            </div>
          </div>

          {/* Right Column: White Card Form (6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
              <span className="text-xs font-semibold text-[#003BE2] uppercase tracking-wider block">
                Create an Account
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
                Welcome to <br />
                ByteSpace
              </h2>

              <form onSubmit={handleRegister} className="mt-8 space-y-5">
                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Jamie Davis"
                    className="w-full rounded-2xl border border-[#E5E6E8] px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#003BE2] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="designer@example.com"
                    className="w-full rounded-2xl border border-[#E5E6E8] px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#003BE2] transition"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="********"
                    className="w-full rounded-2xl border border-[#E5E6E8] px-4 py-3.5 text-sm text-gray-900 placeholder:text-gray-400 outline-none focus:border-[#003BE2] transition"
                  />
                </div>

                <div className="flex justify-end pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-[#CBFC01] hover:bg-[#b5e200] text-black font-semibold text-sm rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow disabled:opacity-60"
                  >
                    {loading ? "Creating..." : "Continue"}
                  </button>
                </div>

                {/* Footer Login Link */}
                <div className="text-center pt-8">
                  <p className="text-xs sm:text-sm text-gray-500">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-[#003BE2] font-semibold hover:underline"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      <div className="py-6" />
    </div>
  );
}
