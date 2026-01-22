import { contactsData } from "@/lib/contactUsData";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUsAddress() {
 return (
<<<<<<< Updated upstream
  <div className="space-y-4 md:w-1/2 w-full">
=======
  <div
   className="space-y-4 md:w-1/2 w-full"
  >
>>>>>>> Stashed changes
   <div className="h-60 md:h-full">
    <iframe
     src={contactsData.mapsLink}
     allowFullScreen=""
     loading="lazy"
     referrerPolicy="no-referrer-when-downgrade"
     className="rounded-2xl w-full h-full"
    ></iframe>
   </div>
   <div
    className="bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
           text-transparent bg-clip-text flex items-center gap-2 justify-center "
   >
    <FaMapMarkerAlt className="text-[#c89116]" />
    <p className="text-description">{contactsData.address}</p>
   </div>
  </div>
 );
}
