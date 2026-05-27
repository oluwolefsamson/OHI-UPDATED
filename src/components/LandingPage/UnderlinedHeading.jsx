import React from "react";

const UnderlinedHeading = ({
  as: Component = "h2",
  children,
  className = "",
  textClassName = "",
  textColorClassName = "text-black",
  borderColorClassName = "bg-[#e97a2f]",
  showBorder = true,
}) => {
  const renderWithTail = (content) => {
    if (typeof content !== "string") {
      return (
        <span className={`relative z-10 inline-block ${textColorClassName} ${textClassName}`.trim()}>
          {content}
        </span>
      );
    }

    const words = content.trim().split(/\s+/);
    if (words.length <= 3) {
      return (
        <span className={`relative z-10 inline-block ${textColorClassName} ${textClassName}`.trim()}>
          {content}
        </span>
      );
    }

    const head = words.slice(0, -3).join(" ");
    const tail = words.slice(-3).join(" ");

    return (
      <>
        <span className={`relative z-10 inline-block ${textColorClassName} ${textClassName}`.trim()}>{head} </span>
        <span className={`relative z-10 inline-block ${textColorClassName}`.trim()}>{tail}</span>
      </>
    );
  };

  return (
    <Component className={`relative inline-block pb-3 pl-4 leading-none ${className}`.trim()}>
      {showBorder ? (
        <>
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-0 left-0 top-0 w-[6px] ${borderColorClassName}`.trim()}
          />
          <span
            aria-hidden="true"
            className={`pointer-events-none absolute bottom-0 left-0 h-[6px] w-[44%] ${borderColorClassName}`.trim()}
          />
        </>
      ) : null}
      {renderWithTail(children)}
    </Component>
  );
};

export default UnderlinedHeading;
