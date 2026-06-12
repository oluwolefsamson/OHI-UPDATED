import React from "react";
import { ArrowRight, ClipboardList, Handshake, Rocket, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import approachVisual from "../../../assets/images/Gallery/gallery-06.jpeg";

const steps = [
  {
    title: "Understand",
    description: "Your objectives, your stakeholders, and the decisions your story must influence.",
    icon: ClipboardList,
  },
  {
    title: "Strategise",
    description: "A narrative concept and action plan aligned with your reporting and investment goals.",
    icon: Handshake,
  },
  {
    title: "Align",
    description: "A tailored scope and budget matched to your timeline and compliance requirements.",
    icon: WalletCards,
  },
  {
    title: "Deliver",
    description: "End-to-end, institution-grade storytelling and production, from field to final cut.",
    icon: Rocket,
  },
];

const deliverables = [
  "Documentary films and mission coverage",
  "Visibility content for programmes and institutions",
  "Testimonial stories and community-focused edits",
  "Campaign-ready outputs for digital channels",
  "Stakeholder communication assets for reporting and presentations",
];

const ApproachPage = () => {
  return (
    <ProfilePageShell
      title="Our Approach"
      heroImage={approachVisual}
      heroImageAlt="Production workflow visual"
      description="We give your programme the visibility it deserves, the viability it needs, and the credibility it demands."
      descriptionClassName="text-white"
      primaryCta={{ label: "View Portfolio", href: "/portfolio" }}
      secondaryCta={{ label: "Contact Us", href: "/contact" }}
      heroBadge={
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            OHI profile
          </p>
          <p className="text-sm leading-6 text-white/80">
            Strategic visibility for development, investment, and impact communication.
          </p>
        </div>
      }
    >
      {/* How OHI works */}
      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <SectionHeader
            title="How OHI works"
            description="Each project is designed to be practical for DFIs, governments, and institutions that need professional communication support without unnecessary complexity."
            className="max-w-4xl"
          />

          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F07F1A]">
                How we work
              </p>
              <p className="mt-4 text-base leading-8 text-[#4e5a67]">
                Each project is designed to be practical for DFIs, governments, and institutions that need professional communication support without unnecessary complexity. We start by understanding your objectives, your stakeholders, and the decisions your story must influence.
              </p>
              <p className="mt-4 text-base leading-8 text-[#4e5a67]">
                From there, we shape a narrative concept and action plan, align on scope and budget, and deliver institution-grade storytelling from field to final cut — keeping every stage aligned with your reporting and investment goals.
              </p>
            </div>

            <div className="overflow-hidden bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
              <img
                src={approachVisual}
                alt="Production workflow visual"
                className="h-[400px] w-full object-cover sm:h-[460px]"
              />
            </div>
          </div>

          {/* 4-step cards */}
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
            {steps.map((step, index) => (
              <article
                key={step.title}
                className="bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-center justify-between">
                  <step.icon className="h-5 w-5 text-[#1FA8DD]" />
                  <span className="inline-flex h-9 w-9 items-center justify-center bg-[#f8f9fb] text-xs font-bold uppercase tracking-[0.22em] text-[#F07F1A]">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold tracking-[-0.02em] text-[#2e3135]">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-[#4e5a67]">
                  {step.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DFI standards + deliverables */}
      <section className="bg-[#bb7422] py-16 sm:py-20">
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#0a0c12] p-6 text-white shadow-[0_10px_28px_rgba(15,23,42,0.12)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F07F1A]">
              Working style
            </p>
            <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white">
              Aligned with institutional and DFI standards
            </h3>
            <p className="mt-4 text-sm leading-7 text-white/80">
              The profile notes a project management approach that aligns with communication standards expected by development partners, DFIs, and institutional teams.
            </p>
          </div>

          <div className="bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1FA8DD]">
              Deliverables
            </p>
            <div className="mt-5 space-y-2">
              {deliverables.map((item) => (
                <div key={item} className="bg-[#f8f9fb] px-4 py-3 text-sm leading-6 text-[#4e5a67]">
                  {item}
                </div>
              ))}
            </div>
            <div className="mt-6">
              <Link
                to="/services"
                className="inline-flex h-11 items-center gap-2 bg-[#F07F1A] px-6 text-sm font-bold text-white transition hover:bg-[#d96d10]"
              >
                View all services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ApproachPage;
