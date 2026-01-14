import {
 contentVariants,
 imageVariants,
 sectionVariants,
} from "@/lib/animations";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContentSection({ item }) {
 return (
  <AnimatePresence mode="wait">
   <motion.section
    key={item.id}
    variants={sectionVariants}
    initial="hidden"
    animate="show"
    exit="exit"
    className="flex gap-8 justify-center"
   >
    {/* Image */}
    <motion.div
     variants={imageVariants}
     className="w-full md:w-1/3 flex justify-center items-center "
    >
     <Image src={item.img} alt={item.alt} className="object-cover rounded-xl" />
    </motion.div>

    {/* Content */}
    <div className="md:w-1/2 space-y-4 p-7">
     <motion.h2 variants={contentVariants} className="text-3xl font-bold">
      {item.title}
     </motion.h2>

     <motion.p variants={contentVariants} className="text-muted-foreground">
      {item.title}
     </motion.p>

     <motion.div variants={contentVariants}>
      <Button asChild>
       <Link href={item.path}>
        Read More <ArrowRight />
       </Link>
      </Button>
     </motion.div>
    </div>
   </motion.section>
  </AnimatePresence>
 );
}
