import React from "react";
import { Link } from "react-router-dom";
import Reveal from "../../ui/reveal";
import profileHeroCity from "../../../assets/images/profile-hero-city.jpg";

export default function ProfilePageShell({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
  heroBadge,
  heroBadgeClassName = "bottom-6 right-6 hidden max-w-[280px] lg:block",
  heroVariant = "default",
  heroImage = profileHeroCity,
  heroImageAlt = "OHI profile hero",
  heroContentClassName = "",
  titleClassName = "",
  descriptionClassName = "text-white/78",
  children,
}) {
  return (
    <>
      <section className="hero__section pt-[18px]">
        <div
          className={`relative w-full overflow-hidden rounded-none ${
            heroVariant === "minimal"
              ? "bg-[#091826]"
              : "border-y border-black/10 bg-[#091826] shadow-[0_28px_80px_rgba(15,23,42,0.24)]"
          }`}
        >
          {heroVariant === "minimal" ? (
            <>
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="absolute inset-0 h-full w-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.18)_0%,rgba(8,10,15,0.58)_56%,rgba(8,10,15,0.84)_100%)]" />
              <div className="absolute inset-x-0 top-0 h-2 bg-[#f59e0b]" />
              <div className="relative container mx-auto min-h-[440px] px-4 pb-20 pt-28 sm:min-h-[500px] sm:px-5 lg:min-h-[540px] lg:px-20 lg:pb-28 lg:pt-32">
                <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
                  <div className={`max-w-4xl ${heroContentClassName}`.trim()}>
                    <Reveal delay={0.04}>
                      <p className="font-body text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
                        {eyebrow || "OHI profile"}
                      </p>
                    </Reveal>
                    <Reveal as="h1" delay={0.08}>
                      <span
                        className={`font-display mt-3 inline-block border-b-[10px] border-[#f59e0b] pb-3 text-4xl font-semibold leading-none text-white sm:text-5xl lg:text-6xl ${titleClassName}`.trim()}
                      >
                        {title}
                      </span>
                    </Reveal>
                    {description ? (
                      <Reveal delay={0.14}>
                        <p className={`font-body mt-4 max-w-2xl text-sm leading-7 sm:text-base ${descriptionClassName}`.trim()}>
                          {description}
                        </p>
                      </Reveal>
                    ) : null}
                    {(primaryCta || secondaryCta) ? (
                      <div className="mt-6 flex flex-wrap items-center gap-3">
                        {primaryCta ? (
                          <Reveal delay={0.18} className="inline-flex">
                            <Link to={primaryCta.href}>
                              <button className="hero_btn1 !mt-0 inline-flex items-center gap-2 bg-[#ff8f1f] text-white shadow-[0_18px_42px_rgba(255,143,31,0.28)] transition duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110">
                                {primaryCta.label}
                              </button>
                            </Link>
                          </Reveal>
                        ) : null}
                        {secondaryCta ? (
                          <Reveal delay={0.22} className="inline-flex">
                            <Link to={secondaryCta.href}>
                              <button className="hero_btn2 !mt-0 inline-flex items-center gap-2 border-white/20 bg-white text-[#0b3550] shadow-[0_18px_42px_rgba(255,255,255,0.16)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/95">
                                {secondaryCta.label}
                              </button>
                            </Link>
                          </Reveal>
                        ) : null}
                      </div>
                    ) : null}
                  </div>

                  <div className="lg:justify-self-end">
                    <Reveal
                      className="w-full max-w-[420px] rounded-[28px] border border-white/18 bg-white/12 p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-md sm:p-6"
                      delay={0.18}
                    >
                      <div className="space-y-1">
                        <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                          OHI profile
                        </p>
                        <p className="font-display text-2xl font-semibold tracking-[-0.03em]">
                          {title}
                        </p>
                        {description ? (
                          <p className="font-body mt-3 text-sm leading-6 text-white/80">
                            {description}
                          </p>
                        ) : null}
                      </div>
                    </Reveal>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <img
                src={heroImage}
                alt={heroImageAlt}
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,10,15,0.88)_0%,rgba(8,10,15,0.62)_46%,rgba(8,10,15,0.28)_100%)]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.12),transparent_30%)]" />
              <div className="absolute inset-x-0 top-0 h-2 bg-[#f59e0b]" />

              <div className="relative z-10 flex min-h-[460px] flex-col justify-center py-8 lg:min-h-[540px] lg:py-10">
                <div className="container">
                  <div className="grid gap-8 lg:grid-cols-[1.06fr_0.94fr] lg:items-end">
                    <div className="max-w-2xl">
                    {eyebrow ? (
                      <Reveal delay={0.04}>
                        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.35em] text-white/80">
                          {eyebrow}
                        </p>
                      </Reveal>
                    ) : null}
                    <Reveal delay={0.08}>
                      <h1
                        className={`font-display mt-3 max-w-xl text-3xl font-semibold uppercase leading-[0.95] tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl xl:text-[4rem] ${titleClassName}`.trim()}
                      >
                        {title}
                      </h1>
                    </Reveal>
                    <Reveal delay={0.14}>
                      <p className={`font-body mt-4 max-w-lg text-sm leading-6 sm:text-base ${descriptionClassName}`.trim()}>
                        {description}
                      </p>
                    </Reveal>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {primaryCta ? (
                        <Reveal delay={0.16} className="inline-flex">
                          <Link to={primaryCta.href}>
                            <button className="hero_btn1 !mt-0 inline-flex items-center gap-2 bg-[#ff8f1f] text-white shadow-[0_18px_42px_rgba(255,143,31,0.28)] transition duration-300 ease-out hover:-translate-y-0.5 hover:brightness-110">
                              {primaryCta.label}
                            </button>
                          </Link>
                        </Reveal>
                      ) : null}
                      {secondaryCta ? (
                        <Reveal delay={0.22} className="inline-flex">
                          <Link to={secondaryCta.href}>
                            <button className="hero_btn2 !mt-0 inline-flex items-center gap-2 border-white/20 bg-white text-[#0b3550] shadow-[0_18px_42px_rgba(255,255,255,0.16)] transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/95">
                              {secondaryCta.label}
                            </button>
                          </Link>
                        </Reveal>
                        ) : null}
                      </div>
                    </div>

                    <div className="lg:justify-self-end">
                      <Reveal
                        className={`w-full max-w-[420px] rounded-[28px] border border-white/18 bg-white/12 p-5 text-white shadow-[0_24px_60px_rgba(0,0,0,0.22)] backdrop-blur-md ${heroBadgeClassName}`.trim()}
                        delay={0.28}
                      >
                        {heroBadge ? (
                          <div className="space-y-1">{heroBadge}</div>
                        ) : (
                          <div className="space-y-1">
                            <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                              OHI profile
                            </p>
                            <p className="font-display text-2xl font-semibold tracking-[-0.03em]">
                              {title}
                            </p>
                            {description ? (
                              <p className="font-body mt-3 text-sm leading-6 text-white/80">
                                {description}
                              </p>
                            ) : null}
                          </div>
                        )}
                      </Reveal>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </section>

      <div className="bg-[linear-gradient(180deg,#fffaf0_0%,#fcf6ea_28%,#f7f0e2_100%)]">
        <div className="container mx-auto px-4 pb-20 pt-8 sm:px-5 lg:px-20">
          <div className="space-y-16">{children}</div>
        </div>
      </div>
    </>
  );
}
