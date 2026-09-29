"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import AuthVisual from "@/components/bytespace/AuthVisual";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Welcome back to ByteSpace!", {
        style: {
          background: "#003BE2",
          color: "#fff",
        },
      });
      router.push("/");
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
              Sign in with ease
            </h1>
            <p className="font-body text-white/80 text-sm sm:text-base mt-4 max-w-lg leading-relaxed">
              Experience a seamless and efficient sign-in process that grants you instant access to a world of knowledge.
            </p>

            <div className="mt-8 hidden sm:flex justify-start">
              <AuthVisual />
            </div>
          </div>

          {/* Right Column: White Card Form (6 cols) */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-[500px] bg-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-white/20">
              <span className="text-xs font-semibold text-[#003BE2] uppercase tracking-wider block">
                Sign In
              </span>
              <h2 className="font-heading text-3xl sm:text-4xl font-bold text-gray-900 mt-1">
                Welcome Back
              </h2>

              <form onSubmit={handleLogin} className="mt-8 space-y-5">
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

                <div className="flex justify-end pt-1">
                  <button
                    type="submit"
                    disabled={loading}
                    className="px-8 py-3 bg-[#CBFC01] hover:bg-[#b5e200] text-black font-semibold text-sm rounded-full transition-all duration-200 cursor-pointer shadow-sm hover:shadow disabled:opacity-60"
                  >
                    {loading ? "Signing in..." : "Sign In"}
                  </button>
                </div>

                {/* Divider */}
                <div className="relative flex items-center justify-center my-6">
                  <div className="w-full border-t border-gray-200" />
                  <span className="bg-white px-4 text-xs text-gray-400 font-medium uppercase absolute">
                    or
                  </span>
                </div>

                {/* Social Login */}
                <div className="flex items-center justify-center gap-4">
                  {/* Facebook Button */}
                  <button
                    type="button"
                    onClick={() => toast("Facebook login connected!")}
                    className="w-12 h-12 rounded-2xl border border-gray-200 hover:border-gray-300 flex items-center justify-center transition-all hover:bg-gray-50 cursor-pointer shadow-sm"
                  >
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </button>

                  {/* Google Button */}
                  <button
                    type="button"
                    onClick={() => toast("Google login connected!")}
                    className="w-12 h-12 rounded-2xl border border-gray-200 hover:border-gray-300 flex items-center justify-center transition-all hover:bg-gray-50 cursor-pointer shadow-sm"
                  >
                    <svg
                      className="w-5 h-5 text-black"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
                    </svg>
                  </button>
                </div>

                {/* Footer Signup Link */}
                <div className="text-center pt-4">
                  <p className="text-xs sm:text-sm text-gray-500">
                    New user?{" "}
                    <Link
                      href="/register"
                      className="text-[#003BE2] font-semibold hover:underline"
                    >
                      Create an account
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
