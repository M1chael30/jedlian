import {
 Accordion,
 AccordionContent,
 AccordionItem,
 AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "@/lib/contactUsData";

export default function Questions() {
 return (
  <Accordion type="single" collapsible className="w-full" defaultValue="">
   {faqData.map((item, index) => (
    <AccordionItem key={index} value={`item-${index}`}>
     <AccordionTrigger
      className="bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text font-extrabold text-[clamp(0.95rem,2.5vw,1.20rem)]"
     >
      {item.question}
     </AccordionTrigger>
     <AccordionContent className="flex flex-col gap-4 text-balance">
      <p className="text-description">{item.answer}</p>
     </AccordionContent>
    </AccordionItem>
   ))}
  </Accordion>
 );
}
