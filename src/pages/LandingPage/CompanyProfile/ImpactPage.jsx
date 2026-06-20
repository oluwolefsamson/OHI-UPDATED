import React from "react";
import { ArrowRight, CheckCircle2, ShieldCheck, Target } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import impactVisual from "../../../assets/images/Gallery/gallery-05.jpeg";

const ImpactPage = () => {
  const { config } = useLandingPageConfig();
  const impactPage = config.impactPage ?? {};
  const hero = impactPage.hero ?? {};
  const proof = impactPage.proof ?? {};
  const benefits = impactPage.benefits ?? {};

  const impactReasons = benefits.points ?? [
    "Demonstrate impact and transparency",
    "Attract new partners and financing",
    "Strengthen stakeholder alignment",
    "Build trust with communities",
    "Drive policy influence",
    "Showcase success stories that justify continued investment",
  ];

  const impactStats = [
    { value: "100+", label: "Projects delivered" },
    { value: "70+", label: "Institutional clients" },
    { value: "95%", label: "Repeat-client rate" },
  ];

  return (
    <ProfilePageShell
      title={hero.title ?? "Impact"}
      heroImage={hero.image ?? impactVisual}
      heroImageAlt="Development storytelling visual"
      description={hero.description ?? "OHI creates development communication that helps institutions, partners, and communities understand the work being done, why it matters, and why it deserves attention from capital and policy actors."}
      descriptionClassName="text-white"
      primaryCta={{ label: hero.primaryCtaLabel ?? "View Portfolio", href: hero.primaryCtaHref ?? "/portfolio" }}
      secondaryCta={{ label: hero.secondaryCtaLabel ?? "Contact Us", href: hero.secondaryCtaHref ?? "/contact" }}
      heroBadge={
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {hero.badgeEyebrow ?? "OHI profile"}
          </p>
          <p className="text-sm leading-6 text-white/80">
            {hero.badgeDescription ?? "Strategic visibility for development, investment, and impact communication."}
          </p>
        </div>
      }
    >
      {/* Visual proof */}
      <section className="py-16 sm:py-20" style={{ backgroundImage: "url('/white-bg3.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <SectionHeader
            title={proof.title ?? "Why organisations invest in storytelling"}
            description={proof.description ?? "The profile makes a direct business case for visual communication, not just a creative one."}
            className="max-w-4xl"
          />
          <div className="mt-10 overflow-hidden bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
            <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
              <div className="p-6 sm:p-8 lg:p-10">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F07F1A]">
                  {proof.visualTitle ?? "Visual proof"}
                </p>
                <h3 className="mt-3 text-2xl font-bold leading-tight tracking-[-0.04em] text-[#2e3135] sm:text-3xl">
                  {proof.visualHeading ?? "Stories that help teams show results clearly"}
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#4e5a67]">
                  {proof.visualDescription ?? "The profile now makes the case for why OHI is a strategic communication partner, not a generic production supplier."}
                </p>
              </div>
              <div className="relative min-h-[260px]">
                <img
                  src={proof.image ?? impactVisual}
                  alt="Development storytelling visual"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.04)_0%,rgba(8,10,15,0.38)_100%)]" />
              </div>
            </div>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {impactReasons.map((reason) => (
              <div key={reason} className="bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
                <CheckCircle2 className="h-5 w-5 text-[#F07F1A]" />
                <h3 className="mt-4 text-base font-semibold tracking-[-0.02em] text-[#2e3135]">
                  {reason}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payoff */}
      <section className="py-16 sm:py-20" style={{ backgroundImage: "url('/africa-dev.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container grid gap-6 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="bg-[#0a0c12] p-6 text-white shadow-[0_10px_28px_rgba(15,23,42,0.12)] sm:p-8">
            <div className="flex items-center gap-3">
              <Target className="h-5 w-5 text-[#F07F1A]" />
              <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-white">
                {benefits.payoffTitle ?? "What OHI helps you achieve"}
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-white/78">
              {benefits.description ?? "OHI turns African projects into clear communication assets that support action, visibility, trust, and long-term value."}
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {impactStats.map((stat) => (
                <div key={stat.label} className="bg-white/10 p-4">
                  <p className="text-3xl font-bold tracking-[-0.04em] text-white">{stat.value}</p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#F07F1A]" />
              <h3 className="text-xl font-bold leading-tight tracking-[-0.04em] text-[#2e3135]">
                The communication payoff
              </h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-[#4e5a67]">
              {benefits.payoffDescription ?? "Good storytelling helps a programme look like a programme that can be trusted, funded, shared, and scaled. That is the lens behind every project in the profile."}
            </p>
            <div className="mt-6 bg-[#f8f9fb] p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#F07F1A]">
                {benefits.supportTitle ?? "Support for teams"}
              </p>
              <p className="mt-3 text-sm leading-6 text-[#4e5a67]">
                {benefits.supportDescription ?? "Use the work across reports, launch materials, stakeholder meetings, digital campaigns, and partner communications."}
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 bg-[#F07F1A] px-6 text-sm font-bold text-white transition hover:bg-[#d96d10]"
              >
                Discuss visibility <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ImpactPage;
