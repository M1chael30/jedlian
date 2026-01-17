import { EmptyComponent } from "@/components/empty-component";
import { Rocket } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import { contactsData } from "@/lib/contactUsData";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BsTelephone } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";

export default function ContactUs() {
  return (
    <div className="flex flex-col justify-center items-center p-5">
      <div className="grid md:grid-cols-2 p-5 gap-5">
        <div>
          <div className="w-70 md:w-65 py-5">{contactsData.description}</div>
          <div className="">
            <p>{contactsData.tel}</p>
            <p>{contactsData.email}</p>
          </div>
          <div className="py-5">
            <h1 className="uppercase">business hours</h1>
            <div className="">
              {contactsData.schedule.map((item, index) => (
                <div key={index} className="flex gap-2 justify-between">
                  <p>{item.day}</p>
                  <p>{item.hours}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="gap-2 text-3xl hidden md:flex">
            <p>
              <FaFacebook />
            </p>
            <p>
              <FaInstagram />
            </p>
          </div>
        </div>
        <div className="space-y-3 md:space-y-0">
          <div className=" flex flex-col md:p-5">
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
          <div className="">{contactsData.address}</div>
        </div>
      </div>
      <div className="gap-2 text-3xl flex md:hidden">
        <p>
          <FaFacebook />
        </p>
        <p>
          <FaInstagram />
        </p>
      </div>
    </div>
  );
}
