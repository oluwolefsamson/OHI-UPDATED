import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const BackgroundPage = () => {
  return (
    <ProfilePageShell
      title="Background"
      description="The history and foundation that shaped Olympian House International."
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
          description="Discover the history and foundation that shaped Olympian House International"
        />

        <div className="space-y-6 rounded-[32px] border border-[#e8dcc8] bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:p-8">
          <p className="font-body text-lg leading-relaxed text-[#4e5a67]">
            Olympian House International was founded with a vision to create meaningful impact across Africa and beyond. Our journey began with a commitment to excellence, innovation, and community-centered development.
          </p>

          <p className="font-body text-lg leading-relaxed text-[#4e5a67]">
            Over the years, we have grown from a small initiative to a continent-wide organization, establishing presence in Central, East, and Southern Africa, as well as the United States. Our background is rooted in understanding local contexts, respecting cultural diversity, and building sustainable solutions.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default BackgroundPage;
