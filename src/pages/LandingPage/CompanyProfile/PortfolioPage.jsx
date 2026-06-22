import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import Brochure from "../../../components/Brochure/Brochure";
import { Marquee } from "../../../components/LandingPage/magicui/marquee";
import Reveal from "../../../components/ui/reveal";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import portfolioImage01 from "../../../assets/images/Gallery/gallery-01.jpeg";
import portfolioImage02 from "../../../assets/images/Gallery/gallery-02.jpeg";
import portfolioImage03 from "../../../assets/images/Gallery/gallery-03.jpeg";
import portfolioImage04 from "../../../assets/images/Gallery/gallery-04.jpeg";
import portfolioImage05 from "../../../assets/images/Gallery/gallery-05.jpeg";
import portfolioImage06 from "../../../assets/images/Gallery/gallery-06.jpeg";

const brochurePdfHref = "/OHI-Company-Profile.pdf";

const defaultPortfolioProjects = [
  { title: "Program visibility films", category: "Development communication", image: portfolioImage01, description: "Clear communication that helps teams show results, context, and institutional value." },
  { title: "Stakeholder event coverage", category: "Event production", image: portfolioImage02, description: "Fast, polished coverage for launches, convenings, and milestone moments." },
  { title: "Human-centered interviews", category: "Story gathering", image: portfolioImage03, description: "Short-form stories that make complex initiatives feel relatable and real." },
  { title: "Campaign content packages", category: "Multi-channel delivery", image: portfolioImage04, description: "Reusable content for reports, digital campaigns, and partner updates." },
  { title: "Field documentation", category: "On-location production", image: portfolioImage05, description: "Visual reporting from communities, project sites, and implementation work." },
  { title: "Impact storytelling", category: "Strategic visibility", image: portfolioImage06, description: "Editorial visuals built to support credibility, trust, and action." },
];

function normalizeProject(project, fallback) {
  return {
    title: project?.title?.trim() || fallback.title,
    category: project?.category?.trim() || fallback.category,
    image: project?.image || fallback.image,
    description: project?.description?.trim() || fallback.description,
  };
}

const PortfolioPage = () => {
  const { config } = useLandingPageConfig();
  const portfolioPage = config.portfolioPage ?? {};
  const hero = portfolioPage.hero ?? {};
  const header = portfolioPage.header ?? {};
  const method = portfolioPage.method ?? {};
  const projects = (portfolioPage.projects?.length ? portfolioPage.projects : defaultPortfolioProjects).map(
    (project, index) => normalizeProject(project, defaultPortfolioProjects[index] ?? defaultPortfolioProjects[0])
  );

  return (
    <ProfilePageShell
      title={hero.title ?? "Portfolio"}
      heroImage={hero.image ?? portfolioImage02}
      heroImageAlt="OHI portfolio hero"
      description={hero.description ?? "OHI presents a portfolio of development storytelling projects, case studies, and content packages that demonstrate institutional impact, visibility, and narrative clarity."}
      descriptionClassName="text-white"
      primaryCta={{ label: hero.primaryCtaLabel ?? "View Portfolio", href: hero.primaryCtaHref ?? "/portfolio" }}
      secondaryCta={{ label: hero.secondaryCtaLabel ?? "Contact Us", href: hero.secondaryCtaHref ?? "/contact" }}
      heroBadge={
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {hero.badgeEyebrow ?? "OHI portfolio"}
          </p>
          <p className="text-sm leading-6 text-white/80">
            {hero.badgeDescription ?? "Strategic visibility for development, investment, and impact communication."}
          </p>
        </div>
      }
    >
      {/* Portfolio grid */}
      <section className="py-16 sm:py-20" style={{ backgroundImage: "url('/white-bg3.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <SectionHeader
            title={header.title ?? "Portfolio highlights"}
            description={header.description ?? "These sample projects reflect the kind of output OHI builds for public, institutional, and private-sector communication goals."}
          />

          <div className="mt-6">
            <a
              href={brochurePdfHref}
              download
              className="inline-flex h-11 items-center gap-2 bg-[#F07F1A] px-6 text-sm font-bold text-white transition hover:bg-[#d96d10]"
            >
              Download Brochure
            </a>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {projects.map((project, index) => (
              <Reveal key={project.title} delay={0.05 + index * 0.04}>
                <article className="group overflow-hidden bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]">
                  <div className="relative h-[220px] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.02)_0%,rgba(8,10,15,0.52)_100%)]" />
                    <span className="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F07F1A]">
                      {project.category}
                    </span>
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-bold tracking-[-0.02em] text-[#2e3135]">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-[#4e5a67]">
                      {project.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Brochure />

      {/* Method */}
      <section className="py-16 sm:py-20" style={{ backgroundImage: "url('/story.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.06}>
            <div className="bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F07F1A]">
                {method.eyebrow ?? "Working method"}
              </p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-[#2e3135]">
                {method.title ?? "Built for clear, audience-ready storytelling"}
              </h3>
              <p className="mt-4 text-sm leading-7 text-[#4e5a67]">
                {method.description ?? "The portfolio blends case-study storytelling, event coverage, and campaign assets that can move cleanly across reports, presentations, and digital channels."}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="bg-[#0a0c12] p-6 text-white shadow-[0_10px_28px_rgba(15,23,42,0.12)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#F07F1A]">
                {method.nextEyebrow ?? "Next step"}
              </p>
              <h3 className="mt-4 text-2xl font-bold tracking-[-0.03em] text-white">
                {method.nextTitle ?? "Need a similar format for your project?"}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/80">
                {method.nextDescription ?? "OHI can shape a communication package around your audience, timeline, and intended outcome."}
              </p>
              <div className="mt-6">
                <Link
                  to={method.ctaHref ?? "/contact"}
                  className="inline-flex h-11 items-center gap-2 bg-[#F07F1A] px-6 text-sm font-bold text-white transition hover:bg-[#d96d10]"
                >
                  {method.ctaLabel ?? "Start a conversation"} <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default PortfolioPage;
