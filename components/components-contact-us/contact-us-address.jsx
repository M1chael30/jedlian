import { contactsData } from "@/lib/contactUsData";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { itemVariants, sectionVariants } from "@/lib/animations";

export default function ContactUsAddress() {
 return (
  <motion.div
   variants={sectionVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
   className="space-y-4 md:w-1/2 w-full"
  >
   <motion.div variants={itemVariants} className="h-60 md:h-full">
    <iframe
     src={contactsData.mapsLink}
     allowFullScreen=""
     loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"
     className="rounded-2xl w-full h-full"
    ></iframe>
   </motion.div>
   <motion.div
    variants={itemVariants}
    className="bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
           text-transparent bg-clip-text flex items-center gap-2 justify-center "
   >
    <FaMapMarkerAlt className="text-[#c89116]" />
    <p className="text-description">{contactsData.address}</p>
   </motion.div>
  </motion.div>
 );
}
