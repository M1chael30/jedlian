"use client";

import ContactUsSection from "@/components/components-contact-us/contact-us-section";
import FaqSection from "@/components/components-contact-us/faq-section";
import bgBusinessPage from "@/public/images/business-page-img/bg-business-page.png";
import Image from "next/image";
import { motion } from "framer-motion";
import { itemVariants, sectionVariants } from "@/lib/animations";

export default function ContactUs() {
 return (
  <div className="relative flex flex-col justify-center items-center p-7 max-w-7xl w-full mx-auto">
   <Image
    fill
    priority
    src={bgBusinessPage}
    alt="Business page background image"
    className="object-cover"
   />
   <div className="relative z-10 w-full">
    <h1
     className="text-title bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text "
    >
     Contact Us
    </h1>
    <div className="h-1 my-4 w-full bg-[#c89116]" />
    <ContactUsSection />
    <FaqSection />
   </div>
  </div>
 );
}
