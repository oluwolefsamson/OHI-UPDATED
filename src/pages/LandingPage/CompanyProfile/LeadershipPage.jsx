import React from "react";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, MapPinned, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import UnderlinedHeading from "../../../components/LandingPage/UnderlinedHeading";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import heroImage from "../../../assets/images/profile-hero-city.jpg";
import leaderPortrait from "../../../assets/images/Gallery/gallery-09.jpeg";

const credentials = [
  "Leadership across African and international production and communication settings",
  "Institutional storytelling for development, public-sector, and impact partners",
  "Operational oversight of cross-border teams and regional delivery",
];

const leadershipHighlights = [
  {
    title: "Strategic direction",
    icon: BriefcaseBusiness,
    description:
      "Sets the tone for projects that need to satisfy institutional, donor, and partner expectations.",
  },
  {
    title: "Trust and governance",
    icon: ShieldCheck,
    description:
      "Keeps delivery, reporting, and relationship management aligned with professional standards.",
  },
  {
    title: "Regional reach",
    icon: MapPinned,
    description:
      "Works across West, Central, East, and Southern Africa with a practical understanding of local context.",
  },
];

const LeadershipPage = () => {
  const { config } = useLandingPageConfig();
  const leadershipPage = config.leadershipPage ?? {};
  const hero = leadershipPage.hero ?? {};
  const leader = leadershipPage.leader ?? {};
  const highlights = leadershipPage.highlights ?? leadershipHighlights;
  return (
    <ProfilePageShell
      title={hero.title ?? "Leadership"}
      heroImage={heroImage}
      heroImageAlt="OHI leadership hero"
      description={hero.description ?? "OHI is led with a clear institutional purpose: to turn strong production capability into trust, visibility, and decision-ready communication for development and impact audiences."}
      descriptionClassName="text-white"
      primaryCta={{ label: hero.primaryCtaLabel ?? "Contact OHI", href: hero.primaryCtaHref ?? "/contact" }}
      secondaryCta={{ label: hero.secondaryCtaLabel ?? "View Services", href: hero.secondaryCtaHref ?? "/services" }}
      heroBadge={
        <div className="space-y-1">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            {hero.badgeEyebrow ?? "Executive profile"}
          </p>
          <p className="font-body text-sm leading-6 text-white/80">
            {hero.badgeDescription ?? "Named leadership with the credibility procurement teams expect."}
          </p>
        </div>
      }
    >
      <section className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
        <div className="rounded-[32px] border border-[#D9DCE2] bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primaryColor">
            Named leadership
          </p>
          <UnderlinedHeading as="h2" className="mt-4 text-3xl font-bold tracking-[-0.03em] text-headingColor sm:text-4xl">
            {leader.name ?? "Oliver Mbuya Litondo"}
          </UnderlinedHeading>
          <p className="mt-3 text-base leading-7 text-justify text-textColor">
            {leader.role ?? "President, Olympian House International"}
          </p>
          <p className="mt-5 text-base leading-7 text-justify text-textColor">
            {leader.description ?? "Oliver Mbuya Litondo leads OHI with a focus on institutional credibility, regional delivery, and communication that helps partners explain complex work clearly. His role combines editorial judgment, team coordination, and client-facing oversight so projects stay aligned with strategic goals from brief to final output."}
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {(leader.credentials ?? credentials).map((item) => (
              <div key={item} className="rounded-[24px] border border-[#e8dcc8] bg-[#fffaf5] p-4">
                <BadgeCheck className="h-5 w-5 text-[#b16a18]" />
                <p className="mt-3 text-sm leading-6 text-justify text-[#4e5a67]">{item}</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex h-11 items-center justify-center rounded-none bg-[#f59e0b] px-5 text-sm font-semibold text-white hover:bg-[#d97706]"
            >
              Start a conversation
            </Link>
            <Link
              to="/documentary"
              className="inline-flex h-11 items-center justify-center rounded-none border border-[#e8dcc8] bg-white px-5 text-sm font-semibold text-[#173145] hover:bg-[#fff8ef]"
            >
              Back to documentary
            </Link>
          </div>
        </div>

        <div className="overflow-hidden rounded-none border border-[#e8dcc8] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)]">
          <img src={leaderPortrait} alt="OHI leader portrait" className="h-full min-h-[420px] w-full object-cover" />
        </div>
      </section>

      <section className="rounded-[36px] bg-[#f4f8fb] p-4 sm:p-6">
        <SectionHeader
          title="Why leadership matters"
          description="Institutional buyers want to know who is accountable, who is credible, and who can execute across markets."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {(highlights ?? leadershipHighlights).map((item) => (
            <div key={item.title} className="rounded-[28px] border border-[#e8dcc8] bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.06)]">
              <item.icon className="h-5 w-5 text-[#b16a18]" />
              <UnderlinedHeading as="h3" className="mt-4 text-xl font-semibold text-headingColor">
                {item.title}
              </UnderlinedHeading>
              <p className="mt-3 text-sm leading-6 text-textColor">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default LeadershipPage;
