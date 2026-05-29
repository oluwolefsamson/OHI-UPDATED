import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import UnderlinedHeading from "../../../components/LandingPage/UnderlinedHeading";
import impactVisual from "../../../assets/images/Gallery/gallery-05.jpeg";

const impactReasons = [
  "Demonstrate impact and transparency",
  "Attract new partners and financing",
  "Strengthen stakeholder alignment",
  "Build trust with communities",
  "Drive policy influence",
  "Showcase success stories",
];

const impactStats = [
  { value: "100+", label: "Projects delivered" },
  { value: "70+", label: "Institutional clients" },
  { value: "95%", label: "Repeat-client rate" },
];

const ImpactPage = () => {
  return (
    <ProfilePageShell
      title="Impact"
      heroImage={impactVisual}
      heroImageAlt="Development storytelling visual"
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
      <section className="bg-[#f4f8fb] p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Why organizations invest in storytelling"
            description="The profile makes a direct business case for visual communication, not just a creative one."
            className="max-w-4xl"
            textColorClassName="text-[#2f3135]"
          />
          <div className="mt-10 overflow-hidden bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-6 sm:p-8 lg:p-10">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d38a31]">
                Visual proof
              </p>
              <h3 className="font-display mt-3 text-3xl font-bold leading-tight tracking-[-0.04em] text-[#2f3135] sm:text-[38px]">
                Stories that help teams show results clearly
              </h3>
              <p className="font-body mt-4 max-w-2xl text-sm leading-6 text-[#5a5f66]">
                The profile now makes the case for why OHI is a strategic
                communication partner, not a generic production supplier.
              </p>
            </div>
            <div className="relative min-h-[280px]">
              <img
                src={impactVisual}
                alt="Development storytelling visual"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.04)_0%,rgba(8,10,15,0.42)_100%)]" />
            </div>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {impactReasons.map((reason) => (
              <div
                key={reason}
                className="bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
              >
                <CheckCircle2 className="h-5 w-5 text-[#b16a18]" />
                <h3 className="font-display mt-4 text-lg font-semibold tracking-[-0.02em] text-[#173145]">
                  {reason}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-12 bg-[#fff3e3] p-4 lg:p-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-[#fbbf24]" />
              <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.04em] text-white">
                What OHI helps you achieve
              </h3>
            </div>
            <p className="font-body mt-4 text-sm leading-6 text-white/80">
              OHI turns African projects into clear communication assets that support action, visibility, trust, and long-term value.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {impactStats.map((stat) => (
                <div key={stat.label} className="bg-white/10 p-4">
                  <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-white">{stat.value}</p>
                  <p className="font-body mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/75">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#b16a18]" />
              <h3 className="font-display text-2xl font-bold leading-tight tracking-[-0.04em] text-[#2f3135]">
                The communication payoff
              </h3>
            </div>
            <p className="font-body mt-4 text-sm leading-6 text-[#5a5f66]">
              Good storytelling helps a programme look like a programme that can be trusted, funded, shared, and scaled. That is the lens behind every project in the profile.
            </p>
            <div className="mt-6 bg-[#fff8ef] p-5">
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.3em] text-[#d38a31]">
                Support for teams
              </p>
              <p className="font-body mt-3 text-sm leading-6 text-[#5a5f66]">
                Use the work across reports, launch materials, stakeholder meetings, digital campaigns, and partner communications.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/contact">
                <button className="btn inline-flex items-center gap-2">
                  Discuss visibility <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ImpactPage;
