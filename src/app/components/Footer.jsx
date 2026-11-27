
"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2026);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-white border-t border-pink-100 text-gray-600 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Column 1: Brand & Description */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-pink-600">
              <span>🎂</span>
              <span>
                cake<span className="text-gray-800">House</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 leading-relaxed">
              Handcrafted artisanal cakes baked fresh daily for birthdays, weddings, and every sweet celebration in between.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className="text-gray-400 hover:text-pink-600 transition">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" /></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="text-gray-400 hover:text-pink-600 transition">
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Cake Categories */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
              Our Cakes
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/cakes?category=birthday" className="hover:text-pink-600 transition">Birthday Cakes</Link></li>
              <li><Link href="/cakes?category=wedding" className="hover:text-pink-600 transition">Wedding & Tiered</Link></li>
              <li><Link href="/cakes?category=chocolate" className="hover:text-pink-600 transition">Chocolate Truffle</Link></li>
              <li><Link href="/cakes?category=cupcakes" className="hover:text-pink-600 transition">Cupcakes & Pastries</Link></li>
              <li><Link href="/custom-orders" className="hover:text-pink-600 transition">Custom Theme Cakes</Link></li>
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-pink-600 transition">About cakeHouse</Link></li>
              <li><Link href="/occasions" className="hover:text-pink-600 transition">Shop by Occasion</Link></li>
              <li><Link href="/delivery-info" className="hover:text-pink-600 transition">Delivery & Pickup</Link></li>
              <li><Link href="/faq" className="hover:text-pink-600 transition">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-pink-600 transition">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 4: Store Info & Newsletter */}
          <div>
            <h3 className="text-sm font-bold text-gray-800 uppercase tracking-wider mb-4">
              Visit & Subscribe
            </h3>
            <ul className="space-y-2 text-sm text-gray-500 mb-4">
              <li>📍 123 Bakery Lane, Sweet Town</li>
              <li>📞 +880 1234-567890</li>
              <li>🕒 Daily: 9:00 AM – 10:00 PM</li>
            </ul>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email for offers"
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-pink-600"
              />
              <Link href="/auth/signin"
                className="px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition flex-shrink-0">
                Join
              </Link>
            </form>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-400 gap-4">
          <p>© {currentYear} cakeHouse. All rights reserved.</p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="hover:text-pink-600 transition">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-pink-600 transition">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}



