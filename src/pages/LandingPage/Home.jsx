import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { useLandingPageConfig } from "../../context/LandingPageConfigContext";
import { landingPageDefaults } from "../../data/landingPageDefaults";
import { Badge } from "../../components/ui/badge";
import Reveal from "../../components/ui/reveal";
import { Marquee } from "../../components/LandingPage/magicui/marquee";

function Home() {
  const { config } = useLandingPageConfig();
  const hero = config.hero ?? landingPageDefaults.hero;
  const about = config.about ?? landingPageDefaults.about;
  const gallery = config.gallery ?? landingPageDefaults.gallery;
  const heroImages = hero.images ?? landingPageDefaults.hero.images;
  const heroSlides = hero.slides ?? landingPageDefaults.hero.slides;

  const [activeSlide, setActiveSlide] = useState(0);
  const heroFrames = heroSlides;
  const cardItems = [
    {
      title: "Vision Statement",
      image: about.image,
      description:
        "To shape clear, credible, and visually strong communication that gives OHI and its partners a more visible public presence.",
      href: "/about",
    },
    {
      title: "Our Target Audience",
      image: gallery.items?.[0]?.image ?? about.image,
      description:
        "OHI speaks to institutions, partners, communities, and development teams who need communication that feels trustworthy and precise.",
      href: "/who-we-serve",
    },
    {
      title: "Objectives & Goals",
      image: gallery.items?.[1]?.image ?? about.image,
      description:
        "The homepage and the wider site are built to surface impact, show continuity, and make the editorial journey easy to follow.",
      href: "/company-profile",
    },
    {
      title: "The Voice of the Dreamer",
      image: gallery.items?.[2]?.image ?? about.image,
      description:
        "A softer story layer that keeps the OHI message human, reflective, and rooted in the people the work is for.",
      href: "/impact",
    },
  ];
  const heritageItems = gallery.items?.slice(4, 12) ?? [];
  const storytellers = [
    {
      name: "Collins Nkom",
      role: "African storyteller",
      image: heroImages.hero1,
    },
    {
      name: "Svenja Kruger",
      role: "African storyteller",
      image: heroImages.hero2,
    },
    {
      name: "Tiger Firehouse",
      role: "African storyteller",
      image: heroImages.hero3,
    },
    {
      name: "Yared Zeleke",
      role: "African storyteller",
      image: heroImages.hero5,
    },
  ];
  const newsCards = [
    {
      title: "OHI Launches Virtual Tour of Nigerian Heritage Sites on Google Arts & Culture Nigeria",
      image: gallery.items?.[0]?.image ?? heroImages.hero1,
      date: "May 2026",
    },
    {
      title: "OHI Equips Media Professionals with Documentary Storytelling Skills",
      image: gallery.items?.[1]?.image ?? heroImages.hero2,
      date: "May 2026",
    },
    {
      title: "OHI Reports on UNESCO WHV 2024: A Journey of Conservation, Heritage and Hope",
      image: gallery.items?.[2]?.image ?? heroImages.hero3,
      date: "May 2026",
    },
  ];

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroFrames.length);
    }, 6500);

    return () => window.clearInterval(timer);
  }, [heroFrames.length]);

  const currentSlide = heroFrames[activeSlide];

  return (
    <div className="overflow-hidden bg-[linear-gradient(180deg,#fffaf0_0%,#fcf6ea_28%,#f7f0e2_100%)] text-[#173145]">
      <section className="relative min-h-[calc(100vh-140px)] overflow-hidden bg-[#091826] py-0 text-white">
        <div className="absolute inset-0">
          <img
            src={currentSlide.image}
            alt={currentSlide.title}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.38)_0%,rgba(8,10,15,0.56)_42%,rgba(8,10,15,0.82)_100%)]" />
        </div>

        <div className="relative mx-auto flex min-h-[calc(100vh-140px)] max-w-7xl flex-col items-center justify-center px-5 py-10">
          <Reveal className="max-w-5xl text-center">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.34em] text-white/78">
              {currentSlide.kicker}
            </p>
            <h1 className="font-display mt-4 text-4xl font-semibold leading-[1.05] text-white sm:text-5xl md:text-6xl lg:text-[64px]">
              {currentSlide.title}
            </h1>
            <p className="font-body mx-auto mt-4 max-w-4xl text-lg leading-8 font-medium text-white/92 sm:text-xl">
              {currentSlide.subtitle}
            </p>
            <p className="font-body mx-auto mt-3 max-w-4xl text-base leading-7 text-white/84 sm:text-lg">
              {currentSlide.description}
            </p>

            <div className="font-body mt-8 inline-flex items-center gap-2 text-[18px] font-medium text-white/92">
              <span>Discover More</span>
              <ChevronDown className="h-6 w-6" />
            </div>
          </Reveal>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-2">
            {heroFrames.map((slide, index) => (
              <button
                key={`${slide.kicker}-${index}`}
                type="button"
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-3 w-3 rounded-full transition ${
                  index === activeSlide ? "bg-white" : "bg-white/35 hover:bg-white/60"
                }`}
              />
            ))}
          </div>
        </div>

      </section>

      <section id="about" className="bg-white py-16 sm:py-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_28px_rgba(15,23,42,0.08)]">
              <img
                src={about.image}
                alt="OHI team"
                className="h-[240px] w-full object-cover sm:h-[300px] lg:h-[260px]"
              />
            </Reveal>

            <Reveal className="max-w-2xl space-y-4">
              <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#2e3135] sm:text-3xl lg:text-[34px]">
                Olympian House International
              </h2>
              <p className="text-sm leading-6 text-[#4e4e4e] sm:text-[15px]">
                Olympian House International (OHI) is a premier organisation founded on
                the ideas of discovering and promoting young, talented, under-served
                storytellers and documentary producers to global prominence. OHI
                strategically plans to inspire the creation and expansion of businesses
                in the areas of filmmaking and documentary across African communities to
                become social development influencers and catalysts to economic growth
                and sustainability in their local communities.
              </p>
              <Link
                to="/about"
                className="inline-flex h-8 items-center justify-center bg-[#e97a2f] px-4 text-xs font-semibold text-white transition hover:bg-[#d96f1f]"
              >
                Learn More
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#d69547_0%,#cf8a3d_100%)] py-14 sm:py-16">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
              The OHI you don&apos;t see
            </h2>
            <p className="mt-2 text-sm font-medium text-white/92">
              We are promoting good content and showcasing African heritage
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {cardItems.map((item) => (
              <Reveal key={item.title}>
                <article className="flex h-full min-h-[420px] flex-col overflow-hidden bg-white shadow-[0_12px_26px_rgba(15,23,42,0.14)]">
                  <img src={item.image} alt={item.title} className="h-56 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-sm font-medium text-[#2e3135]">{item.title}</h3>
                    <p className="mt-3 text-xs leading-5 text-[#4e4e4e]">{item.description}</p>
                    <Link
                      to={item.href}
                      className="mt-auto inline-flex text-xs font-semibold text-[#e97a2f] transition hover:text-[#c86216]"
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="max-w-xl">
              <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#2e3135] sm:text-3xl lg:text-[34px]">
                OHI Google Arts &amp; Culture Heritage Collection
              </h2>
              <p className="mt-5 max-w-md text-sm leading-6 text-[#4e4e4e]">
                OHI launches a digital heritage collection on Google Arts &amp; Culture
                as part of the Africa Day celebration, creating a richer window into the
                stories, people, and places that shape African identity. The collection
                brings together carefully curated visual material that helps preserve
                memory, celebrate culture, and make heritage more accessible to audiences
                across communities and regions.
              </p>
              <Link
                to="/company-profile"
                className="mt-5 inline-flex h-8 items-center justify-center bg-[#e97a2f] px-4 text-xs font-semibold text-white transition hover:bg-[#d96f1f]"
              >
                Virtual Tours
              </Link>
            </Reveal>

            <Reveal className="grid grid-cols-4 gap-2">
              {heritageItems.map((item, index) => (
                <div
                  key={item.id ?? item.title ?? index}
                  className={`overflow-hidden rounded-[4px] ${
                    index === 1 || index === 6 ? "row-span-2" : ""
                  } ${index === 2 ? "col-span-2" : ""}`}
                >
                  <img
                    src={item.image}
                    alt={item.title ?? `Heritage ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#e1b06d_0%,#d39a4c_100%)] py-4 text-[#3a2413]">
        <div className="container flex flex-wrap items-center justify-center gap-4 text-center">
          <p className="text-[13px] font-semibold">
            Support OHI
          </p>
          <Link
            to="/contact"
            className="inline-flex h-7 items-center justify-center rounded-sm bg-[linear-gradient(180deg,#f58e1b_0%,#d76418_100%)] px-4 text-xs font-bold text-white shadow-[0_8px_18px_rgba(0,0,0,0.16)]"
          >
            Donate Now
          </Link>
        </div>
      </section>

      <section
        className="relative overflow-hidden bg-cover bg-center py-16 text-white sm:py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(10,12,18,0.56), rgba(10,12,18,0.72)), url(${heroImages.hero4})`,
        }}
      >
        <div className="container">
          <Reveal className="max-w-xl">
            <h2 className="text-3xl font-bold leading-[0.95] tracking-[-0.04em] sm:text-4xl lg:text-[44px]">
              Join Our Impactful
              <br />
              Volunteer Community
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/86">
              We believe in the transformative power of collective action. Our
              dedicated community of volunteers plays a crucial role in turning
              compassion into meaningful change.
            </p>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/86">
              By joining our volunteer program, you become an essential part of our
              mission to create a positive impact on a global scale.
            </p>
            <Link
              to="/contact"
              className="mt-5 inline-flex h-8 items-center justify-center bg-[#f58e1b] px-4 text-xs font-semibold text-white transition hover:bg-[#d76418]"
            >
              Become a Volunteer
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <Reveal className="overflow-hidden rounded-[10px] bg-white shadow-[0_12px_28px_rgba(15,23,42,0.12)]">
              <img
                src={gallery.items?.[5]?.image ?? heroImages.hero1}
                alt="OHI vision feature"
                className="h-[220px] w-full object-cover sm:h-[300px] lg:h-[240px]"
              />
            </Reveal>

            <Reveal className="max-w-xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-[#d38a31]">
                OHI Visionary Voices
              </p>
              <h3 className="mt-2 text-2xl font-bold leading-tight tracking-[-0.03em] text-[#2f3135] sm:text-[32px]">
                OHI Visionary Voices
              </h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-[#5a5f66]">
                Join visionary storytellers, industry experts, and successful creators.
                Dive into the art of storytelling and its immense potential for impact
                and income.
              </p>
              <Link
                to="/company-profile"
                className="mt-5 inline-flex h-8 items-center justify-center bg-[#e97a2f] px-4 text-xs font-semibold text-white transition hover:bg-[#d96f1f]"
              >
                Learn More
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white py-10 sm:py-14">
        <div className="container">
          <h2 className="text-center text-2xl font-medium tracking-[-0.03em] text-[#2f3135] sm:text-[28px]">
            Featured Programmes
          </h2>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                title: "UNESCO World Heritage Volunteers Initiative",
                image: heroImages.hero1,
                description:
                  "The initiative aims to sensitise and develop an appreciation of World Heritage values through concrete hands-on activities, awareness-raising campaigns, and skills training.",
              },
              {
                title: "OHI Visionary Voices",
                image: heroImages.hero2,
                description:
                  "Join visionary storytellers, industry experts, and successful creators. Delve into the art of storytelling and its immense potential for impact and income.",
              },
              {
                title: "African Festivals",
                image: heroImages.hero3,
                description:
                  "Join our festivals that showcase a unique blend of rich African culture through dance, plays, fashion, movies, literature, and more, projecting core African values to the world.",
              },
            ].map((item) => (
              <Reveal key={item.title}>
                <article className="flex h-full min-h-[460px] flex-col overflow-hidden border border-[#e5e5e5] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.12)]">
                  <img src={item.image} alt={item.title} className="h-60 w-full object-cover" />
                  <div className="flex flex-1 flex-col p-4">
                    <h3 className="text-sm font-bold leading-5 text-[#a75f1a]">{item.title}</h3>
                    <p className="mt-3 text-xs leading-5 text-[#54565a]">{item.description}</p>
                    <Link
                      to="/contact"
                      className="mt-auto inline-flex h-7 items-center justify-center bg-[linear-gradient(180deg,#f58e1b_0%,#d76418_100%)] px-4 text-[11px] font-semibold text-white"
                    >
                      Learn More
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[linear-gradient(180deg,#e9b164_0%,#e1a156_100%)] py-12 sm:py-14">
        <div className="container">
          <Reveal className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold tracking-[-0.03em] text-[#2f3135] sm:text-[30px]">
              OHI Story Tellers
            </h2>
            <p className="mt-2 text-sm text-[#5a3a17]">
              Promoting Africa&apos;s talented storytellers, journalists, and documentary
              producers to global prominence.
            </p>
          </Reveal>

          <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {storytellers.map((story) => (
              <Reveal key={story.name}>
                <article className="flex h-full min-h-[460px] flex-col overflow-hidden bg-white shadow-[0_12px_24px_rgba(15,23,42,0.14)]">
                  <img
                    src={story.image}
                    alt={story.name}
                    className="h-64 w-full object-cover sm:h-72 lg:h-80"
                  />
                  <div className="flex flex-1 flex-col p-4">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#b16a18]">
                      African storyteller
                    </p>
                    <h3 className="mt-3 text-sm font-semibold text-[#2f3135]">{story.name}</h3>
                    <p className="mt-2 text-[11px] text-[#7b7b7b]">{story.role}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              to="/who-we-serve"
              className="inline-flex h-8 items-center justify-center bg-[#e97a2f] px-4 text-xs font-semibold text-white transition hover:bg-[#d96f1f]"
            >
              View More
            </Link>
            <Link
              to="/contact"
              className="inline-flex h-8 items-center justify-center bg-[#c65f25] px-4 text-xs font-semibold text-white transition hover:bg-[#a94f1f]"
            >
              Get Featured
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 sm:py-16">
        <div className="container">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-medium tracking-[-0.03em] text-[#2f3135] sm:text-[28px]">
              News &amp; Blog
            </h2>
            <div className="hidden flex-1 items-center justify-end gap-2 lg:flex">
              {Array.from({ length: 14 }).map((_, index) => (
                <span
                  key={index}
                  className={`h-[2px] rounded-full ${
                    index === 8 ? "w-10 bg-[#2f3135]" : "w-5 bg-[#d6c4ad]"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="relative mt-6 overflow-hidden">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-white to-transparent" />

            <Marquee pauseOnHover className="[--duration:32s] px-0 py-0" repeat={3}>
              {newsCards.map((card) => (
                <article
                  key={card.title}
                  className="w-[280px] overflow-hidden border border-[#ece7df] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.08)]"
                >
                  <img src={card.image} alt={card.title} className="h-32 w-full object-cover" />
                  <div className="p-3">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#9b9b9b]">
                      {card.date}
                    </p>
                    <h3 className="mt-2 text-sm font-semibold leading-5 text-[#b16a18]">
                      {card.title}
                    </h3>
                    <p className="mt-3 text-[11px] leading-5 text-[#676767]">
                      OHI continues to shape public-facing documentary communication and
                      heritage storytelling.
                    </p>
                    <Link
                      to="/about"
                      className="mt-4 inline-flex text-[11px] font-semibold text-[#b16a18]"
                    >
                      More
                    </Link>
                  </div>
                </article>
              ))}
            </Marquee>
          </div>

          <div className="mt-6 text-center">
            <Link
              to="/impact"
              className="inline-flex h-8 items-center justify-center bg-[#e97a2f] px-4 text-xs font-semibold text-white transition hover:bg-[#d96f1f]"
            >
              View More
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#111] py-0 text-white">
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(10,10,10,0.2), rgba(10,10,10,0.25)), url(${heroImages.hero5})`,
          }}
        >
          <div className="container grid gap-6 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center">
            <div className="max-w-xl">
              <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.05em] sm:text-5xl">
                This is
                <br />
                OHI
              </h2>
              <p className="mt-4 max-w-md text-sm leading-6 text-white/82">
                A visual bridge between documentary production, heritage stories, and
                public impact communication.
              </p>
            </div>

            <div className="relative h-[220px] overflow-hidden rounded-[10px] bg-black shadow-[0_16px_38px_rgba(0,0,0,0.4)]">
              <img
                src={heroImages.hero2}
                alt="OHI video preview"
                className="h-full w-full object-cover opacity-95"
              />
              <div className="absolute inset-0 flex items-end justify-start p-3">
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#111]"
                  aria-label="Play video"
                >
                  <Play className="h-4 w-4 fill-current" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#c98722] py-6">
          <div className="container">
            <div className="grid gap-4 text-center text-white sm:grid-cols-4">
              {[
                ["OHI so far", ""],
                ["500+", "Documentaries promoted"],
                ["1000+", "Storytellers trained"],
                ["25", "Countries"],
              ].map(([value, label], index) => (
                <div key={value} className="space-y-1">
                  <p className="text-xl font-bold">{value}</p>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/86">
                    {index === 0 ? " " : label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
