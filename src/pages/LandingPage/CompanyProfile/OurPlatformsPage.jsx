import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const OurPlatformsPage = () => {
  return (
    <ProfilePageShell
      title="Our Platforms"
      description="The channels and formats OHI uses to deliver institutional communication."
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
          description="Digital and communication channels used to support institutional delivery"
        />

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            OHI operates through multiple platforms designed to reach different audiences and stakeholders. The digital ecosystem includes video production, documentary formats, institutional communications, and engagement channels.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Each platform serves a defined purpose, from raising awareness to supporting policy dialogue and creating durable documentation of important initiatives.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default OurPlatformsPage;
