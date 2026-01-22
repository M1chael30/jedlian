import { contactsData } from "@/lib/contactUsData";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { motion } from "framer-motion";
import { itemVariants, sectionVariants } from "@/lib/animations";

export default function ContactUsDetails() {
 return (
  <div className="space-y-5 mb-3 md:mb-0 w-full md:w-1/2">
   <div className="text-[#E9DFDF] text-description">
    <p>
    {contactsData.description}
   </p>
   <div className="text-sm flex flex-col gap-2">
    <div className="flex gap-2 items-center">
     <div
      variants={itemVariants}
      className="flex items-center rounded-full p-2 bg-[#cfceaa] text-black text-description"
     >
      <BsTelephone />
     </div>
     <p variants={itemVariants} className="text-description">
      {contactsData.tel}
     </p>
    </div>

    <div className="flex gap-2 items-center">
     <div
      variants={itemVariants}
      className="flex items-center rounded-full p-2 bg-[#cfceaa] text-black text-description"
     >
      <MdOutlineEmail />
     </div>
     <p variants={itemVariants} className="text-description">
      {contactsData.email}
     </p>
    </div>
   </div>
   <div className="space-y-2">
    <h1
     variants={itemVariants}
     className="font-extrabold bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] text-transparent bg-clip-text text-subtitle"
    >
     Business Hours
    </h1>
    <div>
     <p className="text-description">{contactsData.day}</p>
     <p className="text-description">{contactsData.hours}</p>
    </div>
   </div>
  </div>
  </div>
 );
}
