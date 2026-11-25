import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-pink-50 via-white to-pink-100/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6 text-center md:text-left">
            <span className="inline-block px-4 py-1.5 text-xs font-bold tracking-wider text-pink-600 uppercase bg-pink-100 rounded-full">
              Freshly Baked Every Morning
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight">
              Sweet Moments Start at{" "}
              <span className="text-pink-600">cakeHouse</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-lg mx-auto md:mx-0">
              From rich Belgian chocolate truffles to custom multi-tier wedding cakes, we craft unforgettable desserts for every celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
              <Link
                href="/PublicRoute/allcakes"
                className="px-8 py-3.5 text-sm font-semibold text-white bg-pink-600 rounded-full shadow-md hover:bg-pink-700 transition"
              >
                Explore All Cakes
              </Link>
              <Link
                href="/PublicRoute/customizecake"
                className="px-8 py-3.5 text-sm font-semibold text-pink-600 bg-white border border-pink-600 rounded-full hover:bg-pink-50 transition"
              >
                Order Customize Cake
              </Link>
            </div>
          </div>

          {/* Right Visual Showcase */}
          <div className="relative flex justify-center">
            <div className="w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-pink-200/50 flex items-center justify-center p-6 shadow-inner">
              <div className="w-full h-full rounded-full bg-white shadow-xl flex flex-col items-center justify-center text-center p-6 border-4 border-pink-100">
                <span className="text-7xl sm:text-8xl mb-3">🎂</span>
                <p className="text-lg font-bold text-gray-800">100% Fresh Cream</p>
                <p className="text-xs text-gray-500 mt-1">Same-Day Delivery Available</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}