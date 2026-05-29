import React from "react";
import { ArrowRight, Globe2, Layers3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import { Badge } from "../../../components/ui/badge";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import serveVisual from "../../../assets/images/Gallery/gallery-11.jpeg";

const sectors = [
  "Development finance institutions",
  "Multilateral agencies",
  "Government ministries and agencies",
  "Bilateral development institutions",
  "Private-sector ESG teams",
  "Implementation partners and development institutions",
];

const strengths = [
  "Multilingual team working in English, French, and Pidgin.",
  "Experience in development-sector and institutional communication.",
  "Storytelling that resonates with communities, policymakers, and investors.",
  "Documentaries, reporting films, and stakeholder engagement media.",
  "Leadership with participation in high-level investment forums.",
  "Project management aligned with institutional and DFI standards.",
];

const featuredStories = [
  {
    title: "Development finance institutions",
    category: "Institutional audience",
    description: "Strategic visual stories for partners that need clear proof, visibility, and trust.",
  },
  {
    title: "Government ministries and agencies",
    category: "Public-sector audience",
    description: "Communication built to explain programmes, milestones, and delivery with clarity.",
  },
  {
    title: "Private-sector ESG teams",
    category: "Impact audience",
    description: "Editorial storytelling for social impact, responsibility, and policy-facing visibility.",
  },
];

const WhoWeServePage = () => {
  const { config } = useLandingPageConfig();
  const whoWeServePage = config.whoWeServePage ?? {};
  const hero = whoWeServePage.hero ?? {};
  return (
    <ProfilePageShell
      title={hero.title ?? "Who We Serve"}
      heroImage={hero.image ?? serveVisual}
      heroImageAlt="OHI team visual"
      description={hero.description ?? "OHI creates development communication that helps institutions, partners, and communities understand the work being done, why it matters, and why it deserves attention from capital and policy actors."}
      descriptionClassName="text-white"
      primaryCta={{ label: hero.primaryCtaLabel ?? "View Portfolio", href: hero.primaryCtaHref ?? "/portfolio" }}
      secondaryCta={{ label: hero.secondaryCtaLabel ?? "Contact Us", href: hero.secondaryCtaHref ?? "/contact" }}
      heroBadge={
        <div className="space-y-1">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {hero.badgeEyebrow ?? "OHI profile"}
          </p>
          <p className="font-body text-sm leading-6 text-white/80">
            {hero.badgeDescription ?? "Strategic visibility for development, investment, and impact communication."}
          </p>
        </div>
      }
    >
      <section className="p-4 sm:p-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Sectors OHI works with"
            description="These sectors explain the kind of partners OHI is built to support."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {featuredStories.map((item) => (
              <Card
                key={item.title}
                className="group overflow-hidden bg-white shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(201,107,23,0.1)]"
              >
                <div className="relative h-[240px] overflow-hidden bg-slate-100">
                  <img
                    src={serveVisual}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.02)_0%,rgba(8,10,15,0.56)_100%)]" />
                  <Badge className="absolute left-5 top-5 bg-white/92 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-[#b16a18] backdrop-blur-sm">
                    {item.category}
                  </Badge>
                </div>

                <CardHeader className="px-6 pb-2 pt-5">
                  <CardTitle className="font-display text-xl font-semibold tracking-[-0.02em] text-[#173145]">
                    {item.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="px-6 pb-5">
                  <CardDescription className="font-body text-sm leading-7 text-[#4e5a67]">
                    {item.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="flex items-center justify-between px-6 pb-6 pt-0">
                  <span className="font-body text-sm font-semibold text-[#b16a18]">
                    View case style
                  </span>
                  <ArrowRight className="h-4 w-4 text-[#b16a18] transition-transform duration-300 ease-out group-hover:translate-x-1" />
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fff3e3] p-4 sm:p-6">
        <div className="mx-auto grid max-w-6xl gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
            <div className="flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-[#b16a18]" />
              <h3 className="font-display text-2xl font-semibold text-[#173145]">
                Unique strengths
              </h3>
            </div>
            <div className="mt-6 space-y-4">
              {strengths.map((strength) => (
                <div key={strength} className="rounded-2xl bg-[#fff8ef] p-4 text-sm leading-6 text-[#4e5a67]">
                  {strength}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-6 text-white shadow-sm">
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-[#fbbf24]" />
              <h3 className="font-display text-2xl font-semibold">Built for African contexts</h3>
            </div>
            <p className="font-body mt-4 leading-7 text-justify text-white/80">
              OHI works across African development and investment stories with the multilingual flexibility to support regions, institutions, and audiences.
            </p>
            <div className="mt-6 rounded-[24px] bg-white/10 p-5">
              <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
                Communication outcome
              </p>
              <p className="font-body mt-3 text-lg leading-8 text-justify text-white/90">
                Clearer reporting, stronger stakeholder alignment, and stories that feel credible to the people who need to act on them.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/contact">
                <button className="hero_btn1 inline-flex items-center gap-2">
                  Start a project <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default WhoWeServePage;
