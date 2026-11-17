import React from "react";
import Link from "next/link";

const featuredCakes = [
    {
        id: 1,
        name: "Belgian Dark Chocolate Overload",
        category: "Chocolate",
        weight: "1.5 lbs",
        price: "৳1,450",
        rating: "4.9",
        badge: "Bestseller",
        emoji: "🍫",
    },
    {
        id: 2,
        name: "Classic Strawberry Cream Cheese",
        category: "Fruit & Berry",
        weight: "1 lb",
        price: "৳1,200",
        rating: "4.8",
        badge: "Fresh Pick",
        emoji: "🍓",
    },
    {
        id: 3,
        name: "Royal Red Velvet Rose Cake",
        category: "Red Velvet",
        weight: "2 lbs",
        price: "৳1,850",
        rating: "5.0",
        badge: "Popular",
        emoji: "🌹",
    },
    {
        id: 4,
        name: "Vanilla Bean Confetti Celebration",
        category: "Birthday",
        weight: "1.5 lbs",
        price: "৳1,100",
        rating: "4.7",
        badge: "Kids Favorite",
        emoji: "🎂",
    },
];

export default function FeaturedCakes() {
    return (
        <section className="py-16 bg-pink-50/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row justify-between items-center mb-10 gap-4">
                    <div>
                        <h2 className="text-3xl font-extrabold text-gray-900">Bestselling Cakes</h2>
                        <p className="text-gray-500 text-sm mt-1">
                            Our customers’ most ordered creations this week
                        </p>
                    </div>
                    <Link
                        href="/cakes"
                        className="text-sm font-semibold text-pink-600 hover:text-pink-700"
                    >
                        View Full Menu →
                    </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {featuredCakes.map((cake) => (
                        <div
                            key={cake.id}
                            className="bg-white rounded-2xl shadow-sm border border-pink-100 overflow-hidden hover:shadow-md transition flex flex-col justify-between"
                        >
                            <div>
                                {/* Cake Image Placeholder */}
                                <div className="relative h-48 bg-pink-100/60 flex items-center justify-center text-6xl">
                                    {cake.emoji}
                                    <span className="absolute top-3 left-3 bg-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                                        {cake.badge}
                                    </span>
                                </div>

                                {/* Details */}
                                <div className="p-5">
                                    <div className="flex justify-between items-center text-xs text-gray-400 mb-1">
                                        <span>{cake.category}</span>
                                        <span>⭐ {cake.rating}</span>
                                    </div>
                                    <h3 className="text-base font-bold text-gray-800 line-clamp-1">
                                        {cake.name}
                                    </h3>
                                    <p className="text-xs text-gray-500 mt-1">Weight: {cake.weight}</p>
                                </div>
                            </div>

                            {/* Price & Action */}
                            <div className="px-5 pb-5 pt-2 flex items-center justify-between border-t border-gray-50">
                                <span className="text-lg font-extrabold text-pink-600">{cake.price}</span>
                                <Link
                                    href={`/cakes/${cake.id}`}
                                    className="px-4 py-2 text-xs font-semibold text-white bg-gray-900 rounded-full hover:bg-pink-600 transition"
                                >
                                    Order Now
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}