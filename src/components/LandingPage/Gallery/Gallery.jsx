import React, { useEffect, useState } from "react";
import BlurFade from "../../ui/blur-fade";
import { X } from "lucide-react";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import { landingPageDefaults } from "../../../data/landingPageDefaults";

const Gallery = () => {
  const { config } = useLandingPageConfig();
  const images = landingPageDefaults.gallery.items;
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="gallery" className="px-2 py-16 sm:py-20">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading font-bold text-black">{config.gallery.title}</h2>
          <p className="text__para mt-5 text-black">
            {config.gallery.description}
          </p>
        </div>

        <div className="mt-8 columns-2 gap-4 sm:columns-3">
          {images.map((item, idx) => (
            <BlurFade
              key={`${item.title}-${idx}`}
              delay={0.25 + idx * 0.05}
              inView
            >
              <button
                type="button"
                onClick={() => setSelectedImage(item)}
                className="mb-4 block w-full break-inside-avoid overflow-hidden rounded-lg focus:outline-none focus:ring-2 focus:ring-primaryColor focus:ring-offset-2"
                aria-label={`Open larger view of ${item.title}`}
              >
                <img
                  className="size-full cursor-zoom-in object-contain transition-transform duration-300 hover:scale-[1.02]"
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                />
              </button>
            </BlurFade>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-label={selectedImage.title}
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="flex w-full max-w-5xl flex-col items-center justify-center"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex justify-end pb-3">
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white shadow-[0_12px_30px_rgba(0,0,0,0.3)] transition hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/80 focus:ring-offset-2 focus:ring-offset-black"
                aria-label="Close image preview"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="flex h-[60vh] w-full max-w-4xl items-center justify-center overflow-hidden rounded-[22px] bg-transparent">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default Gallery;
