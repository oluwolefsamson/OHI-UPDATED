import React from "react";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import platformImage from "../../../assets/images/Gallery/gallery-11.jpeg";

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
      <div className="grid gap-8 rounded-[36px] bg-[#fffaf5] p-4 lg:grid-cols-[1.05fr_0.95fr] lg:p-6">
        <div className="max-w-2xl">
          <SectionHeader
            title="Our Platforms"
            description="Digital and communication channels used to support institutional delivery"
            className="max-w-none text-left"
          />

          <div className="mt-8 space-y-6">
            <p className="text-lg leading-relaxed text-justify text-[#4e5a67]">
              OHI operates through multiple platforms designed to reach different audiences and stakeholders. The digital ecosystem includes video production, documentary formats, institutional communications, and engagement channels.
            </p>

            <p className="text-lg leading-relaxed text-justify text-[#4e5a67]">
              Each platform serves a defined purpose, from raising awareness to supporting policy dialogue and creating durable documentation of important initiatives.
            </p>
          </div>
        </div>

        <div className="relative min-h-[320px] overflow-hidden rounded-none border border-[#e8dcc8] bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:min-h-[420px]">
          <img
            src={platformImage}
            alt="OHI platforms visual"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.04)_0%,rgba(8,10,15,0.22)_100%)]" />
        </div>
      </div>
    </ProfilePageShell>
  );
};

export default OurPlatformsPage;
