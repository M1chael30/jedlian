"use client"
import bannerAboutUs from "@/public/images/bannerAboutUs.png";
import Image from "next/image";
import { motion } from "motion/react";

export default function TopSection() {
 return (
  <motion.div className="relative"
  initial={{opacity:0}}
  animate={{opacity:1}}
  >
   <Image
    src={bannerAboutUs}
    alt="Banner Casa Jedliana"
    draggable="false"
    className="w-full h-auto max-w-full object-contain select-none"
   />
  </motion.div>
 );
}
