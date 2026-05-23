import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const PastPresidentsPage = () => {
  return (
    <ProfilePageShell
      title="Past Presidents"
      description="The visionary leaders who have guided OHI's development."
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
          description="The visionary leaders who have guided OHI's development"
        />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Olympian House International has been shaped by the leadership and vision of dedicated presidents who have guided the organization through different phases of growth and transformation.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each leader has contributed significantly to building our institutional capacity, expanding our geographic reach, and strengthening our commitment to excellence and impact in service to our communities.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default PastPresidentsPage;
