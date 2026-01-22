import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { itemVariants, sectionVariants } from "@/lib/animations";
import { faqData } from "@/lib/contactUsData";
import { motion } from "framer-motion";

export default function Questions() {
 return (
  <motion.div
   variants={sectionVariants}
   initial="hidden"
   whileInView="show"
   viewport={{ once: true, amount: 0.3 }}
  >
   <Accordion type="single" collapsible className="w-full" defaultValue="">
    {faqData.map((item, index) => (
     <AccordionItem key={index} value={`item-${index}`}>
      <AccordionTrigger>
       <motion.p
        className="bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
      text-transparent bg-clip-text font-extrabold text-description"
        variants={itemVariants}
       >
        {item.question}
       </motion.p>
      </AccordionTrigger>
      <AccordionContent className="flex flex-col gap-4 text-balance">
       <motion className="text-description">{item.answer}</motion>
      </AccordionContent>
     </AccordionItem>
    ))}
   </Accordion>
  </motion.div>
 );
}
