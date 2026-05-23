import React from "react";
import Contact from "../../../components/Contact/Contact";
import ContactMap from "../../../components/ContactMap/ContactMap";
import ContactForm from "../../../components/ContactForm/ContactForm";
import Reveal from "../../../components/ui/reveal";
import contactHeroImage from "../../../assets/images/Gallery/gallery-04.jpeg";

const ContactPage = () => {
  return (
    <div className="bg-[linear-gradient(180deg,#fffaf0_0%,#fcf6ea_28%,#f7f0e2_100%)]">
      <section className="relative min-h-[460px] overflow-hidden bg-[#091826] sm:min-h-[500px] lg:min-h-[540px]">
        <img
          className="absolute inset-0 h-full w-full object-cover opacity-80"
          src={contactHeroImage}
          alt="Contact OHI"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.28)_0%,rgba(8,10,15,0.68)_55%,rgba(8,10,15,0.94)_100%)]" />
        <div className="absolute inset-x-0 top-0 h-2 bg-[#f59e0b]" />

        <div className="relative container mx-auto flex min-h-[460px] items-center px-4 pb-20 pt-28 sm:min-h-[500px] sm:px-5 lg:min-h-[540px] lg:px-20 lg:pb-28 lg:pt-32">
          <div className="max-w-4xl">
            <Reveal as="h1" className="font-display inline-block border-b-[10px] border-[#f59e0b] pb-3 text-5xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
              Contact Us
            </Reveal>
          </div>
        </div>
      </section>

      <div className="container mx-auto space-y-16 px-4 py-16 sm:px-5 lg:px-20 lg:py-20">
        <Contact />
        <ContactMap />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
