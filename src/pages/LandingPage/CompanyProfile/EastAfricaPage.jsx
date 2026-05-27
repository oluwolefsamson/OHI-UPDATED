import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const EastAfricaPage = () => {
  return (
    <ProfilePageShell
      title="East Africa"
      description="Institutional delivery and partnerships in East Africa."
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
          title="East Africa"
          description="Institutional delivery and partnerships in East Africa"
        />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            OHI operates across East Africa, supporting institutions and communities in Kenya, Uganda, Tanzania, Rwanda, and beyond. Regional teams provide documentary production, institutional communication services, and support for development initiatives that require clear public-facing documentation.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            The approach is shaped by local context and long-term partnership, with an emphasis on communication assets that can be used by local organizations, development teams, and public institutions.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default EastAfricaPage;
