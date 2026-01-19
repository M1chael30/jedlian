import { contactsData } from "@/lib/contactUsData";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function ContactUsAddress() {
  return (
         <div className="space-y-3 md:space-y-0 md:w-1/2 w-full">
          <div className=" flex flex-col md:py-5">
            <div className="w-full md:h-70 h-50">
              <iframe
                src={contactsData.mapsLink}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl w-full h-full"
              ></iframe>
            </div>
          </div>
          <div className="bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
           text-transparent bg-clip-text flex items-center gap-2 justify-center">
            <FaMapMarkerAlt className="text-[#c89116]"/>
            {contactsData.address}
          </div>
        </div> 
  )
}
