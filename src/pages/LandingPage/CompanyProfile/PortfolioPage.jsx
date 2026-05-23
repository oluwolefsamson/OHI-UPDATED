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

const brochurePdfHref = "/OHI-Company-Profile.pdf";

const clientLogos = [
  { name: "World Food Programme", image: wfpLogo },
  { name: "Sun King", image: sunKingLogo },
  { name: "CORAF", image: corafLogo },
  {
    name: "International Federation of Red Cross and Red Crescent Societies",
    image: ifrcLogo,
  },
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

const PortfolioPage = () => {
  return (
    <ProfilePageShell
      title="Documentaries"
      heroImage={portfolioImage02}
      heroImageAlt="OHI documentaries hero"
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
          title="Portfolio highlights"
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
              <Card className="group overflow-hidden rounded-[28px] border border-[#e8dcc8] bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(201,107,23,0.1)]">
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
      </section>

      <Brochure />

      <section id="clients" className="mt-16 rounded-[32px] border border-[#e8dcc8] bg-[#f4f8fb] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
        <SectionHeader
          title="Clients"
          description="A moving strip of organizations and institutions OHI has worked with or produced for."
          className="max-w-3xl"
        />

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <Marquee pauseOnHover className="[--duration:28s] px-0 py-0">
            {clientLogos.map((client) => (
              <div
                key={client.name}
              className="flex h-28 w-56 items-center justify-center rounded-[24px] border border-[#e8dcc8] bg-[#fffaf6] px-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
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

      <section className="mt-16 rounded-[32px] border border-[#e8dcc8] bg-[#fff3e3] p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal delay={0.06}>
            <div className="rounded-[28px] bg-[#fff8ef] p-6">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
                Working method
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#173145]">
                Built for stories that need clarity and momentum
              </h3>
              <p className="font-body mt-4 text-base leading-7 text-[#4e5a67]">
                The portfolio reflects a mix of documentary work, event coverage, and campaign assets designed to travel across reports, presentations, and digital channels.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <div className="rounded-[28px] border border-[#e8dcc8] bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-6 text-white shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.18)]">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#fbbf24]">
                Next step
              </p>
              <h3 className="font-display mt-4 text-3xl font-semibold tracking-[-0.03em]">Need a similar format for your project?</h3>
              <p className="font-body mt-4 leading-7 text-white/80">
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
      </section>
    </ProfilePageShell>
  );
};

export default PortfolioPage;
