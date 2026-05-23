import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const OurPlatformsPage = () => {
  return (
    <ProfilePageShell
      title="Our Platforms"
      description="Digital and communication channels through which we deliver impact."
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
      <div className="space-y-12">
        <SectionHeader
          title="Our Platforms"
          description="Digital and communication channels through which we deliver impact"
        />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            OHI operates through multiple platforms designed to reach different audiences and communities. Our digital ecosystem includes video production, documentary storytelling, institutional communications, and community engagement channels.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each platform is carefully curated to serve specific purposes—from raising awareness to driving policy change, facilitating community dialogue, and creating lasting documentation of important initiatives.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default OurPlatformsPage;
