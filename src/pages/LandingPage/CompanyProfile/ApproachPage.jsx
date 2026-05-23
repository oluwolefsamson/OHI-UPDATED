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
      <section className="rounded-[36px] bg-[#fffaf5] p-4 sm:p-6">
        <SectionHeader
          title="How OHI works"
          description="Each project is designed to be practical for DFIs, governments, and institutions that need professional communication support without unnecessary complexity."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="relative mx-auto w-full max-w-[560px]">
            <div className="overflow-hidden rounded-[32px] border border-[#D9DCE2] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
              <img
                src={approachVisual}
                alt="Production workflow visual"
                className="h-[420px] w-full object-cover sm:h-[500px]"
              />
            </div>
          </div>

          <div className="max-w-2xl">
            <div className="space-y-4">
              <div className="rounded-[26px] border border-[#e8dcc8] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
                <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
                  Workflow
                </p>
                <p className="font-body mt-3 text-base leading-7 text-[#4e5a67]">
                  The approach section keeps the steps and deliverables easy to scan while staying aligned with the profile narrative.
                </p>
              </div>
              <div className="rounded-[26px] border border-[#e8dcc8] bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-5 text-white shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
                <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                  Delivery style
                </p>
                <p className="font-body mt-3 text-base leading-7 text-white/80">
                  OHI combines strategy, production, and editorial craft into one practical workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <step.icon className="h-5 w-5 text-primaryColor" />
                <span className="text-sm font-semibold uppercase tracking-[0.18em] text-textColor">
                  0{index + 1}
                </span>
              </div>
              <h3 className="mt-5 text-2xl font-bold text-headingColor">{step.title}</h3>
              <p className="text__para">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 rounded-[36px] bg-[#f4f8fb] p-4 lg:grid-cols-[0.9fr_1.1fr] lg:p-6">
        <div className="rounded-[28px] border border-[#D9DCE2] bg-[#0f172a] p-6 text-white shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-300">
            Working style
          </p>
          <h3 className="mt-4 text-3xl font-bold">Aligned with institutional and DFI standards</h3>
          <p className="mt-4 leading-7 text-white/80">
            The profile notes a project management approach that aligns with communication standards expected by development partners, DFIs, and institutional teams.
          </p>
        </div>

        <div className="rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-sm">
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
      </section>
    </ProfilePageShell>
  );
};

export default ApproachPage;
