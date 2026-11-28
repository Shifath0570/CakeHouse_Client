"use client";

import React, { useState } from "react";
import Link from "next/link";

const initialReviews = [
  {
    id: "ORD-8492",
    customerName: "Nusrat Jahan",
    location: "GEC Circle, Chattogram",
    cakeOrdered: "Belgian Chocolate Truffle (2.0 lbs)",
    occasion: "Birthday",
    date: "November 24, 2026",
    rating: 5,
    verified: true,
    review:
      "Ordered this for my brother's birthday and it arrived right on time in perfect condition! The dark ganache was super rich without being overly sweet, and the free sparkler candle was a lovely touch.",
    proofImage:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80",
    deliveryNote: "Delivered on time • Custom message piped on board",
  },
  {
    id: "ORD-8475",
    customerName: "Tanvir Ahmed",
    location: "Khulshi, Chattogram",
    cakeOrdered: "Royal Floral Wedding Tier (5.0 lbs)",
    occasion: "Wedding",
    date: "November 20, 2026",
    rating: 5,
    verified: true,
    review:
      "cakeHouse handled our engagement cake and every guest asked where we got it from. The hand-piped buttercream flowers looked just like our reference photo and the vanilla bean sponge stayed moist all evening.",
    proofImage:
      "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&w=800&q=80",
    deliveryNote: "Venue setup completed • Includes 4-cupcake tasting box",
  },
  {
    id: "ORD-8451",
    customerName: "Farhana Islam",
    location: "Agrabad, Chattogram",
    cakeOrdered: "Velvet Rose & Gold Heart Cake (2.0 lbs)",
    occasion: "Anniversary",
    date: "November 16, 2026",
    rating: 5,
    verified: true,
    review:
      "The cream cheese frosting and edible gold leaf looked stunning! Even the packaging was sturdy enough to survive traffic without a single smudge.",
    proofImage:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&w=800&q=80",
    deliveryNote: "Verified Photo Proof • Handwritten anniversary card included",
  },
  {
    id: "ORD-8429",
    customerName: "Rafiul Karim",
    location: "Halishahar, Chattogram",
    cakeOrdered: "Ferrero Hazelnut Crunch (1.5 lbs)",
    occasion: "Graduation",
    date: "November 11, 2026",
    rating: 4,
    verified: true,
    review:
      "Amazing hazelnut crunch texture and generous chocolate topping. Delivery took 10 minutes longer due to rain, but the rider kept the box chilled and intact.",
    proofImage:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=800&q=80",
    deliveryNote: "Temperature-controlled box • Verified Delivery",
  },
  {
    id: "ORD-8398",
    customerName: "Sadia Rahman",
    location: "Panchlaish, Chattogram",
    cakeOrdered: "Pastel Cloud & Teddy Bear Cake (2.0 lbs)",
    occasion: "Baby Shower",
    date: "November 05, 2026",
    rating: 5,
    verified: true,
    review:
      "The pastel shades were exact! Not overly sugary, super soft sponge, and the free 'Oh Baby' topper made our dessert table look complete.",
    proofImage:
      "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?auto=format&fit=crop&w=800&q=80",
    deliveryNote: "Verified Photo Proof • Custom theme design",
  },
  {
    id: "ORD-8374",
    customerName: "Mahmudul Hasan",
    location: "Nasirabad, Chattogram",
    cakeOrdered: "Assorted Rose Swirl Cupcakes (Box of 12)",
    occasion: "Corporate",
    date: "October 29, 2026",
    rating: 5,
    verified: true,
    review:
      "Ordered 3 boxes for an office milestone celebration. Every single cupcake arrived neat, fresh, and delicious—salted caramel was everyone's favorite.",
    proofImage:
      "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?auto=format&fit=crop&w=800&q=80",
    deliveryNote: "Bulk order verified • Same-day dispatch",
  },
];

const filterOccasions = [
  "All",
  "Birthday",
  "Wedding",
  "Anniversary",
  "Baby Shower",
  "Graduation",
  "Corporate",
];

