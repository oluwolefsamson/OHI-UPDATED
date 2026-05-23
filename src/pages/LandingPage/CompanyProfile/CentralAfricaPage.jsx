import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const CentralAfricaPage = () => {
  return (
    <ProfilePageShell
      title="Central Africa"
      description="Our initiatives and presence in Central Africa."
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
          title="Central Africa"
          description="Our initiatives and presence in Central Africa"
        />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Olympian House International maintains a significant presence in Central Africa, working with communities and institutions across the region. Our work includes documentary production, capacity building, and institutional communication programs.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through regional partnerships and localized approaches, we support development initiatives, institutional growth, and community engagement across Central African countries including Cameroon and beyond.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default CentralAfricaPage;
