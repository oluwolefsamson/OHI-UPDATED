import React from "react";
import { ArrowRight, Globe2, Layers3, Users } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import serveVisual from "../../../assets/images/Gallery/gallery-11.jpeg";

const sectors = [
  "Development Finance Institutions",
  "Multilateral & UN Agencies",
  "Bilateral Development Institutions",
  "Governments & Implementing Partners",
  "Foundations",
  "Private-Sector ESG & Social-Impact Programmes",
];

const strengths = [
  "Multilingual team (English, French, Pidgin).",
  "Deep fluency in DFI, donor, and multilateral communication frameworks.",
  "Storytelling that resonates with communities, policymakers, and global investors alike.",
  "Proven track record across investment showcases, impact documentaries, and stakeholder engagement.",
  "Led by an award-winning Producer/Director, informed by direct participation in high-level investment forums.",
  "Project management aligned with donor compliance and DFI reporting standards.",
];

const clients = [
  "Sun King", "Olam", "Olam Food Ingredients (OFI)", "IFRC", "CRTV",
  "Les Laboratoires Biopharma", "EU Civil Protection & Humanitarian Aid", "HOFNA",
  "#defyhatenow", "African Wildlife Foundation", "World Food Programme", "CORAF",
  "Cosmos Educational Press", "International Rescue Committee", "AfriYAN",
  "Cameroon Investment Promotion Agency (API)",
];

const featuredStories = [
  {
    title: "Development Finance Institutions",
    category: "Institutional audience",
    description: "Investment & programme visibility films that speak the language of capital and demonstrate that funding is working.",
  },
  {
    title: "Multilateral & UN Agencies",
    category: "Multilateral audience",
    description: "Impact documentaries and strategic content that meet the highest institutional and reporting standards.",
  },
  {
    title: "Private-Sector ESG Teams",
    category: "Impact audience",
    description: "ESG & social impact storytelling for private-sector actors operating in Africa who need to show responsibility and real-world contribution.",
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
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {hero.badgeEyebrow ?? "OHI profile"}
          </p>
          <p className="text-sm leading-6 text-white/80">
            {hero.badgeDescription ?? "Strategic visibility for development, investment, and impact communication."}
          </p>
        </div>
      }
    >
      {/* Sector cards */}
      <section className="py-16 sm:py-20" style={{ backgroundImage: "url('/white-bg3.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <SectionHeader
            title="Sectors OHI works with"
            description="These sectors explain the kind of partners OHI is built to support."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredStories.map((item) => (
              <article
                key={item.title}
                className="overflow-hidden bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.12)]"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <img
                    src={serveVisual}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.02)_0%,rgba(8,10,15,0.52)_100%)]" />
                  <span className="absolute left-4 top-4 bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#F07F1A]">
                    {item.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold tracking-[-0.02em] text-[#2e3135]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[#4e5a67]">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Strengths + Capital-fluent */}
      <section className="py-16 sm:py-20 bg-[#1a2744]">
        <div className="container grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-white p-6 shadow-[0_10px_28px_rgba(15,23,42,0.08)] sm:p-8">
            <div className="flex items-center gap-3">
              <Layers3 className="h-5 w-5 text-[#F07F1A]" />
              <h3 className="text-xl font-bold tracking-[-0.02em] text-[#2e3135]">
                Our unique strengths
              </h3>
            </div>
            <div className="mt-6 space-y-3">
              {strengths.map((strength) => (
                <div key={strength} className="bg-[#f8f9fb] px-4 py-3 text-sm leading-6 text-[#4e5a67]">
                  {strength}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#0a0c12] p-6 text-white shadow-[0_10px_28px_rgba(15,23,42,0.12)] sm:p-8">
            <div className="flex items-center gap-3">
              <Globe2 className="h-5 w-5 text-[#F07F1A]" />
              <h3 className="text-xl font-bold tracking-[-0.02em] text-white">Capital-fluent expertise</h3>
            </div>
            <p className="mt-4 text-sm leading-7 text-white/80">
              We understand donor compliance, DFI communication frameworks, and the psychology of institutional decision-making. Our perspective is informed by direct participation in high-level investment forums, including the Africa Investment Forum — so our work speaks the language of capital, not just communication.
            </p>
            <div className="mt-6 bg-white/10 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                A 95% repeat-client rate
              </p>
              <p className="mt-3 text-base leading-7 text-white/90">
                Built on trust earned across nearly a decade of institutional work.
              </p>
            </div>
            <div className="mt-6">
              <Link
                to="/contact"
                className="inline-flex h-11 items-center gap-2 bg-[#F07F1A] px-6 text-sm font-bold text-white transition hover:bg-[#d96d10]"
              >
                Start a conversation <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client list */}
      <section className="py-16 sm:py-20" style={{ backgroundImage: "url('/white-bg1.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <div className="mb-6 flex items-center gap-3">
            <Users className="h-5 w-5 text-[#F07F1A]" />
            <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#2e3135]">Our clients</h3>
          </div>
          <p className="mb-8 max-w-2xl text-sm leading-6 text-[#4e5a67]">
            Trusted by leading institutions, development agencies, and private-sector actors across Africa and beyond.
          </p>
          <div className="flex flex-wrap gap-2">
            {clients.map((client) => (
              <span
                key={client}
                className="inline-flex items-center border border-[#e5e5e5] bg-[#f8f9fb] px-4 py-2 text-sm font-medium text-[#2e3135]"
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default WhoWeServePage;
