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
        description="Reach OHI for partnerships, project inquiries, and institutional visibility conversations. The team responds with the same clarity and care it brings to client work."
        descriptionClassName="text-white"
        primaryCta={{ label: "Book a Conversation", href: "#contact-form" }}
        secondaryCta={{ label: "View Map", href: "#contact-map" }}
        heroBadge={
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              OHI profile
            </p>
            <p className="text-sm leading-6 text-white/80">
              Strategic visibility for development, investment, and institutional communication.
            </p>
          </div>
        }
      />

      <div className="py-16 sm:py-20" style={{ backgroundImage: "url('/story.png')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="container">
          <div className="bg-white p-6 shadow-[0_16px_40px_rgba(0,0,0,0.12)] sm:p-10 space-y-16">
            <div id="contact-form">
              <Contact />
            </div>
            <div id="contact-map">
              <ContactMap />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
