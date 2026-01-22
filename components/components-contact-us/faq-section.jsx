import { itemVariants, sectionVariants } from "@/lib/animations";
import Questions from "./questions";
import { motion } from "framer-motion";

export default function FaqSection() {
 return (
  <motion.section
   variants={sectionVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
   className="w-full my-18"
  >
   <div>
    <div className="">
     <motion.h1
      variants={itemVariants}
      className="font-extrabold bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] text-transparent bg-clip-text text-title"
     >
      FAQ
     </motion.h1>
     <motion.p
      variants={itemVariants}
      className="bg-[radial-gradient(circle_at_center,#E2D7D7,#958D8D,#E9DFDF)] text-transparent bg-clip-text text-description"
     >
      Do you have any questions for us?
     </motion.p>
    </div>
    <motion.div
     variants={itemVariants}
     className="h-1 my-6 w-full bg-[#c89116]"
    />
   </div>
   <Questions />
  </motion.section>
 );
}
