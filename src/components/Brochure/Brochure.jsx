import React from "react";
import { useEffect, useMemo, useState } from "react";
import { ArrowRight, FileText, Sparkles, Target, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import SectionHeader from "../LandingPage/SectionHeader";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import brochurePage01 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0001.jpg";
import brochurePage02 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0002.jpg";
import brochurePage03 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0003.jpg";
import brochurePage04 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0004.jpg";
import brochurePage05 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0005.jpg";
import brochurePage06 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0006.jpg";
import brochurePage07 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0007.jpg";
import brochurePage08 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0008.jpg";
import brochurePage09 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0009.jpg";
import brochurePage10 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0010.jpg";
import brochurePage11 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0011.jpg";
import brochurePage12 from "../../assets/company-profile-img/OHI Company Profile EN (1)_page-0012.jpg";

const Brochure = () => {
  const slides = useMemo(
    () => [
      { src: brochurePage01, alt: "OHI documentary page 1" },
      { src: brochurePage02, alt: "OHI documentary page 2" },
      { src: brochurePage03, alt: "OHI documentary page 3" },
      { src: brochurePage04, alt: "OHI documentary page 4" },
      { src: brochurePage05, alt: "OHI documentary page 5" },
      { src: brochurePage06, alt: "OHI documentary page 6" },
      { src: brochurePage07, alt: "OHI documentary page 7" },
      { src: brochurePage08, alt: "OHI documentary page 8" },
      { src: brochurePage09, alt: "OHI documentary page 9" },
      { src: brochurePage10, alt: "OHI documentary page 10" },
      { src: brochurePage11, alt: "OHI documentary page 11" },
      { src: brochurePage12, alt: "OHI documentary page 12" },
    ],
    []
  );

  const [loadedCount, setLoadedCount] = useState(0);
  const [isDesktop, setIsDesktop] = useState(false);
  const showSkeleton = loadedCount === 0;

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const updateViewport = () => {
      setIsDesktop(mediaQuery.matches);
    };

    updateViewport();
    mediaQuery.addEventListener("change", updateViewport);

    return () => {
      mediaQuery.removeEventListener("change", updateViewport);
    };
  }, []);

  return (
    <section
      id="brochure"
      className="relative left-1/2 mt-16 w-screen -translate-x-1/2 overflow-hidden shadow-sm"
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.9)_44%,rgba(255,248,237,0.84)_100%)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-5 lg:px-8 lg:py-16 xl:px-12">
        <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
          <div className="max-w-2xl">
            <SectionHeader
              title="Documentary"
              description="Browse the documentary in a page-by-page Swiper deck that presents OHI as a development storytelling partner for institutions, investors, and governments."
              className="mx-0 max-w-xl text-left"
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] border border-[#E5E7EB] bg-white/85 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <Badge className="rounded-full bg-[#0f4c81]/10 text-primaryColor hover:bg-[#0f4c81]/10">
                  <Target className="mr-2 h-3.5 w-3.5" />
                  Strategic overview
                </Badge>
                <p className="mt-4 text-sm leading-7 text-textColor">
                  The profile is built to explain who OHI is, what the team delivers, and why the work matters for investment-grade storytelling and development communication.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E5E7EB] bg-white/85 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <Badge className="rounded-full bg-[#f97316]/10 text-[#f97316] hover:bg-[#f97316]/10">
                  <FileText className="mr-2 h-3.5 w-3.5" />
                  Page-by-page
                </Badge>
                <p className="mt-4 text-sm leading-7 text-textColor">
                  The deck on the right lets visitors browse the brochure in a focused, visual sequence.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E5E7EB] bg-white/85 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <Badge className="rounded-full bg-[#16a34a]/10 text-[#16a34a] hover:bg-[#16a34a]/10">
                  <Users className="mr-2 h-3.5 w-3.5" />
                  Built for stakeholders
                </Badge>
                <p className="mt-4 text-sm leading-7 text-textColor">
                  The layout helps donors, partners, and teams scan the story quickly before diving into the pages.
                </p>
              </div>

              <div className="rounded-[24px] border border-[#E5E7EB] bg-white/85 p-5 shadow-[0_12px_28px_rgba(15,23,42,0.06)] backdrop-blur-sm">
                <Badge className="rounded-full bg-[#111827]/10 text-[#111827] hover:bg-[#111827]/10">
                  <Sparkles className="mr-2 h-3.5 w-3.5" />
                  Easy to explore
                </Badge>
                <p className="mt-4 text-sm leading-7 text-textColor">
                  Start with the summary on the left, then use the Swiper on the right to browse the full brochure.
                </p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild className="hero_btn1 !mt-0 inline-flex items-center gap-2">
                <Link to="/contact">
                  Contact OHI
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[380px]">
              {showSkeleton ? (
                <div
                  className="absolute inset-0 z-10 flex h-[440px] w-[300px] flex-col overflow-hidden rounded-3xl border border-emerald-900/10 bg-white/70 shadow-[0_25px_45px_rgba(15,23,42,0.2)]"
                  aria-busy="true"
                  aria-label="Loading brochure previews"
                >
                  <div className="h-full w-full animate-pulse bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50" />
                </div>
              ) : null}

              <Swiper
                key={isDesktop ? "desktop" : "mobile"}
                effect="cards"
                grabCursor
                loop
                autoplay={
                  isDesktop
                    ? {
                        delay: 2200,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                      }
                    : false
                }
                modules={[Autoplay, EffectCards]}
                className={`mySwiper ${showSkeleton ? "opacity-0" : "opacity-100"} transition-opacity duration-300`}
                style={{ width: "300px", height: "440px" }}
              >
                {slides.map((slide) => (
                  <SwiperSlide
                    key={slide.src}
                    className="flex items-center justify-center overflow-hidden rounded-3xl bg-slate-900 text-white shadow-[0_25px_45px_rgba(15,23,42,0.35)]"
                  >
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      className="h-full w-full rounded-3xl object-cover"
                      onLoad={() => setLoadedCount((count) => count + 1)}
                      loading="lazy"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brochure;
