import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const PastPresidentsPage = () => {
  return (
    <ProfilePageShell
      title="Past Presidents"
      description="The leaders who have guided OHI's institutional development."
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
          title="Past Presidents"
          description="The leaders who have guided OHI's institutional development"
        />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Olympian House International has been shaped by presidents who guided the organization through different phases of growth, restructuring, and geographic expansion.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each leader contributed to institutional capacity, governance continuity, and the expansion of the organization’s operating footprint.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default PastPresidentsPage;
