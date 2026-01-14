"use client";

import { motion } from "framer-motion";
import { containerVariants } from "@/lib/animations";
import ButtonCards from "./button-cards";
import ContentSection from "./content-section";
import { jedlianCommucnicationSectionButtons } from "@/lib/data";
import { useState } from "react";

export default function JedlianCommunicationsSection() {
 const [activeIndex, setActiveIndex] = useState(0);
 const activeItem = jedlianCommucnicationSectionButtons[activeIndex];

 return (
  <div className="p-5 space-y-4">
   {/* content */}

   <ContentSection item={activeItem} />

   {/* buttons with logo clickable */}
   <motion.div
    variants={containerVariants}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.2 }}
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
   >
    {jedlianCommucnicationSectionButtons.map((button, index) => (
     <ButtonCards
      className={index === activeIndex && "border-2 border-[#EFBF04]"}
      onClick={() => setActiveIndex(index)}
      key={index}
      img={button.img}
      alt={button.alt}
     />
    ))}
   </motion.div>
  </div>
 );
}
