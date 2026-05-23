import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const BlurFade = ({
  children,
  delay = 0,
  inView = false,
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18, filter: "blur(10px)" }}
      whileInView={
        inView
          ? { opacity: 1, y: 0, filter: "blur(0px)" }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default BlurFade;
