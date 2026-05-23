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
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf0_0%,#fcf6ea_28%,#f7f0e2_100%)]" />
      <div className="container relative mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#e8dcc8] bg-white/90 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#b16a18] shadow-[0_10px_24px_rgba(15,23,42,0.04)]">
              Let&apos;s Connect
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-4xl font-semibold leading-tight tracking-[-0.03em] text-[#173145] md:text-5xl">
                We make it easy to reach a real project lead.
              </h2>
              <p className="font-body max-w-xl text-lg leading-8 text-[#4e5a67]">
                Whether you need a quick introduction or a full project brief,
                our team is ready to respond with clear guidance.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactOptions.map((option) => (
                <div
                  key={option.label}
                  className="group rounded-[24px] border border-[#e8dcc8] bg-white/92 p-5 shadow-[0_14px_30px_rgba(15,23,42,0.08)] transition hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(201,107,23,0.12)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(180deg,#fff3e2_0%,#ffe0bb_100%)]">
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
                    className="mt-4 block rounded-full border border-[#f59e0b]/20 bg-[#fff8ef] px-4 py-2 text-center text-sm font-semibold uppercase tracking-[0.2em] text-[#b16a18] transition hover:bg-[#b16a18] hover:text-white"
                  >
                    {option.action}
                  </a>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#4e5a67]">
              <span className="rounded-full border border-[#e8dcc8] bg-white/90 px-4 py-2 font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
                Project Support
              </span>
              <span className="rounded-full border border-[#e8dcc8] bg-white/90 px-4 py-2 font-semibold uppercase tracking-[0.2em] text-[#b16a18]">
                Creative Team
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-[#e8dcc8] bg-white/80 shadow-[0_22px_45px_rgba(15,23,42,0.12)]">
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
            <div className="absolute -bottom-8 left-8 rounded-2xl border border-[#e8dcc8] bg-white/90 px-5 py-4 text-sm text-[#4e5a67] shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
              <p className="font-semibold text-[#173145]">Office Hours</p>
              <p className="mt-1">Mon-Fri - 8:00am - 6:00pm</p>
              <p className="text-xs text-[#708496]">Project support by request.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
