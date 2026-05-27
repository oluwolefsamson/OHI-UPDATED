import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import featureImg from "../../../assets/images/transform.jpeg";
import videoIcon from "../../../assets/img/cropped-logo-ohi-blue.png";
import avatarIcon from "../../../assets/img/WFP-03555-150x150.jpg";
import Reveal from "../../ui/reveal";
import UnderlinedHeading from "../UnderlinedHeading";

const Feature = () => {
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row">
          <Reveal className="w-full lg:flex-1 xl:w-[670px]" x={-60} distance={34}>
            <UnderlinedHeading as="h2" className="heading">
              We transform African projects into stories that inspire action.
            </UnderlinedHeading>
            <ul className="pl-4">
              <li className="text__para">
                1. Demonstrate impact and transparency with credible visuals.
              </li>
              <li className="text__para">
                2. Attract new partners and financing with persuasive narratives.
              </li>
              <li className="text__para">
                3. Strengthen stakeholder alignment and community trust.
              </li>
            </ul>
            <Link to="/portfolio">
              <button className="btn transition duration-300 ease-out hover:-translate-y-1">
                View the portfolio
              </button>
            </Link>
          </Reveal>

          <Reveal className="relative z-10 w-full flex justify-end mt-[20px] lg:mt-0 lg:flex-1 xl:w-[770px]" x={60} distance={34}>
            <motion.img
              src={featureImg}
              className="w-full max-w-[560px] rounded-xl lg:w-3/4"
              alt="OHI feature"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.45 }}
            />

            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-[18px] left-0 z-20 w-[140px] rounded-[10px] bg-gray-200 p-2 pb-3 md:bottom-[70px] md:left-3 lg:w-[240px] lg:pt-4 lg:px-4 lg:pb-[26px]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[6px] lg:gap-3">
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                    Today
                  </p>
                  <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                    Strategic visibility
                  </p>
                </div>
                <span className="w-5 h-5 lg:w-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                  <img src={videoIcon} alt="Video Icon" />
                </span>
              </div>

              <div className="mt-2 w-[72px] rounded-full bg-[#CCF0F3] px-2 py-1 text-[8px] leading-[8px] font-[500] text-irisBlueColor lg:mt-4 lg:w-[96px] lg:px-[10px] lg:py-[6px] lg:text-[9px] lg:leading-4">
                Verified
              </div>

              <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px] ">
                <img
                  src={avatarIcon}
                  alt="OHI team"
                  className="h-[50px] rounded-full"
                />
                <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                  Impact Storytelling
                </h4>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Feature;
