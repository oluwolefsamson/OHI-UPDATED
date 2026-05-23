import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const EastAfricaPage = () => {
  return (
    <ProfilePageShell
      title="East Africa"
      description="Our work and impact in East African communities."
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
          description="Our work and impact in East African communities"
        />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            OHI operates extensively across East Africa, supporting institutions and communities in Kenya, Uganda, Tanzania, Rwanda, and beyond. Our regional teams conduct documentary work, provide institutional communication services, and support development initiatives.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are committed to understanding the unique contexts and opportunities in East Africa, building sustainable partnerships with local organizations and fostering community-led development solutions.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default EastAfricaPage;
