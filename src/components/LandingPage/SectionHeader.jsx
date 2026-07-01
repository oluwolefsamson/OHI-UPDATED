import React from "react";
import Reveal from "../ui/reveal";
import UnderlinedHeading from "./UnderlinedHeading";

const SectionHeader = ({
  title,
  description,
  className = "",
  align = "center",
  showPattern,
  showBorder = true,
  textColorClassName = "text-[#0d1f2d]",
  descriptionClassName = "text-[#4e5a67]",
}) => {
  const alignClassName = align === "start" ? "text-left" : "text-center";
  const descriptionAlignClassName = align === "start" ? "mx-0" : "mx-auto";

  return (
    <Reveal className={`mx-auto max-w-3xl ${alignClassName} ${className}`.trim()}>
      <UnderlinedHeading
        className="text-5xl font-black uppercase tracking-tight leading-none"
        textColorClassName={textColorClassName}
        showBorder={showBorder}
      >
        {title}
      </UnderlinedHeading>
      {description ? (
        <p className={`${descriptionAlignClassName} mt-4 max-w-2xl text-base leading-7 sm:text-lg ${descriptionClassName}`.trim()}>
          {description}
        </p>
      ) : null}
    </Reveal>
  );
};

export default SectionHeader;
