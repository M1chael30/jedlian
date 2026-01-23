"use client";

import casaJedlianaHeroImg from "@/public/images/casa/casaJedlianaHeroImg.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import {
 Carousel,
 CarouselContent,
 CarouselItem,
 CarouselNext,
 CarouselPrevious,
} from "@/components/ui/carousel";
import { casaClassificationData } from "@/lib/casaData";

export default function CasaClassificationSection() {
 const classification = casaClassificationData.filter((item) => item.id === 0);

 return (
  <div className="w-full mx-auto flex flex-col lg:flex-row gap-8 mt-12 lg:mt-0">
   {/* left section buttons */}
   <div className="lg:w-1/2 flex flex-col items-center justify-center">
    {/* casa logo */}
    <div className="text-primary-foreground">logo</div>
    {/* button tabs */}
    <div className="flex flex-col gap-4">
     {casaClassificationData.map((item, index) => (
      <Button className="bg-[#ca9c57]" key={index}>
       {item.title}
      </Button>
     ))}
    </div>
   </div>
   {/* right carousel */}
   <div className="flex lg:w-185 p-8 lg:p-0">
    {/* carousel */}
    <Carousel className="w-full">
     <CarouselContent>
      {classification.map((item) =>
       item.carousel.map((item, index) => (
        <CarouselItem key={index}>
         <div className="relative h-auto lg:h-120">
          {/* bg-image */}
          <Image
           fill
           priority
           src={item.img}
           alt="bg image"
           className="hidden lg:block"
          />
          {/* backdrop filter */}
          <div className="absolute inset-0 bg-primary/80" />
          {/* wrapper */}
          <div className="z-10 relative flex items-center h-full md:px-12 px-2 flex-col lg:pt-14 xl:pt-10">
           <Image
            src={item.img}
            alt={item.title}
            className="rounded-xl aspect-video"
           />
           {/* title and description */}
           <div className="w-full lg:absolute lg:bottom-10 text-center mt-3 lg:mt-0">
            <h1 className="text-[#45291f] text-xl md:text-4xl font-bold">
             {item.title}
            </h1>
            <p className="text-xs md:text-sm font-semibold text-[#45291f] max-w-[50ch] mx-auto">
             {item.description}
            </p>
           </div>
          </div>
         </div>
        </CarouselItem>
       )),
      )}
     </CarouselContent>
     <CarouselPrevious className="-left-7.75 md:-left-4 lg:left-px" />
     <CarouselNext className="-right-7.75 md:-right-4 lg:right-px" />
    </Carousel>
    <div className="bg-[#ca9c57] h-full hidden lg:block w-16" />
   </div>
  </div>
 );
}
