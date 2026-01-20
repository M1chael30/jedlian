import { Card, CardContent } from "@/components/ui/card";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";
import { contactsData } from "@/lib/contactUsData";

export default function BottomSection() {
 return (
  <div className="p-6 md:p-18 lg:px-48 lg:py-10 space-y-8 w-full">
   {/* title */}
   <h1 className="text-title font-extrabold bg-[radial-gradient(circle_at_center,#cfceaa,#c89116,#cfceaa)] bg-clip-text text-transparent">
    Offices
   </h1>

   {/* content */}
   <Carousel className="w-70 mx-auto">
    <CarouselContent>
     {Array.from({ length: 5 }).map((_, index) => (
      <CarouselItem key={index}>
       <div className="p-1 overflow-hidden">
        <iframe
         src={contactsData.mapsLink}
         allowFullScreen=""
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         className="w-full h-full rounded-lg"
        ></iframe>
       </div>
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious className="-left-7.75" />
    <CarouselNext className="-right-7.75" />
   </Carousel>
  </div>
 );
}
