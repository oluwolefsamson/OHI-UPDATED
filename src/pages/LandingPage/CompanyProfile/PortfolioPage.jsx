import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import Brochure from "../../../components/Brochure/Brochure";
import { Marquee } from "../../../components/LandingPage/magicui/marquee";
import Reveal from "../../../components/ui/reveal";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import portfolioImage01 from "../../../assets/images/Gallery/gallery-01.jpeg";
import portfolioImage02 from "../../../assets/images/Gallery/gallery-02.jpeg";
import portfolioImage03 from "../../../assets/images/Gallery/gallery-03.jpeg";
import portfolioImage04 from "../../../assets/images/Gallery/gallery-04.jpeg";
import portfolioImage05 from "../../../assets/images/Gallery/gallery-05.jpeg";
import portfolioImage06 from "../../../assets/images/Gallery/gallery-06.jpeg";

const brochurePdfHref = "/OHI-Company-Profile.pdf";

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

const PortfolioPage = () => {
  const { config } = useLandingPageConfig();
  const portfolioPage = config.portfolioPage ?? {};
  const hero = portfolioPage.hero ?? {};
  return (
    <ProfilePageShell
      title={hero.title ?? "Portfolio"}
      heroImage={portfolioImage02}
      heroImageAlt="OHI portfolio hero"
      description={hero.description ?? "OHI presents a portfolio of development storytelling projects, case studies, and content packages that demonstrate institutional impact, visibility, and narrative clarity."}
      descriptionClassName="text-white"
      primaryCta={{ label: hero.primaryCtaLabel ?? "View Portfolio", href: hero.primaryCtaHref ?? "/portfolio" }}
      secondaryCta={{ label: hero.secondaryCtaLabel ?? "Contact Us", href: hero.secondaryCtaHref ?? "/contact" }}
      heroBadge={
        <div className="space-y-1">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {hero.badgeEyebrow ?? "OHI portfolio"}
          </p>
          <p className="font-body text-sm leading-6 text-white/80">
            {hero.badgeDescription ?? "Strategic visibility for development, investment, and impact communication."}
          </p>
        </div>
      }
      statCards={[
        { eyebrow: "Projects", value: "100+", label: "Projects delivered" },
        { eyebrow: "Clients", value: "70+", label: "Institutional clients" },
        { eyebrow: "Retention", value: "95%", label: "Repeat-client rate" },
      ]}
    >
      <section className="bg-[#bb7422] p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Portfolio highlights"
            textColorClassName="text-white"
            descriptionClassName="text-white/80"
            description="These sample projects reflect the kind of output OHI builds for public, institutional, and private-sector communication goals."
          />

          <div className="mt-6 flex justify-start">
            <a
              href={brochurePdfHref}
              download
              className="hero_btn1 inline-flex items-center gap-2 transition duration-300 ease-out hover:-translate-y-0.5"
            >
              Download Brochure
            </a>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {portfolioProjects.map((project, index) => (
              <Reveal key={project.title} delay={0.05 + index * 0.04}>
                <Card className="group overflow-hidden border border-[#e8dcc8] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(201,107,23,0.1)]">
                  <div className="relative h-[240px] overflow-hidden bg-slate-100">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.02)_0%,rgba(8,10,15,0.56)_100%)]" />
                    <Badge className="absolute left-5 top-5 rounded-full border-white/25 bg-white/92 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#b16a18] backdrop-blur-sm">
                      {project.category}
                    </Badge>
                  </div>

                  <CardHeader className="px-6 pb-2 pt-5">
                    <CardTitle className="font-display text-xl font-semibold tracking-[-0.02em] text-[#173145]">
                      {project.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 pb-5">
                    <CardDescription className="font-body text-sm leading-7 text-[#4e5a67]">
                      {project.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="flex items-center justify-between px-6 pb-6 pt-0">
                    <span className="font-body text-sm font-semibold text-[#b16a18]">
                      View case style
                    </span>
                    <ArrowRight className="h-4 w-4 text-[#b16a18] transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </CardFooter>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Brochure />

      <section className="mt-16 bg-[#fff3e3] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.06}>
            <div className="bg-[#fff8ef] p-6">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
                Working method
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#173145]">
                Built for clear, audience-ready storytelling
              </h3>
              <p className="font-body mt-4 text-base leading-7 text-justify text-[#4e5a67]">
                The portfolio blends case-study storytelling, event coverage, and campaign assets that can move cleanly across reports, presentations, and digital channels.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="border border-[#e8dcc8] bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-6 text-white shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
                Next step
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-[-0.03em]">
                Need a similar format for your project?
              </h3>
              <p className="font-body mt-4 leading-7 text-justify text-white/80">
                OHI can shape a communication package around your audience, timeline, and intended outcome.
              </p>
              <div className="mt-6">
                <Link to="/contact">
                  <button className="btn inline-flex items-center gap-2 transition duration-300 ease-out hover:-translate-y-0.5">
                    Start a project <ArrowRight className="h-4 w-4" />
                  </button>
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default PortfolioPage;