export default function CustomerOrders() {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedOccasion, setSelectedOccasion] = useState("All");
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [newReview, setNewReview] = useState({
    customerName: "",
    orderId: "",
    cakeOrdered: "",
    occasion: "Birthday",
    rating: 5,
    review: "",
  });

  const filteredReviews =
    selectedOccasion === "All"
      ? reviews
      : reviews.filter((item) => item.occasion === selectedOccasion);

  const handleAddReview = (e) => {
    e.preventDefault();
    const created = {
      id: newReview.orderId.trim() || `ORD-${Math.floor(8500 + Math.random() * 499)}`,
      customerName: newReview.customerName,
      location: "Chattogram",
      cakeOrdered: newReview.cakeOrdered,
      occasion: newReview.occasion,
      date: "November 28, 2026",
      rating: Number(newReview.rating),
      verified: true,
      review: newReview.review,
      proofImage:
        "https://images.unsplash.com/photo-1586788680434-30d324b2d46f?auto=format&fit=crop&w=800&q=80",
      deliveryNote: "Customer submitted order proof",
    };

    setReviews([created, ...reviews]);
    setNewReview({
      customerName: "",
      orderId: "",
      cakeOrdered: "",
      occasion: "Birthday",
      rating: 5,
      review: "",
    });
    setShowReviewForm(false);
  };

  return (
    <section className="min-h-screen bg-pink-50/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="inline-block px-4 py-1 text-xs font-semibold uppercase tracking-wider text-pink-600 bg-pink-100 rounded-full">
            Verified Delivery Proofs & Reviews
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Real Orders, Real <span className="text-pink-600">Sweet Moments</span>
          </h1>
          <p className="text-sm sm:text-base text-gray-500">
            See actual delivered cakes, custom designs, and honest feedback from cakeHouse customers.
          </p>
        </div>

        {/* Trust Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-pink-100 text-center shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-pink-600">2,400+</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Delivered Cakes</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-pink-100 text-center shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-gray-900">4.9 / 5.0</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Average Customer Rating</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-pink-100 text-center shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-emerald-600">99.2%</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">On-Time Delivery</p>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-pink-100 text-center shadow-sm">
            <p className="text-2xl sm:text-3xl font-extrabold text-pink-600">100%</p>
            <p className="text-xs sm:text-sm text-gray-500 mt-1">Freshly Baked Same Day</p>
          </div>
        </div>

        {/* Filter Tabs + Write Review Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 bg-white p-4 rounded-2xl border border-pink-100 shadow-sm">
          <div className="flex flex-wrap justify-center gap-2">
            {filterOccasions.map((occasion) => (
              <button
                key={occasion}
                onClick={() => setSelectedOccasion(occasion)}
                className={`px-4 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition ${
                  selectedOccasion === occasion
                    ? "bg-pink-600 text-white"
                    : "bg-pink-50/70 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
                }`}
              >
                {occasion}
              </button>
            ))}
          </div>

          <button
            onClick={() => setShowReviewForm(!showReviewForm)}
            className="px-5 py-2 text-sm font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition flex-shrink-0"
          >
            {showReviewForm ? "Close Form" : "+ Share Order Review"}
          </button>
        </div>

        {/* Submit Review Form (Collapsible) */}
        {showReviewForm && (
          <form
            onSubmit={handleAddReview}
            className="bg-white p-6 sm:p-8 rounded-3xl border border-pink-200 shadow-md space-y-4"
          >
            <h2 className="text-lg font-bold text-gray-900">
              Share Your cakeHouse Order Experience
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <input
                type="text"
                required
                placeholder="Your Name"
                value={newReview.customerName}
                onChange={(e) =>
                  setNewReview({ ...newReview, customerName: e.target.value })
                }
                className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-pink-600"
              />
              <input
                type="text"
                placeholder="Order ID (e.g. ORD-8501)"
                value={newReview.orderId}
                onChange={(e) =>
                  setNewReview({ ...newReview, orderId: e.target.value })
                }
                className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-pink-600"
              />
              <input
                type="text"
                required
                placeholder="Cake Ordered (e.g. Red Velvet 1.5 lbs)"
                value={newReview.cakeOrdered}
                onChange={(e) =>
                  setNewReview({ ...newReview, cakeOrdered: e.target.value })
                }
                className="px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-pink-600"
              />
              <div className="flex gap-2">
                <select
                  value={newReview.occasion}
                  onChange={(e) =>
                    setNewReview({ ...newReview, occasion: e.target.value })
                  }
                  className="w-full px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-pink-600"
                >
                  {filterOccasions.slice(1).map((occ) => (
                    <option key={occ} value={occ}>
                      {occ}
                    </option>
                  ))}
                </select>
                <select
                  value={newReview.rating}
                  onChange={(e) =>
                    setNewReview({ ...newReview, rating: e.target.value })
                  }
                  className="w-24 px-3 py-2.5 text-sm border border-gray-200 rounded-xl bg-white focus:outline-none focus:border-pink-600"
                >
                  <option value={5}>5 ★</option>
                  <option value={4}>4 ★</option>
                  <option value={3}>3 ★</option>
                </select>
              </div>
            </div>

            <textarea
              rows={3}
              required
              placeholder="Write your feedback on taste, design, and delivery..."
              value={newReview.review}
              onChange={(e) =>
                setNewReview({ ...newReview, review: e.target.value })
              }
              className="w-full px-4 py-2.5 text-sm border border-gray-200 rounded-xl focus:outline-none focus:border-pink-600"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2.5 text-sm font-semibold text-white bg-pink-600 rounded-full hover:bg-pink-700 transition"
              >
                Post Verified Review
              </button>
            </div>
          </form>
        )}

        {/* Order Proofs & Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl border border-pink-100 shadow-sm hover:shadow-md transition overflow-hidden flex flex-col"
            >
              {/* Delivered Cake Proof Photo */}
              <div className="relative h-56 w-full bg-pink-50 overflow-hidden">
                <img
                  src={item.proofImage}
                  alt={item.cakeOrdered}
                  className="w-full h-full object-cover hover:scale-105 transition duration-300"
                />
                {item.verified && (
                  <span className="absolute top-3 left-3 inline-flex items-center gap-1 px-3 py-1 text-xs font-semibold bg-emerald-600 text-white rounded-full shadow-sm">
                    ✓ Verified Order #{item.id}
                  </span>
                )}
                <span className="absolute bottom-3 right-3 px-2.5 py-1 text-xs font-medium bg-gray-900/75 text-white rounded-full">
                  {item.occasion}
                </span>
              </div>

              {/* Review Content */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  {/* Stars & Date */}
                  <div className="flex items-center justify-between">
                    <div className="text-amber-400 text-sm tracking-wide">
                      {"★".repeat(item.rating)}
                      <span className="text-gray-200">
                        {"★".repeat(5 - item.rating)}
                      </span>
                    </div>
                    <span className="text-xs text-gray-400">{item.date}</span>
                  </div>

                  {/* Cake Ordered */}
                  <h2 className="text-base font-bold text-gray-900">
                    {item.cakeOrdered}
                  </h2>

                  {/* Customer Feedback */}
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    &ldquo;{item.review}&rdquo;
                  </p>
                </div>

                {/* Delivery Proof Note & Customer Info */}
                <div className="pt-3 border-t border-gray-100 space-y-2">
                  <p className="text-xs text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl font-medium">
                    📦 {item.deliveryNote}
                  </p>

                  <div className="flex items-center justify-between pt-1">
                    <div>
                      <p className="text-sm font-bold text-gray-800">
                        {item.customerName}
                      </p>
                      <p className="text-xs text-gray-400">{item.location}</p>
                    </div>

                    <Link
                      href="/PublicRoute/allcakes"
                      className="text-xs font-semibold text-pink-600 hover:underline"
                    >
                      Order Similar →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}