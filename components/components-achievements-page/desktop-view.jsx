"use client";
import { achievementsData } from "@/lib/achievementsData";
import { containerVariants, fadeUpVariants } from "@/lib/animations";
import { motion } from "motion/react";
import Image from "next/image";

export default function DesktopView() {
  return (
    <div className="md:block hidden w-full max-w-7xl">
      {achievementsData.reverse().map((achievement) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 1.5 } }}
          key={achievement.id}
          className={`flex justify-center items-center gap-5 relative mb-9 min-h-140
         ${achievement.id % 2 == 0 ? "" : "flex-row-reverse"}`}
        >
          <div
            className={`w-100 ${achievement.id % 2 == 0 ? "" : "text-right"} relative`}
          >
            <motion.div className="relative z-10">
                
              <motion.h1
                className="bg-[radial-gradient(circle_at_75%,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text text-title underline"
              >
                {achievement.year}
              </motion.h1>
              <motion.p className="text-description">
                {achievement.content}
              </motion.p>
            </motion.div>
            <motion.div className="z-0 absolute -mx-20 -my-110  opacity-55 ">
              <Image
                src={achievement.image}
                alt="achievement"
                draggable="false"
                className=" grayscale md:hidden  lg:w-180 lg:h-180 select-none lg:block"
              />
            </motion.div>
          </div>
          <motion.div className="z-10">
            <Image
              src={achievement.image}
              alt="achievement"
              draggable="false"
              className="w-60 md:w-130 md:h-130 select-none"
            />
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
}
