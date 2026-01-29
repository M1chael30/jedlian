"use client";
import { achievementsData } from "@/lib/achievementsData";
import { containerVariants, fadeUpVariants } from "@/lib/animations";
import Image from "next/image";

export default function DesktopView() {

  return (
    <div className=" w-full py-12 md:py-20">
      <div className="relative ml-3">
        {/* Timeline line */}
        <div className="absolute top-4 bottom-0 left-0 border-l-2 bg-yellow-600" />

        {achievementsData.reverse().map(
          ({ description, period, title, image }, index) => (
            <div className="relative pb-15 pl-8 last:pb-0 grid md:grid-cols-2 gap-5" key={index}>
              {/* Timeline dot */}
              <div className="absolute top-3 left-px h-4 w-4 -translate-x-1/2 rounded-full bg-yellow-400" />

              {/* Content */}
              <div className="space-y-3">
                <div className="flex items-center gap-2.5 justify-center md:justify-normal">
                  <span className="text-3xl md:text-4xl font-semibold">{period}</span>
                </div>
                <div className="flex justify-center md:justify-normal md:block">

                                <Image src={image} alt="nakamit mo" className="rounded-xl border border-yellow-400 h-45 w-65 block md:hidden"/>
                </div>

                <div className="flex flex-col justify-center py-3 items-center md:items-start">
                  <h3 className="font-semibold text-xl tracking-[-0.01em]">
                    {title}
                  </h3>
                <p className="text-pretty text-muted-foreground text-sm sm:text-base text-center md:text-left">
                  {description}
                </p>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <Image src={image} alt="nakamit mo" className="rounded-xl border border-yellow-400 h-60 w-90 md:block hidden"/>
              </div>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
