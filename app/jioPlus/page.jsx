
"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const plans = [
  {
    id: "premium",
    name: "Premium Monthly",
    price: 29,
    originalPrice: 59,
    discount: "51% OFF",
    benefits: [
      "Ad-Free (except sports & live)",
      "Includes all Premium content",
      "Any 1 device at a time",
      "Download and watch anytime",
    ],
  },
  {
    id: "family",
    name: "Family",
    price: 89,
    originalPrice: 149,
    discount: "40% OFF",
    benefits: [
      "Enjoy Premium benefits on up to 4 devices",
    ],
  },
];

export default function PremiumPage() {
  const [selectedPlan, setSelectedPlan] = useState("premium");

  const activePlan = plans.find(
    (plan) => plan.id === selectedPlan
  );

  return (
    <main className="min-h-screen bg-[#0d0b0b] pb-16 text-white">

      {/* Compact Hero */}
      <section
        className="relative min-h-[350px] bg-cover bg-center"
        style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(0,0,0,.90), rgba(0,0,0,.45)),
            url("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1600")
          `,
        }}
      >

        <div className="relative mx-auto max-w-[1200px] px-5 py-6 sm:px-8">

          {/* Heading */}
          <h1 className="text-2xl font-bold sm:text-3xl">
            JioCinema Premium
          </h1>

          <p className="mt-2 max-w-[750px] text-xs leading-relaxed text-gray-200 sm:text-sm">
            Entertainment Redefined - The best of Hollywood,
            Before TV premieres, Blockbuster movies, Exclusive
            series, India's biggest Kids & Family hub + 365 days of reality!
          </p>

          {/* Plans */}
          <div className="mt-6 grid max-w-[850px] grid-cols-1 gap-3 sm:grid-cols-2">

            {plans.map((plan) => {
              const isSelected = selectedPlan === plan.id;

              return (
                <Card
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`relative flex min-h-[215px] cursor-pointer flex-col rounded-lg border bg-[#581b87] p-4 text-white shadow-none transition-all ${
                    isSelected
                      ? "border-[#ffe83d]"
                      : "border-transparent hover:border-white/50"
                  }`}
                >

                  {/* Offer */}
                  <span className="absolute right-2 top-2 rounded bg-[#ffe83d] px-2 py-1 text-[9px] font-bold text-purple-900">
                    SPECIAL OFFER
                  </span>

                  {/* Title */}
                  <h2 className="mt-5 text-lg font-bold sm:text-xl">
                    {plan.name}
                  </h2>

                  {/* Benefits */}
                  <ul className="mt-3 space-y-1">
                    {plan.benefits.map((benefit, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-xs leading-relaxed"
                      >
                        <span>•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="mt-auto flex items-end justify-between pt-4">

                    <span className="rounded border border-[#ffe83d] px-2 py-1 text-[11px] font-semibold text-[#ffe83d]">
                      1 Month
                    </span>

                    <div className="text-right">
                      <p className="text-2xl font-bold">
                        ₹{plan.price}
                      </p>

                      <div className="flex gap-2 text-[10px]">
                        <span className="text-gray-300 line-through">
                          ₹{plan.originalPrice}
                        </span>
                        <span className="font-semibold text-[#ffe83d]">
                          {plan.discount}
                        </span>
                      </div>
                    </div>

                  </div>

                  {isSelected && (
                    <div className="absolute bottom-2 left-2 flex h-4 w-4 items-center justify-center rounded-full bg-[#ffe83d] text-purple-900">
                      <Check size={11} />
                    </div>
                  )}

                </Card>
              );
            })}

          </div>
        </div>
      </section>

      {/* Payment Bar */}
      <div className="fixed bottom-0 left-0 z-50 w-full border-t border-white/10 bg-[#191a1d] px-4 py-2">

        <div className="mx-auto flex max-w-[1200px] items-center justify-between">

          <div className="hidden sm:block">
            <p className="text-[10px] text-gray-400">
              Selected Plan
            </p>
            <p className="text-xs font-semibold">
              {activePlan.name} · ₹{activePlan.price}
            </p>
          </div>

          <Button
            onClick={() => console.log("Selected:", activePlan)}
            className="h-9 w-full rounded-md bg-[#e52278] text-sm font-semibold text-white hover:bg-[#c91865] sm:ml-auto sm:w-auto sm:px-8"
          >
            Continue & Pay
          </Button>

        </div>
      </div>

    </main>
  );
}
