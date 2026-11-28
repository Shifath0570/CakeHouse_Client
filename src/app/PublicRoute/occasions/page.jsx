"use client";

import React, { useState } from "react";
import Link from "next/link";

const freeOffers = [
  {
    id: 1,
    badge: "FREE GIFT",
    title: "Free Sparkler Candle & Custom Topper",
    description: "Included free with every Birthday or Anniversary cake above 1.5 lbs.",
    code: "SWEETGIFT",
    icon: "✨",
  },
  {
    id: 2,
    badge: "FREE DELIVERY",
    title: "Complimentary Same-Day City Delivery",
    description: "Zero delivery charges on all celebration orders over ৳2,000.",
    code: "FREEDELIVERY",
    icon: "🚚",
  },
  {
    id: 3,
    badge: "BONUS BOX",
    title: "4 Free Assorted Mini Cupcakes",
    description: "Order any 2-tier Wedding or Corporate event cake and get a tasting box free.",
    code: "PARTYBOX4",
    icon: "🧁",
  },
];

const occasionCakes = [
  {
    id: 101,
    occasion: "Birthday",
    name: "Confetti Berry Blast Birthday Cake",
    price: 1750,
    weight: "1.5 lbs",
    freePerk: "Free Sparkler Candle + Name Topper",
    description: "Vanilla bean sponge loaded with rainbow sprinkles, strawberry cream, and white chocolate drip.",
    image: "https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 102,
    occasion: "Anniversary",
    name: "Velvet Rose & Gold Heart Cake",
    price: 2100,
    weight: "2.0 lbs",
    freePerk: "Free Handwritten Love Card + Rose Petals",
    description: "Heart-shaped red velvet cake finished with silky mascarpone frosting and edible 24k gold flakes.",
    image: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 103,
    occasion: "Wedding",
    name: "Ivory Lace Three-Tier Grandeur",
    price: 8500,
    weight: "6.0 lbs",
    freePerk: "Free 4-Cupcake Tasting Box + Setup",
    description: "Almond champagne and Belgian chocolate tiers draped in handcrafted sugar flowers.",
    image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 104,
    occasion: "Baby Shower",
    name: "Pastel Cloud & Teddy Bear Cake",
    price: 2400,
    weight: "2.0 lbs",
    freePerk: "Free 'Oh Baby' Acrylic Topper",
    description: "Soft blueberry & vanilla sponge decorated with pastel Swiss meringue buttercream clouds.",
    image: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 105,
    occasion: "Graduation",
    name: "Midnight Mocha Achievement Cake",
    price: 1950,
    weight: "2.0 lbs",
    freePerk: "Free Custom Graduation Cap Topper",
    description: "Rich espresso chocolate fudge cake topped with dark ganache and gold-dusted truffles.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 106,
    occasion: "Birthday",
    name: "Choco-Caramel Crunch Fiesta",
    price: 1890,
    weight: "1.5 lbs",
    freePerk: "Free Number Candle + Greeting Card",
    description: "Double chocolate sponge layered with salted caramel, roasted hazelnuts, and crispy wafer.",
    image: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
  },
];

const occasionTabs = ["All", "Birthday", "Anniversary", "Wedding", "Baby Shower", "Graduation"];

export default function Occasions() {
  const [activeOccasion, setActiveOccasion] = useState("All");
  const [copiedCode, setCopiedCode] = useState("");

  const handleCopyCode = (code) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(""), 2000);
  };

  const filteredCakes =
    activeOccasion === "All"
      ? occasionCakes
      : occasionCakes.filter((item) => item.occasion === activeOccasion);

  return (
    <section className="min-h-screen bg-pink-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100 rounded-full">
            Celebrate Every Milestone
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Shop Cakes by <span className="text-pink-600">Occasion</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            Curated designs for birthdays, weddings, anniversaries, and graduations—complete with complimentary celebration extras.
          </p>
        </div>

        {/* Free Offers Banner Section */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-500 rounded-3xl p-6 sm:p-8 text-white shadow-md space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold flex items-center gap-2">
                <span>🎁</span> Complimentary Celebration Offers
              </h2>
              <p className="text-pink-100 text-sm mt-1">
                Claim a free gift or delivery perk when ordering any occasion cake today.
              </p>
            </div>
            <span className="inline-block self-start sm:self-center px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/20 rounded-full">
              Limited Time Perks
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {freeOffers.map((offer) => (
              <div
                key={offer.id}
                className="bg-white text-gray-800 rounded-2xl p-5 flex flex-col justify-between space-y-4 shadow-sm"
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl">{offer.icon}</span>
                    <span className="px-2.5 py-0.5 text-xs font-bold text-pink-600 bg-pink-100 rounded-full">
                      {offer.badge}
                    </span>
                  </div>
                  <h3 className="font-bold text-base text-gray-900">{offer.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{offer.description}</p>
                </div>

                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-gray-700 bg-gray-100 px-2.5 py-1 rounded-md">
                    {offer.code}
                  </span>
                  <button
                    onClick={() => handleCopyCode(offer.code)}
                    className="text-xs font-semibold text-pink-600 hover:text-pink-700 transition"
                  >
                    {copiedCode === offer.code ? "Copied!" : "Copy Code"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Occasion Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {occasionTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveOccasion(tab)}
              className={`px-5 py-2 text-sm font-semibold rounded-full transition ${
                activeOccasion === tab
                  ? "bg-pink-600 text-white shadow-sm"
                  : "bg-white text-gray-700 border border-pink-100 hover:bg-pink-50 hover:text-pink-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Occasion Cakes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCakes.map((cake) => (
            <div
              key={cake.id}
              className="group bg-white rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56 w-full overflow-hidden bg-pink-50">
                <img
                  src={cake.image}
                  alt={cake.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
                <span className="absolute top-3 left-3 px-3 py-1 text-xs font-semibold bg-white/95 text-pink-600 rounded-full shadow-sm">
                  {cake.occasion}
                </span>
                <span className="absolute bottom-3 right-3 px-2.5 py-1 text-xs font-medium bg-gray-900/75 text-white rounded-full">
                  {cake.weight}
                </span>
              </div>

              {/* Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-pink-600 transition">
                    {cake.name}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {cake.description}
                  </p>

                  {/* Included Free Perk Pill */}
                  <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-medium">
                    <span>🎁</span>
                    <span>{cake.freePerk}</span>
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-gray-400 block">Starting at</span>
                    <span className="text-lg font-extrabold text-gray-900">
                      ৳{cake.price.toLocaleString()}
                    </span>
                  </div>

                  <Link
                    href="/PublicRoute/customerorders"
                    className="px-4 py-2 text-xs font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition"
                  >
                    Order with Offer
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}