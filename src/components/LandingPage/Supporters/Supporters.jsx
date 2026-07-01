import React from "react";
import ifrcLogo from "../../../assets/img/International_Federation_of_Red_Cross_and_Red_Crescent_Societies_Logo.png";
import corafLogo from "../../../assets/img/logo-coraf.png";
import sunKingLogo from "../../../assets/img/Sun-King_New_Logo-02.png";
import wfpLogo from "../../../assets/img/wfp-logo-extended-blue-en.png";

const allLogos = [
  { name: "IFRC", src: ifrcLogo },
  { name: "CORAF", src: corafLogo },
  { name: "Sun King", src: sunKingLogo },
  { name: "WFP", src: wfpLogo },
];

const categories = [
  { label: "Consumer & Corporate Clients", logos: allLogos },
  { label: "Social Impact / Sustainability Clients", logos: allLogos },
  { label: "Public Sector Clients", logos: allLogos },
];

const LogoCard = ({ name, src }) => (
  <div className="mx-1 flex h-[80px] w-28 shrink-0 items-center justify-center bg-[#f3f4f6] p-3 transition duration-300 hover:bg-[#e5e7eb] sm:mx-2 sm:h-[130px] sm:w-44 sm:p-5">
    <img
      src={src}
      alt={name}
      className="max-h-8 w-full object-contain grayscale opacity-70 transition duration-300 hover:grayscale-0 hover:opacity-100 sm:max-h-14"
    />
  </div>
);

const LogoMarquee = ({ logos }) => {
  const repeated = [...logos, ...logos, ...logos, ...logos, ...logos];
  return (
    <div className="group flex overflow-hidden [--duration:40s] [--gap:0.5rem]">
      {[0, 1].map((i) => (
        <div
          key={i}
          className="flex shrink-0 animate-marquee [gap:var(--gap)] group-hover:[animation-play-state:paused]"
        >
          {repeated.map((logo, index) => (
            <LogoCard key={`${i}-${logo.name}-${index}`} name={logo.name} src={logo.src} />
          ))}
        </div>
      ))}
    </div>
  );
};

const CategorySection = ({ label, logos }) => (
  <div className="mb-14">
    <div className="mb-7 flex items-center gap-5">
      <h2 className="shrink-0 text-xl font-bold text-[#0a1628]">{label}</h2>
      <div className="h-[2px] flex-1 bg-[#f59d21]" />
    </div>
    <div className="relative overflow-hidden">
      <LogoMarquee logos={logos} />

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent" />
    </div>
  </div>
);

const Supporters = () => {
  return (
    <section className="my-10 py-16 bg-white">
      <div className="container">
        {categories.map((cat) => (
          <CategorySection key={cat.label} label={cat.label} logos={cat.logos} />
        ))}
      </div>
    </section>
  );
};

export default Supporters;
