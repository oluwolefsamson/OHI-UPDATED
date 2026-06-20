import React from "react";
import { Link } from "react-router-dom";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import SectionHeader from "../../../components/LandingPage/SectionHeader";
import teamImageOne from "../../../assets/images/Gallery/gallery-09.jpeg";
import teamImageTwo from "../../../assets/images/HeroImg/hero2.jpeg";
import teamImageThree from "../../../assets/images/Gallery/gallery-12.jpeg";
import teamImageFour from "../../../assets/images/Gallery/gallery-11.jpeg";
import heroImage from "../../../assets/images/profile-hero-mountain.jpg";

const teamMembers = [
  { name: "Oliver Mbuya Litondo", title: "President", image: teamImageOne, slug: "oliver-mbuya-litondo" },
  { name: "Balbasie N. Mandisha", title: "Director, Co-Founder", image: teamImageTwo, slug: "balbasie-n-mandisha" },
  { name: "Benjamin Ubiri", title: "Regional Director, West Africa", image: teamImageThree, slug: "benjamin-ubiri" },
  { name: "Carreso Cota Amyta", title: "Regional Director, Southern Africa", image: teamImageFour, slug: "carreso-cota-amyta" },
  { name: "Fombako Banke N", title: "Regional Director, Central Africa", image: teamImageOne, slug: "fombako-banke-n" },
  { name: "Francis Etuk", title: "Consultant (Audit/Report)", image: teamImageTwo, slug: "francis-etuk" },
  { name: "Aizez Oowng Faborau", title: "Director, Growth and Opportunities", image: teamImageThree, slug: "aizez-oowng-faborau" },
  { name: "Kalu Onuka", title: "Accountant", image: teamImageFour, slug: "kalu-onuka" },
  { name: "James Kamaaka", title: "Content Communications Officer", image: teamImageOne, slug: "james-kamaaka" },
];

const boardMembers = [
  { name: "Oliver Mbuya Litondo", title: "Chair", image: teamImageOne, slug: "oliver-mbuya-litondo-board" },
  { name: "Ngalame N. Mandisha", title: "Vice Chair", image: teamImageTwo, slug: "ngalame-n-mandisha" },
  { name: "Koretawe Vandeveer", title: "Board Member", image: teamImageThree, slug: "koretawe-vandeveer" },
  { name: "Afomefusi Omusu Obi", title: "Director, Steubing", image: teamImageFour, slug: "afomefusi-omusu-obi" },
  { name: "Afidem T. Mundanga", title: "Director, Programmes", image: teamImageOne, slug: "afidem-t-mundanga" },
  { name: "Nipra Smith", title: "Board Member", image: teamImageTwo, slug: "nipra-smith" },
  { name: "Torey Des Rosemarind", title: "Director, Advocacy", image: teamImageThree, slug: "torey-des-rosemarind" },
  { name: "Dr. Prince Amujie", title: "Board Member", image: teamImageFour, slug: "dr-prince-amujie" },
];

const MemberCard = ({ member, dark = false }) => (
  <div className="group flex flex-col items-center text-center">
    <div className="mb-4 h-40 w-40 overflow-hidden shadow-[0_10px_28px_rgba(15,23,42,0.12)]">
      <img
        src={member.image}
        alt={member.name}
        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
    </div>
    <h3 className={`text-sm font-bold uppercase tracking-[0.05em] ${dark ? "text-white" : "text-[#2e3135]"}`}>
      {member.name}
    </h3>
    <p className={`mt-1 text-xs font-semibold uppercase tracking-[0.12em] ${dark ? "text-white/80" : "text-[#F07F1A]"}`}>
      {member.title}
    </p>
    <Link
      to={`/team/${member.slug}`}
      className={`mt-2 text-xs font-medium uppercase tracking-[0.12em] transition ${dark ? "text-white/70 hover:text-white" : "text-[#4e5a67] hover:text-[#F07F1A]"}`}
    >
      View Profile
    </Link>
  </div>
);

const OurTeamPage = () => {
  return (
    <ProfilePageShell
      title="Our Team"
      heroImage={heroImage}
      heroImageAlt="Our Team"
      description="Meet the executives and regional leads who support OHI's institutional delivery across Africa and internationally. The team brings production, communications, and programme management experience to the organization's work."
      descriptionClassName="text-white"
      primaryCta={{ label: "Contact Us", href: "/contact" }}
      secondaryCta={{ label: "Learn More", href: "/about" }}
      heroBadge={
        <div className="space-y-1">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Executive Team
          </p>
          <p className="text-sm leading-6 text-white/80">
            Leadership and operational expertise shaping OHI's direction and delivery.
          </p>
        </div>
      }
    >
      {/* Executive Team */}
      <section className="py-16 sm:py-20" style={{ backgroundImage: "url('/white-bg3.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <SectionHeader
            title="Executive Team"
            description="The production, communications, and operational leadership behind OHI's institutional delivery."
            className="max-w-2xl"
          />
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {teamMembers.map((member) => (
              <MemberCard key={member.slug} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Board of Trustees */}
      <section className="py-16 sm:py-20" style={{ backgroundImage: "url('/yellow-bg.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <SectionHeader
            title="Board of Trustees"
            description="Governance and strategic oversight for OHI's institutional operations."
            className="max-w-2xl"
            textColorClassName="text-white"
            descriptionClassName="text-white/80"
          />
          <div className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
            {boardMembers.map((member) => (
              <MemberCard key={member.slug} member={member} dark />
            ))}
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default OurTeamPage;
