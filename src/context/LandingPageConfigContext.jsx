import React, { createContext, useEffect, useState } from "react";
import { landingPageDefaults } from "../data/landingPageDefaults";
import { supabase } from "../lib/supabase";

const IS_PRODUCTION = import.meta.env.PROD;
const LEGACY_VIDEO_TITLE =
  "Story-led video production for development and visibility";
const LEGACY_VIDEO_DESCRIPTION =
  "A dedicated space for OHI's video work. The layout is ready for local video files or embedded links while preserving the same rounded, editorial look used across the site.";
const PREVIOUS_VIDEO_TITLE = "Video Stories";
const PREVIOUS_VIDEO_DESCRIPTION =
  "A dedicated space for OHI's video work, ready for local video files or embedded links while keeping the same rounded editorial look across the site.";
const LEGACY_HERO_URL_MARKERS = {
  hero1: "9056693",
  hero2: "6774952",
  hero3: "35165485",
  hero4: "33693142",
  hero5: "35353626",
};
const LEGACY_HERO_CTA_HREFS = {
  "/#contact": "/contact",
  "#contact": "/contact",
  "/#about": "/about",
  "#about": "/about",
};
const CONFIG_SYNC_CHANNEL = "landing_page_config_sync";
const CONFIG_SYNC_STORAGE_KEY = "landing_page_config_snapshot";
const CONFIG_POLL_INTERVAL_MS = 5000;

const LandingPageConfigContext = createContext(null);

function safeParse(value) {
  try {
    return JSON.parse(value);
  } catch {
    return null;
  }
}

function stripBundledAssetUrls(value) {
  if (Array.isArray(value)) {
    return value
      .map((item) => stripBundledAssetUrls(item))
      .filter((item) => item !== undefined);
  }

  if (value && typeof value === "object") {
    const result = {};

    for (const [key, nestedValue] of Object.entries(value)) {
      const cleaned = stripBundledAssetUrls(nestedValue);
      if (cleaned !== undefined) {
        result[key] = cleaned;
      }
    }

    return result;
  }

  if (typeof value === "string" && value.startsWith("/assets/")) {
    return undefined;
  }

  if (typeof value === "string" && (value.startsWith("/src/") || value.startsWith("src/"))) {
    return undefined;
  }

  return value;
}

function mergeDeep(base, override) {
  if (Array.isArray(base)) {
    if (!Array.isArray(override) || !override.length) {
      return base;
    }

    const merged = base.map((item, index) => mergeDeep(item, override[index]));
    const extraItems = override.slice(base.length).filter((item) => item !== undefined);

    return extraItems.length ? [...merged, ...extraItems] : merged;
  }

  if (base && typeof base === "object") {
    const result = { ...base };
    const source = override && typeof override === "object" ? override : {};

    for (const key of Object.keys(base)) {
      result[key] = mergeDeep(base[key], source[key]);
    }

    for (const key of Object.keys(source)) {
      if (!(key in result)) {
        result[key] = source[key];
      }
    }

    return result;
  }

  return override ?? base;
}

function normalizeConfig(config) {
  if (!config?.video) return config;

  const nextVideo = { ...config.video };
  const nextTheme = config.theme
    ? {
        ...config.theme,
        heroBgImage: landingPageDefaults.theme.heroBgImage,
        headerBgImage: landingPageDefaults.theme.headerBgImage,
      }
    : null;
  const nextAbout = config.about
    ? {
        ...config.about,
        image: landingPageDefaults.about.image,
      }
    : null;
  const nextWhyChoose = config.whyChoose?.cards
    ? {
        ...config.whyChoose,
        cards: config.whyChoose.cards.map((card, index) => ({
          ...card,
          icon: landingPageDefaults.whyChoose.cards[index]?.icon ?? card.icon,
        })),
      }
    : null;

  if (nextVideo.title === LEGACY_VIDEO_TITLE) {
    nextVideo.title = landingPageDefaults.video.title;
  }

  if (nextVideo.description === LEGACY_VIDEO_DESCRIPTION) {
    nextVideo.description = landingPageDefaults.video.description;
  }

  if (nextVideo.title === PREVIOUS_VIDEO_TITLE) {
    nextVideo.title = landingPageDefaults.video.title;
  }

  if (nextVideo.description === PREVIOUS_VIDEO_DESCRIPTION) {
    nextVideo.description = landingPageDefaults.video.description;
  }

  const nextHero = config.hero
    ? {
        ...config.hero,
        ...(config.hero.images ? { images: { ...config.hero.images } } : {}),
      }
    : null;

  if (nextHero?.images) {
    for (const [key, marker] of Object.entries(LEGACY_HERO_URL_MARKERS)) {
      const value = nextHero.images[key];

      if (typeof value === "string" && value.includes(marker)) {
        nextHero.images[key] = landingPageDefaults.hero.images[key];
      }
    }
  }

  if (nextHero) {
    nextHero.primaryCtaHref =
      LEGACY_HERO_CTA_HREFS[nextHero.primaryCtaHref] ??
      nextHero.primaryCtaHref;
    nextHero.secondaryCtaHref =
      LEGACY_HERO_CTA_HREFS[nextHero.secondaryCtaHref] ??
      nextHero.secondaryCtaHref;
  }

  return {
    ...config,
    ...(nextTheme ? { theme: nextTheme } : {}),
    ...(nextAbout ? { about: nextAbout } : {}),
    video: nextVideo,
    ...(nextWhyChoose ? { whyChoose: nextWhyChoose } : {}),
    ...(nextHero ? { hero: nextHero } : {}),
  };
}

