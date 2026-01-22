"use client";
import { motion } from "motion/react";

export default function MissionVisionWidget({
  title,
  description,
  icon: Icon,
}) {
  return (
    <motion.div
      inital={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      animate={{ transition: { duration: 2 } }}
      className="border border-yellow-400 rounded-4xl p-10"
    >
      <div className="flex flex-col items-center">
        <Icon className="text-7xl md:text-9xl text-yellow-400" />
        <h1 className="uppercase text-title text-yellow-400">{title}</h1>
      </div>
      <p className="text-description">{description}</p>
    </motion.div>
  );
}
