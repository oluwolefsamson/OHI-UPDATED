import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, HeartHandshake, Sparkles } from "lucide-react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { Button } from "../../../components/ui/button";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import aboutHeroImage from "../../../assets/images/profile-hero-mountain.jpg";
import storyVisual from "../../../assets/images/Gallery/gallery-11.jpeg";
import portraitTwo from "../../../assets/images/Gallery/gallery-12.jpeg";
import teamImageOne from "../../../assets/images/Gallery/gallery-09.jpeg";
import teamImageTwo from "../../../assets/images/HeroImg/hero2.jpeg";
import ctaImage from "../../../assets/images/Gallery/gallery-06.jpeg";

const principles = [
  {
    title: "Credibility",
    description:
      "OHI produces stories that help institutions communicate with clarity, trust, and confidence.",
    icon: BadgeCheck,
  },
  {
    title: "Human focus",
    description:
      "People stay at the center so technical work becomes relatable, memorable, and useful.",
    icon: HeartHandshake,
  },
  {
    title: "Editorial craft",
    description:
      "Every frame is designed to feel intentional across film, photography, and digital storytelling.",
    icon: Sparkles,
  },
];

const stats = [
  { value: "100+", label: "Projects delivered" },
  { value: "70+", label: "Institutional clients" },
  { value: "95%", label: "Repeat-client rate" },
];

const teamHighlights = [
  {
    title: "Field production",
    description: "Story capture in communities, project sites, and institutional spaces.",
    image: teamImageOne,
  },
  {
    title: "Post-production",
    description: "Editing, motion, and finishing that keep the story clear and polished.",
    image: teamImageTwo,
  },
];

