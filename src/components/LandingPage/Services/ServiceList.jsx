import React from "react";
import ServiceCard from "./ServiceCard";
import { useLandingPageConfig } from "../../../context/LandingPageConfigContext";
import Reveal from "../../ui/reveal";

const ServiceList = () => {
  const { config } = useLandingPageConfig();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
      {config.services.cards.map((item, index) => (
        <Reveal key={index} delay={0.05 + index * 0.05} distance={36} scale={0.96}>
          <ServiceCard item={item} index={index} />
        </Reveal>
      ))}
    </div>
  );
};

export default ServiceList;
