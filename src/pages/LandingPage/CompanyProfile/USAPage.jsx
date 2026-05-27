import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const USAPage = () => {
  return (
    <ProfilePageShell
      title="USA"
      description="OHI's institutional presence and partnerships in the United States."
      descriptionClassName="text-white"
      primaryCta={{ label: "Our Team", href: "/our-team" }}
      secondaryCta={{ label: "Contact Us", href: "/contact" }}
      heroBadge={
        <div className="space-y-1">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Where we are
          </p>
          <p className="font-body text-sm leading-6 text-white/80">
            Strategic visibility for development, investment, and impact communication.
          </p>
        </div>
      }
    >
      <div className="space-y-12">
        <SectionHeader
          title="United States of America"
          description="OHI's institutional presence and partnerships in the USA"
        />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Olympian House International extends its institutional work to the United States, where it engages American institutions, foundations, and organizations on partnerships, communication support, and development-oriented collaborations.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            The USA-based presence supports knowledge exchange, partnership development, and institutional collaboration that strengthens OHI's cross-border operating model.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default USAPage;
