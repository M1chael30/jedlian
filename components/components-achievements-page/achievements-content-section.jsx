"use client"
import { achievementsData } from "@/lib/achievementsData";
import { motion } from "motion/react";
import Image from "next/image";

export default function AchievementsContentSection() {
  return (
    <section className="flex flex-col items-center justify-center p-10 gap-5">
      {achievementsData.reverse().map((achievement) => (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        key={achievement.id} className={`flex justify-center items-center gap-5 min-h-140
         ${achievement.id % 2 == 0 ? "":"flex-row-reverse"}`}>
          <div className="w-50 space-x-2">
            <h1 className="text-title">{achievement.year}</h1>
            <p>{achievement.content}</p>
          </div>
          <div>
            <Image src={achievement.image} alt="achievement" className="w-100 h-100" />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
