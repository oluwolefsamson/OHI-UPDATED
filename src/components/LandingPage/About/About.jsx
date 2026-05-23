import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Reveal from "../../ui/reveal";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";

const About = () => {
  const { config } = useLandingPageConfig();
  const about = config.about;

  return (
    <section id="about">
      <div className="container">
        <div className="flex flex-col justify-between gap-10 lg:flex-row lg:gap-[130px] xl:gap-0">
          <Reveal className="relative z-10 w-full flex justify-start mt-[30px] lg:mt-0 lg:flex-1 xl:w-[750px]" x={-64} distance={36}>
            <motion.img
              src={about.image}
              className="w-full max-w-[560px] rounded lg:w-3/4"
              alt="Olympian House International"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.45 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[20px] right-0 z-20 w-[140px] bg-gray-200 p-2 pb-3 rounded-[10px] md:bottom-[60px] md:right-3 lg:w-[240px] lg:bottom-[100px] lg:pt-4 lg:px-4 lg:pb-[26px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    {about.overlay.since}
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                    {about.overlay.tagline}
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={about.overlay.icon} alt="" />
                </span>
              </div>

              <div className="w-[65px] lg:w-[56px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[9px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                {about.overlay.trustLabel}
              </div>

              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                <img src={about.overlay.avatar} alt="" className="h-[50px] rounded-full" />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                  {about.overlay.role}
                </h4>
              </div>
            </motion.div>
          </Reveal>

          <Reveal className="w-full order-1 lg:w-1/2 lg:order-2 xl:w-[670px]" x={64} distance={36}>
            <h2 className="heading">{about.title}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text__para">
                {paragraph}
              </p>
            ))}

            <Link to="/about">
              <button className="btn transition duration-300 ease-out hover:-translate-y-1">
                Read the full story
              </button>
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default About;
