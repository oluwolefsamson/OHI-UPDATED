import React from "react";
import Contact from "../../../components/Contact/Contact";
import ContactMap from "../../../components/ContactMap/ContactMap";
import ContactForm from "../../../components/ContactForm/ContactForm";
import ProfilePageShell from "../../../components/LandingPage/Profile/ProfilePageShell";
import contactHeroImage from "../../../assets/images/Gallery/gallery-04.jpeg";

const ContactPage = () => {
  return (
    <>
      <ProfilePageShell
        title="Contact Us"
        heroImage={contactHeroImage}
        heroImageAlt="Contact OHI hero"
        description="Reach OHI for partnerships, project inquiries, media collaborations, or support. We respond with the same clarity and care we bring to our storytelling work."
        descriptionClassName="text-white"
        primaryCta={{ label: "Start a Conversation", href: "#contact-form" }}
        secondaryCta={{ label: "View Map", href: "#contact-map" }}
        heroBadge={
          <div className="space-y-1">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              OHI profile
            </p>
            <p className="font-body text-sm leading-6 text-white/80">
              Strategic visibility for development, investment, and impact communication.
            </p>
          </div>
        }
      />

      <div className="bg-[#bb7422]">
        <div className="container mx-auto space-y-16 px-4 py-16 sm:px-5 lg:px-20 lg:py-20">
          <div id="contact-form">
            <Contact />
          </div>
          <div id="contact-map">
            <ContactMap />
          </div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
