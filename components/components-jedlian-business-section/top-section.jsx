import bannerCasa from "@/public/images/business-page-img/bannerCasa.png";
import circleCasaJedliana from "@/public/images/business-page-img/circleCasaJedliana.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, contentVariants, fadeVariants } from "@/lib/animations";

export default function TopSection({
 imgBanner = bannerCasa,
 imgCircle = circleCasaJedliana,
}) {
 return (
  <motion.div
   variants={containerVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
   className="relative"
  >
   <motion.div variants={fadeVariants}>
    <Image
     src={imgBanner}
     alt="Banner Casa Jedliana"
     className="w-full h-auto max-w-full object-contain"
    />

    <Image
     src={imgCircle}
     alt="Circle Casa Jedliana"
     className="absolute top-0 right-0 w-22 md:w-50 object-contain"
    />
   </motion.div>
  </motion.div>
 );
}
