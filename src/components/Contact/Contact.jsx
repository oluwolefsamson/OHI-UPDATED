import React from "react";
import { useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaWhatsapp } from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { Globe } from "lucide-react";
import contactImg from "../../assets/images/Gallery/gallery-11.jpeg";

const contactOptions = [
  {
    label: "Call",
    action: "Call Now",
    href: "tel:+237671646331",
    icon: <MdCall size={22} className="text-emerald-700" />,
  },
  {
    label: "WhatsApp",
    action: "Chat Now",
    href: "https://wa.me/237691377313",
    icon: <FaWhatsapp size={22} className="text-emerald-700" />,
  },
  {
    label: "Email",
    action: "Send Mail",
    href: "mailto:contact@olympianhouseintl.com",
    icon: <BiLogoGmail size={22} className="text-emerald-700" />,
  },
  {
    label: "Website",
    action: "Visit Site",
    href: "https://ohi-eight.vercel.app/",
    icon: <Globe size={22} className="text-emerald-700" />,
  },
];

const Contact = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative py-12 lg:py-20">
      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#bb7422] shadow-[0_10px_24px_rgba(15,23,42,0.08)]">
              Let&apos;s Connect
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-white md:text-5xl">
                We make it easy to reach a real project lead.
              </h2>
              <p className="font-body max-w-xl text-lg leading-8 text-white/88">
                Whether you need a quick introduction or a full project brief,
                our team is ready to respond with clear guidance.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactOptions.map((option) => (
                <div
                  key={option.label}
                  className="group rounded-[24px] border border-white/18 bg-white/95 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(201,107,23,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#bb7422]/12">
                      {option.icon}
                    </div>
                    <div>
                      <p className="font-body text-lg font-semibold text-[#173145]">
                        {option.label}
                      </p>
                      <p className="font-body text-sm text-[#67727c]">
                        Typical response within one business day
                      </p>
                    </div>
                  </div>
                  <a
                    href={option.href}
                    className="mt-4 block rounded-full border border-[#bb7422]/20 bg-[#bb7422] px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-white transition hover:bg-[#a9651d]"
                  >
                    {option.action}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-white/85">
              <span className="rounded-full border border-[#bb7422]/20 bg-[#bb7422] px-4 py-2 font-semibold uppercase tracking-[0.2em] text-white">
                Project Support
              </span>
              <span className="rounded-full border border-[#bb7422]/20 bg-[#bb7422] px-4 py-2 font-semibold uppercase tracking-[0.2em] text-white">
                Creative Team
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/18 bg-white/10 shadow-[0_22px_45px_rgba(15,23,42,0.12)] backdrop-blur-sm">
              {!imageLoaded && (
                <div className="h-[520px] w-full animate-pulse bg-gradient-to-br from-emerald-50 via-emerald-100 to-emerald-50" />
              )}
              <img
                src={contactImg}
                alt="Contact"
                onLoad={() => setImageLoaded(true)}
                className={`h-[520px] w-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>
            <div className="absolute -bottom-8 left-8 rounded-2xl border border-white/18 bg-[#173145]/85 px-5 py-4 text-sm text-white shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
              <p className="font-semibold text-white">Office Hours</p>
              <p className="mt-1">Mon-Fri - 8:00am - 6:00pm</p>
              <p className="text-xs text-white/75">Project support by request.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
