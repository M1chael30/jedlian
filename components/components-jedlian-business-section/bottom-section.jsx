import { Card, CardContent } from "@/components/ui/card";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";

export default function BottomSection({ items = [] }) {
 return (
  <div className="p-6 md:p-18 lg:px-48 lg:py-10 space-y-8 w-full">
   {/* title */}
   <h1 className="text-title font-extrabold bg-[radial-gradient(circle_at_center,#cfceaa,#c89116,#cfceaa)] bg-clip-text text-transparent">
    Offices
   </h1>

   {/* content */}
   <Carousel className="w-70 md:w-full mx-auto">
    <CarouselContent>
     {items.location?.map((item, index) => (
      <CarouselItem key={index}>
       <div key={index} className="p-1 overflow-hidden md:h-88">
        <iframe
         src={"https://www.google.com/maps/embed?pb=" + item?.longLat}
         allowFullScreen=""
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         className="w-full h-full rounded-lg"
        ></iframe>
       </div>
      </CarouselItem>
     ))}
    </CarouselContent>
    <CarouselPrevious className="-left-7.75 md:-left-12 md:top-1/2" />
    <CarouselNext className="-right-7.75 md:-right-12 md:top-1/2" />
   </Carousel>
  </div>
 );
}
