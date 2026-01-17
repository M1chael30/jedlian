import { EmptyComponent } from "@/components/empty-component";
import { Rocket } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import ContactUsSection from "@/components/components-contact-us/contact-us-section";

export default function ContactUs() {
  return (
    <div className="flex flex-col justify-center items-center p-7 max-w-7xl w-full mx-auto">
      <ContactUsSection/>
     
      <div className="gap-2 text-3xl flex md:hidden">
        {/* <p>
          <FaFacebook />
        </p>
        <p>
          <FaInstagram />
        </p> */}
      </div>
    </div>
  );
}
