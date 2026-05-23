import React from "react";
import faqs from "../../../assets/data/faqs";
import FaqItem from "./FaqItem";
import Reveal from "../../ui/reveal";

const FaqList = () => {
  return (
    <ul className="mt-[38px]">
      {faqs.map((item, index) => (
        <Reveal key={index} delay={0.04 + index * 0.05} distance={28} scale={0.98}>
          <FaqItem item={item} />
        </Reveal>
      ))}
    </ul>
  );
};

export default FaqList;
