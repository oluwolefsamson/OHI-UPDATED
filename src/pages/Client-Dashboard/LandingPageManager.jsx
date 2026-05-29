import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "sonner";
import { useLandingPageConfig } from "../../context/LandingPageConfigContext";
import { ArrowRightIcon, RotateCcwIcon, SparklesIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../components/ui/card";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import { Textarea } from "../../components/ui/textarea";
import { FileInput } from "../../components/ui/file-input";
import { motion } from "framer-motion";
import { AnimatedText } from "../../components/ui/AnimatedText";
import { useNotifications } from "../../context/NotificationContext";
import { landingPageDefaults } from "../../data/landingPageDefaults";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
};

function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function SectionCard({ id, title, description, children, onSave, saveLabel = "Save changes" }) {
  return (
    <motion.div variants={itemVariants}>
      <Card
        id={id}
        className="scroll-mt-24 overflow-hidden border-border/80 bg-card/95 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur"
      >
      <div className="h-1 bg-[linear-gradient(90deg,#0f4c81,#118ab2,#f4b942)]" />
      <CardHeader className="border-b border-border/60 px-6 py-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground">
          Section editor
        </p>
        <CardTitle className="mt-2 text-2xl text-foreground">{title}</CardTitle>
        {description && (
          <CardDescription className="mt-2 max-w-3xl text-sm leading-6">
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent className="px-6 py-6">
        {children}
        {onSave && (
          <div className="mt-8 flex justify-end border-t border-border/40 pt-5">
            <Button onClick={onSave} className="rounded-xl px-6 font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] bg-[#05c1ff] text-white hover:brightness-110 transition">
              {saveLabel}
            </Button>
          </div>
        )}
      </CardContent>
      </Card>
    </motion.div>
  );
}

function Field({ label, children, hint }) {
  return (
    <label className="block">
      <Label className="mb-2 block text-sm font-semibold text-foreground">
        {label}
      </Label>
      {children}
      {hint && <span className="mt-2 block text-xs text-muted-foreground">{hint}</span>}
    </label>
  );
}

function TextInput(props) {
  return (
    <Input
      {...props}
      className={`w-full rounded-2xl ${props.className || ""}`}
    />
  );
}

function TextArea(props) {
  return (
    <Textarea
      {...props}
      className={`w-full rounded-2xl ${props.className || ""}`}
    />
  );
}

function ImageField({ label, value, onChange, hint }) {
  return (
    <Field label={label} hint={hint}>
      <FileInput label="Choose file" value={value} accept="image/*" onChange={onChange} previewAlt={label} />
    </Field>
  );
}

export default function LandingPageManager() {
  const { config, setConfig, resetConfig } = useLandingPageConfig();
  const { addNotification } = useNotifications();
  const [draftConfig, setDraftConfig] = React.useState(config);
  const location = useLocation();

  useEffect(() => {
    setDraftConfig(config);
  }, [config]);

  useEffect(() => {
    if (!location.hash) return;

    const targetId = location.hash.replace("#", "");
    const element = document.getElementById(targetId);
    if (element) {
      window.requestAnimationFrame(() => {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }
  }, [location.hash]);

  const updateTheme = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      theme: {
        ...current.theme,
        [key]: value,
      },
    }));
  };

  const updateHero = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      hero: {
        ...current.hero,
        [key]: value,
      },
    }));
  };

  const updateHomePage = (section, key, value) => {
    setDraftConfig((current) => ({
      ...current,
      homePage: {
        ...current.homePage,
        [section]: {
          ...current.homePage?.[section],
          [key]: value,
        },
      },
    }));
  };

  const updateHomePageArrayItem = (section, arrayKey, index, key, value) => {
    setDraftConfig((current) => {
      const items = [...(current.homePage?.[section]?.[arrayKey] ?? [])];
      items[index] = { ...items[index], [key]: value };
      return {
        ...current,
        homePage: {
          ...current.homePage,
          [section]: {
            ...current.homePage?.[section],
            [arrayKey]: items,
          },
        },
      };
    });
  };

  const updateHeroSlide = (index, key, value) => {
    setDraftConfig((current) => {
      const slides = [...(current.hero.slides ?? [])];
      slides[index] = { ...slides[index], [key]: value };
      return {
        ...current,
        hero: {
          ...current.hero,
          slides,
        },
      };
    });
  };

  const updateAbout = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      about: {
        ...current.about,
        [key]: value,
      },
    }));
  };

  const updateAboutOverlay = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      about: {
        ...current.about,
        overlay: {
          ...current.about.overlay,
          [key]: value,
        },
      },
    }));
  };

  const updateWhyChoose = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      whyChoose: {
        ...current.whyChoose,
        [key]: value,
      },
    }));
  };

  const updateWhyChooseCard = (index, key, value) => {
    setDraftConfig((current) => {
      const cards = [...current.whyChoose.cards];
      cards[index] = { ...cards[index], [key]: value };
      return {
        ...current,
        whyChoose: {
          ...current.whyChoose,
          cards,
        },
      };
    });
  };

  const updateFooter = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      footer: {
        ...current.footer,
        [key]: value,
      },
    }));
  };

  const updateServices = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      services: {
        ...current.services,
        [key]: value,
      },
    }));
  };

  const updateServiceCard = (index, key, value) => {
    setDraftConfig((current) => {
      const cards = [...current.services.cards];
      cards[index] = { ...cards[index], [key]: value };
      return {
        ...current,
        services: {
          ...current.services,
          cards,
        },
      };
    });
  };

  const updateGallery = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      gallery: {
        ...current.gallery,
        [key]: value,
      },
    }));
  };

  const updateGalleryItem = (index, key, value) => {
    setDraftConfig((current) => {
      const items = [...current.gallery.items];
      items[index] = { ...items[index], [key]: value };
      return {
        ...current,
        gallery: {
          ...current.gallery,
          items,
        },
      };
    });
  };

  const updateGalleryStories = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      galleryStories: {
        ...current.galleryStories,
        [key]: value,
      },
    }));
  };

  const updateGalleryLead = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      galleryStories: {
        ...current.galleryStories,
        lead: {
          ...current.galleryStories.lead,
          [key]: value,
        },
      },
    }));
  };

  const updateGallerySupportIntro = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      galleryStories: {
        ...current.galleryStories,
        supportIntro: {
          ...current.galleryStories.supportIntro,
          [key]: value,
        },
      },
    }));
  };

  const updateGallerySupportCard = (index, key, value) => {
    setDraftConfig((current) => {
      const supportCards = [...current.galleryStories.supportCards];
      supportCards[index] = { ...supportCards[index], [key]: value };
      return {
        ...current,
        galleryStories: {
          ...current.galleryStories,
          supportCards,
        },
      };
    });
  };

  const updateGalleryStrip = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      galleryStories: {
        ...current.galleryStories,
        [key]: value,
      },
    }));
  };

  const updateGalleryStripItem = (index, key, value) => {
    setDraftConfig((current) => {
      const stripItems = [...current.galleryStories.stripItems];
      stripItems[index] = { ...stripItems[index], [key]: value };
      return {
        ...current,
        galleryStories: {
          ...current.galleryStories,
          stripItems,
        },
      };
    });
  };

  const updateVideo = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      video: {
        ...current.video,
        [key]: value,
      },
    }));
  };

  const updateVideoLead = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      video: {
        ...current.video,
        lead: {
          ...current.video.lead,
          [key]: value,
        },
      },
    }));
  };

  const updateVideoClip = (index, key, value) => {
    setDraftConfig((current) => {
      const clips = [...current.video.clips];
      clips[index] = { ...clips[index], [key]: value };
      return {
        ...current,
        video: {
          ...current.video,
          clips,
        },
      };
    });
  };

  const updateProfile = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      profile: {
        ...current.profile,
        [key]: value,
      },
    }));
  };

  const updateCompanyProfile = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      companyProfile: {
        ...current.companyProfile,
        [key]: value,
      },
    }));
  };

  const updateCompanyProfileSection = (section, key, value) => {
    setDraftConfig((current) => ({
      ...current,
      companyProfile: {
        ...current.companyProfile,
        [section]: {
          ...current.companyProfile?.[section],
          [key]: value,
        },
      },
    }));
  };

  const updateAboutPage = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      aboutPage: {
        ...current.aboutPage,
        [key]: value,
      },
    }));
  };

  const updateAboutPageSection = (section, key, value) => {
    setDraftConfig((current) => ({
      ...current,
      aboutPage: {
        ...current.aboutPage,
        [section]: {
          ...current.aboutPage?.[section],
          [key]: value,
        },
      },
    }));
  };

  const updateServicesPage = (section, key, value) => {
    setDraftConfig((current) => ({
      ...current,
      servicesPage: {
        ...current.servicesPage,
        [section]: {
          ...current.servicesPage?.[section],
          [key]: value,
        },
      },
    }));
  };

  const updateServicesPageRoot = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      servicesPage: {
        ...current.servicesPage,
        [key]: value,
      },
    }));
  };

  const updatePortfolioPage = (section, key, value) => {
    setDraftConfig((current) => ({
      ...current,
      portfolioPage: {
        ...current.portfolioPage,
        [section]: {
          ...current.portfolioPage?.[section],
          [key]: value,
        },
      },
    }));
  };

  const updateLeadershipPage = (section, key, value) => {
    setDraftConfig((current) => ({
      ...current,
      leadershipPage: {
        ...current.leadershipPage,
        [section]: {
          ...current.leadershipPage?.[section],
          [key]: value,
        },
      },
    }));
  };

  const updateBackgroundPage = (section, key, value) => {
    setDraftConfig((current) => ({
      ...current,
      backgroundPage: {
        ...current.backgroundPage,
        [section]: {
          ...current.backgroundPage?.[section],
          [key]: value,
        },
      },
    }));
  };

  const updateImpactPage = (section, key, value) => {
    setDraftConfig((current) => ({
      ...current,
      impactPage: {
        ...current.impactPage,
        [section]: {
          ...current.impactPage?.[section],
          [key]: value,
        },
      },
    }));
  };

  const updateWhoWeServePage = (section, key, value) => {
    setDraftConfig((current) => ({
      ...current,
      whoWeServePage: {
        ...current.whoWeServePage,
        [section]: {
          ...current.whoWeServePage?.[section],
          [key]: value,
        },
      },
    }));
  };

  const updateVoices = (key, value) => {
    setDraftConfig((current) => ({
      ...current,
      voices: {
        ...current.voices,
        [key]: value,
      },
    }));
  };

  const updateVoiceReview = (index, key, value) => {
    setDraftConfig((current) => {
      const reviews = [...current.voices.reviews];
      reviews[index] = { ...reviews[index], [key]: value };
      return {
        ...current,
        voices: {
          ...current.voices,
          reviews,
        },
      };
    });
  };

  const handleImageUpload = async (event, apply) => {
    const file = event.target.files?.[0];
    if (!file) return;

    try {
      const dataUrl = await readFileAsDataUrl(file);
      apply(String(dataUrl));
      toast.success("Image updated");
    } catch {
      toast.error("Could not read that image");
    } finally {
      event.target.value = "";
    }
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 lg:px-8 lg:py-8"
    >
      <motion.div variants={itemVariants} className="mb-8 overflow-hidden rounded-[32px] border border-slate-200/80 bg-white/95 p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-primaryColor">
              OHI Site Manager
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-headingColor sm:text-5xl">
              <AnimatedText text="Control the public OHI site from one focused editor" />
            </h1>
            <p className="mt-4 max-w-3xl text__para">
              Edit the public site pages and shared sections from one place. Changes save in this browser and show on the public site.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button
                type="button"
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold shadow-[0_16px_40px_rgba(15,76,129,0.24)] transition hover:translate-y-[-1px] hover:brightness-110"
                onClick={async () => {
                  await resetConfig();
                  setDraftConfig(landingPageDefaults);
                  toast.success("Site content reset to defaults");
                }}
              >
                <RotateCcwIcon className="h-4 w-4" />
                Reset defaults
              </Button>
              <Button asChild variant="outline" className="rounded-full px-5 py-3 text-sm font-semibold">
                <Link to="/dashboard/overview">
                  Back to overview
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <div className="flex items-center gap-2">
                <SparklesIcon className="h-4 w-4 text-[#0f4c81]" />
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Live preview
                </p>
              </div>
              <p className="mt-2 text-sm leading-6 text-textColor">
                Changes update immediately in the browser.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Focus
              </p>
              <p className="mt-2 text-sm leading-6 text-textColor">
                Cleaner hierarchy, less repetition, clearer editing flow.
              </p>
            </div>
            <div className="rounded-2xl bg-slate-50/80 p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Scope
              </p>
              <p className="mt-2 text-sm leading-6 text-textColor">
                Site pages, shared sections, theme settings, and content blocks.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      <SectionCard
        id="what-can-be-edited"
        title="What can be edited now"
        description="The site pages and shared sections currently connected to the admin draftConfig."
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {[
            "Home hero copy, CTAs, stats, and images",
            "About page copy, image, and overlay card",
            "Why OHI cards, links, and icons",
            "Who We Serve cards and copy",
            "Documentary page sections and featured story blocks",
            "Services page copy, formats, and showcase",
            "Portfolio page highlights and project cards",
            "Leadership page hero, bio, and highlights",
            "Video / reel content and clips",
            "Mission, vision, and values",
            "Selected Voices reviews and quotes",
            "Theme colors and footer copy",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm leading-6 text-textColor"
            >
              {item}
            </div>
          ))}
        </div>
      </SectionCard>

      <div className="space-y-6">
        <SectionCard id="home-hero" title="Hero" description="Edit the homepage hero slide deck." onSave={() => { setConfig((current) => ({ ...current, hero: draftConfig.hero })); toast.success("Hero saved!"); }} saveLabel="Update Hero">
          <div className="grid gap-4 xl:grid-cols-2">
            {(draftConfig.hero.slides ?? []).map((slide, index) => (
              <div key={`${slide.kicker}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Field label={`Slide ${index + 1} kicker`}><TextInput value={slide.kicker} onChange={(e) => updateHeroSlide(index, "kicker", e.target.value)} /></Field>
                <Field label={`Slide ${index + 1} title`}><TextInput value={slide.title} onChange={(e) => updateHeroSlide(index, "title", e.target.value)} /></Field>
                <Field label={`Slide ${index + 1} subtitle`}><TextInput value={slide.subtitle} onChange={(e) => updateHeroSlide(index, "subtitle", e.target.value)} /></Field>
                <Field label={`Slide ${index + 1} description`}><TextArea rows={4} value={slide.description} onChange={(e) => updateHeroSlide(index, "description", e.target.value)} /></Field>
                <ImageField
                  label={`Slide ${index + 1} image`}
                  value={slide.image || ""}
                  onChange={(e) =>
                    handleImageUpload(e, (value) => updateHeroSlide(index, "image", value))
                  }
                />
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard id="home-about" title="Olympian House International" description="Edit the homepage introduction block." onSave={() => { setConfig((current) => ({ ...current, homePage: draftConfig.homePage })); toast.success("About section saved!"); }} saveLabel="Update Section">
          <div className="space-y-4">
            <Field label="Title"><TextInput value={draftConfig.homePage?.about?.title || ""} onChange={(e) => updateHomePage("about", "title", e.target.value)} /></Field>
            <Field label="Description"><TextArea rows={4} value={draftConfig.homePage?.about?.description || ""} onChange={(e) => updateHomePage("about", "description", e.target.value)} /></Field>
            <Field label="Button label"><TextInput value={draftConfig.homePage?.about?.ctaLabel || ""} onChange={(e) => updateHomePage("about", "ctaLabel", e.target.value)} /></Field>
            <Field label="Button link"><TextInput value={draftConfig.homePage?.about?.ctaHref || ""} onChange={(e) => updateHomePage("about", "ctaHref", e.target.value)} /></Field>
            <ImageField
              label="Section image"
              value={draftConfig.homePage?.about?.image || ""}
              onChange={(e) =>
                handleImageUpload(e, (value) => updateHomePage("about", "image", value))
              }
            />
          </div>
        </SectionCard>

        <SectionCard id="home-difference" title="The OHI difference" description="Edit the homepage difference block." onSave={() => { setConfig((current) => ({ ...current, homePage: draftConfig.homePage })); toast.success("Difference section saved!"); }} saveLabel="Update Section">
          <div className="space-y-4">
            <Field label="Title"><TextInput value={draftConfig.homePage?.difference?.title || ""} onChange={(e) => updateHomePage("difference", "title", e.target.value)} /></Field>
            <Field label="Description"><TextInput value={draftConfig.homePage?.difference?.description || ""} onChange={(e) => updateHomePage("difference", "description", e.target.value)} /></Field>
            <ImageField label="Section image" value={draftConfig.homePage?.difference?.image || ""} onChange={(e) => handleImageUpload(e, (value) => updateHomePage("difference", "image", value))} />
            <div className="grid gap-4 lg:grid-cols-2">
              {(draftConfig.homePage?.difference?.cards || []).map((card, index) => (
                <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Field label={`Card ${index + 1} title`}><TextInput value={card.title || ""} onChange={(e) => updateHomePageArrayItem("difference", "cards", index, "title", e.target.value)} /></Field>
                  <Field label={`Card ${index + 1} description`}><TextArea rows={4} value={card.description || ""} onChange={(e) => updateHomePageArrayItem("difference", "cards", index, "description", e.target.value)} /></Field>
                  <ImageField label={`Card ${index + 1} image`} value={card.image || ""} onChange={(e) => handleImageUpload(e, (value) => updateHomePageArrayItem("difference", "cards", index, "image", value))} />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard id="home-heritage" title="OHI Google Arts & Culture Heritage Collection" description="Edit the heritage collection block." onSave={() => { setConfig((current) => ({ ...current, homePage: draftConfig.homePage })); toast.success("Heritage section saved!"); }} saveLabel="Update Section">
          <div className="space-y-4">
            <Field label="Title"><TextInput value={draftConfig.homePage?.heritage?.title || ""} onChange={(e) => updateHomePage("heritage", "title", e.target.value)} /></Field>
            <Field label="Description"><TextArea rows={4} value={draftConfig.homePage?.heritage?.description || ""} onChange={(e) => updateHomePage("heritage", "description", e.target.value)} /></Field>
            <Field label="Button label"><TextInput value={draftConfig.homePage?.heritage?.ctaLabel || ""} onChange={(e) => updateHomePage("heritage", "ctaLabel", e.target.value)} /></Field>
            <Field label="Button link"><TextInput value={draftConfig.homePage?.heritage?.ctaHref || ""} onChange={(e) => updateHomePage("heritage", "ctaHref", e.target.value)} /></Field>
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Heritage images
              </p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                These images come from the shared Gallery section and are shown here as a preview. Edit the actual images in the Gallery editor below.
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {(draftConfig.gallery?.items || []).slice(4, 12).map((item, index) => (
                  <div key={item.title || index} className="overflow-hidden rounded-2xl bg-slate-50 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                    <img
                      src={item.image || ""}
                      alt={item.title || `Heritage ${index + 1}`}
                      className="h-32 w-full object-cover"
                    />
                    <div className="p-3">
                      <p className="text-xs font-medium text-slate-700">{item.title || `Heritage ${index + 1}`}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="home-leadership" title="Leadership and storytellers" description="Edit the leadership feature block." onSave={() => { setConfig((current) => ({ ...current, homePage: draftConfig.homePage })); toast.success("Leadership section saved!"); }} saveLabel="Update Section">
          <div className="space-y-4">
            <Field label="Eyebrow"><TextInput value={draftConfig.homePage?.leadership?.eyebrow || ""} onChange={(e) => updateHomePage("leadership", "eyebrow", e.target.value)} /></Field>
            <Field label="Title"><TextInput value={draftConfig.homePage?.leadership?.title || ""} onChange={(e) => updateHomePage("leadership", "title", e.target.value)} /></Field>
            <Field label="Description"><TextArea rows={4} value={draftConfig.homePage?.leadership?.description || ""} onChange={(e) => updateHomePage("leadership", "description", e.target.value)} /></Field>
            <Field label="Button label"><TextInput value={draftConfig.homePage?.leadership?.ctaLabel || ""} onChange={(e) => updateHomePage("leadership", "ctaLabel", e.target.value)} /></Field>
            <Field label="Button link"><TextInput value={draftConfig.homePage?.leadership?.ctaHref || ""} onChange={(e) => updateHomePage("leadership", "ctaHref", e.target.value)} /></Field>
            <ImageField
              label="Section image"
              value={draftConfig.homePage?.leadership?.image || ""}
              onChange={(e) =>
                handleImageUpload(e, (value) => updateHomePage("leadership", "image", value))
              }
            />
          </div>
        </SectionCard>

        <SectionCard id="home-programmes" title="Featured Programmes" description="Edit the featured programme cards." onSave={() => { setConfig((current) => ({ ...current, homePage: draftConfig.homePage })); toast.success("Programmes saved!"); }} saveLabel="Update Section">
          <div className="space-y-4">
            <Field label="Title"><TextInput value={draftConfig.homePage?.programmes?.title || ""} onChange={(e) => updateHomePage("programmes", "title", e.target.value)} /></Field>
            {(draftConfig.homePage?.programmes?.items || []).map((item, index) => (
              <div key={index} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <Field label={`Programme ${index + 1} title`}><TextInput value={item.title || ""} onChange={(e) => updateHomePageArrayItem("programmes", "items", index, "title", e.target.value)} /></Field>
                <Field label={`Programme ${index + 1} description`}><TextArea rows={4} value={item.description || ""} onChange={(e) => updateHomePageArrayItem("programmes", "items", index, "description", e.target.value)} /></Field>
                <ImageField
                  label={`Programme ${index + 1} image`}
                  value={item.image || ""}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      updateHomePageArrayItem("programmes", "items", index, "image", value)
                    )
                  }
                />
              </div>
            ))}
          </div>
        </SectionCard>

        <SectionCard id="home-storytellers" title="OHI Storytellers" description="Edit the public storyteller block text." onSave={() => { setConfig((current) => ({ ...current, homePage: draftConfig.homePage })); toast.success("Storytellers saved!"); }} saveLabel="Update Section">
          <div className="space-y-4">
            <Field label="Title"><TextInput value={draftConfig.homePage?.storytellers?.title || ""} onChange={(e) => updateHomePage("storytellers", "title", e.target.value)} /></Field>
            <Field label="Description"><TextArea rows={4} value={draftConfig.homePage?.storytellers?.description || ""} onChange={(e) => updateHomePage("storytellers", "description", e.target.value)} /></Field>
            <Field label="Button label"><TextInput value={draftConfig.homePage?.storytellers?.ctaLabel || ""} onChange={(e) => updateHomePage("storytellers", "ctaLabel", e.target.value)} /></Field>
            <Field label="Button link"><TextInput value={draftConfig.homePage?.storytellers?.ctaHref || ""} onChange={(e) => updateHomePage("storytellers", "ctaHref", e.target.value)} /></Field>
            <ImageField
              label="Section image"
              value={draftConfig.homePage?.storytellers?.image || ""}
              onChange={(e) =>
                handleImageUpload(e, (value) => updateHomePage("storytellers", "image", value))
              }
            />
          </div>
        </SectionCard>

        <SectionCard id="home-news" title="News & Blog" description="Edit the homepage news block text." onSave={() => { setConfig((current) => ({ ...current, homePage: draftConfig.homePage })); toast.success("News section saved!"); }} saveLabel="Update Section">
          <div className="space-y-4">
            <Field label="Title"><TextInput value={draftConfig.homePage?.news?.title || ""} onChange={(e) => updateHomePage("news", "title", e.target.value)} /></Field>
            <Field label="Description"><TextArea rows={4} value={draftConfig.homePage?.news?.description || ""} onChange={(e) => updateHomePage("news", "description", e.target.value)} /></Field>
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">News images</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                These images show the current cards used in the scrolling news block. Edit the Gallery items if you want to replace the source images.
              </p>
              <div className="mt-4 grid gap-3 md:grid-cols-3">
                {(draftConfig.homePage?.news?.images || []).map((image, index) => (
                  <div key={index} className="overflow-hidden rounded-2xl bg-slate-50 shadow-[0_8px_24px_rgba(15,23,42,0.06)]">
                    <img src={image || ""} alt={`News ${index + 1}`} className="h-28 w-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard id="home-supporters" title="OurPartners / Supporters" description="Edit the support strip on the homepage." onSave={() => { setConfig((current) => ({ ...current, homePage: draftConfig.homePage })); toast.success("Supporters saved!"); }} saveLabel="Update Section">
          <div className="space-y-4">
            <Field label="Title"><TextInput value={draftConfig.homePage?.supporters?.title || ""} onChange={(e) => updateHomePage("supporters", "title", e.target.value)} /></Field>
            <Field label="Description"><TextArea rows={4} value={draftConfig.homePage?.supporters?.description || ""} onChange={(e) => updateHomePage("supporters", "description", e.target.value)} /></Field>
            <Field label="Button label"><TextInput value={draftConfig.homePage?.supporters?.ctaLabel || ""} onChange={(e) => updateHomePage("supporters", "ctaLabel", e.target.value)} /></Field>
            <Field label="Button link"><TextInput value={draftConfig.homePage?.supporters?.ctaHref || ""} onChange={(e) => updateHomePage("supporters", "ctaHref", e.target.value)} /></Field>
          </div>
        </SectionCard>

        <SectionCard
          id="theme-settings"
          title="Theme Settings"
          description="Set the colors used across the public site."
          onSave={() => {
            setConfig((current) => ({ ...current, theme: draftConfig.theme }));
            toast.success("Theme Settings saved!");
            addNotification("Theme colors have been updated.", "success", "Theme Settings Saved");
          }}
          saveLabel="Update Theme Settings"
        >
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <Field label="Primary color">
              <Input
                type="color"
                value={draftConfig.theme.primaryColor}
                onChange={(e) => updateTheme("primaryColor", e.target.value)}
                className="h-12 w-full rounded-xl bg-background p-1"
              />
            </Field>
            <Field label="Accent color">
              <Input
                type="color"
                value={draftConfig.theme.accentColor}
                onChange={(e) => updateTheme("accentColor", e.target.value)}
                className="h-12 w-full rounded-xl bg-background p-1"
              />
            </Field>
          </div>
        </SectionCard>

        <SectionCard
          id="hero-content"
          title="Home Hero Slides"
          description="Update the rotating home slides, buttons, and slide images."
          onSave={() => {
            setConfig((current) => ({ ...current, hero: draftConfig.hero }));
            toast.success("Home hero saved!");
            addNotification("Home hero slides, CTAs, and images have been updated.", "success", "Home Hero Saved");
          }}
          saveLabel="Update Home Hero"
        >
          <div className="grid gap-4 xl:grid-cols-2">
            {(draftConfig.hero.slides ?? []).map((slide, index) => (
              <div key={`${slide.kicker}-${index}`} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="mb-4 overflow-hidden rounded-2xl border border-slate-200">
                  <img src={slide.image} alt={slide.title} className="h-36 w-full object-cover" />
                </div>
                <div className="grid gap-4">
                  <Field label={`Slide ${index + 1} kicker`}>
                    <TextInput
                      value={slide.kicker}
                      onChange={(e) => updateHeroSlide(index, "kicker", e.target.value)}
                    />
                  </Field>
                  <Field label={`Slide ${index + 1} title`}>
                    <TextInput
                      value={slide.title}
                      onChange={(e) => updateHeroSlide(index, "title", e.target.value)}
                    />
                  </Field>
                  <Field label={`Slide ${index + 1} subtitle`}>
                    <TextInput
                      value={slide.subtitle}
                      onChange={(e) => updateHeroSlide(index, "subtitle", e.target.value)}
                    />
                  </Field>
                  <Field label={`Slide ${index + 1} description`}>
                    <TextArea
                      rows={4}
                      value={slide.description}
                      onChange={(e) => updateHeroSlide(index, "description", e.target.value)}
                    />
                  </Field>
                  <ImageField
                    label={`Slide ${index + 1} image`}
                    value={slide.image}
                    onChange={(e) =>
                      handleImageUpload(e, (value) => updateHeroSlide(index, "image", value))
                    }
                  />
                </div>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-4 xl:col-span-2">
              <p className="text-sm leading-6 text-slate-600">
                The home page now reads from the slide deck above. The old title-line and stat fields were removed from the editor because the public hero no longer uses them.
              </p>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="about-page"
          title="About Page"
          description="Edit the public About page content."
          onSave={() => {
            setConfig((current) => ({ ...current, aboutPage: draftConfig.aboutPage }));
            toast.success("About page saved!");
            addNotification("About page content has been updated.", "success", "About Page Saved");
          }}
          saveLabel="Update About Page"
        >
          <div className="space-y-8">
            <div className="grid gap-4 xl:grid-cols-2">
              <Field label="Hero title">
                <TextInput
                  value={draftConfig.aboutPage?.hero?.title || ""}
                  onChange={(e) => updateAboutPageSection("hero", "title", e.target.value)}
                />
              </Field>
              <Field label="Hero description">
                <TextArea
                  rows={4}
                  value={draftConfig.aboutPage?.hero?.description || ""}
                  onChange={(e) => updateAboutPageSection("hero", "description", e.target.value)}
                />
              </Field>
              <Field label="Hero eyebrow">
                <TextInput
                  value={draftConfig.aboutPage?.hero?.badgeEyebrow || ""}
                  onChange={(e) => updateAboutPageSection("hero", "badgeEyebrow", e.target.value)}
                />
              </Field>
              <Field label="Hero badge description">
                <TextArea
                  rows={3}
                  value={draftConfig.aboutPage?.hero?.badgeDescription || ""}
                  onChange={(e) => updateAboutPageSection("hero", "badgeDescription", e.target.value)}
                />
              </Field>
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Intro block</h3>
                <Field label="Section title">
                  <TextInput value={draftConfig.aboutPage?.intro?.title || ""} onChange={(e) => updateAboutPageSection("intro", "title", e.target.value)} />
                </Field>
                <Field label="Section description">
                  <TextArea rows={4} value={draftConfig.aboutPage?.intro?.description || ""} onChange={(e) => updateAboutPageSection("intro", "description", e.target.value)} />
                </Field>
                <Field label="About label">
                  <TextInput value={draftConfig.aboutPage?.intro?.aboutLabel || ""} onChange={(e) => updateAboutPageSection("intro", "aboutLabel", e.target.value)} />
                </Field>
              <Field label="About text">
                  <TextArea rows={4} value={draftConfig.aboutPage?.intro?.aboutText || ""} onChange={(e) => updateAboutPageSection("intro", "aboutText", e.target.value)} />
                </Field>
                <ImageField
                  label="Intro image"
                  value={draftConfig.aboutPage?.intro?.image || ""}
                  onChange={(e) =>
                    handleImageUpload(e, (value) => updateAboutPageSection("intro", "image", value))
                  }
                />
                <ImageField
                  label="Intro detail image"
                  value={draftConfig.aboutPage?.intro?.detailImage || ""}
                  onChange={(e) =>
                    handleImageUpload(e, (value) => updateAboutPageSection("intro", "detailImage", value))
                  }
                />
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Difference / close</h3>
                <Field label="Difference title">
                  <TextInput value={draftConfig.aboutPage?.difference?.title || ""} onChange={(e) => updateAboutPageSection("difference", "title", e.target.value)} />
                </Field>
                <Field label="Difference description">
                  <TextArea rows={4} value={draftConfig.aboutPage?.difference?.description || ""} onChange={(e) => updateAboutPageSection("difference", "description", e.target.value)} />
                </Field>
                <Field label="Close title">
                  <TextInput value={draftConfig.aboutPage?.close?.title || ""} onChange={(e) => updateAboutPageSection("close", "title", e.target.value)} />
                </Field>
                <Field label="Close body">
                  <TextArea rows={4} value={draftConfig.aboutPage?.close?.body || ""} onChange={(e) => updateAboutPageSection("close", "body", e.target.value)} />
                </Field>
                <ImageField
                  label="Close image"
                  value={draftConfig.aboutPage?.close?.image || ""}
                  onChange={(e) =>
                    handleImageUpload(e, (value) => updateAboutPageSection("close", "image", value))
                  }
                />
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="why-ohi"
          title="Why OHI Section"
          description="Adjust the feature cards below About."
          onSave={() => {
            setConfig((current) => ({ ...current, whyChoose: draftConfig.whyChoose }));
            toast.success("Why OHI Section saved!");
            addNotification("Why OHI feature cards have been updated.", "success", "Why OHI Section Saved");
          }}
          saveLabel="Update Why OHI Section"
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={draftConfig.whyChoose.title}
                onChange={(e) => updateWhyChoose("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={draftConfig.whyChoose.description}
                onChange={(e) => updateWhyChoose("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 lg:grid-cols-3">
              {draftConfig.whyChoose.cards.map((card, index) => (
                <div key={card.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <Field label={`Card ${index + 1} title`}>
                    <TextInput
                      value={card.title}
                      onChange={(e) =>
                        updateWhyChooseCard(index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Card ${index + 1} description`}>
                    <TextArea
                      rows={5}
                      value={card.description}
                      onChange={(e) =>
                        updateWhyChooseCard(index, "description", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Card ${index + 1} link`}>
                    <TextInput
                      value={card.href}
                      onChange={(e) =>
                        updateWhyChooseCard(index, "href", e.target.value)
                      }
                    />
                  </Field>
                  <div className="rounded-2xl border border-dashed border-slate-200 bg-white p-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                      Card {index + 1} media icon
                    </p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primaryColor/10 text-primaryColor">
                        {card.icon ? (
                          <card.icon className="h-6 w-6" aria-hidden="true" />
                        ) : null}
                      </div>
                      <p className="text-sm leading-6 text-slate-600">
                        This icon is permanent and follows the code defaults.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="who-we-serve"
          title="Who We Serve"
          description="Edit the audience and services block shown on the public Who We Serve page."
          onSave={() => {
            setConfig((current) => ({ ...current, services: draftConfig.services }));
            toast.success("Who We Serve saved!");
          }}
          saveLabel="Update Who We Serve"
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={draftConfig.services.title}
                onChange={(e) => updateServices("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={draftConfig.services.description}
                onChange={(e) => updateServices("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
              {draftConfig.services.cards.map((card, index) => (
                <div
                  key={card.name}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Card ${index + 1} title`}>
                    <TextInput
                      value={card.name}
                      onChange={(e) =>
                        updateServiceCard(index, "name", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Card ${index + 1} description`}>
                    <TextArea
                      rows={4}
                      value={card.desc}
                      onChange={(e) =>
                        updateServiceCard(index, "desc", e.target.value)
                      }
                    />
                  </Field>
                  <div className="grid grid-cols-2 gap-4">
                    <Field label="Bg color">
                      <Input
                        type="color"
                        value={card.bgColor}
                        onChange={(e) =>
                          updateServiceCard(index, "bgColor", e.target.value)
                        }
                        className="h-12 w-full rounded-xl bg-background p-1"
                      />
                    </Field>
                    <Field label="Text color">
                      <Input
                        type="color"
                        value={card.textColor}
                        onChange={(e) =>
                          updateServiceCard(index, "textColor", e.target.value)
                        }
                        className="h-12 w-full rounded-xl bg-background p-1"
                      />
                    </Field>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="gallery"
          title="Documentaries / Portfolio"
          description="Control the main visual grid for the documentaries and portfolio-style sections."
          onSave={() => {
            setConfig((current) => ({ ...current, gallery: draftConfig.gallery }));
            toast.success("Gallery saved!");
            addNotification("Gallery grid and items have been updated.", "success", "Gallery Saved");
          }}
          saveLabel="Update Gallery"
        >
          <div className="space-y-5">
            <Field label="Gallery title">
              <TextInput
                value={draftConfig.gallery.title}
                onChange={(e) => updateGallery("title", e.target.value)}
              />
            </Field>
            <Field label="Gallery description">
              <TextArea
                rows={4}
                value={draftConfig.gallery.description}
                onChange={(e) => updateGallery("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 lg:grid-cols-2 xl:grid-cols-4">
              {draftConfig.gallery.items.map((item, index) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Item ${index + 1} title`}>
                    <TextInput
                      value={item.title}
                      onChange={(e) =>
                        updateGalleryItem(index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Item ${index + 1} category`}>
                    <TextInput
                      value={item.category}
                      onChange={(e) =>
                        updateGalleryItem(index, "category", e.target.value)
                      }
                    />
                  </Field>
                  <Field label="Span">
                    <TextInput
                      value={item.span || ""}
                      onChange={(e) =>
                        updateGalleryItem(index, "span", e.target.value)
                      }
                    />
                  </Field>
                  <ImageField
                    label={`Item ${index + 1} image`}
                    value={item.image}
                    onChange={(e) =>
                      handleImageUpload(e, (value) =>
                        updateGalleryItem(index, "image", value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="gallery-stories"
          title="Documentaries Story Strip"
          description="Edit the story-led documentary strip and feature cards."
          onSave={() => {
            setConfig((current) => ({ ...current, galleryStories: draftConfig.galleryStories }));
            toast.success("Gallery Stories saved!");
          }}
          saveLabel="Update Gallery Stories"
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={draftConfig.galleryStories.title}
                onChange={(e) => updateGalleryStories("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={draftConfig.galleryStories.description}
                onChange={(e) =>
                  updateGalleryStories("description", e.target.value)
                }
              />
            </Field>
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Lead story</h3>
                <Field label="Lead title">
                  <TextInput
                    value={draftConfig.galleryStories.lead.title}
                    onChange={(e) => updateGalleryLead("title", e.target.value)}
                  />
                </Field>
                <Field label="Lead category">
                  <TextInput
                    value={draftConfig.galleryStories.lead.category}
                    onChange={(e) =>
                      updateGalleryLead("category", e.target.value)
                    }
                  />
                </Field>
                <Field label="Lead description">
                  <TextArea
                    rows={4}
                    value={draftConfig.galleryStories.lead.description}
                    onChange={(e) =>
                      updateGalleryLead("description", e.target.value)
                    }
                  />
                </Field>
                <ImageField
                  label="Lead image"
                  value={draftConfig.galleryStories.lead.image}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      updateGalleryLead("image", value)
                    )
                  }
                />
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">
                  Support intro
                </h3>
                <Field label="Eyebrow">
                  <TextInput
                    value={draftConfig.galleryStories.supportIntro.eyebrow}
                    onChange={(e) =>
                      updateGallerySupportIntro("eyebrow", e.target.value)
                    }
                  />
                </Field>
                <Field label="Title">
                  <TextInput
                    value={draftConfig.galleryStories.supportIntro.title}
                    onChange={(e) =>
                      updateGallerySupportIntro("title", e.target.value)
                    }
                  />
                </Field>
                <Field label="Description">
                  <TextArea
                    rows={5}
                    value={draftConfig.galleryStories.supportIntro.description}
                    onChange={(e) =>
                      updateGallerySupportIntro("description", e.target.value)
                    }
                  />
                </Field>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {draftConfig.galleryStories.supportCards.map((card, index) => (
                <div
                  key={card.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Support card ${index + 1} title`}>
                    <TextInput
                      value={card.title}
                      onChange={(e) =>
                        updateGallerySupportCard(index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Support card ${index + 1} description`}>
                    <TextArea
                      rows={4}
                      value={card.description}
                      onChange={(e) =>
                        updateGallerySupportCard(
                          index,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </Field>
                  <Field label="Accent">
                    <TextInput
                      value={card.accent}
                      onChange={(e) =>
                        updateGallerySupportCard(index, "accent", e.target.value)
                      }
                    />
                  </Field>
                  <ImageField
                    label={`Support card ${index + 1} image`}
                    value={card.image}
                    onChange={(e) =>
                      handleImageUpload(e, (value) =>
                        updateGallerySupportCard(index, "image", value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Strip</h3>
                <Field label="Strip title">
                  <TextInput
                    value={draftConfig.galleryStories.stripTitle}
                    onChange={(e) =>
                      updateGalleryStrip("stripTitle", e.target.value)
                    }
                  />
                </Field>
                <Field label="Strip badge">
                  <TextInput
                    value={draftConfig.galleryStories.stripBadge}
                    onChange={(e) =>
                      updateGalleryStrip("stripBadge", e.target.value)
                    }
                  />
                </Field>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {draftConfig.galleryStories.stripItems.map((item, index) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <Field label={`Strip item ${index + 1} label`}>
                      <TextInput
                        value={item.label}
                        onChange={(e) =>
                          updateGalleryStripItem(index, "label", e.target.value)
                        }
                      />
                    </Field>
                    <Field label={`Strip item ${index + 1} description`}>
                      <TextArea
                        rows={3}
                        value={item.description}
                        onChange={(e) =>
                          updateGalleryStripItem(
                            index,
                            "description",
                            e.target.value
                          )
                        }
                      />
                    </Field>
                    <ImageField
                      label={`Strip item ${index + 1} image`}
                      value={item.image}
                      onChange={(e) =>
                        handleImageUpload(e, (value) =>
                          updateGalleryStripItem(index, "image", value)
                        )
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="video-section"
          title="Video / Reel"
          description="Edit the public video and reel content area for clips and promo materials."
          onSave={() => {
            setConfig((current) => ({ ...current, video: draftConfig.video }));
            toast.success("Video Section saved!");
            addNotification("Video section and clips have been updated.", "success", "Video Section Saved");
          }}
          saveLabel="Update Video Section"
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={draftConfig.video.title}
                onChange={(e) => updateVideo("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={draftConfig.video.description}
                onChange={(e) => updateVideo("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Lead video</h3>
                <Field label="Lead title">
                  <TextInput
                    value={draftConfig.video.lead.title}
                    onChange={(e) => updateVideoLead("title", e.target.value)}
                  />
                </Field>
                <Field label="Lead category">
                  <TextInput
                    value={draftConfig.video.lead.category}
                    onChange={(e) => updateVideoLead("category", e.target.value)}
                  />
                </Field>
                <Field label="Lead description">
                  <TextArea
                    rows={4}
                    value={draftConfig.video.lead.description}
                    onChange={(e) =>
                      updateVideoLead("description", e.target.value)
                    }
                  />
                </Field>
                <Field label="Lead embed URL">
                  <TextInput
                    value={draftConfig.video.lead.embedUrl || ""}
                    onChange={(e) =>
                      updateVideoLead("embedUrl", e.target.value)
                    }
                    placeholder="https://player.cloudinary.com/embed/?cloud_name=..."
                  />
                </Field>
                <ImageField
                  label="Lead poster"
                  value={draftConfig.video.lead.poster}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      updateVideoLead("poster", value)
                    )
                  }
                />
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Icon</h3>
                <ImageField
                  label="Video icon"
                  value={draftConfig.video.icon}
                  onChange={(e) =>
                    handleImageUpload(e, (value) => updateVideo("icon", value))
                  }
                />
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {draftConfig.video.clips.map((clip, index) => (
                <div
                  key={clip.title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Clip ${index + 1} title`}>
                    <TextInput
                      value={clip.title}
                      onChange={(e) =>
                        updateVideoClip(index, "title", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Clip ${index + 1} category`}>
                    <TextInput
                      value={clip.category}
                      onChange={(e) =>
                        updateVideoClip(index, "category", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Clip ${index + 1} description`}>
                    <TextArea
                      rows={4}
                      value={clip.description}
                      onChange={(e) =>
                        updateVideoClip(index, "description", e.target.value)
                      }
                    />
                  </Field>
                  <ImageField
                    label={`Clip ${index + 1} poster`}
                    value={clip.poster}
                    onChange={(e) =>
                      handleImageUpload(e, (value) =>
                        updateVideoClip(index, "poster", value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="mission-vision-values"
          title="Mission, Vision & Values"
          description="Edit the profile block that supports the About page and company story."
          onSave={() => {
            setConfig((current) => ({ ...current, profile: draftConfig.profile }));
            toast.success("Mission, Vision & Values saved!");
            addNotification("Mission, vision, and values have been updated.", "success", "Mission & Values Saved");
          }}
          saveLabel="Update Mission, Vision & Values"
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={draftConfig.profile.title}
                onChange={(e) => updateProfile("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={draftConfig.profile.description}
                onChange={(e) => updateProfile("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 xl:grid-cols-3">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Story</h3>
                <Field label="Story title">
                  <TextInput
                    value={draftConfig.profile.storyTitle}
                    onChange={(e) => updateProfile("storyTitle", e.target.value)}
                  />
                </Field>
                <Field label="Story description">
                  <TextArea
                    rows={5}
                    value={draftConfig.profile.storyDescription}
                    onChange={(e) =>
                      updateProfile("storyDescription", e.target.value)
                    }
                  />
                </Field>
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Mission</h3>
                <Field label="Mission title">
                  <TextInput
                    value={draftConfig.profile.missionTitle}
                    onChange={(e) =>
                      updateProfile("missionTitle", e.target.value)
                    }
                  />
                </Field>
                <Field label="Mission description">
                  <TextArea
                    rows={5}
                    value={draftConfig.profile.missionDescription}
                    onChange={(e) =>
                      updateProfile("missionDescription", e.target.value)
                    }
                  />
                </Field>
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Vision</h3>
                <Field label="Vision title">
                  <TextInput
                    value={draftConfig.profile.visionTitle}
                    onChange={(e) =>
                      updateProfile("visionTitle", e.target.value)
                    }
                  />
                </Field>
                <Field label="Vision description">
                  <TextArea
                    rows={5}
                    value={draftConfig.profile.visionDescription}
                    onChange={(e) =>
                      updateProfile("visionDescription", e.target.value)
                    }
                  />
                </Field>
              </div>
            </div>
            <div className="grid gap-4 lg:grid-cols-2">
              {draftConfig.profile.values.map((value, index) => (
                <Field key={index} label={`Value ${index + 1}`}>
                  <TextInput
                    value={value}
                    onChange={(e) => {
                      const next = [...draftConfig.profile.values];
                      next[index] = e.target.value;
                      updateProfile("values", next);
                    }}
                  />
                </Field>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="selected-voices"
          title="Partners / Reviews"
          description="Edit the testimonial-style quotes and partner reviews."
          onSave={() => {
            setConfig((current) => ({ ...current, voices: draftConfig.voices }));
            toast.success("Selected Voices saved!");
            addNotification("Testimonial quotes and reviews have been updated.", "success", "Selected Voices Saved");
          }}
          saveLabel="Update Selected Voices"
        >
          <div className="space-y-5">
            <Field label="Section title">
              <TextInput
                value={draftConfig.voices.title}
                onChange={(e) => updateVoices("title", e.target.value)}
              />
            </Field>
            <Field label="Section description">
              <TextArea
                rows={4}
                value={draftConfig.voices.description}
                onChange={(e) => updateVoices("description", e.target.value)}
              />
            </Field>
            <div className="grid gap-4 lg:grid-cols-2">
              {draftConfig.voices.reviews.map((review, index) => (
                <div
                  key={review.username}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                >
                  <Field label={`Review ${index + 1} name`}>
                    <TextInput
                      value={review.name}
                      onChange={(e) =>
                        updateVoiceReview(index, "name", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Review ${index + 1} username`}>
                    <TextInput
                      value={review.username}
                      onChange={(e) =>
                        updateVoiceReview(index, "username", e.target.value)
                      }
                    />
                  </Field>
                  <Field label={`Review ${index + 1} body`}>
                    <TextArea
                      rows={4}
                      value={review.body}
                      onChange={(e) =>
                        updateVoiceReview(index, "body", e.target.value)
                      }
                    />
                  </Field>
                  <ImageField
                    label={`Review ${index + 1} image`}
                    value={review.img}
                    onChange={(e) =>
                      handleImageUpload(e, (value) =>
                        updateVoiceReview(index, "img", value)
                      )
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="services-page"
          title="Services Page"
          description="Edit the public Services page content."
          onSave={() => {
            setConfig((current) => ({ ...current, servicesPage: draftConfig.servicesPage }));
            toast.success("Services page saved!");
          }}
          saveLabel="Update Services Page"
        >
          <div className="space-y-6">
            <Field label="Hero title">
              <TextInput value={draftConfig.servicesPage?.hero?.title || ""} onChange={(e) => updateServicesPage("hero", "title", e.target.value)} />
            </Field>
            <Field label="Hero description">
              <TextArea rows={4} value={draftConfig.servicesPage?.hero?.description || ""} onChange={(e) => updateServicesPage("hero", "description", e.target.value)} />
            </Field>
            <ImageField
              label="Hero image"
              value={draftConfig.servicesPage?.hero?.image || ""}
              onChange={(e) =>
                handleImageUpload(e, (value) => updateServicesPage("hero", "image", value))
              }
            />
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Intro</h3>
                <Field label="Section title">
                  <TextInput value={draftConfig.servicesPage?.servicesIntro?.title || ""} onChange={(e) => updateServicesPage("servicesIntro", "title", e.target.value)} />
                </Field>
                <Field label="Section description">
                  <TextArea rows={4} value={draftConfig.servicesPage?.servicesIntro?.description || ""} onChange={(e) => updateServicesPage("servicesIntro", "description", e.target.value)} />
                </Field>
                <ImageField
                  label="Intro image"
                  value={draftConfig.servicesPage?.introImage || ""}
                  onChange={(e) =>
                    handleImageUpload(e, (value) => updateServicesPageRoot("introImage", value))
                  }
                />
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Travel block</h3>
                <Field label="Travel title">
                  <TextInput value={draftConfig.servicesPage?.travel?.title || ""} onChange={(e) => updateServicesPage("travel", "title", e.target.value)} />
                </Field>
                <Field label="Travel description">
                  <TextArea rows={4} value={draftConfig.servicesPage?.travel?.description || ""} onChange={(e) => updateServicesPage("travel", "description", e.target.value)} />
                </Field>
              </div>
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {(draftConfig.servicesPage?.showcase || []).map((item, index) => (
                <div key={index} className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-lg font-bold text-headingColor">Showcase {index + 1}</h3>
                  <Field label={`Showcase ${index + 1} title`}>
                    <TextInput
                      value={item.title || ""}
                      onChange={(e) => {
                        const next = [...(draftConfig.servicesPage?.showcase || [])];
                        next[index] = { ...next[index], title: e.target.value };
                        setDraftConfig((current) => ({
                          ...current,
                          servicesPage: {
                            ...current.servicesPage,
                            showcase: next,
                          },
                        }));
                      }}
                    />
                  </Field>
                  <Field label={`Showcase ${index + 1} description`}>
                    <TextArea
                      rows={4}
                      value={item.description || ""}
                      onChange={(e) => {
                        const next = [...(draftConfig.servicesPage?.showcase || [])];
                        next[index] = { ...next[index], description: e.target.value };
                        setDraftConfig((current) => ({
                          ...current,
                          servicesPage: {
                            ...current.servicesPage,
                            showcase: next,
                          },
                        }));
                      }}
                    />
                  </Field>
                  <ImageField
                    label={`Showcase ${index + 1} image`}
                    value={item.image || ""}
                    onChange={(e) =>
                      handleImageUpload(e, (value) => {
                        const next = [...(draftConfig.servicesPage?.showcase || [])];
                        next[index] = { ...next[index], image: value };
                        setDraftConfig((current) => ({
                          ...current,
                          servicesPage: {
                            ...current.servicesPage,
                            showcase: next,
                          },
                        }));
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="portfolio-page"
          title="Portfolio Page"
          description="Edit the public Portfolio page content."
          onSave={() => {
            setConfig((current) => ({ ...current, portfolioPage: draftConfig.portfolioPage }));
            toast.success("Portfolio page saved!");
          }}
          saveLabel="Update Portfolio Page"
        >
          <div className="space-y-6">
            <Field label="Hero title">
              <TextInput value={draftConfig.portfolioPage?.hero?.title || ""} onChange={(e) => updatePortfolioPage("hero", "title", e.target.value)} />
            </Field>
            <Field label="Hero description">
              <TextArea rows={4} value={draftConfig.portfolioPage?.hero?.description || ""} onChange={(e) => updatePortfolioPage("hero", "description", e.target.value)} />
            </Field>
            <ImageField
              label="Hero image"
              value={draftConfig.portfolioPage?.hero?.image || ""}
              onChange={(e) =>
                handleImageUpload(e, (value) => updatePortfolioPage("hero", "image", value))
              }
            />
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Header</h3>
                <Field label="Header title">
                  <TextInput value={draftConfig.portfolioPage?.header?.title || ""} onChange={(e) => updatePortfolioPage("header", "title", e.target.value)} />
                </Field>
                <Field label="Header description">
                  <TextArea rows={4} value={draftConfig.portfolioPage?.header?.description || ""} onChange={(e) => updatePortfolioPage("header", "description", e.target.value)} />
                </Field>
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Method</h3>
                <Field label="Method title">
                  <TextInput value={draftConfig.portfolioPage?.method?.title || ""} onChange={(e) => updatePortfolioPage("method", "title", e.target.value)} />
                </Field>
                <Field label="Method description">
                  <TextArea rows={4} value={draftConfig.portfolioPage?.method?.description || ""} onChange={(e) => updatePortfolioPage("method", "description", e.target.value)} />
                </Field>
              </div>
            </div>
            <div className="grid gap-4 xl:grid-cols-2">
              {(draftConfig.portfolioPage?.projects || []).map((project, index) => (
                <div key={index} className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <h3 className="text-lg font-bold text-headingColor">Project {index + 1}</h3>
                  <Field label={`Project ${index + 1} title`}>
                    <TextInput
                      value={project.title || ""}
                      onChange={(e) => {
                        const next = [...(draftConfig.portfolioPage?.projects || [])];
                        next[index] = { ...next[index], title: e.target.value };
                        setDraftConfig((current) => ({
                          ...current,
                          portfolioPage: {
                            ...current.portfolioPage,
                            projects: next,
                          },
                        }));
                      }}
                    />
                  </Field>
                  <Field label={`Project ${index + 1} category`}>
                    <TextInput
                      value={project.category || ""}
                      onChange={(e) => {
                        const next = [...(draftConfig.portfolioPage?.projects || [])];
                        next[index] = { ...next[index], category: e.target.value };
                        setDraftConfig((current) => ({
                          ...current,
                          portfolioPage: {
                            ...current.portfolioPage,
                            projects: next,
                          },
                        }));
                      }}
                    />
                  </Field>
                  <Field label={`Project ${index + 1} description`}>
                    <TextArea
                      rows={4}
                      value={project.description || ""}
                      onChange={(e) => {
                        const next = [...(draftConfig.portfolioPage?.projects || [])];
                        next[index] = { ...next[index], description: e.target.value };
                        setDraftConfig((current) => ({
                          ...current,
                          portfolioPage: {
                            ...current.portfolioPage,
                            projects: next,
                          },
                        }));
                      }}
                    />
                  </Field>
                  <ImageField
                    label={`Project ${index + 1} image`}
                    value={project.image || ""}
                    onChange={(e) =>
                      handleImageUpload(e, (value) => {
                        const next = [...(draftConfig.portfolioPage?.projects || [])];
                        next[index] = { ...next[index], image: value };
                        setDraftConfig((current) => ({
                          ...current,
                          portfolioPage: {
                            ...current.portfolioPage,
                            projects: next,
                          },
                        }));
                      })
                    }
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="leadership-page"
          title="Leadership Page"
          description="Edit the public Leadership page content."
          onSave={() => {
            setConfig((current) => ({ ...current, leadershipPage: draftConfig.leadershipPage }));
            toast.success("Leadership page saved!");
          }}
          saveLabel="Update Leadership Page"
        >
          <div className="space-y-6">
            <Field label="Hero title">
              <TextInput value={draftConfig.leadershipPage?.hero?.title || ""} onChange={(e) => updateLeadershipPage("hero", "title", e.target.value)} />
            </Field>
            <Field label="Hero description">
              <TextArea rows={4} value={draftConfig.leadershipPage?.hero?.description || ""} onChange={(e) => updateLeadershipPage("hero", "description", e.target.value)} />
            </Field>
            <ImageField
              label="Hero image"
              value={draftConfig.leadershipPage?.hero?.image || ""}
              onChange={(e) =>
                handleImageUpload(e, (value) => updateLeadershipPage("hero", "image", value))
              }
            />
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Leader</h3>
                <Field label="Leader name">
                  <TextInput value={draftConfig.leadershipPage?.leader?.name || ""} onChange={(e) => updateLeadershipPage("leader", "name", e.target.value)} />
                </Field>
                <Field label="Leader role">
                  <TextInput value={draftConfig.leadershipPage?.leader?.role || ""} onChange={(e) => updateLeadershipPage("leader", "role", e.target.value)} />
                </Field>
                <Field label="Leader description">
                  <TextArea rows={5} value={draftConfig.leadershipPage?.leader?.description || ""} onChange={(e) => updateLeadershipPage("leader", "description", e.target.value)} />
                </Field>
                <ImageField
                  label="Leader portrait"
                  value={draftConfig.leadershipPage?.leader?.heroImage || ""}
                  onChange={(e) =>
                    handleImageUpload(e, (value) =>
                      updateLeadershipPage("leader", "heroImage", value)
                    )
                  }
                />
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Highlights</h3>
                {(draftConfig.leadershipPage?.highlights || []).map((item, index) => (
                  <div key={index} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <Field label={`Highlight ${index + 1} title`}>
                      <TextInput
                        value={item.title || ""}
                        onChange={(e) => {
                          const next = [...(draftConfig.leadershipPage?.highlights || [])];
                          next[index] = { ...next[index], title: e.target.value };
                          setDraftConfig((current) => ({
                            ...current,
                            leadershipPage: {
                              ...current.leadershipPage,
                              highlights: next,
                            },
                          }));
                        }}
                      />
                    </Field>
                    <Field label={`Highlight ${index + 1} description`}>
                      <TextArea rows={3} value={item.description || ""} onChange={(e) => {
                        const next = [...(draftConfig.leadershipPage?.highlights || [])];
                        next[index] = { ...next[index], description: e.target.value };
                        setDraftConfig((current) => ({
                          ...current,
                          leadershipPage: {
                            ...current.leadershipPage,
                            highlights: next,
                          },
                        }));
                      }} />
                    </Field>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="background-page"
          title="Background Page"
          description="Edit the public Background page content."
          onSave={() => {
            setConfig((current) => ({ ...current, backgroundPage: draftConfig.backgroundPage }));
            toast.success("Background page saved!");
          }}
          saveLabel="Update Background Page"
        >
          <div className="space-y-6">
            <Field label="Hero title">
              <TextInput value={draftConfig.backgroundPage?.hero?.title || ""} onChange={(e) => updateBackgroundPage("hero", "title", e.target.value)} />
            </Field>
            <Field label="Hero description">
              <TextArea rows={4} value={draftConfig.backgroundPage?.hero?.description || ""} onChange={(e) => updateBackgroundPage("hero", "description", e.target.value)} />
            </Field>
            <ImageField
              label="Hero image"
              value={draftConfig.backgroundPage?.hero?.image || ""}
              onChange={(e) =>
                handleImageUpload(e, (value) => updateBackgroundPage("hero", "image", value))
              }
            />
          </div>
        </SectionCard>

        <SectionCard
          id="impact-page"
          title="Impact Page"
          description="Edit the public Impact page content."
          onSave={() => {
            setConfig((current) => ({ ...current, impactPage: draftConfig.impactPage }));
            toast.success("Impact page saved!");
          }}
          saveLabel="Update Impact Page"
        >
          <div className="space-y-6">
            <Field label="Hero title">
              <TextInput value={draftConfig.impactPage?.hero?.title || ""} onChange={(e) => updateImpactPage("hero", "title", e.target.value)} />
            </Field>
            <Field label="Hero description">
              <TextArea rows={4} value={draftConfig.impactPage?.hero?.description || ""} onChange={(e) => updateImpactPage("hero", "description", e.target.value)} />
            </Field>
            <ImageField
              label="Hero image"
              value={draftConfig.impactPage?.hero?.image || ""}
              onChange={(e) =>
                handleImageUpload(e, (value) => updateImpactPage("hero", "image", value))
              }
            />
            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Proof block</h3>
                <Field label="Block title">
                  <TextInput value={draftConfig.impactPage?.proof?.title || ""} onChange={(e) => updateImpactPage("proof", "title", e.target.value)} />
                </Field>
                <Field label="Block description">
                  <TextArea rows={4} value={draftConfig.impactPage?.proof?.description || ""} onChange={(e) => updateImpactPage("proof", "description", e.target.value)} />
                </Field>
                <Field label="Visual label">
                  <TextInput value={draftConfig.impactPage?.proof?.visualTitle || ""} onChange={(e) => updateImpactPage("proof", "visualTitle", e.target.value)} />
                </Field>
                <Field label="Visual heading">
                  <TextInput value={draftConfig.impactPage?.proof?.visualHeading || ""} onChange={(e) => updateImpactPage("proof", "visualHeading", e.target.value)} />
                </Field>
                <Field label="Visual description">
                  <TextArea rows={4} value={draftConfig.impactPage?.proof?.visualDescription || ""} onChange={(e) => updateImpactPage("proof", "visualDescription", e.target.value)} />
                </Field>
                <ImageField
                  label="Proof image"
                  value={draftConfig.impactPage?.proof?.image || ""}
                  onChange={(e) =>
                    handleImageUpload(e, (value) => updateImpactPage("proof", "image", value))
                  }
                />
              </div>
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Benefits block</h3>
                <Field label="Block title">
                  <TextInput value={draftConfig.impactPage?.benefits?.title || ""} onChange={(e) => updateImpactPage("benefits", "title", e.target.value)} />
                </Field>
                <Field label="Block description">
                  <TextArea rows={4} value={draftConfig.impactPage?.benefits?.description || ""} onChange={(e) => updateImpactPage("benefits", "description", e.target.value)} />
                </Field>
                <Field label="Payoff title">
                  <TextInput value={draftConfig.impactPage?.benefits?.payoffTitle || ""} onChange={(e) => updateImpactPage("benefits", "payoffTitle", e.target.value)} />
                </Field>
                <Field label="Payoff description">
                  <TextArea rows={4} value={draftConfig.impactPage?.benefits?.payoffDescription || ""} onChange={(e) => updateImpactPage("benefits", "payoffDescription", e.target.value)} />
                </Field>
                <Field label="Support title">
                  <TextInput value={draftConfig.impactPage?.benefits?.supportTitle || ""} onChange={(e) => updateImpactPage("benefits", "supportTitle", e.target.value)} />
                </Field>
                <Field label="Support description">
                  <TextArea rows={4} value={draftConfig.impactPage?.benefits?.supportDescription || ""} onChange={(e) => updateImpactPage("benefits", "supportDescription", e.target.value)} />
                </Field>
                {(draftConfig.impactPage?.benefits?.points || []).map((point, index) => (
                  <Field key={index} label={`Point ${index + 1}`}>
                    <TextArea
                      rows={2}
                      value={point}
                      onChange={(e) => {
                        const next = [...(draftConfig.impactPage?.benefits?.points || [])];
                        next[index] = e.target.value;
                        updateImpactPage("benefits", "points", next);
                      }}
                    />
                  </Field>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="who-we-serve-page"
          title="Who We Serve Page"
          description="Edit the public Who We Serve page content."
          onSave={() => {
            setConfig((current) => ({ ...current, whoWeServePage: draftConfig.whoWeServePage }));
            toast.success("Who We Serve page saved!");
          }}
          saveLabel="Update Who We Serve Page"
        >
          <div className="space-y-6">
            <Field label="Hero title">
              <TextInput value={draftConfig.whoWeServePage?.hero?.title || ""} onChange={(e) => updateWhoWeServePage("hero", "title", e.target.value)} />
            </Field>
            <Field label="Hero description">
              <TextArea rows={4} value={draftConfig.whoWeServePage?.hero?.description || ""} onChange={(e) => updateWhoWeServePage("hero", "description", e.target.value)} />
            </Field>
            <ImageField
              label="Hero image"
              value={draftConfig.whoWeServePage?.hero?.image || ""}
              onChange={(e) =>
                handleImageUpload(e, (value) => updateWhoWeServePage("hero", "image", value))
              }
            />
          </div>
        </SectionCard>

        <SectionCard
          id="company-profile"
          title="Documentary / Company Profile"
          description="Edit the main documentary page content shown under Start with the section that matches your goal."
          onSave={() => {
            setConfig((current) => ({ ...current, companyProfile: draftConfig.companyProfile }));
            toast.success("Documentary content saved!");
            addNotification("Company profile content has been updated.", "success", "Documentary Saved");
          }}
          saveLabel="Update Documentary"
        >
          <div className="space-y-8">
            <div className="grid gap-4 xl:grid-cols-2">
              <Field label="Hero title">
                <TextInput
                  value={draftConfig.companyProfile?.hero?.title || ""}
                  onChange={(e) => updateCompanyProfileSection("hero", "title", e.target.value)}
                />
              </Field>
              <ImageField
                label="Hero image"
                value={draftConfig.companyProfile?.hero?.image || ""}
                onChange={(e) =>
                  handleImageUpload(e, (value) =>
                    updateCompanyProfileSection("hero", "image", value)
                  )
                }
              />
              <Field label="Hero eyebrow">
                <TextInput
                  value={draftConfig.companyProfile?.hero?.badgeEyebrow || ""}
                  onChange={(e) => updateCompanyProfileSection("hero", "badgeEyebrow", e.target.value)}
                />
              </Field>
              <Field label="Hero badge description">
                <TextArea
                  rows={3}
                  value={draftConfig.companyProfile?.hero?.badgeDescription || ""}
                  onChange={(e) => updateCompanyProfileSection("hero", "badgeDescription", e.target.value)}
                />
              </Field>
              <Field label="Hero description">
                <TextArea
                  rows={4}
                  value={draftConfig.companyProfile?.hero?.description || ""}
                  onChange={(e) => updateCompanyProfileSection("hero", "description", e.target.value)}
                />
              </Field>
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Difference block</h3>
                <Field label="Section title">
                  <TextInput
                    value={draftConfig.companyProfile?.difference?.title || ""}
                    onChange={(e) => updateCompanyProfileSection("difference", "title", e.target.value)}
                  />
                </Field>
                <Field label="Section description">
                  <TextArea
                    rows={4}
                    value={draftConfig.companyProfile?.difference?.description || ""}
                    onChange={(e) => updateCompanyProfileSection("difference", "description", e.target.value)}
                  />
                </Field>
                {(draftConfig.companyProfile?.difference?.points || []).map((point, index) => (
                  <Field key={index} label={`Point ${index + 1}`}>
                    <TextArea
                      rows={2}
                      value={point}
                      onChange={(e) => {
                        const next = [...(draftConfig.companyProfile?.difference?.points || [])];
                        next[index] = e.target.value;
                        updateCompanyProfileSection("difference", "points", next);
                      }}
                    />
                  </Field>
                ))}
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Overview block</h3>
                <Field label="Overview title">
                  <TextInput
                    value={draftConfig.companyProfile?.overview?.title || ""}
                    onChange={(e) => updateCompanyProfileSection("overview", "title", e.target.value)}
                  />
                </Field>
                <Field label="Overview description">
                  <TextArea
                    rows={4}
                    value={draftConfig.companyProfile?.overview?.description || ""}
                    onChange={(e) => updateCompanyProfileSection("overview", "description", e.target.value)}
                  />
                </Field>
              </div>
            </div>

            <div className="grid gap-4 xl:grid-cols-2">
              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Footprint block</h3>
                <Field label="Block title">
                  <TextInput
                    value={draftConfig.companyProfile?.footprint?.title || ""}
                    onChange={(e) => updateCompanyProfileSection("footprint", "title", e.target.value)}
                  />
                </Field>
                <Field label="Block description">
                  <TextArea
                    rows={4}
                    value={draftConfig.companyProfile?.footprint?.description || ""}
                    onChange={(e) => updateCompanyProfileSection("footprint", "description", e.target.value)}
                  />
                </Field>
              </div>

              <div className="space-y-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-lg font-bold text-headingColor">Featured story block</h3>
                <Field label="Block title">
                  <TextInput
                    value={draftConfig.companyProfile?.portfolio?.title || ""}
                    onChange={(e) => updateCompanyProfileSection("portfolio", "title", e.target.value)}
                  />
                </Field>
                <Field label="Block description">
                  <TextArea
                    rows={4}
                    value={draftConfig.companyProfile?.portfolio?.description || ""}
                    onChange={(e) => updateCompanyProfileSection("portfolio", "description", e.target.value)}
                  />
                </Field>
                {(draftConfig.companyProfile?.portfolio?.projects || []).map((project, index) => (
                  <div key={index} className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4">
                    <Field label={`Project ${index + 1} title`}>
                      <TextInput
                        value={project.title || ""}
                        onChange={(e) => {
                          const next = [...(draftConfig.companyProfile?.portfolio?.projects || [])];
                          next[index] = { ...next[index], title: e.target.value };
                          updateCompanyProfileSection("portfolio", "projects", next);
                        }}
                      />
                    </Field>
                    <Field label={`Project ${index + 1} category`}>
                      <TextInput
                        value={project.category || ""}
                        onChange={(e) => {
                          const next = [...(draftConfig.companyProfile?.portfolio?.projects || [])];
                          next[index] = { ...next[index], category: e.target.value };
                          updateCompanyProfileSection("portfolio", "projects", next);
                        }}
                      />
                    </Field>
                    <Field label={`Project ${index + 1} description`}>
                      <TextArea
                        rows={4}
                        value={project.description || ""}
                        onChange={(e) => {
                          const next = [...(draftConfig.companyProfile?.portfolio?.projects || [])];
                          next[index] = { ...next[index], description: e.target.value };
                          updateCompanyProfileSection("portfolio", "projects", next);
                        }}
                      />
                    </Field>
                    <ImageField
                      label={`Project ${index + 1} image`}
                      value={project.image || ""}
                      onChange={(e) =>
                        handleImageUpload(e, (value) => {
                          const next = [...(draftConfig.companyProfile?.portfolio?.projects || [])];
                          next[index] = { ...next[index], image: value };
                          updateCompanyProfileSection("portfolio", "projects", next);
                        })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </SectionCard>

        <SectionCard
          id="footer-settings"
          title="Footer Settings"
          description="Control the footer copy on the public site."
          onSave={() => {
            setConfig((current) => ({ ...current, footer: draftConfig.footer }));
            toast.success("Footer Settings saved!");
            addNotification("Footer text and contact details have been updated.", "success", "Footer Settings Saved");
          }}
          saveLabel="Update Footer Settings"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <Field
              label="Footer text"
              hint='Use "{year}" where the current year should appear.'
            >
              <TextArea
                rows={5}
                value={draftConfig.footer.description}
                onChange={(e) => updateFooter("description", e.target.value)}
              />
            </Field>
          </div>
        </SectionCard>
      </div>
    </motion.div>
  );
}
