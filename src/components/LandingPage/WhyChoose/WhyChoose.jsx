import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import SectionHeader from "../SectionHeader";
import Reveal from "../../ui/reveal";

const WhyChoose = () => {
  const { config } = useLandingPageConfig();
  const whyChoose = config.whyChoose;

  return (
    <section>
      <div className="container">
        <SectionHeader
          title={whyChoose.title}
          description={whyChoose.description}
        />

        <div className="grid grid-cols-1 gap-5 mt-[30px] sm:grid-cols-2 lg:grid-cols-3 lg:gap-[30px] lg:mt-[55px]">
          {whyChoose.cards.map((card, index) => (
            <Reveal key={card.title} delay={0.06 + index * 0.06} distance={34} scale={0.96}>
              <motion.div
                className="rounded-[24px] border border-slate-100 bg-white/60 py-[30px] px-4 sm:px-5 shadow-sm transition duration-300 ease-out"
                whileHover={{ y: -8, scale: 1.01 }}
                transition={{ duration: 0.25 }}
              >
              <div className="flex items-center justify-center">
                <div className="flex h-[84px] w-[84px] items-center justify-center rounded-2xl bg-primaryColor/10 sm:h-[100px] sm:w-[100px]">
                  <card.icon className="h-11 w-11 text-primaryColor sm:h-12 sm:w-12" aria-hidden="true" />
                </div>
              </div>

              <div className="mt-[30px]">
                <h2 className="text-[22px] leading-8 sm:text-[26px] sm:leading-9 text-headingColor font-[700] text-center">
                  {card.title}
                </h2>
                <p className="text-[16px] leading-7 text-textColor font-[400] mt-4 text-center">
                  {card.description}
                </p>

                <Link
                  to={card.href}
                  className="w-[44px] h-[44px] rounded-full border border-solid border-primaryColor/30 mt-[30px] mx-auto flex items-center justify-center group transition duration-300 ease-out hover:-translate-y-1 hover:bg-primaryColor hover:border-primaryColor"
                >
                  <BsArrowRight className="group-hover:text-white w-6 h-5" />
                </Link>
              </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
