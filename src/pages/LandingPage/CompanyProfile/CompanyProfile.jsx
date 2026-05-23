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
import { Marquee } from "../../../components/LandingPage/magicui/marquee";
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
import ifrcLogo from "../../../assets/img/International_Federation_of_Red_Cross_and_Red_Crescent_Societies_Logo.png";
import corafLogo from "../../../assets/img/logo-coraf.png";
import sunKingLogo from "../../../assets/img/Sun-King_New_Logo-02.png";
import wfpLogo from "../../../assets/img/wfp-logo-extended-blue-en.png";
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

const clientLogos = [
  {
    name: "World Food Programme",
    image: wfpLogo,
  },
  {
    name: "Sun King",
    image: sunKingLogo,
  },
  {
    name: "CORAF",
    image: corafLogo,
  },
  {
    name: "International Federation of Red Cross and Red Crescent Societies",
    image: ifrcLogo,
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
    description: "Clear stories that help teams show results, context, and human impact.",
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
  return (
    <ProfilePageShell
      title="Company Profile"
      heroImage={companyHeroImage}
      heroImageAlt="OHI company profile hero"
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
    >
      <section className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rounded-[32px] border border-[#D9DCE2] bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
            Profile at a glance
          </p>
          <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] text-headingColor sm:text-4xl">
            A company profile that moves from credibility to action
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-textColor">
            The company profile is designed as a guided entry point into OHI. It
            gives visitors a fast read on who the team is, what they do, and why
            their work matters for development, investment, and impact communication.
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
            {profileStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[24px] border border-[#E5E7EB] bg-[#F8FAFC] p-4 shadow-[0_10px_24px_rgba(15,23,42,0.03)]"
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
            {profileHighlights.map((highlight) => (
              <div
                key={highlight.title}
                className="flex gap-4 rounded-[24px] border border-[#E5E7EB] bg-white p-4 shadow-[0_10px_28px_rgba(15,23,42,0.04)]"
              >
                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-[#0f4c81]/10 text-primaryColor">
                  <Target className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-headingColor">
                    {highlight.title}
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-textColor">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[32px] border border-[#D9DCE2] bg-[linear-gradient(180deg,#0f172a_0%,#13283c_100%)] p-6 text-white shadow-[0_16px_40px_rgba(15,23,42,0.12)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#fbbf24]">
            What makes it stronger
          </p>
          <div className="mt-5 space-y-5">
            <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-[#fbbf24]" />
                <h3 className="text-lg font-semibold">Better discovery flow</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/80">
                The first screen now explains the purpose of the profile before
                sending visitors into the individual sections.
              </p>
            </div>
            <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <Users className="h-5 w-5 text-[#7dd3fc]" />
                <h3 className="text-lg font-semibold">Stronger client context</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/80">
                The client strip and portfolio examples now read like proof, not
                filler.
              </p>
            </div>
            <div className="rounded-[24px] bg-white/10 p-5 backdrop-blur-sm">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-5 w-5 text-[#86efac]" />
                <h3 className="text-lg font-semibold">Clearer positioning</h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-white/80">
                The profile keeps the language professional, compact, and easy to
                scan on both desktop and mobile.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Brochure />

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
              className="group overflow-hidden rounded-[28px] border-[#D9DCE2] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9ced7] hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-[#E5E7EB] bg-[#F9FAFB] p-3 text-slate-700 shadow-[0_10px_24px_rgba(15,23,42,0.04)] transition duration-300 group-hover:border-[#d6dbe3] group-hover:bg-white">
                    <page.icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-textColor">
                    0{index + 1}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <CardTitle className="text-2xl font-semibold tracking-[-0.02em] text-headingColor">
                  {page.label}
                </CardTitle>
                <CardDescription className="text-base leading-7 text-textColor">
                  {page.description}
                </CardDescription>
              </CardContent>

              <CardFooter className="flex items-center justify-between gap-4 pt-0">
                <Separator className="flex-1 bg-black/10" />
                <Button
                  asChild
                  variant="ghost"
                  className="group/btn h-10 rounded-full px-0 text-sm font-semibold text-slate-700 hover:bg-transparent hover:text-slate-900"
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

      <section
        id="supporters"
        className="mt-16 rounded-[32px] border border-[#e8dcc8] bg-[#f4f8fb] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8"
      >
        <SectionHeader
          title="Our Partners / Supporters"
          description="A moving strip of organizations and institutions that support or align with OHI's work."
          className="max-w-3xl"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <div className="rounded-[24px] border border-[#e8dcc8] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.03)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
              Collaboration
            </p>
            <p className="mt-2 text-sm leading-6 text-[#4e5a67]">
              Trusted by institutions working across development, public-sector,
              and impact communication.
            </p>
          </div>
          <div className="rounded-[24px] border border-[#e8dcc8] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.03)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
              Support
            </p>
            <p className="mt-2 text-sm leading-6 text-[#4e5a67]">
              Logos are shown as part of a broader supporter strip, not an isolated
              gallery.
            </p>
          </div>
          <div className="rounded-[24px] border border-[#e8dcc8] bg-white p-4 shadow-[0_10px_24px_rgba(15,23,42,0.03)]">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
              Signal
            </p>
            <p className="mt-2 text-sm leading-6 text-[#4e5a67]">
              The section reinforces the profile's credibility at a glance.
            </p>
          </div>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <Marquee pauseOnHover className="[--duration:28s] px-0 py-0">
            {clientLogos.map((client) => (
              <div
                key={client.name}
                className="flex h-28 w-56 items-center justify-center rounded-[24px] border border-[#e8dcc8] bg-white px-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-12 w-full object-contain"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </section>

      <section id="featured-story" className="mt-16 rounded-[36px] bg-[#fffaf5] p-4 sm:p-6">
        <SectionHeader
          title="Featured Story"
          description="A highlighted selection that shows how OHI turns development, public-sector, and impact work into clear visual stories."
          className="max-w-4xl"
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {portfolioProjects.map((project) => (
            <Card
              key={project.title}
              className="group overflow-hidden rounded-[28px] border-[#D9DCE2] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c9ced7] hover:shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
            >
              <div className="relative h-[250px] overflow-hidden">
                <img
                  src={project.image}
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
      </section>
    </ProfilePageShell>
  );
};

export default CompanyProfile;
