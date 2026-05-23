import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FaqItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className="p-4 lg:p-6 rounded-[12px] border border-solid border-[#D9DCE2] mb-6 cursor-pointer transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(15,23,42,0.08)]"
      style={{
        boxShadow:
          "0 4px 6px -1px rgba(59, 130, 246, 0.2), 0 2px 4px -1px rgba(59, 130, 246, 0.1)",
      }}
    >
      <div
        className="flex items-center justify-between gap-5"
        onClick={toggleAccordion}
      >
        <h4 className="text-[16px] leading-7 lg:text-[20px] lg:leading-8 text-headingColor">
          {item.question}
        </h4>
        <div
          className={`${
            isOpen ? "bg-primaryColor text-black" : "bg-white text-primaryColor"
          } w-8 h-8 lg:w-10 lg:h-10 border border-solid border-primaryColor/25 rounded-full flex items-center justify-center transition-all duration-200`}
        >
          {isOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen ? (
          <motion.div
            className="mt-4 overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
              {item.content}
            </p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};

export default FaqItem;
