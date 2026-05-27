import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck, HeartHandshake, Sparkles } from "lucide-react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { Button } from "../../../components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../../components/ui/card";
import Reveal from "../../../components/ui/reveal";
import aboutHeroImage from "../../../assets/images/profile-hero-mountain.jpg";
import storyVisual from "../../../assets/images/Gallery/gallery-11.jpeg";
import portraitTwo from "../../../assets/images/Gallery/gallery-12.jpeg";
import teamImageOne from "../../../assets/images/Gallery/gallery-09.jpeg";
import teamImageTwo from "../../../assets/images/HeroImg/hero2.jpeg";
import aboutVisual from "../../../assets/images/Gallery/gallery-04.jpeg";
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
  return (
    <ProfilePageShell
      title="About OHI"
      heroImage={aboutHeroImage}
      heroImageAlt="About OHI hero"
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
      <section className="grid gap-8 rounded-[36px] bg-[#fffaf5] p-4 lg:grid-cols-[0.95fr_1.05fr] lg:p-6">
        <Reveal className="relative mx-auto w-full max-w-[560px]">
          <div className="overflow-hidden rounded-[32px] border border-[#D9DCE2] bg-white shadow-[0_20px_50px_rgba(15,23,42,0.08)]">
            <img
              src={storyVisual}
              alt="OHI story visual"
              className="h-[420px] w-full object-cover sm:h-[500px]"
            />
          </div>

          <div className="absolute -right-3 bottom-[-18px] w-[220px] overflow-hidden border border-white bg-white shadow-[0_18px_50px_rgba(15,23,42,0.12)] sm:-right-8 sm:w-[240px]">
            <img
              src={portraitTwo}
              alt="OHI detail visual"
              className="h-[220px] w-full object-cover"
            />
          </div>
        </Reveal>

        <div className="max-w-2xl">
          <SectionHeader
            title="We turn Africa's development story into strategic visibility"
            description="OHI creates development communication that helps institutions, partners, and communities understand the work being done and why it matters."
            className="max-w-none text-left"
          />

          <div className="mt-8 space-y-4">
            <div className="rounded-[26px] border border-[#e8dcc8] bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.06)]">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
                About OHI
              </p>
                <p className="font-body mt-3 text-base leading-7 text-[#4e5a67]">
                We build visual stories that are clear, credible, and designed to move
                audiences from awareness to action.
              </p>
            </div>

            <div className="rounded-[26px] border border-[#e8dcc8] bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-5 text-white shadow-[0_12px_30px_rgba(15,23,42,0.12)]">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
                Editorial focus
              </p>
              <p className="font-body mt-3 text-base leading-7 text-white/80">
                OHI combines strategy, production, and field storytelling into one
                editorial workflow.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button asChild className="rounded-none bg-[#f59e0b] px-6 text-white hover:bg-[#d97706]">
                <Link to="/portfolio" className="inline-flex items-center gap-2">
                  Learn More <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-none border-[#e8dcc8] bg-white px-6 text-[#173145] hover:bg-[#fff8ef]"
              >
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Start a Project <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 bg-[linear-gradient(180deg,#f6b56a_0%,#eb8e37_100%)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="The OHI difference"
            description="A sharper institutional story layer that makes the case for credibility, trust, and strategic visibility."
            className="text-white"
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {principles.map((item) => (
              <Reveal key={item.title}>
                <Card className="overflow-hidden border border-[#e8dcc8] bg-white shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                  <CardHeader className="pb-3">
                    <div className="flex h-32 items-center justify-center rounded-[18px] bg-[linear-gradient(180deg,rgba(245,157,33,0.04)_0%,rgba(245,157,33,0.14)_100%)] text-[#b16a18]">
                      <item.icon className="h-10 w-10" />
                    </div>
                    <CardTitle className="font-display mt-3 text-xl font-semibold text-[#173145]">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-body text-sm leading-7 text-[#4e5a67]">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-[36px] bg-[#f4f8fb] p-4 lg:grid-cols-[1fr_1.05fr] lg:p-6">
        <div className="rounded-[32px] border border-[#D9DCE2] bg-[#fff9f1] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.22em] text-[#b16a18]">
            OHI at a glance
          </p>
          <h3 className="font-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#173145] sm:text-4xl">
            The core principles that guide OHI
          </h3>
          <p className="font-body mt-4 text-base leading-7 text-[#4e5a67]">
            The company profile positions OHI as a partner for institutions that need
            communication with clarity, trust, and confidence.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-[24px] border border-[#e8dcc8] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.03)]">
                <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-[#173145]">
                  {stat.value}
                </p>
                <p className="font-body mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#708496]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[#e8dcc8] bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-6 text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:p-8">
          <p className="font-body text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
            Mission & vision
          </p>
          <div className="mt-5 space-y-5">
            <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">Field production</h3>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Story capture in communities, project sites, and institutional spaces.
              </p>
            </div>
            <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur-sm">
              <h3 className="text-lg font-semibold">Post-production</h3>
              <p className="mt-3 text-sm leading-6 text-white/80">
                Editing, motion, and finishing that keep the story clear and polished.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 rounded-[36px] bg-[#fff3e3] p-4 lg:grid-cols-[0.95fr_1.05fr] lg:p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          {teamHighlights.map((item, index) => (
            <Reveal key={item.title} delay={0.08 + index * 0.05}>
              <Card className="overflow-hidden rounded-[28px] border-[#D9DCE2] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
                <div className="h-[300px] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-2xl font-semibold tracking-[-0.02em] text-headingColor">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-7 text-textColor">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <div className="max-w-2xl">
          <SectionHeader
            title="A multilingual team fluent in English, French, and Pidgin"
            description="OHI combines strategy, production, and editorial craft to help development work communicate with confidence across Africa."
            className="max-w-none text-left"
          />

          <div className="mt-8 rounded-[28px] border border-[#D9DCE2] bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
            <img src={aboutVisual} alt="OHI visual story" className="h-[260px] w-full rounded-[20px] object-cover" />
            <p className="mt-5 text-base leading-7 text-textColor">
              OHI is ready to turn your next project, campaign, or report into a
              story that decision-makers can trust and act on.
            </p>
            <div className="mt-6">
              <Button asChild className="rounded-none bg-[#f59e0b] px-6 text-white hover:bg-[#d97706]">
                <Link to="/contact" className="inline-flex items-center gap-2">
                  Get a Quotation <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden">
        <img src={ctaImage} alt="" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,76,129,0.92)_0%,rgba(15,76,129,0.78)_52%,rgba(15,76,129,0.45)_100%)]" />

        <div className="relative px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="max-w-2xl">
              <Reveal as="h2" className="text-4xl font-extrabold leading-tight tracking-[-0.03em] sm:text-5xl">
                Let us turn your next programme into proof
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-5 max-w-xl text-lg leading-8 text-white/80">
                  OHI is ready to turn your next project, campaign, or report into a story
                  that people will remember and trust.
                </p>
              </Reveal>
            </div>

            <div className="lg:justify-self-end">
              <Reveal delay={0.12} className="inline-flex">
                <Button asChild className="rounded-none bg-[#f59e0b] px-6 text-white transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#d97706]">
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Get in touch <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </Reveal>
            </div>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default AboutPage;
