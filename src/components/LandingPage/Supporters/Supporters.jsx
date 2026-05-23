import React from "react";
import { Marquee } from "../magicui/marquee";
import ifrcLogo from "../../../assets/img/International_Federation_of_Red_Cross_and_Red_Crescent_Societies_Logo.png";
import corafLogo from "../../../assets/img/logo-coraf.png";
import sunKingLogo from "../../../assets/img/Sun-King_New_Logo-02.png";
import wfpLogo from "../../../assets/img/wfp-logo-extended-blue-en.png";
import ohiLogo from "../../../assets/img/cropped-logo-ohi-blue.png";

const supporterLogos = [
  { name: "OHI", src: ohiLogo },
  { name: "IFRC", src: ifrcLogo },
  { name: "CORAF", src: corafLogo },
  { name: "WFP", src: wfpLogo },
  { name: "Sun King", src: sunKingLogo },
  { name: "OHI Blue", src: ohiLogo },
  { name: "WFP Extended", src: wfpLogo },
  { name: "CORAF", src: corafLogo },
];

const SupporterCard = ({ name, src }) => (
  <div className="flex h-16 w-32 shrink-0 items-center justify-center">
    <img
      src={src}
      alt={name}
      className="max-h-16 w-full object-contain"
    />
  </div>
);

const Supporters = () => {
  return (
    <section className="border-b border-[#f0dfc8] bg-white py-10">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl font-medium tracking-[-0.03em] text-[#2f3135] sm:text-[28px]">
            Our Partners/Supporters
          </h2>
          <p className="mt-2 text-sm text-[#555]">
            The Right Story Mix Makes The Difference
          </p>
        </div>

        <div className="relative mt-8 flex w-full items-center justify-center overflow-hidden">
          <Marquee pauseOnHover className="[--duration:20s]">
            {supporterLogos.map((logo) => (
              <SupporterCard
                key={logo.name}
                name={logo.name}
                src={logo.src}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white"></div>
        </div>
      </div>
    </section>
  );
};

export default Supporters;
