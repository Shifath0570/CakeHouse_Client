
"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { authClient } from "../lib/auth-client";


export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Check Better Auth session
  const { data: session } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          setIsMobileMenuOpen(false);
          router.push("/auth/signin");
          router.refresh();
        },
      },
    });
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "All Cakes", href: "/PublicRoute/allcakes" },
    { name: "Customer Orders", href: "/PublicRoute/customerorders" },
    { name: "Occasions", href: "/PublicRoute/occasions" },
    { name: "About Us", href: "/PublicRoute/aboutus" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-pink-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Left Side: Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center gap-2 text-2xl font-extrabold text-pink-600">
              <span>🎂</span>
              <span>
                cake<span className="text-gray-800">House</span>
              </span>
            </Link>
          </div>

          {/* Right Side: Navigation Items + Conditional Logout (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-pink-600 font-semibold"
                      : "text-gray-600 hover:text-pink-600"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {session && (
              <button
                onClick={handleLogout}
                className="px-4 py-1.5 text-sm font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition"
              >
                Logout
              </button>
            )}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-pink-600 focus:outline-none p-2"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-4 space-y-2 shadow-md">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive
                    ? "bg-pink-50 text-pink-600"
                    : "text-gray-700 hover:bg-gray-50 hover:text-pink-600"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {session && (
            <div className="pt-2 border-t border-gray-100">
              <button
                onClick={handleLogout}
                className="w-full text-center px-4 py-2 text-sm font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}



