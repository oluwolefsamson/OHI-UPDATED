import React from "react";
import { ArrowRight, ClipboardList, Handshake, Rocket, WalletCards } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import approachVisual from "../../../assets/images/Gallery/gallery-06.jpeg";

const steps = [
  {
    title: "Understand objectives",
    description: "Clarify the communication goal, audience, and the outcome the project needs.",
    icon: ClipboardList,
  },
  {
    title: "Provide concept and action plan",
    description: "Shape the story direction and map the production work into a practical plan.",
    icon: Handshake,
  },
  {
    title: "Align on a tailored budget",
    description: "Build an approach that fits the scope, schedule, and available resources.",
    icon: WalletCards,
  },
  {
    title: "Deliver end-to-end storytelling",
    description: "Produce the final communication assets from brief through delivery.",
    icon: Rocket,
  },
];

const ApproachPage = () => {
  return (
    <ProfilePageShell
      title="Our Approach"
      heroImage={approachVisual}
      heroImageAlt="Production workflow visual"
      description="OHI creates development communication that helps institutions, partners, and communities understand the work being done, why it matters, and why it deserves attention from capital and policy actors."
      descriptionClassName="text-white"
      primaryCta={{ label: "View Portfolio", href: "/portfolio" }}
      secondaryCta={{ label: "Contact Us", href: "/contact" }}
      heroBadge={
        <div className="space-y-1">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            OHI profile
          </p>
          <p className="font-body text-sm leading-6 text-white/80">
            Strategic visibility for development, investment, and impact communication.
          </p>
        </div>
      }
      statCards={[
        { eyebrow: "Projects", value: "100+", label: "Projects delivered" },
        { eyebrow: "Clients", value: "70+", label: "Institutional clients" },
        { eyebrow: "Retention", value: "95%", label: "Repeat-client rate" },
      ]}
    >
      <section className="bg-[#fffaf5] p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="How OHI works"
            description="Each project is designed to be practical for DFIs, governments, and institutions that need professional communication support without unnecessary complexity."
            className="max-w-4xl"
            textColorClassName="text-[#2f3135]"
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
            <div className="flex h-full flex-col justify-center p-6 sm:p-8">
              <p className="font-body text-xs font-semibold uppercase tracking-[0.3em] text-[#d38a31]">
                Workflow
              </p>
              <p className="font-body mt-4 max-w-3xl text-xl leading-9 text-justify text-[#5a5f66]">
                OHI works through a clear process that starts with understanding the communication objective, the audience, and the practical constraints around timing, budget, and delivery. From there, the team shapes a concept that fits the brief and keeps the editorial direction steady from the first conversation through final handoff.
              </p>
              <p className="font-body mt-4 max-w-3xl text-xl leading-9 text-justify text-[#5a5f66]">
                The result is a workflow that stays practical for institutions while still giving the work the polish and clarity needed to land with decision-makers. It keeps each stage focused, coordinated, and aligned with the final communication outcome.
              </p>
            </div>
          </div>

            <div className="relative mx-auto w-full max-w-[560px]">
            <div className="overflow-hidden rounded-none border border-[#D9DCE2] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <img
                src={approachVisual}
                alt="Production workflow visual"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>
          </div>
          </div>
          <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center justify-between">
                <step.icon className="h-5 w-5 text-primaryColor" />
                <span className="inline-flex h-10 w-10 items-center justify-center bg-[#fff8ef] text-xs font-semibold uppercase tracking-[0.22em] text-[#b16a18]">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-xl font-semibold tracking-[-0.02em] text-[#173145]">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#5a5f66]">
                {step.description}
              </p>
            </article>
          ))}
          </div>
        </div>
      </section>

      <section className="mt-12 bg-[#f4f8fb] p-4 lg:p-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="bg-[#0f172a] p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Working style
          </p>
          <h3 className="mt-4 text-3xl font-bold">Aligned with institutional and DFI standards</h3>
          <p className="mt-4 leading-7 text-white/80">
            The profile notes a project management approach that aligns with communication standards expected by development partners, DFIs, and institutional teams.
          </p>
          </div>

          <div className="bg-white p-6 shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primaryColor">
            Deliverables
          </p>
          <div className="mt-5 space-y-3">
            {[
              "Documentary films and mission coverage",
              "Visibility content for programmes and institutions",
              "Testimonial stories and community-focused edits",
              "Campaign-ready outputs for digital channels",
              "Stakeholder communication assets for reporting and presentations",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-textColor">
                {item}
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Link to="/services">
              <button className="btn inline-flex items-center gap-2">
                Back to services <ArrowRight className="h-4 w-4" />
              </button>
            </Link>
          </div>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ApproachPage;
