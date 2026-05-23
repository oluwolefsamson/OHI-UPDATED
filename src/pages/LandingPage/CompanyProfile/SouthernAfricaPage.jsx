import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const SouthernAfricaPage = () => {
  return (
    <ProfilePageShell
      title="Southern Africa"
      description="Our programs and partnerships in Southern Africa."
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
          title="Southern Africa"
          description="Our programs and partnerships in Southern Africa"
        />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Olympian House International has established strong operations in Southern Africa, including work in Zambia and other countries across the region. Our initiatives focus on institutional development, community storytelling, and sustainable impact.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through collaborative partnerships with regional institutions and communities, we deliver communication services, support organizational capacity building, and contribute to regional development goals.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default SouthernAfricaPage;
