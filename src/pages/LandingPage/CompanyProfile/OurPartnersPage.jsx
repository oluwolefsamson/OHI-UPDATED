import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import { Marquee } from "../../../components/LandingPage/magicui/marquee";

const partnerLogos = [
  { id: 1, name: "Partner 1", logo: "https://via.placeholder.com/150x80?text=Partner+1" },
  { id: 2, name: "Partner 2", logo: "https://via.placeholder.com/150x80?text=Partner+2" },
  { id: 3, name: "Partner 3", logo: "https://via.placeholder.com/150x80?text=Partner+3" },
  { id: 4, name: "Partner 4", logo: "https://via.placeholder.com/150x80?text=Partner+4" },
  { id: 5, name: "Partner 5", logo: "https://via.placeholder.com/150x80?text=Partner+5" },
  { id: 6, name: "Partner 6", logo: "https://via.placeholder.com/150x80?text=Partner+6" },
];

const LogoCard = ({ logo, name }) => {
  return (
    <div className="flex items-center justify-center w-48 h-24 rounded-lg border border-[#bb7422]/20 bg-white hover:bg-[#f5f1e8] transition">
      <img src={logo} alt={name} className="max-w-[80%] max-h-[80%] object-contain" />
    </div>
  );
};

const OurPartnersPage = () => {
  return (
    <ProfilePageShell
      title="Our Partners"
      description="Working together with organizations and institutions for greater impact."
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
          title="Our Partners"
          description="OHI collaborates with a wide network of partners including international organizations, government agencies, and community groups."
        />

        <div className="space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            These partnerships strengthen our ability to create sustainable impact and reach more communities.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Through strategic alliances and collaborative initiatives, we leverage combined resources and expertise to address complex challenges across the regions we serve.
          </p>
        </div>
      </div>

      <div className="w-screen relative left-[calc(-50vw+50%)] bg-[#f5f1e8] py-12 md:py-16 mt-8">
        <div className="container mx-auto px-4 md:px-8">
          <h3 className="text-center text-lg font-semibold uppercase tracking-[0.02em] text-[#2b313a] mb-8">
            Our Supporters
          </h3>
          <div className="relative flex w-full items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {partnerLogos.map((partner) => (
                <LogoCard key={partner.id} logo={partner.logo} name={partner.name} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default OurPartnersPage;