const AboutPage = () => {
  const { config } = useLandingPageConfig();
  const aboutPage = config.aboutPage ?? {};
  const hero = aboutPage.hero ?? {};
  const intro = aboutPage.intro ?? {};
  const difference = aboutPage.difference ?? {};
  const snapshot = aboutPage.snapshot ?? {};
  const close = aboutPage.close ?? {};
  const differencePrinciples = (difference.principles ?? principles).map((item, index) => ({
    ...item,
    icon: item.icon ?? principles[index]?.icon,
  }));

  return (
    <ProfilePageShell
      eyebrow={hero.eyebrow ?? "OHI profile"}
      title={hero.title ?? "About OHI"}
      description={hero.description ?? "OHI creates development communication that helps institutions, partners, and communities understand the work being done, why it matters, and why it deserves attention from capital and policy actors."}
      descriptionClassName="text-white"
      primaryCta={{ label: hero.primaryCtaLabel ?? "View Portfolio", href: hero.primaryCtaHref ?? "/portfolio" }}
      secondaryCta={{ label: hero.secondaryCtaLabel ?? "Contact Us", href: hero.secondaryCtaHref ?? "/contact" }}
      heroImage={aboutHeroImage}
      heroImageAlt="About OHI hero"
      heroBadge={
        <div className="space-y-1">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
            {hero.badgeEyebrow ?? "OHI profile"}
          </p>
          <p className="font-body text-sm leading-6 text-white/80">
            {hero.badgeDescription ?? "Strategic visibility for development, investment, and impact communication."}
          </p>
        </div>
      }
    >
      <section className="bg-[#fffaf5] p-4 lg:p-6">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
              {intro.aboutLabel ?? "About OHI"}
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-headingColor sm:text-4xl">
              {intro.title ?? "We turn Africa's development story into strategic visibility"}
            </h2>
            <p className="mt-4 text-base leading-7 text-justify text-textColor">
              {intro.description ?? "OHI creates development communication that helps institutions, partners, and communities understand the work being done and why it matters."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="bg-[#fff9f1] p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
                  {intro.editorialLabel ?? "Editorial focus"}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#4e5a67]">
                  {intro.editorialText ?? "OHI combines strategy, production, and field storytelling into one editorial workflow."}
                </p>
              </div>
              <div className="bg-white p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
                  What we do
                </p>
                <p className="mt-2 text-sm leading-6 text-[#4e5a67]">
                  Clear communication, trusted delivery, and audience-ready outputs.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="rounded-none bg-[#f59e0b] px-6 text-white hover:bg-[#d97706]">
                <Link to={intro.ctaHref ?? "/portfolio"} className="inline-flex items-center gap-2">
                  {intro.ctaLabel ?? "Learn More"} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-none border-[#e8dcc8] bg-white px-6 text-[#173145] hover:bg-[#fff8ef]">
                <Link to={intro.ctaSecondaryHref ?? "/contact"} className="inline-flex items-center gap-2">
                  {intro.ctaSecondaryLabel ?? "Start a Project"} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="overflow-hidden bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
              <img
                src={intro.image ?? storyVisual}
                alt="OHI story visual"
                className="h-[320px] w-full object-cover sm:h-[380px]"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="overflow-hidden bg-white shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
                <img src={intro.detailImage ?? portraitTwo} alt="OHI detail visual" className="h-[220px] w-full object-cover" />
              </div>
              <div className="bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-5 text-white shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                  {close.title ?? "What OHI stands for"}
                </p>
                <p className="mt-3 text-sm leading-6 text-white/80">
                  {close.description ?? "OHI combines strategy, production, and editorial craft to help development work communicate with confidence across Africa."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8fb] p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title={difference.title ?? "The OHI difference"}
            description={difference.description ?? "A sharper institutional story layer that makes the case for credibility, trust, and strategic visibility."}
          />
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {differencePrinciples.map((item) => (
              <div key={item.title} className="bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
                <div className="flex h-16 w-16 items-center justify-center bg-[linear-gradient(180deg,rgba(245,157,33,0.04)_0%,rgba(245,157,33,0.14)_100%)] text-[#b16a18]">
                  <item.icon className="h-8 w-8" />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-headingColor">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-textColor">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3e3] p-4 lg:p-6">
        <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1fr_1.05fr]">
          <div className="bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
              {snapshot.label ?? "OHI at a glance"}
            </p>
            <h3 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-headingColor sm:text-4xl">
              {snapshot.title ?? "The core principles that guide OHI"}
            </h3>
            <p className="mt-4 text-base leading-7 text-justify text-textColor">
              {snapshot.description ?? "The documentary positions OHI as a partner for institutions that need communication with clarity, trust, and confidence."}
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {(snapshot.stats ?? stats).map((stat) => (
                <div key={stat.label} className="bg-[#fff9f1] p-4">
                  <p className="text-3xl font-bold tracking-[-0.04em] text-headingColor">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#708496]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-6 text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              {snapshot.missionTitle ?? "Mission & vision"}
            </p>
            <div className="mt-5 space-y-5">
              {(snapshot.missionItems ?? teamHighlights).map((item) => (
                <div key={item.title} className="bg-white/10 p-5 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/80">
                    {item.description}
                  </p>
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="mt-4 h-40 w-full object-cover"
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title={close.title ?? "A multilingual team fluent in English, French, and Pidgin"}
            description={close.description ?? "OHI combines strategy, production, and editorial craft to help development work communicate with confidence across Africa."}
            className="max-w-4xl"
          />
          <div className="mt-8 bg-[#fffaf5] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            {close.image ? (
              <img
                src={close.image}
                alt={close.title ?? "OHI closing visual"}
                className="mb-6 h-[280px] w-full object-cover"
              />
            ) : null}
            <p className="text-base leading-7 text-textColor">
              {close.body ?? "OHI is ready to turn your next project, campaign, or report into a story that decision-makers can trust and act on."}
            </p>
            <div className="mt-6">
              <Button asChild className="rounded-none bg-[#f59e0b] px-6 text-white hover:bg-[#d97706]">
                <Link to={close.ctaHref ?? "/contact"} className="inline-flex items-center gap-2">
                  {close.ctaLabel ?? "Get a Quotation"} <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default AboutPage;
