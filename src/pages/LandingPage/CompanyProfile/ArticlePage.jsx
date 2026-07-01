import React from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { CalendarDays, ArrowLeft, ArrowRight } from "lucide-react";
import gallery01 from "../../../assets/images/Gallery/gallery-01.jpeg";
import gallery02 from "../../../assets/images/Gallery/gallery-02.jpeg";
import gallery03 from "../../../assets/images/Gallery/gallery-03.jpeg";

const articles = [
  {
    slug: "virtual-tour-heritage-sites",
    title: "OHI Launches Virtual Tour of Nigerian Heritage Sites on Google Arts & Culture Nigeria",
    date: "June 5, 2023",
    categories: ["Business", "Creative", "Strategy"],
    image: gallery01,
    content: [
      {
        type: "paragraph",
        text: "Olympian House International (OHI) is proud to announce the launch of a groundbreaking virtual tour experience featuring some of Nigeria's most iconic heritage sites, now available on Google Arts & Culture. This initiative marks a significant milestone in our mission to preserve and amplify Africa's rich cultural narrative for global audiences.",
      },
      {
        type: "paragraph",
        text: "The virtual tours bring to life some of Nigeria's most treasured cultural landmarks, allowing visitors from around the world to explore these sites without leaving their homes. This project is part of our broader commitment to using cutting-edge technology and storytelling to connect people with Africa's heritage in a way that is both accessible and deeply respectful of local communities.",
      },
      {
        type: "heading",
        text: "Preserving Heritage Through Technology",
      },
      {
        type: "paragraph",
        text: "Working closely with local communities, historians, and cultural institutions, OHI's team of documentary filmmakers and digital storytellers spent months capturing high-resolution imagery, 360-degree footage, and detailed narratives of each site. The result is an immersive experience that not only showcases the physical beauty of these locations but also tells the human stories behind them.",
      },
      {
        type: "paragraph",
        text: "\"Africa's development story is worth billions. Most of it is never told well enough to unlock that value,\" said a senior OHI producer. \"This project is our answer to that challenge — making heritage visible, accessible, and meaningful for the next generation, while creating a digital archive that will outlast any single generation.\"",
      },
      {
        type: "heading",
        text: "Reach and Impact",
      },
      {
        type: "paragraph",
        text: "The platform integrates seamlessly with Google Arts & Culture's existing infrastructure, meaning users can access the tours directly through the Google Arts & Culture website and app, reaching a global audience of millions. Schools, universities, researchers, and curious individuals worldwide now have a window into Nigeria's cultural soul.",
      },
      {
        type: "paragraph",
        text: "Beyond the digital experience, this project has had tangible impacts on the local communities surrounding the featured heritage sites. By creating global visibility, OHI hopes to drive increased interest in cultural tourism, support local economies, and encourage preservation efforts that might otherwise lack the international attention they deserve.",
      },
      {
        type: "heading",
        text: "Community-Led Storytelling",
      },
      {
        type: "paragraph",
        text: "Local guides, historians, and community leaders were actively involved throughout the production process, ensuring that the tours reflect authentic perspectives and respect local sensitivities. This collaborative approach is central to OHI's philosophy of storytelling that serves communities rather than extracting from them.",
      },
      {
        type: "paragraph",
        text: "This launch represents the first phase of a larger initiative. OHI plans to expand the virtual tour collection to include heritage sites across multiple African countries, creating a comprehensive digital archive of the continent's cultural legacy — one that institutions, partners, and ordinary people can access and share freely.",
      },
    ],
  },
  {
    slug: "video-awareness-market-leads",
    title: "Why is video one of the best ways of creating awareness and generating market leads?",
    date: "February 8, 2023",
    categories: ["Business", "Creative", "Strategy"],
    image: gallery02,
    content: [
      {
        type: "paragraph",
        text: "In today's fast-paced digital landscape, capturing and holding your audience's attention is more challenging than ever. Video has emerged as the most powerful medium for achieving this goal — and the statistics back this up consistently. Whether you are a development organisation communicating programme impact or a private-sector brand building market presence, video delivers results that no other format can match.",
      },
      {
        type: "heading",
        text: "The Power of Visual Communication",
      },
      {
        type: "paragraph",
        text: "Human brains process visual information 60,000 times faster than text. This fundamental aspect of human cognition is why video content consistently outperforms written content in terms of engagement, retention, and conversion. When you show your audience what you do rather than simply telling them, the message lands deeper and stays longer.",
      },
      {
        type: "paragraph",
        text: "For organisations working in development, investment, and institutional communication, video offers a unique ability to bridge the gap between complex technical work and human understanding. A well-produced impact documentary can communicate in four minutes what a 40-page report struggles to convey in full — and it does so in a way that stakeholders actually remember.",
      },
      {
        type: "heading",
        text: "Building Trust and Credibility",
      },
      {
        type: "paragraph",
        text: "Trust is the currency of institutional relationships. When a potential donor, investor, or partner sees the real faces, real places, and real outcomes behind your work, they are far more likely to believe in your mission. Video provides the kind of transparent, evidence-based communication that modern institutional audiences demand.",
      },
      {
        type: "paragraph",
        text: "At OHI, we create videos that are full of genuine stories and authentic moments while maintaining the highest production standards. This combination — emotional resonance paired with institutional credibility — is what makes our content effective for development partners, private-sector clients, and public institutions alike.",
      },
      {
        type: "heading",
        text: "Generating Qualified Leads",
      },
      {
        type: "paragraph",
        text: "Video does not just build awareness — it drives action. Studies show that including video on a landing page can increase conversion rates significantly. For organisations seeking funding, partnerships, or policy influence, video serves as a powerful conversion tool throughout the stakeholder engagement process.",
      },
      {
        type: "paragraph",
        text: "Programme visibility films, investor pitch videos, and impact documentaries serve specific functions in the lead generation journey. They position your organisation as professional, credible, and worth investing in before a single meeting takes place — doing the pre-selling work that no brochure or email campaign can do as effectively.",
      },
      {
        type: "heading",
        text: "Multi-Platform Reach",
      },
      {
        type: "paragraph",
        text: "One of the most compelling advantages of video is its versatility. A single well-produced video can be repurposed across websites, social media channels, donor presentations, stakeholder reports, and conference settings. This multi-platform reach amplifies your investment and ensures your message reaches audiences wherever they are.",
      },
      {
        type: "paragraph",
        text: "OHI structures every video project with this versatility in mind, delivering outputs that can travel across channels and continue working for your organisation long after the initial production is complete. In a world saturated with content, video remains the most effective way to cut through the noise and build lasting connections with the audiences that matter most to your mission.",
      },
    ],
  },
  {
    slug: "corporate-video-importance",
    title: "Why is a company's corporate video important?",
    date: "November 5, 2022",
    categories: ["Business", "Creative", "Strategy"],
    image: gallery03,
    content: [
      {
        type: "paragraph",
        text: "In an era where first impressions are formed in seconds and competition for attention is fierce, a corporate video is no longer a luxury — it is a strategic necessity. For organisations across Africa's development and private sectors, a well-crafted corporate video serves as the foundation of institutional communication, establishing credibility before a single conversation takes place.",
      },
      {
        type: "heading",
        text: "Your Organisation's Story, Told Properly",
      },
      {
        type: "paragraph",
        text: "A corporate video does something no brochure, website copy, or PowerPoint deck can do: it brings your organisation to life. When stakeholders see your team, your facilities, your work in the field, and hear directly from the communities and partners you serve, they gain an understanding of your value that written materials simply cannot convey.",
      },
      {
        type: "paragraph",
        text: "This is especially true for organisations working in complex sectors — development finance, humanitarian response, agricultural transformation, environmental sustainability. The more complex your work, the more important it is to have a visual narrative that makes it accessible to a wide range of audiences, from technical experts to community stakeholders.",
      },
      {
        type: "heading",
        text: "Building Institutional Trust",
      },
      {
        type: "paragraph",
        text: "For institutions seeking funding, partnerships, and policy support, trust is everything. A professionally produced corporate video signals that your organisation is serious, well-resourced, and capable of delivering at the standard your stakeholders expect. It communicates professionalism before you say a word.",
      },
      {
        type: "paragraph",
        text: "OHI's corporate video production approach is built around this principle. We do not just capture footage — we craft a narrative strategy that positions your organisation exactly where it needs to be in the minds of decision-makers, investors, and institutional partners. Every frame is intentional; every word is chosen to serve your strategic communication goals.",
      },
      {
        type: "heading",
        text: "Internal Alignment and Culture",
      },
      {
        type: "paragraph",
        text: "Corporate videos are not only for external audiences. Internally, a compelling organisational film can align teams around shared values and mission, support onboarding for new staff, and create a sense of shared identity and purpose. Organisations with strong internal communication cultures consistently outperform those without — and a well-produced internal corporate video is one of the most efficient tools for building that culture.",
      },
      {
        type: "heading",
        text: "A Long-Term Communication Asset",
      },
      {
        type: "paragraph",
        text: "Unlike many communication investments, a quality corporate video has a long shelf life. When produced to a high standard with a clear strategic intent, it can serve your organisation effectively for several years across multiple platforms — from your website and social media to stakeholder presentations, conferences, and funding applications.",
      },
      {
        type: "paragraph",
        text: "The key is approaching the corporate video not as a one-time production task, but as a strategic communication asset. At OHI, we help organisations think through the full lifecycle of their video content — from initial concept and production through to deployment strategy and impact measurement. The result is a video that does not just look good, but actively works toward your organisational goals.",
      },
      {
        type: "paragraph",
        text: "Whether you are a development programme seeking renewed funding, a private-sector company launching in a new market, or a multilateral institution communicating impact to global stakeholders, a corporate video is one of the most powerful tools available to you. Invest in it wisely, and it will continue to return value long into the future.",
      },
    ],
  },
];

