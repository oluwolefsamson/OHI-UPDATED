import React from "react";
import { Marquee } from "../magicui/marquee";
import ifrcLogo from "../../../assets/img/International_Federation_of_Red_Cross_and_Red_Crescent_Societies_Logo.png";
import corafLogo from "../../../assets/img/logo-coraf.png";
import sunKingLogo from "../../../assets/img/Sun-King_New_Logo-02.png";
import wfpLogo from "../../../assets/img/wfp-logo-extended-blue-en.png";

const supporterLogos = [
  { name: "IFRC", src: ifrcLogo },
  { name: "CORAF", src: corafLogo },
  { name: "WFP", src: wfpLogo },
  { name: "Sun King", src: sunKingLogo },
  { name: "WFP Extended", src: wfpLogo },
  { name: "CORAF", src: corafLogo },
];

const SupporterCard = ({ name, src }) => (
  <div className="group flex h-24 w-44 shrink-0 items-center justify-center rounded-[26px] border border-[#ead9c0] bg-[linear-gradient(180deg,#fffdf8_0%,#fff6ea_100%)] px-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(15,23,42,0.1)]">
    <img
      src={src}
      alt={name}
      className="max-h-12 w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100"
    />
  </div>
);

const Supporters = () => {
  return (
    <section className="relative overflow-hidden border-b border-[#edd9bd] bg-[linear-gradient(180deg,#fffdf8_0%,#fff8ef_100%)] py-14">
      <div className="absolute inset-x-0 top-0 h-24 bg-[radial-gradient(circle_at_top,rgba(233,122,47,0.16),transparent_70%)]" />
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-[#b16a18]">
            Trusted network
          </p>
          <h2 className="font-display mt-3 text-3xl font-semibold tracking-[-0.04em] text-[#173145] sm:text-[38px]">
            Our Partners / Supporters
          </h2>
          <p className="font-body mt-4 text-sm leading-7 text-[#5a5f66] sm:text-base">
            Organizations and institutions that help OHI amplify credible stories, build trust, and extend impact.
          </p>
        </div>

        <div className="relative mt-10 flex w-full items-center justify-center overflow-hidden rounded-[32px] border border-[#ead9c0] bg-white/70 py-6 shadow-[0_14px_38px_rgba(15,23,42,0.06)] backdrop-blur-sm">
          <Marquee pauseOnHover className="[--duration:24s] px-2 py-2">
            {supporterLogos.map((logo) => (
              <SupporterCard
                key={logo.name}
                name={logo.name}
                src={logo.src}
              />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fffdf8] to-transparent sm:w-36" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fffdf8] to-transparent sm:w-36" />
        </div>
      </div>
    </section>
  );
};

export default Supporters;
