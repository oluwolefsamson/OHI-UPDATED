import React from "react";
import Reveal from "../ui/reveal";

const SectionHeader = ({ title, description, className = "" }) => {
  return (
    <Reveal className={`mx-auto max-w-3xl text-center ${className}`.trim()}>
      <div className="mx-auto mb-4 h-[4px] w-20 bg-[linear-gradient(90deg,#f59e0b_0%,#f97316_100%)]" />
      <h2 className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#173145] sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="font-body mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4e5a67] sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
};

export default SectionHeader;