const ArticlePage = () => {
  const { slug } = useParams();
  const articleIndex = articles.findIndex((a) => a.slug === slug);
  const article = articles[articleIndex];

  if (!article) return <Navigate to="/" replace />;

  const prev = articles[articleIndex - 1] ?? null;
  const next = articles[articleIndex + 1] ?? null;

  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="relative h-[420px] overflow-hidden bg-[#091826] sm:h-[500px]">
        <img
          src={article.image}
          alt={article.title}
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.30)_0%,rgba(8,10,15,0.80)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#e97a2f]" />

        <div className="relative z-10 container flex h-full flex-col justify-end pb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.categories.map((cat) => (
              <span
                key={cat}
                className="bg-[#e97a2f] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-white"
              >
                {cat}
              </span>
            ))}
          </div>
          <h1 className="max-w-4xl text-3xl font-black uppercase text-white tracking-tight leading-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          <p className="mt-3 flex items-center gap-2 text-sm text-white/70">
            <CalendarDays className="h-4 w-4 shrink-0" />
            {article.date}
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="container max-w-3xl py-14 sm:py-20">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#e97a2f] transition hover:text-[#c86218] mb-10"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Home
        </Link>

        <div className="space-y-6">
          {article.content.map((block, i) => {
            if (block.type === "heading") {
              return (
                <h2
                  key={i}
                  className="pt-4 text-2xl font-black uppercase text-[#0d1f2d] tracking-tight"
                >
                  {block.text}
                </h2>
              );
            }
            return (
              <p key={i} className="text-base leading-8 text-[#4e5a67]">
                {block.text}
              </p>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 border-t border-[#e5e5e5] pt-10">
          <p className="text-[#e97a2f] text-sm font-semibold mb-2 tracking-wide">
            Work with OHI
          </p>
          <h3 className="text-3xl font-black uppercase text-[#0d1f2d] tracking-tight leading-none mb-4">
            Let's tell your story
          </h3>
          <p className="text-sm leading-7 text-[#4e5a67] max-w-xl mb-6">
            Ready to bring your programme or project to life? Share your objectives and we'll show you what's possible.
          </p>
          <Link
            to="/contact"
            className="inline-flex h-11 items-center gap-2 bg-[#e97a2f] px-6 text-sm font-bold text-white transition hover:bg-[#d96f1f]"
          >
            Start a conversation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Prev / Next */}
        {(prev || next) && (
          <div className="mt-12 grid gap-4 border-t border-[#e5e5e5] pt-10 sm:grid-cols-2">
            {prev ? (
              <Link
                to={`/news/${prev.slug}`}
                className="group flex flex-col gap-1 bg-[#f8f9fb] p-5 transition hover:bg-[#fff4ec]"
              >
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#e97a2f]">
                  <ArrowLeft className="h-3 w-3" /> Previous
                </span>
                <span className="text-sm font-bold text-[#0d1f2d] leading-snug group-hover:text-[#e97a2f] transition line-clamp-2">
                  {prev.title}
                </span>
              </Link>
            ) : <div />}

            {next ? (
              <Link
                to={`/news/${next.slug}`}
                className="group flex flex-col items-end gap-1 bg-[#f8f9fb] p-5 transition hover:bg-[#fff4ec] text-right"
              >
                <span className="flex items-center gap-1 text-xs font-semibold uppercase tracking-wide text-[#e97a2f]">
                  Next <ArrowRight className="h-3 w-3" />
                </span>
                <span className="text-sm font-bold text-[#0d1f2d] leading-snug group-hover:text-[#e97a2f] transition line-clamp-2">
                  {next.title}
                </span>
              </Link>
            ) : <div />}
          </div>
        )}
      </div>
    </div>
  );
};

export default ArticlePage;