function applyThemeVars(theme) {
  if (typeof document === "undefined") return;

  const root = document.documentElement;
  root.style.setProperty("--ohi-primary", theme.primaryColor);
  root.style.setProperty("--ohi-accent", theme.accentColor);
  root.style.setProperty("--ohi-hero-text", theme.heroButtonText);
  root.style.setProperty("--ohi-hero-bg", `url("${theme.heroBgImage}")`);
  root.style.setProperty("--ohi-header-bg", `url("${theme.headerBgImage}")`);
}

function buildLandingPageConfig(rawConfig) {
  if (!rawConfig) {
    return landingPageDefaults;
  }

  const stored = stripBundledAssetUrls(rawConfig);
  return normalizeConfig(mergeDeep(landingPageDefaults, stored));
}

function publishConfigSnapshot(snapshot) {
  if (typeof window === "undefined") return;

  const payload = JSON.stringify({
    updatedAt: Date.now(),
    config: snapshot,
  });

  window.localStorage.setItem(CONFIG_SYNC_STORAGE_KEY, payload);

  if ("BroadcastChannel" in window) {
    const channel = new window.BroadcastChannel(CONFIG_SYNC_CHANNEL);
    channel.postMessage(payload);
    channel.close();
  }
}

export function LandingPageConfigProvider({ children }) {
  const [config, setConfigState] = useState(landingPageDefaults);
  const [loading, setLoading] = useState(true);

  const loadConfigFromDb = async () => {
    const { data, error } = await supabase
      .from("landing_page_config")
      .select("config")
      .eq("id", 1)
      .single();

    if (error) {
      throw error;
    }

    if (data?.config) {
      setConfigState(buildLandingPageConfig(data.config));
    }
  };

  useEffect(() => {
    let isMounted = true;

    async function loadFromDb() {
      try {
        if (!isMounted) return;
        await loadConfigFromDb();
      } catch (err) {
        if (!isMounted) return;
        console.error("Error loading CMS config from Supabase:", err);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    }

    loadFromDb();

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const applySnapshot = (payload) => {
      const parsed = typeof payload === "string" ? safeParse(payload) : payload;
      const nextConfig = parsed?.config ?? parsed;

      if (!nextConfig) return;

      setConfigState(buildLandingPageConfig(nextConfig));
    };

    const refreshFromDb = async () => {
      try {
        await loadConfigFromDb();
      } catch (error) {
        console.error("Failed to refresh landing page config:", error);
      }
    };

    const handleStorageChange = (event) => {
      if (event.key !== CONFIG_SYNC_STORAGE_KEY || !event.newValue) {
        return;
      }

      applySnapshot(event.newValue);
    };

    const handleBroadcastMessage = (event) => {
      applySnapshot(event.data);
    };

    window.addEventListener("storage", handleStorageChange);
    const channel =
      "BroadcastChannel" in window
        ? new window.BroadcastChannel(CONFIG_SYNC_CHANNEL)
        : null;
    channel?.addEventListener("message", handleBroadcastMessage);

    const pollId = window.setInterval(refreshFromDb, CONFIG_POLL_INTERVAL_MS);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      channel?.removeEventListener("message", handleBroadcastMessage);
      channel?.close();
      window.clearInterval(pollId);
    };
  }, []);

  useEffect(() => {
    applyThemeVars(config.theme);
  }, [config.theme]);

  useEffect(() => {
    if (
      config?.video?.title === LEGACY_VIDEO_TITLE ||
      config?.video?.description === LEGACY_VIDEO_DESCRIPTION ||
      config?.video?.title === PREVIOUS_VIDEO_TITLE ||
      config?.video?.description === PREVIOUS_VIDEO_DESCRIPTION
    ) {
      setConfigState((current) => normalizeConfig(current));
    }
  }, [config]);

  const updateConfig = async (nextConfig) => {
    const newConfig = typeof nextConfig === "function" ? nextConfig(config) : nextConfig;
    setConfigState(newConfig);

    const cleaned = stripBundledAssetUrls(newConfig);
    const { error } = await supabase
      .from("landing_page_config")
      .upsert({ id: 1, config: cleaned }, { onConflict: "id" });

    if (error) {
      console.error("Failed to save config to Supabase:", error);
      return;
    }

    publishConfigSnapshot(cleaned);
  };

  const resetConfig = async () => {
    setConfigState(landingPageDefaults);
    const { error } = await supabase
      .from("landing_page_config")
      .upsert({ id: 1, config: stripBundledAssetUrls(landingPageDefaults) }, { onConflict: "id" });

    if (error) {
      console.error("Failed to reset config in Supabase:", error);
      return;
    }

    publishConfigSnapshot(stripBundledAssetUrls(landingPageDefaults));
  };

  // Provide a loading state so the app doesn't flash default content before DB loads
  return (
    <LandingPageConfigContext.Provider
      value={{ config, setConfig: updateConfig, resetConfig, loading }}
    >
      {loading ? (
        <div className="flex h-screen w-full items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-[#05c1ff] border-t-transparent"></div>
        </div>
      ) : (
        children
      )}
    </LandingPageConfigContext.Provider>
  );
}

export function useLandingPageConfig() {
  const context = React.useContext(LandingPageConfigContext);

  if (!context) {
    throw new Error(
      "useLandingPageConfig must be used within a LandingPageConfigProvider"
    );
  }

  return context;
}
