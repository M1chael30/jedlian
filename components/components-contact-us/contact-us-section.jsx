
import { contactsData } from "@/lib/contactUsData";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";


export default function ContactUsSection() {
  return (
          <div className="grid md:grid-cols-2 space-x-8 space-y-6 w-full">
            <div className="md:col-span-2 font-extrabold text-4xl bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text border-b-2 border-b-[#c89116] py-5">
                <h1>Contact Us</h1>
            </div>
        <div className="space-y-5">
          <div className="w-80 md:w-85 text-[#E9DFDF] text-lg">{contactsData.description}</div>
          <div className="text-sm flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              <div className="text-lg flex items-center rounded-full p-2
              bg-[#cfceaa] text-black">
                <BsTelephone />
              </div>
              <p>{contactsData.tel}</p>
            </div>

            <div className="flex gap-2 items-center">
              <div className="text-lg flex items-center rounded-full p-2
               bg-[#cfceaa] text-black">
                <MdOutlineEmail />
              </div>
              <p>{contactsData.email}</p>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="uppercase font-extrabold text-2xl bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] text-transparent bg-clip-text">
              business hours
            </h1>
            <div className="">
                <div className="S">
                  <p>{contactsData.day}</p>
                  <p className="text-sm">{contactsData.hours}</p>
                </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 md:space-y-0">
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
      </div>
  )
}
