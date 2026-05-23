import { Camera, Clapperboard, Film } from "lucide-react";
import heroBg from "../assets/images/hero-bg.png";
import headerBg from "../assets/images/mask.png";
import hero1 from "../assets/images/HeroImg/hero1.jpeg";
import hero2 from "../assets/images/HeroImg/hero2.jpeg";
import hero3 from "../assets/images/HeroImg/hero3.jpeg";
import hero4 from "../assets/images/HeroImg/hero4.jpeg";
import hero5 from "../assets/images/HeroImg/hero5.jpeg";
import gallery01 from "../assets/images/Gallery/gallery-01.jpeg";
import gallery02 from "../assets/images/Gallery/gallery-02.jpeg";
import gallery03 from "../assets/images/Gallery/gallery-03.jpeg";
import gallery04 from "../assets/images/Gallery/gallery-04.jpeg";
import gallery05 from "../assets/images/Gallery/gallery-05.jpeg";
import gallery06 from "../assets/images/Gallery/gallery-06.jpeg";
import gallery07 from "../assets/images/Gallery/gallery-07.jpeg";
import gallery08 from "../assets/images/Gallery/gallery-08.jpeg";
import gallery09 from "../assets/images/Gallery/gallery-09.jpeg";
import gallery10 from "../assets/images/Gallery/gallery-10.jpeg";
import gallery11 from "../assets/images/Gallery/gallery-11.jpeg";
import gallery12 from "../assets/images/Gallery/gallery-12.jpeg";
import storyImg from "../assets/images/our-story.jpeg";
import featureImg from "../assets/img/BTS-02812.jpg";
import aboutCard from "../assets/img/BTS-02864.jpg";
import faqImg from "../assets/img/FAQ.jpg";
import rev1 from "../assets/img/WFP-03555-150x150.jpg";
import rev2 from "../assets/img/WFP-03556-150x150.jpg";
import rev4 from "../assets/img/WFP-03558-150x150.jpg";
import supplier1 from "../assets/img/WFP-03520.jpg";
import supplier2 from "../assets/img/WFP-03523.jpg";
import supplier3 from "../assets/img/WFP-03524.jpg";
import videoIcon from "../assets/img/logo-ohi-blue.png";
import avatarIcon from "../assets/img/WFP-03558-150x150.jpg";
import brandOhiLogo from "../assets/img/cropped-logo-ohi-blue.png";
import brandCorafLogo from "../assets/img/logo-coraf.png";
import brandWfpLogo from "../assets/img/wfp-logo-extended-blue-en.png";
import brandSunKingLogo from "../assets/img/Sun-King_New_Logo-02.png";

