import React from "react";
import { motion } from "framer-motion";
import { AvatarCirclesDemo } from "../Avatar/Avatar";
import { Link } from "react-router-dom";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import { landingPageDefaults } from "../../../data/landingPageDefaults";

const Hero = () => {
  const { config } = useLandingPageConfig();
  const hero = config.hero;
  const heroImages = hero?.images ?? landingPageDefaults.hero.images;

  const resolveCtaHref = (href, label, fallback) => {
    if (typeof href === "string") {
      const trimmed = href.trim();
      if (trimmed === "/#contact" || trimmed === "#contact") {
        return "/contact";
      }

      if (trimmed === "/#about" || trimmed === "#about") {
        return "/about";
      }

      if (trimmed && trimmed !== "#") {
        return trimmed;
      }
    }

    const normalizedLabel = (label || "").toLowerCase();
    if (normalizedLabel.includes("contact")) {
      return "/contact";
    }

    if (normalizedLabel.includes("story")) {
      return "/about";
    }

    return fallback;
  };

  const resolveHeroImage = (src, fallback) => src || fallback;
  const handleHeroImageError = (fallback) => (event) => {
    if (event.currentTarget.src !== fallback) {
      event.currentTarget.src = fallback;
    }
  };

  const heroImage1 = resolveHeroImage(
    heroImages.hero1,
    landingPageDefaults.hero.images.hero1
  );
  const heroImage2 = resolveHeroImage(
    heroImages.hero2,
    landingPageDefaults.hero.images.hero2
  );
  const heroImage3 = resolveHeroImage(
    heroImages.hero3,
    landingPageDefaults.hero.images.hero3
  );
  const heroImage4 = resolveHeroImage(
    heroImages.hero4,
    landingPageDefaults.hero.images.hero4
  );
  const heroImage5 = resolveHeroImage(
    heroImages.hero5,
    landingPageDefaults.hero.images.hero5
  );

  return (
    <section id="home" className="hero__section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-10 lg:flex-row lg:items-center lg:gap-[90px]">
          <motion.div
            initial={{ opacity: 0, x: -64 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="w-full"
          >
            <div className="w-full lg:w-[570px]">
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl font-bold text-gray-800 leading-[3rem] sm:text-5xl lg:text-6xl"
              >
                <p>{hero.titleLine1}</p>
                <p>{hero.titleLine2}</p>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                className="text__para"
              >
                {hero.description}
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="flex w-full flex-col gap-3 pt-8 items-stretch sm:flex-row sm:items-center sm:pt-6"
              >
                <Link
                  to={resolveCtaHref(
                    hero.primaryCtaHref,
                    hero.primaryCtaLabel,
                    "/company-profile"
                  )}
                  className="hero_btn1 !mt-0 inline-flex w-full items-center justify-center transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.15)] sm:w-auto"
                >
                  {hero.primaryCtaLabel}
                </Link>
                <Link
                  to={resolveCtaHref(
                    hero.secondaryCtaHref,
                    hero.secondaryCtaLabel,
                    "/about"
                  )}
                  className="hero_btn2 !mt-0 inline-flex w-full items-center justify-center transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(15,23,42,0.08)] sm:w-auto"
                >
                  {hero.secondaryCtaLabel}
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
                className="pt-[30px]"
              >
                <AvatarCirclesDemo />
              </motion.div>
            </div>

            <div className="mt-[30px] flex flex-col items-start gap-5 lg:mt-[20px] lg:flex-row lg:items-center lg:gap-[30px]">
              {hero.stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 24, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                  className="flex flex-col gap-2"
                >
                  <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    {stat.value}
                  </h2>
                  <span
                    className="h-2 rounded-full block mt-[-14px]"
                    style={{ backgroundColor: stat.accent, width: stat.barWidth }}
                  />
                  <p className="text__para">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 72, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.08 }}
            className="relative grid w-full max-w-[720px] grid-cols-3 gap-2 overflow-visible pt-6 sm:gap-3 sm:pt-0 lg:flex lg:min-h-[480px] lg:max-w-none lg:flex-row lg:items-center lg:justify-center lg:gap-[12px]"
          >
            <motion.div
              initial={{ y: 24, rotate: -2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 col-span-1 h-[220px] overflow-hidden rounded-2xl sm:h-[280px] lg:h-[480px] lg:w-[31%]"
            >
              <img
                src={heroImage1}
                alt="OHI visual story 1"
                onError={handleHeroImageError(landingPageDefaults.hero.images.hero1)}
                className="h-full w-full object-cover transition duration-500 ease-out hover:scale-[1.02]"
              />
            </motion.div>
            <div className="relative z-10 col-span-1 -mt-7 flex flex-col gap-2 overflow-hidden rounded-2xl sm:-mt-8 sm:gap-3 lg:mt-[30px] lg:w-[36%] lg:gap-[20px]">
              <motion.img
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                src={heroImage2}
                alt="OHI visual story 2"
                onError={handleHeroImageError(landingPageDefaults.hero.images.hero2)}
                className="h-[100px] w-full object-cover transition duration-500 ease-out hover:scale-[1.02] sm:h-[145px] lg:h-[250px]"
              />
              <motion.img
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.36, ease: [0.22, 1, 0.36, 1] }}
                src={heroImage3}
                alt="OHI visual story 3"
                onError={handleHeroImageError(landingPageDefaults.hero.images.hero3)}
                className="h-[76px] w-full object-cover transition duration-500 ease-out hover:scale-[1.02] sm:h-[108px] lg:h-[150px]"
              />
              <motion.img
                initial={{ y: 36, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.44, ease: [0.22, 1, 0.36, 1] }}
                src={heroImage4}
                alt="OHI visual story 4"
                onError={handleHeroImageError(landingPageDefaults.hero.images.hero4)}
                className="h-[76px] w-full object-cover transition duration-500 ease-out hover:scale-[1.02] sm:h-[108px] lg:h-[150px]"
              />
            </div>
            <motion.div
              initial={{ y: 24, rotate: 2 }}
              animate={{ y: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 col-span-1 h-[220px] overflow-hidden rounded-2xl sm:h-[280px] lg:h-[480px] lg:w-[31%]"
            >
              <img
                src={heroImage5}
                alt="OHI visual story 5"
                onError={handleHeroImageError(landingPageDefaults.hero.images.hero5)}
                className="h-full w-full object-cover transition duration-500 ease-out hover:scale-[1.02]"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
