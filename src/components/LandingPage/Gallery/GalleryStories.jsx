import React from "react";
import { motion } from "framer-motion";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import { landingPageDefaults } from "../../../data/landingPageDefaults";
import SectionHeader from "../SectionHeader";
import Reveal from "../../ui/reveal";

const GalleryStories = () => {
  const { config } = useLandingPageConfig();
  const { galleryStories } = config;
  const defaultGalleryStories = landingPageDefaults.galleryStories;

  return (
    <section id="gallery-stories" className="mt-20 bg-slate-50/60 sm:mt-24 lg:mt-28">
      <div className="container">
        <SectionHeader
          title={galleryStories.title}
          description={galleryStories.description}
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal distance={40} scale={0.97}>
              <motion.article
                className="relative overflow-hidden rounded-[30px] min-h-[280px] sm:min-h-[360px] shadow-xl"
                whileHover={{ y: -8 }}
                transition={{ duration: 0.25 }}
              >
              <img
                src={defaultGalleryStories.lead.image}
                alt={galleryStories.lead.title}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.18em] text-emerald-200">
                  {galleryStories.lead.category}
                </p>
                <h3 className="mt-2 text-2xl font-semibold">
                  {galleryStories.lead.title}
                </h3>
                <p className="mt-2 max-w-md text-sm text-white/80">
                  {galleryStories.lead.description}
                </p>
              </div>
              </motion.article>
            </Reveal>

            <Reveal delay={0.08} distance={36} scale={0.97}>
              <motion.article
                className="rounded-[30px] border border-slate-200 bg-white p-6 shadow-sm"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
              <div className="flex h-full flex-col justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
                    {galleryStories.supportIntro.eyebrow}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-[#1f2e2e]">
                    {galleryStories.supportIntro.title}
                  </h3>
                  <p className="mt-4 text__para">
                    {galleryStories.supportIntro.description}
                  </p>
                </div>

                {defaultGalleryStories.supportIntro.image && (
                  <div className="overflow-hidden rounded-[24px] border border-slate-100 shadow-sm">
                    <img
                      src={defaultGalleryStories.supportIntro.image}
                      alt={galleryStories.supportIntro.title}
                      className="h-44 w-full object-cover sm:h-52"
                    />
                  </div>
                )}

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {galleryStories.supportCards.map((item, index) => (
                      <div
                        key={item.title}
                        className="overflow-hidden rounded-2xl border border-slate-100 bg-slate-50 transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_14px_30px_rgba(15,23,42,0.08)]"
                      >
                        <div className="relative h-32">
                          <img
                            src={defaultGalleryStories.supportCards[index]?.image ?? item.image}
                            alt={item.title}
                            className="h-full w-full object-cover"
                          />
                          <div
                            className={`absolute inset-0 bg-gradient-to-t ${item.accent}`}
                          />
                        </div>
                        <div className="p-4">
                          <h4 className="text-base font-semibold text-[#1f2e2e]">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-sm text-slate-500">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.article>
            </Reveal>
          </div>

          <Reveal delay={0.12} distance={40} scale={0.97}>
            <motion.div
              className="rounded-[30px] border border-slate-200 bg-white p-5 sm:p-6 shadow-sm"
              whileHover={{ y: -6 }}
              transition={{ duration: 0.25 }}
            >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
                  Gallery strip
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-[#1f2e2e]">
                  {galleryStories.stripTitle}
                </h3>
              </div>
              <div className="self-start rounded-full bg-primaryColor/10 px-4 py-2 text-sm font-semibold text-primaryColor sm:self-auto">
                {galleryStories.stripBadge}
              </div>
            </div>

            <div className="mt-6 grid gap-4">
              {galleryStories.stripItems.map((item, index) => (
                <article
                  key={item.label}
                  className="group flex flex-col gap-4 rounded-[24px] border border-slate-100 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:flex-row sm:items-center"
                >
                  <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-2xl sm:h-20 sm:w-24">
                    <img
                      src={defaultGalleryStories.stripItems[index]?.image ?? item.image}
                      alt={item.label}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primaryColor">
                      0{index + 1}
                    </p>
                    <h4 className="mt-1 text-lg font-semibold text-[#1f2e2e]">
                      {item.label}
                    </h4>
                    <p className="mt-1 text-sm text-slate-500">
                      {item.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default GalleryStories;
