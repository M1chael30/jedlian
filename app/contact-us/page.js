import { EmptyComponent } from "@/components/empty-component";
import { Rocket } from "lucide-react";
import { ArrowLeft } from "lucide-react";
import ContactUsSection from "@/components/components-contact-us/contact-us-section";
import FaqSection from "@/components/components-contact-us/faq-section";

export default function ContactUs() {
  return (
    <div className="flex flex-col justify-center items-center p-7 max-w-7xl w-full mx-auto">
      <div className=" w-full">
        <h1 className="text-4xl font-extrabold md:text-5xl bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)]
             text-transparent bg-clip-text ">Contact Us</h1>
      </div>
        <div className="h-1 my-3 w-full bg-[#c89116]"/>
      <ContactUsSection />
      <FaqSection />

      {/* <div className=""/> */}
    </div>
  );
}
