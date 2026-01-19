import { Card } from "../ui/card";
import { CardTitle } from "../ui/card";
import { CardDescription } from "../ui/card";

import { homeStatsData } from "@/lib/homePageData";
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
   className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl md:px-6 md:p-0 px-12"
   variants={containerVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
  >
   {homeStatsData.map((item, index) => (
    <motion.div className="cursor-pointer" key={index} variants={itemVariants}>
     <Card className="p-5 text-black bg-white/75 border-yellow-600 hover:scale-110 duration-400 justify-center h-55 md:h-60 lg:h-85">
      <CardTitle className={"cursor-default text-center"}>
       <div className="text-4xl md:text-5xl font-extrabold text-shadow-xs">
        {item.number}
       </div>
       <div className="text-lg md:text-xl italic">{item.title}</div>
      </CardTitle>
      <CardDescription className="text-zinc-900 text-xs md:text-sm">
       {item.description}
      </CardDescription>
     </Card>
    </motion.div>
   ))}
  </motion.div>
 );
}
