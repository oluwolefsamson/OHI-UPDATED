import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const BackgroundPage = () => {
  return (
    <ProfilePageShell
      title="Background"
      description="The history and institutional foundation of Olympian House International."
      descriptionClassName="text-white"
      primaryCta={{ label: "Our Team", href: "/our-team" }}
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
      <div className="space-y-12">
        <SectionHeader
          title="Our Background"
          description="The history and institutional foundation that shaped Olympian House International"
        />

        <div className="space-y-6 rounded-[32px] border border-[#e8dcc8] bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <p className="font-body text-lg leading-relaxed text-[#4e5a67]">
            Olympian House International was established to provide credible communication support for institutions, partners, and development programmes across Africa and beyond. The organization has grown around a consistent commitment to clarity, evidence, and disciplined execution.
          </p>

          <p className="font-body text-lg leading-relaxed text-[#4e5a67]">
            Over time, that work expanded into Central, East, and Southern Africa, as well as the United States. The background of the organization is rooted in understanding local context, respecting regional differences, and building communication systems that can support long-term institutional goals.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default BackgroundPage;
