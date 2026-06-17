import React from "react";

const UnderlinedHeading = ({
  as: Component = "h2",
  children,
  className = "",
  textClassName = "",
  textColorClassName = "text-black",
  strokeColor = "#e97a2f",
  showBorder = true,
}) => {
  return (
    <Component className={`${className}`.trim()}>
      <span className={`relative inline-block ${textColorClassName} ${textClassName}`.trim()}>
        {children}
        {showBorder && (
          <svg
            className="absolute -bottom-3 left-0 w-full"
            viewBox="0 0 300 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M2 6 C60 2, 140 2, 298 6"
              stroke={strokeColor}
              strokeWidth="3"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        )}
      </span>
    </Component>
  );
};

export default UnderlinedHeading;
