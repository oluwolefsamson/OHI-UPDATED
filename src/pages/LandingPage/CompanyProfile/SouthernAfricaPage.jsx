import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";

const SouthernAfricaPage = () => {
  return (
    <ProfilePageShell
      title="Southern Africa"
      description="Institutional presence and partnerships in Southern Africa."
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
      <div className="mx-auto max-w-6xl space-y-12 p-4 sm:p-6 lg:p-8">
        <SectionHeader
          title="Southern Africa"
          description="Institutional presence and partnerships in Southern Africa"
        />
        
        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            Olympian House International has established operational capacity in Southern Africa, including work in Zambia and other countries across the region. The focus is on institutional communication, documentary production, and the delivery of content that can support credibility and stakeholder alignment.
          </p>
          
          <p className="text-lg text-muted-foreground leading-relaxed">
            Through collaborative partnerships with regional institutions and communities, OHI supports organizational capacity building and contributes communication assets that help programmes document results and maintain visibility.
          </p>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default SouthernAfricaPage;