export const landingPageDefaults = {
  theme: {
    primaryColor: "#05c1ff",
    accentColor: "#f9a11b",
    heroButtonText: "#ffffff",
    heroBgImage: heroBg,
    headerBgImage: headerBg,
  },
  hero: {
    slides: [
      {
        image: hero1,
        kicker: "Development storytelling",
        title: "Africa's development story",
        subtitle: "deserves investment-grade visibility",
        description:
          "OHI turns complex programmes into cinematic proof that builds trust, demonstrates results, and mobilises capital.",
      },
      {
        image: hero2,
        kicker: "Impact storytelling",
        title: "Strategic visibility for institutions",
        subtitle: "that need proof, clarity, and reach",
        description:
          "We package delivery, learning, and outcomes into public-facing stories that help partners communicate with confidence.",
      },
      {
        image: hero3,
        kicker: "Multilingual production",
        title: "English, French, and Pidgin coverage",
        subtitle: "for field realities that need reach",
        description:
          "Our field production keeps stories accessible across audiences without losing the nuance of the original context.",
      },
      {
        image: hero4,
        kicker: "ESG and social impact",
        title: "Stories that show responsibility",
        subtitle: "alignment, and real-world contribution",
        description:
          "We help private-sector and institutional partners show how their work contributes to measurable social value.",
      },
      {
        image: hero5,
        kicker: "Investor and donor reporting",
        title: "Evidence-led films for decision makers",
        subtitle: "who expect clarity and accountability",
        description:
          "OHI creates reporting films that communicate results, learning, and accountability with precision.",
      },
    ],
    primaryCtaLabel: "Explore Profile",
    primaryCtaHref: "/company-profile",
    secondaryCtaLabel: "Our Story",
    secondaryCtaHref: "/about",
  },
  about: {
    title: "Our Story",
    paragraphs: [
      "Olympian House International was founded in 2015 by filmmaker and development communication specialist Fombang Banns N. on a conviction that has only deepened over a decade of work: the quality of a story is inseparable from the quality of the capital, partnerships, and policy decisions it attracts.",
      "We make Africa's development and investment journeys visible through strategic, multilingual visual narratives that turn technical programmes into credible proof for institutions, investors, partners, and the communities they serve.",
    ],
    image: gallery11,
    overlay: {
      since: "Since 2015",
      tagline: "Investment-grade storytelling",
      trustLabel: "Proof-led",
      role: "Development, Impact & Investment",
      icon: videoIcon,
      avatar: brandOhiLogo,
    },
  },
  services: {
    title: "What We Do",
    description:
      "We help DFIs, governments, multilaterals, and private-sector partners turn programmes into proof.",
    cards: [
      {
        name: "Investment & Programme Visibility",
        desc: "Films and content packages for DFIs and bilateral institutions that need proof of delivery, stakeholder confidence, and stronger public-facing visibility.",
        bgColor: "rgba(249, 161, 27, 0.14)",
        textColor: "#F9A11B",
      },
      {
        name: "Impact Documentaries",
        desc: "Cinematic documentary work that translates programme complexity into human stories, measurable change, and institutional trust.",
        bgColor: "rgba(5, 193, 255, 0.14)",
        textColor: "#05C1FF",
      },
      {
        name: "ESG & Social Impact Storytelling",
        desc: "Strategic storytelling for private-sector actors operating in Africa who need to show responsibility, alignment, and real-world contribution.",
        bgColor: "rgba(5, 193, 255, 0.12)",
        textColor: "#0296CC",
      },
      {
        name: "Development Programme Communication",
        desc: "Clear communication for governments and implementing partners across the project lifecycle, from launch to reporting.",
        bgColor: "rgba(249, 161, 27, 0.12)",
        textColor: "#F9A11B",
      },
      {
        name: "Donor & Investor Reporting Films",
        desc: "Evidence-led films that communicate results, learning, and accountability with the precision institutional audiences expect.",
        bgColor: "rgba(249, 161, 27, 0.14)",
        textColor: "#F9A11B",
      },
      {
        name: "Multilingual Field Production",
        desc: "English, French, and Pidgin coverage that captures field realities and makes stories accessible across audiences.",
        bgColor: "rgba(5, 193, 255, 0.14)",
        textColor: "#05C1FF",
      },
    ],
  },
  gallery: {
    title: "Selected Visual Moments",
    description:
      "A curated view of OHI's production language across development, investment, ESG, and partner-facing storytelling.",
    items: [
      {
        title: "Community dialogue",
        category: "Field coverage",
        image: gallery01,
      },
      {
        title: "Interview moment",
        category: "Story capture",
        image: gallery02,
      },
      {
        title: "Production setup",
        category: "Behind the scenes",
        image: gallery03,
      },
      {
        title: "City perspective",
        category: "Aerial coverage",
        image: gallery04,
      },
      {
        title: "Landscape scale",
        category: "Aerial storytelling",
        image: gallery05,
      },
      {
        title: "Crew coordination",
        category: "Field direction",
        image: gallery06,
      },
      {
        title: "Portrait detail",
        category: "Editorial portrait",
        image: gallery07,
      },
      {
        title: "Team portrait",
        category: "People and purpose",
        image: gallery08,
      },
      {
        title: "Traditional gathering",
        category: "Cultural documentation",
        image: gallery09,
      },
      {
        title: "Visual identity",
        category: "Portrait work",
        image: gallery10,
      },
      {
        title: "Our story",
        category: "Team image",
        image: gallery11,
      },
      {
        title: "Transforming projects",
        category: "Story-led impact",
        image: gallery12,
      },
    ],
  },
  galleryStories: {
    title: "Editorial frames for development communication",
    description:
      "A second visual section that shows how OHI carries one story across fieldwork, institutional communication, and investor-facing visibility.",
    lead: {
      title: "Community dialogue",
      category: "Field coverage",
      description:
        "Coverage designed to preserve context, tone and the human detail that makes development communication credible.",
      image: gallery01,
    },
    supportIntro: {
      eyebrow: "Why it works",
      title: "Built for institutions that need credibility, evidence, and reach",
      description:
        "The gallery language mirrors the company profile: clear, professional, and grounded in the kind of visual evidence that helps partners communicate with confidence.",
      image: gallery02,
    },
    supportCards: [
      {
        title: "Production setup",
        description:
          "Behind-the-scenes framing that documents the work and the people who make the story possible.",
        image: gallery03,
        accent: "from-[#0296cc]/85 to-[#05c1ff]/90",
      },
      {
        title: "Aerial perspective",
        description:
          "Wide visual context that helps audiences understand place, scale, and momentum.",
        image: gallery04,
        accent: "from-[#f9a11b]/85 to-[#ffbd4d]/90",
      },
    ],
    stripTitle: "A broader look at the archive",
    stripBadge: "OHI visual language",
    stripItems: [
      {
        label: "Landscape scale",
        image: gallery05,
        description: "Broad scenes that place the work in its geographic and social context.",
      },
      {
        label: "Crew coordination",
        image: gallery06,
        description: "Moments of direction, craft, and collaboration captured in the field.",
      },
      {
        label: "Portrait detail",
        image: gallery07,
        description: "Closer editorial frames that bring people and expression into focus.",
      },
      {
        label: "Team portrait",
        image: gallery08,
        description: "Group imagery that carries identity, trust, and shared purpose.",
      },
    ],
  },
  video: {
    title: "Strategic Visibility Reel",
    description:
      "OHI presents its video work here, with room for local files or embedded links, all framed in the same rounded editorial style used across the site.",
    lead: {
      title: "OHI overview reel",
      category: "Featured film",
      description:
        "A concise branded film for introducing the organisation, its purpose, and the kind of stories it tells.",
      poster: gallery09,
      embedUrl: "",
    },
    clips: [
      {
        title: "Field interviews",
        category: "Story capture",
        description:
          "Short-form documentary moments that keep the human voice at the center of the frame.",
        poster: gallery10,
      },
      {
        title: "Partner spotlight",
        category: "Visibility clip",
        description:
          "A credibility-led edit for projects, partners, and institutional communication.",
        poster: gallery11,
      },
      {
        title: "Impact testimonials",
        category: "Voice-led cut",
        description:
          "Testimonial-driven clips that help organizations communicate outcomes clearly.",
        poster: gallery12,
      },
      {
        title: "Program highlights",
        category: "Campaign video",
        description:
          "An adaptable short-form format for launches, events, and reporting moments.",
        poster: gallery01,
      },
    ],
    icon: videoIcon,
  },
  profile: {
    title: "Mission, Vision and Values",
    description:
      "The profile is built around credibility, evidence, and strategic visibility. These are the principles that shape every OHI project.",
    storyTitle: "Our Story",
    storyDescription:
      "Founded in 2015 by filmmaker and development communication specialist Fombang Banns N., OHI was built on the belief that strong stories attract stronger capital, partnerships, and policy attention.",
    missionTitle: "Amplify Africa's stories",
    missionDescription:
      "To amplify Africa's development and investment stories with authenticity, excellence, and strategic clarity so impactful projects gain the visibility, credibility, and support they deserve.",
    visionTitle: "Vision",
    visionDescription:
      "To be Africa's leading partner in investment-grade development storytelling and strategic visibility.",
    valuesTitle: "Core values",
    values: [
      "Evidence over assumption",
      "Cultural respect and inclusion",
      "Accountability and leadership",
      "Creative excellence",
      "Institutional fluency",
    ],
  },
  voices: {
    title: "Selected Voices",
    description:
      "A snapshot of how partners describe OHI's work across development, public-sector, and private impact projects.",
    reviews: [
      {
        name: "Development Partner",
        username: "@institutional",
        body: "OHI turns technical program results into stories that stakeholders can understand, trust, and act on.",
        img: brandOhiLogo,
      },
      {
        name: "Government Partner",
        username: "@public-sector",
        body: "Their mission coverage and strategic visibility work helps public initiatives reach the audiences that matter.",
        img: brandWfpLogo,
      },
      {
        name: "Foundation Lead",
        username: "@impact",
        body: "OHI gives our projects the visibility they deserve and the credibility they need to attract support.",
        img: brandCorafLogo,
      },
      {
        name: "Private Sector Partner",
        username: "@investment",
        body: "They are strong at translating complex initiatives into persuasive, investment-ready visuals.",
        img: brandSunKingLogo,
      },
    ],
  },
  whyChoose: {
    title: "What OHI Stands For",
    description:
      "We blend development communication, impact storytelling, and strategic visibility to help organisations communicate with clarity and credibility.",
    cards: [
      {
        title: "Institutional credibility",
        description:
          "We help projects explain themselves clearly so communities, institutions, and partners can understand the value being created.",
        icon: Camera,
        href: "/who-we-serve",
      },
      {
        title: "Evidence-led storytelling",
        description:
          "Our narratives turn programme results and lived experiences into proof that moves decision-makers to action.",
        icon: Film,
        href: "/impact",
      },
      {
        title: "Multilingual execution",
        description:
          "We deliver English, French, and Pidgin content that strengthens stakeholder alignment and expands reach.",
        icon: Clapperboard,
        href: "/approach",
      },
    ],
  },
  footer: {
    description:
      "Copyright {year} Olympian House International. Development storytelling and strategic visibility across Africa.",
    socialLinks: [
      {
        path: "https://olympianhouseintl.com",
      },
      {
        path: "mailto:contact@olympianhouseintl.com",
      },
      {
        path: "tel:+237671646331",
      },
      {
        path: "https://www.linkedin.com",
      },
    ],
  },
};
