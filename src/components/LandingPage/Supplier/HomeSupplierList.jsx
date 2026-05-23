import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Marquee } from "../magicui/marquee";
import Reveal from "../../ui/reveal";
import ifrcLogo from "../../../assets/img/International_Federation_of_Red_Cross_and_Red_Crescent_Societies_Logo.png";
import corafLogo from "../../../assets/img/logo-coraf.png";
import sunKingLogo from "../../../assets/img/Sun-King_New_Logo-02.png";
import wfpLogo from "../../../assets/img/wfp-logo-extended-blue-en.png";

const clientLogos = [
  {
    name: "World Food Programme",
    image: wfpLogo,
  },
  {
    name: "Sun King",
    image: sunKingLogo,
  },
  {
    name: "CORAF",
    image: corafLogo,
  },
  {
    name: "International Federation of Red Cross and Red Crescent Societies",
    image: ifrcLogo,
  },
];

const HomeSupplierList = () => {
  return (
    <section
      id="clients"
      className="py-16 sm:py-20 bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_34%),linear-gradient(180deg,_#f8fafc_0%,_#ffffff_100%)]"
    >
      <div className="container mx-auto px-4 sm:px-5 lg:px-20">
        <SectionHeader
          title="Trusted Partners"
          description="OHI partners with institutions and brands that need stories with credibility, clarity and measurable impact."
          className="max-w-4xl"
        />

        <Reveal className="relative mt-12 overflow-hidden rounded-[32px] border border-[#D9DCE2] bg-white py-6 shadow-sm" distance={36} scale={0.98}>
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

          <Marquee pauseOnHover className="[--duration:28s] px-0 py-0">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                className="flex h-28 w-56 items-center justify-center rounded-[24px] border border-[#E5E7EB] bg-[#F8FAFC] px-6 shadow-[0_14px_40px_rgba(15,23,42,0.06)]"
                initial={{ opacity: 0, y: 22, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  className="max-h-12 w-full object-contain"
                />
              </motion.div>
            ))}
          </Marquee>
        </Reveal>
      </div>
    </section>
  );
};

export default HomeSupplierList;
