import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  BriefcaseBusiness,
  Handshake,
  Image,
  MapPinned,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import Brochure from "../../../components/Brochure/Brochure";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Separator } from "../../../components/ui/separator";
import portfolioImage01 from "../../../assets/images/Gallery/gallery-01.jpeg";
import portfolioImage02 from "../../../assets/images/Gallery/gallery-02.jpeg";
import portfolioImage03 from "../../../assets/images/Gallery/gallery-03.jpeg";
import portfolioImage04 from "../../../assets/images/Gallery/gallery-04.jpeg";
import portfolioImage05 from "../../../assets/images/Gallery/gallery-05.jpeg";
import portfolioImage06 from "../../../assets/images/Gallery/gallery-06.jpeg";
import companyHeroImage from "../../../assets/images/Gallery/gallery-11.jpeg";

const brochurePdfHref = "/OHI-Company-Profile.pdf";

const profilePages = [
  {
    label: "Leadership",
    path: "/leadership",
    description: "A named executive profile with the accountability institutional buyers expect.",
    icon: ShieldCheck,
  },
  {
    label: "Services",
    path: "/services",
    description: "The production formats and storytelling services OHI delivers.",
    icon: BriefcaseBusiness,
  },
  {
    label: "Portfolio",
    path: "/portfolio",
    description: "Selected work and case-style examples from OHI's visual archive.",
    icon: Image,
  },
  {
    label: "Who We Serve",
    path: "/who-we-serve",
    description: "DFIs, governments, multilateral agencies, and private-sector impact teams.",
    icon: Handshake,
  },
  {
    label: "Why It Matters",
    path: "/impact",
    description: "How storytelling improves visibility, trust, alignment, and action.",
    icon: ShieldCheck,
  },
  {
    label: "Our Approach",
    path: "/approach",
    description: "A simple, strategic workflow from brief to delivery.",
    icon: Sparkles,
  },
  {
    label: "Contact",
    path: "/contact",
    description: "Direct contact details and the easiest way to reach OHI.",
    icon: MapPinned,
  },
];

const profileHighlights = [
  {
    title: "Clarity first",
    description:
      "Each page is organized to help visitors move from the story, to the service, to the outcome.",
  },
  {
    title: "Built for trust",
    description:
      "The content speaks to institutions, investors, and partners who need credible communication.",
  },
  {
    title: "Designed to convert",
    description:
      "The structure makes it easy to move from discovery to portfolio, approach, and contact.",
  },
];

const footprint = [
  "Central Africa: Cameroon and neighboring markets",
  "East Africa: Kenya, Uganda, Tanzania, Rwanda, and beyond",
  "Southern Africa: Zambia and regional partners",
  "USA: fundraising, partnerships, and institutional collaboration",
];

const profileStats = [
  { label: "Projects delivered", value: "100+" },
  { label: "Institutional clients", value: "70+" },
  { label: "Repeat rate", value: "95%" },
];

const portfolioProjects = [
  {
    title: "Program visibility films",
    category: "Development communication",
    image: portfolioImage01,
    description: "Clear communication that helps teams show results, context, and institutional value.",
  },
  {
    title: "Stakeholder event coverage",
    category: "Event production",
    image: portfolioImage02,
    description: "Fast, polished coverage for launches, convenings, and milestone moments.",
  },
  {
    title: "Human-centered interviews",
    category: "Story gathering",
    image: portfolioImage03,
    description: "Short-form stories that make complex initiatives feel relatable and real.",
  },
  {
    title: "Campaign content packages",
    category: "Multi-channel delivery",
    image: portfolioImage04,
    description: "Reusable content for reports, digital campaigns, and partner updates.",
  },
  {
    title: "Field documentation",
    category: "On-location production",
    image: portfolioImage05,
    description: "Visual reporting from communities, project sites, and implementation work.",
  },
  {
    title: "Impact storytelling",
    category: "Strategic visibility",
    image: portfolioImage06,
    description: "Editorial visuals built to support credibility, trust, and action.",
  },
];

