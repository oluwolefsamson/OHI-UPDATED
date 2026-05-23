import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const easing = [0.22, 1, 0.36, 1];

const Reveal = ({
  children,
  className = "",
  delay = 0,
  amount = 0.2,
  once = true,
  as = "div",
  distance = 20,
  scale = 1,
  x = 0,
  y,
}) => {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;
  const yOffset = typeof y === "number" ? y : distance;
  const variants = {
    hidden: { opacity: 0, y: yOffset, x, scale: scale === 1 ? 1 : scale },
    visible: (delayValue = 0) => ({
      opacity: 1,
      y: 0,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: delayValue,
        ease: easing,
      },
    }),
  };

  if (shouldReduceMotion) {
    return <MotionTag className={className}>{children}</MotionTag>;
  }

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount }}
      custom={delay}
    >
      {children}
    </MotionTag>
  );
};

export default Reveal;
