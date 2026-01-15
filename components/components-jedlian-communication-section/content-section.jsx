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
    className="flex flex-col gap-6 md:flex-row md:justify-between w-full max-w-7xl mx-auto"
   >
    {/* Image */}
    <motion.div variants={imageVariants} className="w-full md:w-1/2">
     <Image src={item.img} alt={item.alt} className="object-cover rounded-xl" />
    </motion.div>

    {/* Content */}
    <div className="w-full md:w-1/2 space-y-4">
     <motion.h1
      variants={contentVariants}
      className="text-lg md:text-2xl lg:text-3xl font-bold"
     >
      {item.title}
     </motion.h1>

     <motion.p variants={contentVariants} className="text-muted-foreground">
      {item.description}
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
