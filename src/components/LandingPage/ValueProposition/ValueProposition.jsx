import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SectionHeader from "../SectionHeader";
import Reveal from "../../ui/reveal";

const tiers = [
  {
    name: "Institutional credibility",
    id: "tier-expertise",
    href: "/documentary",
    priceMonthly: "01",
    description:
      "Seasoned professionals delivering visual content for DFIs, multilaterals, governments, institutions, and private-sector actors.",
    features: [
      "Nearly a decade of experience",
      "UN, EU, and private-sector project exposure",
      "Trusted delivery across Africa",
    ],
    featured: false,
  },
  {
    name: "Strategic fluency",
    id: "tier-strategic",
    href: "/impact",
    priceMonthly: "02",
    description:
      "We combine narrative craft with communication strategy so every film supports a clear institutional objective.",
    features: [
      "Storytelling grounded in strategy",
      "Content tailored to audiences and outcomes",
      "Designed to improve visibility and traction",
    ],
    featured: true,
  },
  {
    name: "Multilingual delivery",
    id: "tier-flexible",
    href: "/approach",
    priceMonthly: "03",
    description:
      "We adapt to your timelines, budgets, and communication standards without compromising quality.",
    features: [
      "Tailored project scoping",
      "End-to-end production support",
      "Results aligned to your goals",
    ],
    featured: false,
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ValueProposition() {
  return (
    <div
      id="approach"
      className="relative isolate bg-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
    >
      <SectionHeader
        title="Our Value Proposition"
        description="OHI combines creativity, credibility, and flexibility to help projects communicate with clarity and impact."
      />

      <div className="mx-auto mt-12 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-16 lg:max-w-6xl lg:grid-cols-3">
        {tiers.map((tier, index) => (
          <Reveal key={tier.id} delay={0.06 + index * 0.08} distance={36} scale={0.95}>
            <motion.div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? "relative bg-black shadow-2xl border border-white/10"
                  : "bg-white/60 sm:mx-0 lg:mx-0",
                "rounded-3xl p-6 ring-1 ring-gray-900/10 sm:p-8"
              )}
              whileHover={{ y: -8, scale: 1.01 }}
              transition={{ duration: 0.25 }}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? "text-white" : "text-primaryColor",
                  "text-base/7 font-semibold"
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? "text-white" : "text-gray-900",
                    "text-5xl font-semibold tracking-tight"
                  )}
                >
                  {tier.priceMonthly}
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-6 text-base/7"
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? "text-gray-300" : "text-gray-600",
                  "mt-8 space-y-3 text-sm/6 sm:mt-10"
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <span
                      className={classNames(
                        tier.featured ? "text-white" : "text-primaryColor",
                        "h-6 w-5 flex-none"
                      )}
                      aria-hidden="true"
                    >
                      &bull;
                    </span>
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                to={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-yellowColor text-black shadow-xs hover:bg-yellowColor/90 focus-visible:outline-yellowColor"
                    : "text-primaryColor ring-1 ring-primaryColor/20 ring-inset hover:ring-primaryColor/30 focus-visible:outline-primaryColor",
                  "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold transition duration-300 ease-out hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
                )}
              >
                {tier.featured ? "See how we work" : "Open page"}
              </Link>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
