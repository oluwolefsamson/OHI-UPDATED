import React from "react";
import { ArrowRight, Film, Megaphone, VideoIcon } from "lucide-react";
import { Link } from "react-router-dom";
import serviceImage01 from "../../../assets/images/Gallery/gallery-01.jpeg";
import serviceImage02 from "../../../assets/images/Gallery/gallery-02.jpeg";
import serviceImage03 from "../../../assets/images/Gallery/gallery-03.jpeg";
import serviceImage04 from "../../../assets/images/Gallery/gallery-04.jpeg";
import serviceImage05 from "../../../assets/images/Gallery/gallery-05.jpeg";
import serviceImage06 from "../../../assets/images/Gallery/gallery-06.jpeg";
import serviceImage07 from "../../../assets/images/Gallery/gallery-07.jpeg";
import serviceImage08 from "../../../assets/images/Gallery/gallery-08.jpeg";
import profileHeroMountain from "../../../assets/images/profile-hero-mountain.jpg";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import Reveal from "../../../components/ui/reveal";

const ServicesPage = () => {
  const { config } = useLandingPageConfig();
  const { services } = config;
  const servicesPage = config.servicesPage ?? {};
  const hero = servicesPage.hero ?? {};
  const introImage = servicesPage.introImage ?? profileHeroMountain;

  const serviceFormats = [
    "Investment & programme visibility",
    "Impact documentaries",
    "ESG & social impact storytelling",
    "Development programme communication",
    "Donor & investor reporting films",
    "Multilingual field production",
  ];

  const serviceShowcase = [
    {
      title: "Impact Documentaries",
      description:
        "We produce documentaries that turn programme results into evidence-led narratives for institutional audiences.",
      image: serviceImage01,
    },
    {
      title: "Development Programme Communication",
      description:
        "OHI helps development programmes communicate objectives, implementation, and results with clarity and accountability.",
      image: serviceImage02,
    },
    {
      title: "Investment & Programme Visibility",
      description:
        "We craft investor-facing films that present projects as credible opportunities for financing and partnership.",
      image: serviceImage03,
    },
    {
      title: "ESG & Social Impact Storytelling",
      description:
        "Our content amplifies community voice and local ownership while supporting ESG and social impact reporting.",
      image: serviceImage04,
    },
    {
      title: "Donor & Investor Reporting Films",
      description:
        "We produce reporting films that support donor updates, investor confidence, and renewal conversations.",
      image: serviceImage05,
    },
    {
      title: "Multilingual Field Production",
      description:
        "OHI produces concise, evidence-driven reporting films across languages and regions.",
      image: serviceImage06,
    },
    {
      title: "Event & Mission Coverage",
      description:
        "From high-level forums to field missions, we document moments that matter with professional intent.",
      image: serviceImage07,
    },
    {
      title: "Social Media & Digital Campaigns",
      description:
        "We design digital-first content that extends project visibility across web, social, and stakeholder channels.",
      image: serviceImage08,
    },
  ];

  return (
    <ProfilePageShell
      title={hero.title ?? "Services"}
      heroImage={hero.image ?? profileHeroMountain}
      heroImageAlt="OHI programmes hero"
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
      statCards={[
        { eyebrow: "Projects", value: "100+", label: "Projects delivered" },
        { eyebrow: "Clients", value: "70+", label: "Institutional clients" },
        { eyebrow: "Retention", value: "95%", label: "Repeat-client rate" },
      ]}
    >
      <section className="bg-[#fffaf5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Core services"
            description="OHI is a partner for institutions that need clear, credible, and investment-grade storytelling."
          />
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.cards.map((card, index) => (
              <Reveal key={card.name} delay={0.04 + index * 0.04}>
                <article className="bg-white p-6 shadow-[0_12px_28px_rgba(15,23,42,0.06)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(201,107,23,0.1)]">
                  <div
                    className="h-2 w-20"
                    style={{ backgroundColor: card.textColor }}
                  />
                  <h3 className="font-display mt-5 text-2xl font-semibold text-[#173145]">{card.name}</h3>
                  <p className="font-body mt-4 text-base leading-7 text-[#4e5a67]">{card.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#bb7422] py-14 sm:py-16 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 lg:grid-cols-[1.1fr_0.9fr] sm:px-6 lg:px-8">
          <div className="bg-white p-6 text-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#173145]">
              Communication formats
            </p>
            <h3 className="font-display mt-4 text-3xl font-semibold tracking-[-0.03em] text-[#173145]">
              Visual formats built for clarity
            </h3>
            <p className="font-body mt-4 leading-7 text-[#4e5a67]">
              Each format is chosen to match the communication objective, whether the goal is public awareness, stakeholder trust, donor reporting, or investor confidence.
            </p>
            <div className="mt-6 space-y-3">
              {serviceFormats.map((item, index) => (
                <Reveal key={item} delay={0.05 + index * 0.03}>
                  <div className="flex items-center gap-3 bg-[#fff8ef] px-4 py-3 transition duration-300 ease-out hover:bg-white">
                    <VideoIcon className="h-4 w-4 text-[#bb7422]" />
                    <span className="font-body text-sm font-medium text-[#173145]">{item}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 text-white shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
            <div className="flex items-center gap-3">
              <Megaphone className="h-5 w-5 text-[#bb7422]" />
              <h3 className="font-display text-2xl font-semibold tracking-[-0.03em] text-[#173145]">How the work travels</h3>
            </div>
            <p className="font-body mt-4 text-base leading-7 text-[#4e5a67]">
              OHI frames each format as a communication asset, not just a video. The result is content that can be used across reports, websites, social channels, presentations, and stakeholder engagement.
            </p>
            <div className="mt-6 bg-[#fff8ef] p-5">
              <div className="flex items-center gap-3">
                <Film className="h-5 w-5 text-[#bb7422]" />
                <p className="font-body text-sm font-semibold uppercase tracking-[0.2em] text-[#bb7422]">
                  Delivery approach
                </p>
              </div>
              <p className="font-body mt-3 text-sm leading-6 text-[#4e5a67]">
                Strategic, polished, and grounded in the realities of development work across the continent.
              </p>
            </div>
            <div className="mt-6">
              <Link to="/who-we-serve">
                <button className="btn inline-flex items-center gap-2">
                  See sectors <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#eef6fb_0%,#e3eff8_28%,#d8e8f5_100%)] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            title="Formats in practice"
            description="A closer look at how OHI adapts each format to the communication objective, audience, and sector."
          />

          <div className="mt-10 space-y-5">
            {serviceShowcase.map((item, index) => (
              <Reveal key={item.title} delay={0.06 + index * 0.05}>
        <article className="overflow-hidden rounded-[24px] border border-white/20 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(201,107,23,0.1)]">
                  <div className="grid items-stretch md:grid-cols-2">
                    <div
                      className={`relative min-h-[220px] md:min-h-[200px] ${
                        index % 2 === 1 ? "md:order-2" : ""
                      }`}
                    >
                      <img
                        src={item.image ?? serviceShowcase[index]?.image ?? introImage}
                        alt={item.title}
                        className="h-full w-full object-cover transition duration-500 ease-out"
                      />
                    </div>
                    <div
                      className={`flex items-center p-6 sm:p-8 ${
                        index % 2 === 1 ? "md:order-1" : ""
                      }`}
                    >
                      <div className="max-w-xl">
                        <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-[#bb7422]">
                          {item.title}
                        </h3>
                        <p className="font-body mt-3 text-sm leading-7 text-[#4e5a67] sm:text-[15px]">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default ServicesPage;
