import Link from "next/link";
import CustomButton from "../ui/custom-button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { itemVariants, sectionVariants } from "@/lib/animations";

export default function ContentSection({ item }) {
 return (
  <motion.div
   variants={sectionVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
   className="p-6 md:p-18 lg:px-48 lg:py-20 space-y-12 flex flex-col"
  >
   {/* top section */}
   <div>
    {/* title */}
    <motion.h1
     variants={itemVariants}
     className="py-2 font-bold bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] bg-clip-text text-transparent text-title"
    >
     {item?.title}
    </motion.h1>
    {/* description */}
    <motion.p
     variants={itemVariants}
     className="text-description text-justify mb-10"
    >
     {item?.descriptionTwo}
    </motion.p>
    {/* button  */}
    <motion.div variants={itemVariants}>
     <CustomButton
      icon={<ArrowRight size={18} />}
      buttonText="Learn more about casa"
      buttonHref="#"
     />
    </motion.div>
   </div>
   {/* mid section */}
   <div className="space-y-2">
    {/* title */}
    <motion.h1 variants={itemVariants} className="font-bold text-subtitle">
     {item?.titleTwo}
    </motion.h1>
    {/* description */}
    <motion.p variants={itemVariants} className="text-description text-justify">
     {item?.descriptionThree}
    </motion.p>
   </div>
   {/* bottom section */}
   <div className="space-y-2">
    {/* title */}
    <motion.h1 variants={itemVariants} className="font-bold text-subtitle">
     {item?.titleThree}
    </motion.h1>
    {/* description */}
    <motion.p variants={itemVariants} className="text-description text-justify">
     {item?.descriptionFour}
    </motion.p>
   </div>
   {/* icon */}
   <motion.div variants={itemVariants} className="flex space-x-4">
    {item?.socials &&
     item.socials.map((item, index) => (
      <Link href={item.socialLink} key={index}>
       <item.icon size={32} />
      </Link>
     ))}
   </motion.div>
  </motion.div>
 );
}
