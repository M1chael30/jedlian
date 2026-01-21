import Link from "next/link";
import CustomButton from "../ui/custom-button";
import { ArrowRight } from "lucide-react";

export default function ContentSection({ item }) {
 return (
  <div className="p-6 md:p-18 lg:px-48 lg:py-20 space-y-12 flex flex-col">
   {/* top section */}
   <div>
    {/* title */}
    <h1 className="py-2 font-bold bg-[radial-gradient(circle_at_center,#c89116,#c89116,#cfceaa)] bg-clip-text text-transparent text-title">
     {item?.title}
    </h1>
    {/* description */}
    <p className="text-description text-justify mb-10">
     {item?.descriptionTwo}
    </p>
    {/* button  */}
    <CustomButton
     icon={<ArrowRight size={18} />}
     buttonText="Learn more about casa"
     buttonHref="#"
    />
   </div>
   {/* mid section */}
   <div className="space-y-2">
    {/* title */}
    <h1 className="font-bold text-subtitle">{item?.titleTwo}</h1>
    {/* description */}
    <p className="text-description text-justify">{item?.descriptionThree}</p>
   </div>
   {/* bottom section */}
   <div className="space-y-2">
    {/* title */}
    <h1 className="font-bold text-subtitle">{item?.titleThree}</h1>
    {/* description */}
    <p className="text-description text-justify">{item?.descriptionFour}</p>
   </div>
   {/* icon */}
   <div className="flex space-x-4">
    {item?.socials &&
     item.socials.map((item, index) => (
      <Link href={item.socialLink} key={index}>
       <item.icon size={32} />
      </Link>
     ))}
   </div>
  </div>
 );
}
