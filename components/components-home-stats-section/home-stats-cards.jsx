import { Card } from "../ui/card";
import { CardTitle } from "../ui/card";
import { CardDescription } from "../ui/card";

import { homeStatsData } from "@/lib/data";
import { motion } from "framer-motion";

const containerVariants = {
 hidden: {},
 show: {
  transition: {
   staggerChildren: 0.2,
  },
 },
};

const itemVariants = {
 hidden: {
  opacity: 0,
  y: -120,
  scale: 0.96,
 },
 show: {
  opacity: 1,
  y: 0,
  scale: 1,
  transition: {
   type: "spring",
   stiffness: 220,
   damping: 100,
   mass: 0.8,
  },
 },
};

export default function HomeStatsCards() {
 return (
  <motion.div
   className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl px-6 md:p-0"
   variants={containerVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
  >
   {homeStatsData.map((item, index) => (
    <motion.div className=" cursor-pointer" key={index} variants={itemVariants}>
     <Card
      className="flex flex-col items-center justify-center p-5 h-80
             text-black bg-white/75 border-yellow-600 hover:scale-110 duration-400
            "
     >
      <CardTitle
       className={"cursor-default flex flex-col justify-center items-center"}
      >
       <div className="text-5xl font-extrabold text-shadow-xs">
        {item.number}
       </div>
       <div className="text-sm italic">{item.title}</div>
      </CardTitle>
      <CardDescription
       className="flex flex-col items-center justify-center 
            w-50 text-zinc-900 text-center"
      >
       {item.description}
      </CardDescription>
     </Card>
    </motion.div>
   ))}
  </motion.div>
 );
}
