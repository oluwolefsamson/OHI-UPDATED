import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import ourStoryImage from "../../../assets/images/our-story.jpeg";

const BackgroundPage = () => {
  return (
    <ProfilePageShell
      title="Background"
      description="The history and institutional foundation of Olympian House International."
      descriptionClassName="text-white"
      primaryCta={{ label: "Our Team", href: "/our-team" }}
      secondaryCta={{ label: "Contact Us", href: "/contact" }}
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
      <section className="bg-[#fffaf5] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="mx-auto grid max-w-6xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeader
              title="Our Background"
              description="The history and institutional foundation that shaped Olympian House International"
              className="max-w-none text-left"
            />

            <div className="mt-8 space-y-6">
              <p className="font-body text-lg leading-relaxed text-justify text-[#4e5a67]">
                Olympian House International was established to provide credible communication support for institutions, partners, and development programmes across Africa and beyond. The organization has grown around a consistent commitment to clarity, evidence, and disciplined execution.
              </p>

              <p className="font-body text-lg leading-relaxed text-justify text-[#4e5a67]">
                Over time, that work expanded into Central, East, and Southern Africa, as well as the United States. The background of the organization is rooted in understanding local context, respecting regional differences, and building communication systems that can support long-term institutional goals.
              </p>
            </div>

            <div className="mt-8">
              <Link to="/our-team" className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.08em] text-[#bb7422]">
                Meet the team <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="relative min-h-[380px] overflow-hidden bg-white shadow-[0_16px_40px_rgba(15,23,42,0.06)] sm:min-h-[480px] lg:min-h-[560px]">
            <img
              src={ourStoryImage}
              alt="OHI background visual"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.06)_0%,rgba(8,10,15,0.24)_100%)]" />
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default BackgroundPage;
