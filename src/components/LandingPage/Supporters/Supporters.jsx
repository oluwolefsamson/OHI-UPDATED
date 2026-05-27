import React from "react";
import ifrcLogo from "../../../assets/img/International_Federation_of_Red_Cross_and_Red_Crescent_Societies_Logo.png";
import corafLogo from "../../../assets/img/logo-coraf.png";
import sunKingLogo from "../../../assets/img/Sun-King_New_Logo-02.png";
import wfpLogo from "../../../assets/img/wfp-logo-extended-blue-en.png";
import UnderlinedHeading from "../UnderlinedHeading";
import { cn } from "../../../lib/utils";

const supporterLogos = [
  { name: "IFRC", src: ifrcLogo },
  { name: "CORAF", src: corafLogo },
  { name: "WFP", src: wfpLogo },
  { name: "Sun King", src: sunKingLogo },
  { name: "WFP Extended", src: wfpLogo },
  { name: "CORAF", src: corafLogo },
];

const SupporterCard = ({ name, src }) => (
  <div className="group flex h-24 w-44 shrink-0 items-center justify-center border border-[#ead9c0] bg-[linear-gradient(180deg,#fffdf8_0%,#fff6ea_100%)] px-6 shadow-[0_12px_30px_rgba(15,23,42,0.06)] transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_42px_rgba(15,23,42,0.1)]">
    <img
      src={src}
      alt={name}
      className="max-h-12 w-full object-contain opacity-90 transition duration-300 group-hover:opacity-100"
    />
  </div>
);

const LocalMarquee = ({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}) => {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
              "animate-marquee flex-row": !vertical,
              "animate-marquee-vertical flex-col": vertical,
              "group-hover:[animation-play-state:paused]": pauseOnHover,
              "[animation-direction:reverse]": reverse,
            })}
          >
            {children}
          </div>
        ))}
    </div>
  );
};

const Supporters = () => {
  return (
    <section className="relative my-14 overflow-hidden border-b border-[#a8611a] bg-[#bb7422] py-14">
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.32em] text-white/80">
            Trusted network
          </p>
          <UnderlinedHeading
            as="h2"
            className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-[38px]"
            textClassName="font-display"
            textColorClassName="text-white"
            showBorder={false}
            patternClassName="hidden"
          >
            Our Partners / Supporters
          </UnderlinedHeading>
          <p className="font-body mt-4 text-sm leading-7 text-white/85 sm:text-base">
            Organizations and institutions that help OHI amplify credible stories, build trust, and extend impact.
          </p>
        </div>

        <div className="relative mt-10 flex w-full items-center justify-center overflow-hidden rounded-[32px] bg-white/12 py-6">
          <LocalMarquee pauseOnHover className="[--duration:24s] px-2 py-2">
            {supporterLogos.map((logo) => (
              <SupporterCard
                key={logo.name}
                name={logo.name}
                src={logo.src}
              />
            ))}
          </LocalMarquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#bb7422] to-transparent sm:w-36" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#bb7422] to-transparent sm:w-36" />
        </div>
      </div>
    </section>
  );
};

export default Supporters;
