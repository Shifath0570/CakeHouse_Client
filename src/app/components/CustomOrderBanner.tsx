import React from "react";
import Link from "next/link";

export default function CustomOrderBanner() {
    const perks = [
        { title: "100% Eggless Options", desc: "Available for every flavor on request.", icon: "🌱" },
        { title: "2-Hour Express Delivery", desc: "Fast chilled delivery across the city.", icon: "🚚" },
        { title: "Custom Photo & Fondant", desc: "Share your design and we’ll bake it.", icon: "🎨" },
    ];

    return (
        <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

                {/* Why Choose Us Row */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {perks.map((perk) => (
                        <div key={perk.title} className="flex items-start gap-4 p-6 rounded-2xl bg-pink-50/40 border border-pink-100">
                            <span className="text-3xl">{perk.icon}</span>
                            <div>
                                <h3 className="text-base font-bold text-gray-800">{perk.title}</h3>
                                <p className="text-sm text-gray-500 mt-1">{perk.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Custom Order Call-to-Action Card */}
                <div className="bg-pink-600 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg">
                    <div className="space-y-3 text-center md:text-left max-w-xl">
                        <h2 className="text-2xl sm:text-3xl font-extrabold">
                            Have a Dream Cake Design in Mind?
                        </h2>
                        <p className="text-pink-100 text-sm sm:text-base">
                            Upload a reference photo, choose your sponge flavor, frosting, and message—our master bakers will bring it to life.
                        </p>
                    </div>
                    <Link
                        href="/custom-orders"
                        className="px-8 py-3.5 bg-white text-pink-600 font-bold text-sm rounded-full shadow hover:bg-pink-50 transition flex-shrink-0"
                    >
                        Customize Your Cake
                    </Link>
                </div>

            </div>
        </section>
    );
}