const CompanyProfile = () => {
  const { config } = useLandingPageConfig();
  const companyProfile = config.companyProfile ?? {};
  const hero = companyProfile.hero ?? {};
  const difference = companyProfile.difference ?? {};
  const overview = companyProfile.overview ?? {};
  const footprintConfig = companyProfile.footprint ?? {};
  const portfolioConfig = companyProfile.portfolio ?? {};

  return (
    <ProfilePageShell
      title={hero.title ?? "Documentary"}
      heroImage={hero.image ?? companyHeroImage}
      heroImageAlt="OHI documentary hero"
      description={hero.description ?? "OHI creates development communication that helps institutions, partners, and communities understand the work being done, why it matters, and why it deserves attention from capital and policy actors."}
      descriptionClassName="text-white"
      primaryCta={{ label: hero.primaryCtaLabel ?? "View Portfolio", href: hero.primaryCtaHref ?? "/portfolio" }}
      secondaryCta={{ label: hero.secondaryCtaLabel ?? "Contact Us", href: hero.secondaryCtaHref ?? "/contact" }}
      heroBadge={
        <div className="space-y-1">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {hero.badgeEyebrow ?? "OHI documentary"}
          </p>
          <p className="font-body text-sm leading-6 text-white/80">
            {hero.badgeDescription ?? "Strategic visibility for development, investment, and impact communication."}
          </p>
        </div>
      }
    >
      <section className="bg-[linear-gradient(180deg,#f6b56a_0%,#eb8e37_100%)] px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Documentary focus
            </p>
            <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-white sm:text-4xl">
              {difference.title ?? "The OHI difference"}
            </h2>
            <p className="mt-4 text-base leading-7 text-white/80 sm:text-lg">
              {difference.description ?? "OHI is not positioning itself as a generic production shop. The value is strategic visibility built for development, investor, and institutional audiences."}
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
          {(difference.points ?? [
            "We translate complex programmes into decision-ready communication.",
            "We work in the language of institutions, not campaign slogans.",
            "We pair regional delivery with proof, governance, and trust signals.",
          ]).map((item) => (
            <div
              key={item}
              className="border border-[#e8dcc8] bg-white p-5 text-sm leading-6 text-[#4e5a67] shadow-[0_12px_30px_rgba(15,23,42,0.08)]"
            >
              {item}
            </div>
          ))}
        </div>
        </div>
      </section>

      <section className="bg-[#fffaf5] px-4 py-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="border border-[#D9DCE2] bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
            Profile at a glance
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-headingColor sm:text-4xl">
            {overview.title ?? "A documentary that moves from credibility to action"}
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-justify text-textColor">
            {overview.description ?? "The documentary is designed as a guided entry point into OHI. It shows why the work matters for development, investment, and impact communication."}
          </p>

          <div className="mt-6">
            <a
              href={brochurePdfHref}
              download
              className="hero_btn1 inline-flex items-center gap-2 transition duration-300 ease-out hover:-translate-y-0.5"
            >
              Download Brochure
            </a>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {(overview.stats ?? profileStats).map((stat) => (
              <div
                key={stat.label}
                className="border border-[#E5E7EB] bg-[#F8FAFC] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.03)]"
              >
                <p className="text-3xl font-bold tracking-[-0.04em] text-headingColor">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-textColor">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-3">
            {(overview.highlights ?? profileHighlights).map((highlight) => (
              <div
                key={highlight.title}
                className="flex gap-4 border border-[#E5E7EB] bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-[#0f4c81]/10 text-primaryColor">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-headingColor">
                    {highlight.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-justify text-textColor">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          </div>

          <div className="border border-[#D9DCE2] bg-[linear-gradient(180deg,#0f172a_0%,#13283c_100%)] p-6 text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#fbbf24]">
            What makes it stronger
          </p>
          <div className="mt-5 space-y-5">
            <div className="bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#fbbf24]" />
                <h3 className="text-lg font-semibold">Better discovery flow</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-justify text-white/80">
                The first screen now explains the purpose of the profile before
                sending visitors into the individual sections.
              </p>
            </div>
            <div className="bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#7dd3fc]" />
                <h3 className="text-lg font-semibold">Stronger client context</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-justify text-white/80">
                The client strip and portfolio examples now read like proof, not
                filler.
              </p>
            </div>
            <div className="bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#86efac]" />
                <h3 className="text-lg font-semibold">Clearer positioning</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-justify text-white/80">
                The profile keeps the language professional, compact, and easy to
                scan on both desktop and mobile.
              </p>
            </div>
          </div>
          </div>
        </div>
      </section>

      <Brochure />

      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mt-14">
            <SectionHeader
              title="Start with the section that matches your goal"
              description="The profile is split into focused pages so each part reads clearly while keeping the same visual language as the landing page."
            />
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {profilePages.map((page, index) => {
              return (
                <Card
                  key={page.path}
                  className="group overflow-hidden border-[#D9DCE2] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9ced7] hover:bg-[#bb7422] hover:text-white hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
                >
                  <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-300 group-hover:border-white/30 group-hover:bg-white/15 group-hover:text-white">
                    <page.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-textColor transition-colors duration-300 group-hover:text-white/90">
                    0{index + 1}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardTitle className="text-2xl font-semibold tracking-[-0.02em] text-headingColor transition-colors duration-300 group-hover:text-white">
                  {page.label}
                </CardTitle>
                <CardDescription className="text-base leading-7 text-textColor transition-colors duration-300 group-hover:text-white/85">
                  {page.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex items-center justify-between gap-4 pt-0">
                <Separator className="flex-1 bg-black/10 transition-colors duration-300 group-hover:bg-white/30" />
                <Button
                  asChild
                  variant="ghost"
                  className="group/btn h-10 rounded-full px-0 text-sm font-semibold text-slate-700 transition-colors duration-300 hover:bg-transparent hover:text-white"
                >
                  <Link to={page.path} className="inline-flex items-center gap-2">
                    Explore
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#bb7422] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title={footprintConfig.title ?? "Footprint"}
            description={footprintConfig.description ?? "A clearer view of where OHI already operates and how that scale supports institutional work."}
            className="max-w-4xl"
            textColorClassName="text-white"
            descriptionClassName="text-white/85"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {(footprintConfig.items ?? footprint).map((item) => (
              <div
                key={item}
                className="bg-white p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
                  Coverage
                </p>
                <p className="mt-3 text-sm leading-6 text-[#4e5a67]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="featured-story" className="mt-16 bg-[#fffaf5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title={portfolioConfig.title ?? "Featured Story"}
            description={portfolioConfig.description ?? "A highlighted selection that shows how OHI turns development, public-sector, and impact work into clear visual stories."}
            className="max-w-4xl"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {(portfolioConfig.projects ?? portfolioProjects).map((project) => (
              <Card
                key={project.title}
                className="group overflow-hidden border-[#D9DCE2] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9ced7] hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
              >
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={project.image ?? portfolioProjects.find((item) => item.title === project.title)?.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,22,36,0.06)_0%,rgba(5,22,36,0.72)_100%)]" />
                <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  {project.category}
                </div>
              </div>

              <CardHeader className="pb-3">
                <CardTitle className="text-2xl font-semibold tracking-[-0.02em] text-headingColor">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pb-6">
                <CardDescription className="text-base leading-7 text-textColor">
                  {project.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex items-center justify-between pt-0">
                <span className="text-sm font-semibold text-primaryColor">
                  View case style
                </span>
                <ArrowRight className="h-4 w-4 text-primaryColor transition-transform group-hover:translate-x-1" />
              </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default CompanyProfile;
