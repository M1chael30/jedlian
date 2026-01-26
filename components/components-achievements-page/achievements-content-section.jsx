"use client"
import { achievementsData } from "@/lib/achievementsData";
import { motion } from "motion/react";
import Image from "next/image";

export default function AchievementsContentSection() {
  return (
    <section className="flex flex-col items-center justify-center p-10">
      {achievementsData.reverse().map((achievement) => (
        <motion.div
        initial={{opacity:0}}
        whileInView={{opacity:1, transition: {duration: 1.5}}}
        key={achievement.id} className={`flex justify-center items-center gap-5 min-h-140 relative
         ${achievement.id % 2 == 0 ? "":"flex-row-reverse"}`}>
          <div className={`w-100 ${achievement.id % 2 == 0 ? "":"text-right"} bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text `}>
                <div>

                </div>
            <h1 className="text-title underline z-20 ">{achievement.year}</h1>
            <p className="text-description z-20">{achievement.content}</p>
            <div>

            </div>
            <div className="z-0 absolute -mx-25 -my-110">
            <Image src={achievement.image} alt="achievement" draggable="false" className=" grayscale w-180 h-180  opacity-30" />
            </div>
          </div>
          <div>
            <Image src={achievement.image} alt="achievement" draggable="false" className="w-130 h-130 select-none" />
          </div>
        </motion.div>
      ))}
    </section>
  );
}
