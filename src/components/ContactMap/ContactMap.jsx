import React from "react";
import { Card } from "../ui/card";
import { MapPin } from "lucide-react";
import mapSectionBg from "../../assets/images/Gallery/gallery-05.jpeg";

const ContactMap = () => {
  return (
    <section className="relative left-1/2 w-screen -translate-x-1/2 overflow-hidden px-6 py-16 lg:px-8">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${mapSectionBg})` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.45)_0%,rgba(8,10,15,0.68)_100%)]" aria-hidden="true" />

      <div className="container relative mx-auto">
        <div className="flex">
          <Card className="w-full overflow-hidden border-white/15 bg-white/10 shadow-[0_28px_80px_rgba(15,23,42,0.2)] backdrop-blur-md">
            <div className="relative h-[520px] overflow-hidden bg-[#dbeafe]">
              <iframe
                title="OHI office map"
                src="https://www.google.com/maps?q=Toiture%20Rouge%20Mendong%2C%20Yaounde%2C%20Cameroon&z=16&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
              />

              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0.02)_100%)]" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.12),transparent_24%),radial-gradient(circle_at_bottom_right,rgba(249,115,22,0.08),transparent_20%)]" />

              <div className="pointer-events-none absolute left-[52%] top-[48%] flex -translate-x-1/2 -translate-y-1/2 flex-col items-center">
                <div className="relative flex h-16 w-16 items-center justify-center">
                  <div className="absolute h-16 w-16 animate-pulse rounded-full bg-[#f59d21]/18" />
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(180deg,#f59d21_0%,#c96b17_100%)] shadow-[0_18px_45px_rgba(201,107,23,0.38)]">
                    <div className="h-3.5 w-3.5 rounded-full bg-[#f59e0b]" />
                  </div>
                </div>
                <div className="mt-3 rounded-full border border-white/35 bg-white/90 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#173145] shadow-sm">
                  OHI Office
                </div>
              </div>

              <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-slate-950/35 to-transparent p-5">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-md">
                  <MapPin className="h-3.5 w-3.5" />
                  Yaounde, Cameroon
                </div>
              </div>

              <div className="absolute bottom-5 left-5 max-w-[240px] rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-sm text-[#4e5a67] shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-md">
                <p className="font-semibold text-[#173145]">Open in Maps</p>
                <p className="mt-1 text-xs text-[#708496]">
                  Locate the office and plan your visit.
                </p>
              </div>

              <div className="absolute bottom-5 right-5 rounded-2xl border border-white/20 bg-white/90 px-4 py-3 text-xs text-[#4e5a67] shadow-[0_18px_45px_rgba(15,23,42,0.18)] backdrop-blur-md">
                Mendong MAETUR - Yaounde
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactMap;
