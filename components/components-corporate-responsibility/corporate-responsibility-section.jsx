"use client";

import Image from "next/image";
import BgCasa from "@/public/images/bg-casa-jedliana.png";
import CustomButton from "../ui/custom-button";
import { motion } from "framer-motion";
import {
 containerVariants,
 fadeUpVariants,
 fadeRightVariants,
} from "@/lib/animations";
import { ArrowRight } from "lucide-react";

export default function CorporateResponsibilitySection() {
 return (
  <motion.div
   variants={containerVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
   className="relative p-5 h-65 flex items-center overflow-hidden"
  >
   {/* background image */}
   <Image
    src={BgCasa}
    alt="Casa Jedliana Background"
    fill
    priority
    className="object-cover"
   />

   {/* content */}
   <div className="relative z-10 flex flex-col md:flex-row w-full max-w-7xl mx-auto text-white gap-8">
    {/* left section */}
    <div className="space-y-4 w-full md:w-1/2">
     <motion.h1 variants={fadeUpVariants} className="text-xl font-semibold">
      Corporate Responsibility & Sustainability at Jedlian Holdings
     </motion.h1>

     <motion.div variants={fadeUpVariants}>
      <CustomButton
       buttonText="Visit Governance"
       buttonHref="#"
       icon={<ArrowRight size={18} />}
      />
     </motion.div>
    </div>

    {/* right section */}
    <motion.div variants={fadeRightVariants} className="w-full md:w-1/2">
     <p className="text-sm">
      We maximize strong corporate governance to strengthen responsible
      decision-making, uphold ethical standards, and guide management
      actions—ensuring that long-term sustainability, stakeholder value, and
      social responsibility take precedence over short-term gains.
     </p>
    </motion.div>
   </div>
  </motion.div>
 );
}
