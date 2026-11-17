import React from "react";
import Link from "next/link";

const categories = [
  { name: "Birthday Cakes", count: "24 Varieties", icon: "🎉", slug: "birthday" },
  { name: "Wedding & Tiered", count: "12 Varieties", icon: "💍", slug: "wedding" },
  { name: "Chocolate Truffle", count: "18 Varieties", icon: "🍫", slug: "chocolate" },
  { name: "Red Velvet", count: "9 Varieties", icon: "❤️", slug: "red-velvet" },
  { name: "Fruit & Berry", count: "15 Varieties", icon: "🍓", slug: "fruit" },
  { name: "Cupcakes & Jar Cakes", count: "20 Varieties", icon: "🧁", slug: "cupcakes" },
];

export default function CategoriesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900">Shop by Cake Type</h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Pick your favorite flavor or browse by celebration style.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/cakes?category=${cat.slug}`}
              className="group bg-pink-50/50 hover:bg-pink-600 rounded-2xl p-6 text-center transition-all duration-300 border border-pink-100 hover:shadow-lg"
            >
              <div className="text-4xl mb-3 transform group-hover:scale-110 transition">
                {cat.icon}
              </div>
              <h3 className="text-sm font-bold text-gray-800 group-hover:text-white transition">
                {cat.name}
              </h3>
              <p className="text-xs text-gray-500 group-hover:text-pink-100 mt-1 transition">
                {cat.count}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}