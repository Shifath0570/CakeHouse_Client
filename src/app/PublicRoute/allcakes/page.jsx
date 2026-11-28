"use client";

import React, { useState } from "react";
import Link from "next/link";

const demoCakes = [
  {
    id: 1,
    name: "Belgian Chocolate Truffle",
    category: "Chocolate",
    price: 1850,
    weight: "1.5 lbs",
    rating: 4.9,
    reviews: 124,
    badge: "Bestseller",
    description: "Rich dark Belgian ganache layered over moist Dutch cocoa sponge.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Classic Strawberry Velvet",
    category: "Birthday",
    price: 1650,
    weight: "1.5 lbs",
    rating: 4.8,
    reviews: 98,
    badge: "Popular",
    description: "Soft red velvet sponge with whipped cream cheese frosting and fresh berries.",
    image: "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Royal Floral Wedding Tier",
    category: "Wedding",
    price: 6500,
    weight: "5.0 lbs",
    rating: 5.0,
    reviews: 42,
    badge: "Custom",
    description: "Two-tier vanilla bean sponge finished with hand-piped buttercream florals.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Assorted Rose Swirl Cupcakes",
    category: "Cupcakes",
    price: 780,
    weight: "Box of 6",
    rating: 4.7,
    reviews: 86,
    badge: "Fresh Today",
    description: "Vanilla, chocolate, and salted caramel cupcakes topped with silky buttercream.",
    image: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Salted Caramel Drip Cake",
    category: "Birthday",
    price: 1950,
    weight: "2.0 lbs",
    rating: 4.9,
    reviews: 112,
    badge: "Chef's Pick",
    description: "Brown sugar sponge layered with espresso cream and golden caramel drip.",
    image: "https://images.unsplash.com/photo-1562440499-64c9a111f713?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Ferrero Hazelnut Crunch",
    category: "Chocolate",
    price: 2200,
    weight: "2.0 lbs",
    rating: 4.9,
    reviews: 145,
    badge: "Bestseller",
    description: "Roasted hazelnut praline cream folded into layers of crispy wafer and chocolate.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Lemon Blueberry Mascarpone",
    category: "Fruit",
    price: 1750,
    weight: "1.5 lbs",
    rating: 4.7,
    reviews: 64,
    badge: "Seasonal",
    description: "Zesty lemon sponge filled with wild blueberry compote and light mascarpone.",
    image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Ivory Pearl Celebration Cake",
    category: "Wedding",
    price: 4800,
    weight: "4.0 lbs",
    rating: 4.9,
    reviews: 37,
    badge: "Premium",
    description: "Almond white chocolate sponge adorned with edible pearls and gold leaf.",
    image: "https://images.unsplash.com/photo-1522767131594-6b7e96848fba?auto=format&fit=crop&w=800&q=80",
  },
];

const categories = ["All", "Birthday", "Chocolate", "Wedding", "Cupcakes", "Fruit"];

export default function AllCakes() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("default");

  const filteredCakes = demoCakes
    .filter((cake) => {
      const matchesCategory =
        selectedCategory === "All" || cake.category === selectedCategory;
      const matchesSearch =
        cake.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        cake.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "rating") return b.rating - a.rating;
      return 0;
    });

  return (
    <section className="min-h-screen bg-pink-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100 rounded-full">
            Freshly Baked Daily
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Explore All <span className="text-pink-600">cakeHouse</span> Creations
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            From rich Belgian chocolate truffles to tiered wedding masterpieces, find the perfect cake for your celebration.
          </p>
        </div>

        {/* Filter, Search & Sort Controls */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-pink-100 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            {/* Search Bar */}
            <div className="w-full md:w-80 relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cakes or flavors..."
                className="w-full pl-10 pr-4 py-2.5 text-sm border border-gray-200 rounded-full focus:outline-none focus:border-pink-600"
              />
              <svg
                className="w-4 h-4 text-gray-400 absolute left-3.5 top-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                />
              </svg>
            </div>

            {/* Sort Dropdown */}
            <div className="w-full md:w-auto flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-gray-500 whitespace-nowrap">
                Sort by:
              </label>
              <select
                id="sort"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full md:w-48 px-3 py-2 text-sm border border-gray-200 rounded-full bg-white focus:outline-none focus:border-pink-600"
              >
                <option value="default">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition ${
                  selectedCategory === category
                    ? "bg-pink-600 text-white shadow-sm"
                    : "bg-pink-50/70 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Results Count */}
        <div className="flex justify-between items-center text-sm text-gray-500">
          <p>
            Showing <span className="font-semibold text-gray-800">{filteredCakes.length}</span> cakes
          </p>
          {(selectedCategory !== "All" || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="text-pink-600 font-medium hover:underline"
            >
              Reset filters
            </button>
          )}
        </div>

        {/* Cakes Grid */}
        {filteredCakes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredCakes.map((cake) => (
              <div
                key={cake.id}
                className="group bg-white rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
              >
                {/* Cake Image */}
                <div className="relative h-56 w-full overflow-hidden bg-pink-50">
                  <img
                    src={cake.image}
                    alt={cake.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                  {cake.badge && (
                    <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-white/90 text-pink-600 rounded-full shadow-sm">
                      {cake.badge}
                    </span>
                  )}
                  <span className="absolute bottom-3 right-3 px-2.5 py-1 text-xs font-medium bg-gray-900/75 text-white rounded-full">
                    {cake.weight}
                  </span>
                </div>

                {/* Card Body */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="font-semibold text-pink-600 uppercase tracking-wide">
                        {cake.category}
                      </span>
                      <span className="flex items-center gap-1 text-amber-500 font-semibold">
                        ★ {cake.rating}
                        <span className="text-gray-400 font-normal">({cake.reviews})</span>
                      </span>
                    </div>

                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition">
                      {cake.name}
                    </h2>

                    <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                      {cake.description}
                    </p>
                  </div>

                  {/* Price & Action */}
                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-gray-400 block">Starting at</span>
                      <span className="text-lg font-extrabold text-gray-900">
                        ৳{cake.price.toLocaleString()}
                      </span>
                    </div>

                    <Link
                      href={`/PublicRoute/allcakes/${cake.id}`}
                      className="px-4 py-2 text-xs font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition"
                    >
                      Order Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-3xl border border-pink-100 p-12 text-center space-y-3">
            <p className="text-4xl">🍰</p>
            <h3 className="text-lg font-bold text-gray-800">No cakes matched your search</h3>
            <p className="text-sm text-gray-500">
              Try adjusting your search keywords or selecting a different category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}



