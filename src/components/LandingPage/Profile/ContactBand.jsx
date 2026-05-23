import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Reveal from "../../ui/reveal";

const contactRows = [
  { label: "Location", value: "Mendong MAETUR - Yaounde" },
  { label: "Email", value: "contact@olympianhouseintl.com" },
  { label: "Email", value: "fbanns1@gmail.com" },
  { label: "Phone", value: "(+237) 671 646 331" },
  { label: "WhatsApp", value: "(+237) 691 377 313" },
];

export const ContactBand = () => {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="container">
        <Reveal distance={40} scale={0.97}>
          <motion.div
            className="rounded-[36px] bg-[#0b1220] text-white p-8 lg:p-12 shadow-2xl overflow-hidden relative"
            whileHover={{ y: -6 }}
            transition={{ duration: 0.25 }}
          >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.25),_transparent_35%),radial-gradient(circle_at_bottom_left,_rgba(250,204,21,0.18),_transparent_30%)]" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-10 items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Contact OHI
              </p>
              <h2 className="heading text-white mt-4">
                Give your project the visibility it deserves.
              </h2>
              <p className="mt-4 text-white/75 leading-7 max-w-2xl">
                We begin by understanding your objectives, then shape the
                concept, align the budget and deliver end-to-end storytelling
                and production solutions.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Link to="/contact">
                  <button className="hero_btn1 w-full sm:w-auto transition duration-300 ease-out hover:-translate-y-1">
                    Contact Page
                  </button>
                </Link>
                <Link to="/company-profile">
                  <button className="hero_btn2 w-full sm:w-auto transition duration-300 ease-out hover:-translate-y-1">
                    View Profile
                  </button>
                </Link>
              </div>
            </div>

              <div className="rounded-[28px] bg-white/10 backdrop-blur-md border border-white/10 p-6">
                <h3 className="text-xl font-semibold">Contact Details</h3>
                <div className="mt-5 space-y-4">
                  {contactRows.map((row, index) => (
                    <div
                      key={`${row.label}-${index}`}
                      className="flex flex-col gap-1 border-b border-white/10 pb-3 last:border-b-0 last:pb-0 sm:flex-row sm:items-start sm:justify-between sm:gap-4"
                    >
                      <span className="text-white/60">{row.label}</span>
                      <span className="max-w-full break-words text-left font-medium sm:max-w-[70%] sm:text-right">
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
          </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
};
