"use client";

import CorporateValues from "@/components/components-corporate-values-section/corporate-values";
import MissionVision from "@/components/components-mission-vision-section/mission-vision";
import CodeOfConduct from "@/components/components-code-of-conduct/code-of-conduct";
import CorporateGovernanceHeader from "@/components/corporate-governance-header";
import bannerCorporateGovernance from "@/public/images/banners/bannerCorporateGovernance.png";
import Image from "next/image";
import CorporateValuesMobile from "@/components/components-corporate-values-section/corporate-values-mobile";

import { motion } from "motion/react";
import { corporateValuesVariants, itemVariants } from "@/lib/animations";

import bgCasa from '@/public/images/bg-casa-jedliana.png'

export default function CorporateGovernance() {
  return (
    <div className="flex flex-col justify-center items-center mx-auto max-w-7xl w-full">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ x: 0, opacity: 1, transition: { duration: 1 } }}
        className="w-full"
      >
        <Image
          src={bannerCorporateGovernance}
          alt="Jedlian landing page image"
          draggable="false"
          className="w-full h-auto max-w-full object-contain select-none"
        />
      </motion.div>
      <MissionVision />
      <div className="h-120 md:min-h-180 flex flex-col justify-center items-center">
        <div className={`flex flex-col items-center md:justify-center`} 
        
        >
          <motion.h1
            initial={{ opacity: 0, y:20 }}
            whileInView={{ opacity: 1, y: 0, transition: {duration:0.5} }}
            className="text-title font-extrabold mt-5 text-center"
          >
            CORPORATE VALUES
          </motion.h1>
          <CorporateValues />
          <CorporateValuesMobile />
        </div>
      </div>
    </div>
  );
}
