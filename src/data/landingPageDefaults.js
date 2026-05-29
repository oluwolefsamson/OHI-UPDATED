import { Camera, Clapperboard, Film } from "lucide-react";
import hero1 from "../assets/images/HeroImg/hero1.jpeg";
import hero2 from "../assets/images/HeroImg/hero2.jpeg";
import hero3 from "../assets/images/HeroImg/hero3.jpeg";
import hero4 from "../assets/images/HeroImg/hero4.jpeg";
import hero5 from "../assets/images/HeroImg/hero5.jpeg";
import profileHeroMountain from "../assets/images/profile-hero-mountain.jpg";
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
        image: profileHeroMountain,
        kicker: "Investor and donor reporting",
        title: "Evidence-led films for decision makers",
        subtitle: "who expect clarity and accountability",
        description:
          "OHI creates reporting films that communicate results, learning, and accountability with precision.",
      },
    ],
    primaryCtaLabel: "Explore Profile",
    primaryCtaHref: "/documentary",
    secondaryCtaLabel: "Our Story",
    secondaryCtaHref: "/about",
  },
  homePage: {
    about: {
      title: "Olympian House International",
      description:
        "Olympian House International (OHI) creates development communication that helps institutions, partners, and communities understand what is being delivered, why it matters, and why it deserves sustained support.",
      ctaLabel: "Learn More",
      ctaHref: "/about",
    },
    difference: {
      title: "The OHI difference",
      description:
        "Strategic communication for institutions, donors, investors, and partners.",
      image: gallery04,
      cards: [
        {
          title: "Programmes with evidence",
          description: "OHI turns complex work into clear stories that support action.",
          image: gallery01,
        },
        {
          title: "Institutional fluency",
          description: "The language stays grounded in how partners actually work.",
          image: gallery02,
        },
        {
          title: "Regional delivery",
          description: "The team works across Africa with a practical understanding of context.",
          image: gallery03,
        },
        {
          title: "Visibility that converts",
          description: "The content is designed to be useful across reports, web, and outreach.",
          image: gallery05,
        },
      ],
    },
    heritage: {
      title: "OHI Google Arts & Culture Heritage Collection",
      description:
        "OHI launches a digital heritage collection on Google Arts & Culture as part of the Africa Day celebration.",
      ctaLabel: "Virtual Tours",
      ctaHref: "/documentary",
    },
    leadership: {
      eyebrow: "Leadership and storytellers",
      title: "Leadership and storytellers",
      description:
        "Named leadership, regional storytellers, and institutional partners working across Africa and beyond.",
      ctaLabel: "Learn More",
      ctaHref: "/documentary",
    },
    programmes: {
      title: "Featured Programmes",
      items: [
        {
          title: "UNESCO World Heritage Volunteers Initiative",
          description:
            "The initiative aims to sensitise and develop an appreciation of World Heritage values through hands-on activities, awareness-raising campaigns, and skills training.",
        },
        {
          title: "OHI Visionary Voices",
          description:
            "A curated programme focused on credible voices, practical learning, and communication that serves institutional objectives.",
        },
        {
          title: "African Festivals",
          description:
            "A cultural documentation platform that records African creative expression for public audiences, partners, and archival use.",
        },
      ],
    },
    storytellers: {
      title: "OHI Storytellers",
      description:
        "A network of practitioners producing communication and documentary work for institutions, partners, and public-interest audiences.",
      ctaLabel: "Contact Us",
      ctaHref: "/contact",
    },
    news: {
      title: "News & Blog",
      description:
        "OHI continues to shape public-facing documentary communication and heritage documentation for institutional audiences.",
    },
    supporters: {
      title: "OurPartners / Supporters",
      description: "Support OHI and connect with the team for partnership or funding.",
      ctaLabel: "Donate Now",
      ctaHref: "/contact",
    },
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
        "The gallery language mirrors the documentary: clear, professional, and grounded in the kind of visual evidence that helps partners communicate with confidence.",
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
  companyProfile: {
    hero: {
      title: "Documentary",
      badgeEyebrow: "OHI documentary",
      badgeDescription:
        "Strategic visibility for development, investment, and impact communication.",
      description:
        "OHI creates development communication that helps institutions, partners, and communities understand the work being done, why it matters, and why it deserves attention from capital and policy actors.",
      primaryCtaLabel: "View Portfolio",
      primaryCtaHref: "/portfolio",
      secondaryCtaLabel: "Contact Us",
      secondaryCtaHref: "/contact",
    },
    difference: {
      title: "The OHI difference",
      description:
        "OHI is not positioning itself as a generic production shop. The value is strategic visibility built for development, investor, and institutional audiences.",
      points: [
        "We translate complex programmes into decision-ready communication.",
        "We work in the language of institutions, not campaign slogans.",
        "We pair regional delivery with proof, governance, and trust signals.",
      ],
    },
    overview: {
      title: "A documentary that moves from credibility to action",
      description:
        "The documentary is designed as a guided entry point into OHI. It shows why the work matters for development, investment, and impact communication.",
      stats: [
        { label: "Projects delivered", value: "100+" },
        { label: "Institutional clients", value: "70+" },
        { label: "Repeat rate", value: "95%" },
      ],
      highlights: [
        {
          title: "Clarity first",
          description:
            "Each page is organized to help visitors move from the story, to the service, to the outcome.",
        },
        {
          title: "Built for trust",
          description:
            "The content speaks to institutions, investors, and partners who need credible communication.",
        },
        {
          title: "Designed to convert",
          description:
            "The structure makes it easy to move from discovery to portfolio, approach, and contact.",
        },
      ],
    },
    footprint: {
      title: "Footprint",
      description:
        "A clearer view of where OHI already operates and how that scale supports institutional work.",
      items: [
        "Central Africa: Cameroon and neighboring markets",
        "East Africa: Kenya, Uganda, Tanzania, Rwanda, and beyond",
        "Southern Africa: Zambia and regional partners",
        "USA: fundraising, partnerships, and institutional collaboration",
      ],
    },
    portfolio: {
      title: "Featured Story",
      description:
        "A highlighted selection that shows how OHI turns development, public-sector, and impact work into clear visual stories.",
      projects: [
        {
          title: "Program visibility films",
          category: "Development communication",
          image: gallery01,
          description:
            "Clear communication that helps teams show results, context, and institutional value.",
        },
        {
          title: "Stakeholder event coverage",
          category: "Event production",
          image: gallery02,
          description:
            "Fast, polished coverage for launches, convenings, and milestone moments.",
        },
        {
          title: "Human-centered interviews",
          category: "Story gathering",
          image: gallery03,
          description:
            "Short-form stories that make complex initiatives feel relatable and real.",
        },
        {
          title: "Campaign content packages",
          category: "Multi-channel delivery",
          image: gallery04,
          description:
            "Reusable content for reports, digital campaigns, and partner updates.",
        },
        {
          title: "Field documentation",
          category: "On-location production",
          image: gallery05,
          description:
            "Visual reporting from communities, project sites, and implementation work.",
        },
        {
          title: "Impact storytelling",
          category: "Strategic visibility",
          image: gallery06,
          description:
            "Editorial visuals built to support credibility, trust, and action.",
        },
      ],
    },
  },
  aboutPage: {
    hero: {
      title: "About OHI",
      description:
        "OHI creates development communication that helps institutions, partners, and communities understand the work being done, why it matters, and why it deserves attention from capital and policy actors.",
      primaryCtaLabel: "View Portfolio",
      primaryCtaHref: "/portfolio",
      secondaryCtaLabel: "Contact Us",
      secondaryCtaHref: "/contact",
      badgeEyebrow: "OHI profile",
      badgeDescription:
        "Strategic visibility for development, investment, and impact communication.",
    },
    intro: {
      title: "We turn Africa's development story into strategic visibility",
      description:
        "OHI creates development communication that helps institutions, partners, and communities understand the work being done and why it matters.",
      aboutLabel: "About OHI",
      aboutText:
        "We build visual stories that are clear, credible, and designed to move audiences from awareness to action.",
      editorialLabel: "Editorial focus",
      editorialText:
        "OHI combines strategy, production, and field storytelling into one editorial workflow.",
      ctaLabel: "Learn More",
      ctaHref: "/portfolio",
      ctaSecondaryLabel: "Start a Project",
      ctaSecondaryHref: "/contact",
    },
    difference: {
      title: "The OHI difference",
      description:
        "A sharper institutional story layer that makes the case for credibility, trust, and strategic visibility.",
      principles: [
        { title: "Credibility", description: "OHI produces stories that help institutions communicate with clarity, trust, and confidence." },
        { title: "Human focus", description: "People stay at the center so technical work becomes relatable, memorable, and useful." },
        { title: "Editorial craft", description: "Every frame is designed to feel intentional across film, photography, and digital storytelling." },
      ],
    },
    snapshot: {
      label: "OHI at a glance",
      title: "The core principles that guide OHI",
      description:
        "The documentary positions OHI as a partner for institutions that need communication with clarity, trust, and confidence.",
      stats: [
        { value: "100+", label: "Projects delivered" },
        { value: "70+", label: "Institutional clients" },
        { value: "95%", label: "Repeat-client rate" },
      ],
      missionTitle: "Mission & vision",
      missionItems: [
        { title: "Field production", description: "Story capture in communities, project sites, and institutional spaces." },
        { title: "Post-production", description: "Editing, motion, and finishing that keep the story clear and polished." },
      ],
    },
    close: {
      title: "A multilingual team fluent in English, French, and Pidgin",
      description:
        "OHI combines strategy, production, and editorial craft to help development work communicate with confidence across Africa.",
      body:
        "OHI is ready to turn your next project, campaign, or report into a story that decision-makers can trust and act on.",
      ctaLabel: "Get a Quotation",
      ctaHref: "/contact",
    },
  },
  servicesPage: {
    hero: {
      title: "Services",
      description:
        "OHI creates development communication that helps institutions, partners, and communities understand the work being done, why it matters, and why it deserves attention from capital and policy actors.",
      primaryCtaLabel: "View Portfolio",
      primaryCtaHref: "/portfolio",
      secondaryCtaLabel: "Contact Us",
      secondaryCtaHref: "/contact",
      badgeEyebrow: "OHI profile",
      badgeDescription:
        "Strategic visibility for development, investment, and impact communication.",
    },
    servicesIntro: {
      title: "Core services",
      description:
        "OHI is a partner for institutions that need clear, credible, and investment-grade storytelling.",
    },
    formats: [
      "Investment & programme visibility",
      "Impact documentaries",
      "ESG & social impact storytelling",
      "Development programme communication",
      "Donor & investor reporting films",
      "Multilingual field production",
    ],
    travel: {
      title: "How the work travels",
      description:
        "OHI frames each format as a communication asset, not just a video. The result is content that can be used across reports, websites, social channels, presentations, and stakeholder engagement.",
      label: "Delivery approach",
      body:
        "Strategic, polished, and grounded in the realities of development work across the continent.",
      ctaLabel: "See sectors",
      ctaHref: "/who-we-serve",
    },
    showcase: [
      {
        title: "Impact Documentaries",
        description:
          "We produce documentaries that turn programme results into evidence-led narratives for institutional audiences.",
      },
      {
        title: "Development Programme Communication",
        description:
          "OHI helps development programmes communicate objectives, implementation, and results with clarity and accountability.",
      },
      {
        title: "Investment & Programme Visibility",
        description:
          "We craft investor-facing films that present projects as credible opportunities for financing and partnership.",
      },
      {
        title: "ESG & Social Impact Storytelling",
        description:
          "Our content amplifies community voice and local ownership while supporting ESG and social impact reporting.",
      },
      {
        title: "Donor & Investor Reporting Films",
        description:
          "We produce reporting films that support donor updates, investor confidence, and renewal conversations.",
      },
      {
        title: "Multilingual Field Production",
        description:
          "OHI produces concise, evidence-driven reporting films across languages and regions.",
      },
      {
        title: "Event & Mission Coverage",
        description:
          "From high-level forums to field missions, we document moments that matter with professional intent.",
      },
      {
        title: "Social Media & Digital Campaigns",
        description:
          "We design digital-first content that extends project visibility across web, social, and stakeholder channels.",
      },
    ],
  },
  portfolioPage: {
    hero: {
      title: "Portfolio",
      description:
        "OHI presents a portfolio of development storytelling projects, case studies, and content packages that demonstrate institutional impact, visibility, and narrative clarity.",
      primaryCtaLabel: "View Portfolio",
      primaryCtaHref: "/portfolio",
      secondaryCtaLabel: "Contact Us",
      secondaryCtaHref: "/contact",
      badgeEyebrow: "OHI portfolio",
      badgeDescription:
        "Strategic visibility for development, investment, and impact communication.",
    },
    header: {
      title: "Portfolio highlights",
      description:
        "These sample projects reflect the kind of output OHI builds for public, institutional, and private-sector communication goals.",
    },
    projects: [
      { title: "Program visibility films", category: "Development communication", description: "Clear communication that helps teams show results, context, and institutional value." },
      { title: "Stakeholder event coverage", category: "Event production", description: "Fast, polished coverage for launches, convenings, and milestone moments." },
      { title: "Human-centered interviews", category: "Story gathering", description: "Short-form stories that make complex initiatives feel relatable and real." },
      { title: "Campaign content packages", category: "Multi-channel delivery", description: "Reusable content for reports, digital campaigns, and partner updates." },
      { title: "Field documentation", category: "On-location production", description: "Visual reporting from communities, project sites, and implementation work." },
      { title: "Impact storytelling", category: "Strategic visibility", description: "Editorial visuals built to support credibility, trust, and action." },
    ],
    method: {
      title: "Built for clear, audience-ready storytelling",
      description:
        "The portfolio blends case-study storytelling, event coverage, and campaign assets that can move cleanly across reports, presentations, and digital channels.",
      nextTitle: "Need a similar format for your project?",
      nextDescription:
        "OHI can shape a communication package around your audience, timeline, and intended outcome.",
      ctaLabel: "Start a project",
      ctaHref: "/contact",
    },
  },
  leadershipPage: {
    hero: {
      title: "Leadership",
      description:
        "OHI is led with a clear institutional purpose: to turn strong production capability into trust, visibility, and decision-ready communication for development and impact audiences.",
      primaryCtaLabel: "Contact OHI",
      primaryCtaHref: "/contact",
      secondaryCtaLabel: "View Services",
      secondaryCtaHref: "/services",
      badgeEyebrow: "Executive profile",
      badgeDescription:
        "Named leadership with the credibility procurement teams expect.",
    },
    leader: {
      name: "Oliver Mbuya Litondo",
      role: "President, Olympian House International",
      description:
        "Oliver Mbuya Litondo leads OHI with a focus on institutional credibility, regional delivery, and communication that helps partners explain complex work clearly. His role combines editorial judgment, team coordination, and client-facing oversight so projects stay aligned with strategic goals from brief to final output.",
      credentials: [
        "Leadership across African and international production and communication settings",
        "Institutional storytelling for development, public-sector, and impact partners",
        "Operational oversight of cross-border teams and regional delivery",
      ],
      heroImage: hero5,
    },
    highlights: [
      { title: "Strategic direction", description: "Sets the tone for projects that need to satisfy institutional, donor, and partner expectations." },
      { title: "Trust and governance", description: "Keeps delivery, reporting, and relationship management aligned with professional standards." },
      { title: "Regional reach", description: "Works across West, Central, East, and Southern Africa with a practical understanding of local context." },
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
