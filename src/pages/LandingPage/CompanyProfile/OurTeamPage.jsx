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
  {
    name: "Oliver Mbuya Litondo",
    title: "President",
    image: teamImageOne,
    slug: "oliver-mbuya-litondo",
  },
  {
    name: "Balbasie N. Mandisha",
    title: "Director, Co-Founder",
    image: teamImageTwo,
    slug: "balbasie-n-mandisha",
  },
  {
    name: "Benjamin Ubiri",
    title: "Regional Director, West Africa",
    image: teamImageThree,
    slug: "benjamin-ubiri",
  },
  {
    name: "Carreso Cota Amyta",
    title: "Regional Director, Southern Africa",
    image: teamImageFour,
    slug: "carreso-cota-amyta",
  },
  {
    name: "Fombako Banke N",
    title: "Regional Director, Central Africa",
    image: teamImageOne,
    slug: "fombako-banke-n",
  },
  {
    name: "Francis Etuk",
    title: "Consultant (Audit/Report)",
    image: teamImageTwo,
    slug: "francis-etuk",
  },
  {
    name: "Aizez Oowng Faborau",
    title: "Director, Growth and Opportunities",
    image: teamImageThree,
    slug: "aizez-oowng-faborau",
  },
  {
    name: "Kalu Onuka",
    title: "Accountant",
    image: teamImageFour,
    slug: "kalu-onuka",
  },
  {
    name: "James Kamaaka",
    title: "Content Communications Officer",
    image: teamImageOne,
    slug: "james-kamaaka",
  },
];

const boardMembers = [
  {
    name: "Oliver Mbuya Litondo",
    title: "Chair",
    image: teamImageOne,
    slug: "oliver-mbuya-litondo-board",
  },
  {
    name: "Ngalame N. Mandisha",
    title: "Vice Chair",
    image: teamImageTwo,
    slug: "ngalame-n-mandisha",
  },
  {
    name: "Koretawe Vandeveer",
    title: "Board Member",
    image: teamImageThree,
    slug: "koretawe-vandeveer",
  },
  {
    name: "Afomefusi Omusu Obi",
    title: "Director, Steubing",
    image: teamImageFour,
    slug: "afomefusi-omusu-obi",
  },
  {
    name: "Afidem T. Mundanga",
    title: "Director, Programmes",
    image: teamImageOne,
    slug: "afidem-t-mundanga",
  },
  {
    name: "Nipra Smith",
    title: "Board Member",
    image: teamImageTwo,
    slug: "nipra-smith",
  },
  {
    name: "Torey Des Rosemarind",
    title: "Director, Advocacy",
    image: teamImageThree,
    slug: "torey-des-rosemarind",
  },
  {
    name: "Dr. Prince Amujie",
    title: "Board Member",
    image: teamImageFour,
    slug: "dr-prince-amujie",
  },
];

const OurTeamPage = () => {
  return (
    <ProfilePageShell
      title="Our Team"
      heroImage={heroImage}
      heroImageAlt="Our Team"
      description="Meet the executives and regional leads who support OHI's institutional delivery across Africa and internationally. The team brings production, communications, and programme management experience to the organization’s work."
      descriptionClassName="text-white"
      primaryCta={{ label: "Contact Us", href: "/contact" }}
      secondaryCta={{ label: "Learn More", href: "/about" }}
      heroBadge={
        <div className="space-y-1">
          <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
            Executive Team
          </p>
          <p className="font-body text-sm leading-6 text-white/80">
            Leadership and operational expertise shaping OHI's direction and delivery.
          </p>
        </div>
      }
    >
      <section className="px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <div className="text-center">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.02em] text-[#2b313a]">
            Executive Team
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.slug} className="flex flex-col items-center text-center">
              <div className="mb-4 w-40 h-40 rounded-full overflow-hidden border-4 border-[#bb7422]/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-[0.05em] text-[#2b313a]">
                {member.name}
              </h3>
              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.02em] text-[#bb7422]">
                {member.title}
              </p>
              <Link
                to={`/team/${member.slug}`}
                className="mt-2 text-xs font-medium uppercase tracking-[0.02em] text-[#2b313a] hover:text-[#bb7422] transition"
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Board of Trustees Section */}
      <section className="w-screen relative left-[calc(-50vw+50%)] bg-[#bb7422] px-4 py-14 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="container mx-auto px-0">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-[0.02em] text-white">
              Board of Trustees
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {boardMembers.map((member) => (
              <div key={member.slug} className="flex flex-col items-center text-center">
                <div className="mb-4 w-40 h-40 rounded-full overflow-hidden border-4 border-white/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-sm font-bold uppercase tracking-[0.05em] text-white">
                  {member.name}
                </h3>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.02em] text-white/80">
                  {member.title}
                </p>
                <Link
                  to={`/team/${member.slug}`}
                  className="mt-2 text-xs font-medium uppercase tracking-[0.02em] text-white hover:text-white/80 transition"
                >
                  View Profile
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ProfilePageShell>
  );
};

export default OurTeamPage;
