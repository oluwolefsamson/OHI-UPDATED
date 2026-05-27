import React from "react";
import Reveal from "../ui/reveal";
import UnderlinedHeading from "./UnderlinedHeading";

const SectionHeader = ({
  title,
  description,
  className = "",
  showPattern = true,
  textColorClassName = "text-[#173145]",
}) => {
  return (
    <Reveal className={`mx-auto max-w-3xl text-center ${className}`.trim()}>
      <UnderlinedHeading
        className="text-3xl font-semibold tracking-[-0.03em] text-[#173145] sm:text-4xl"
        textClassName="font-display"
        textColorClassName={textColorClassName}
        patternClassName={showPattern ? "" : "hidden"}
      >
        {title}
      </UnderlinedHeading>
      {description ? (
        <p className="font-body mx-auto mt-4 max-w-2xl text-base leading-7 text-[#4e5a67] sm:text-lg">
          {description}
        </p>
      ) : null}
    </Reveal>
  );
};

export default SectionHeader;
