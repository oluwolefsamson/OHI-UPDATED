import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { Marquee } from "../../../components/LandingPage/magicui/marquee";
import ifrcLogo from "../../../assets/img/International_Federation_of_Red_Cross_and_Red_Crescent_Societies_Logo.png";
import corafLogo from "../../../assets/img/logo-coraf.png";
import sunKingLogo from "../../../assets/img/Sun-King_New_Logo-02.png";
import wfpLogo from "../../../assets/img/wfp-logo-extended-blue-en.png";

const partnerLogos = [
  { id: 1, name: "World Food Programme", logo: wfpLogo },
  { id: 2, name: "Sun King", logo: sunKingLogo },
  { id: 3, name: "CORAF", logo: corafLogo },
  { id: 4, name: "IFRC", logo: ifrcLogo },
  { id: 5, name: "WFP Extended", logo: wfpLogo },
];

const supportHighlights = [
  "Institutional visibility",
  "Shared storytelling goals",
  "Long-term collaboration",
];

const LogoCard = ({ logo, name }) => {
  return (
    <div className="group flex h-28 w-56 items-center justify-center rounded-[26px] border border-[#ead9c0] bg-[linear-gradient(180deg,#fffdf8_0%,#fff6ea_100%)] px-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(15,23,42,0.1)]">
      <img
        src={logo}
        alt={name}
        className="max-h-12 max-w-[80%] object-contain opacity-90 transition duration-300 group-hover:opacity-100"
      />
    </div>
  );
};

const OurPartnersPage = () => {
  return (
    <ProfilePageShell
      title="Our Partners"
      description="Institutional partnerships that support delivery, credibility, and reach."
      descriptionClassName="text-white"
      primaryCta={{ label: "Contact Us", href: "/contact" }}
      secondaryCta={{ label: "Our Team", href: "/our-team" }}
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
      <div className="space-y-10">
        <SectionHeader
          title="Our Partners"
          description="OHI collaborates with a network of partners including international organizations, government agencies, and community groups."
        />

        <div className="grid gap-5 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-[28px] border border-[#ead9c0] bg-white p-6 shadow-[0_14px_34px_rgba(15,23,42,0.06)] sm:p-8">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.24em] text-[#b16a18]">
              Why it works
            </p>
            <p className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#173145] sm:text-[30px]">
              Partnerships give the work more reach, clarity, and durability.
            </p>
            <p className="font-body mt-4 text-base leading-7 text-[#4e5a67]">
              These relationships help OHI deliver communication that is aligned with
              institutional goals, audience needs, and programme objectives.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {supportHighlights.map((item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-[#ead9c0] bg-[#fff8ef] px-3 py-1 text-xs font-semibold text-[#8b5a1e]"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] bg-[linear-gradient(180deg,#091826_0%,#12243a_100%)] p-6 text-white shadow-[0_14px_34px_rgba(15,23,42,0.12)] sm:p-8">
            <p className="font-body text-sm font-semibold uppercase tracking-[0.24em] text-[#fbbf24]">
              Supporters
            </p>
            <p className="font-display mt-3 text-2xl font-semibold tracking-[-0.03em] sm:text-[30px]">
              A partner set that signals scale and institutional trust.
            </p>
            <p className="font-body mt-4 text-base leading-7 text-white/78">
              The supporter strip presents the relationships as proof of operating
              context rather than decorative branding.
            </p>
          </div>
        </div>

        <div className="mt-2 overflow-hidden rounded-[32px] border border-[#ead9c0] bg-[linear-gradient(180deg,#fffdf8_0%,#fff6ea_100%)] p-4 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-6">
          <div className="relative flex w-full items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:28s]">
              {partnerLogos.map((partner) => (
                <LogoCard key={partner.id} logo={partner.logo} name={partner.name} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default OurPartnersPage;
