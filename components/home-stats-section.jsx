"use client";

import Image from "next/image";
import HomeStatsButton from "./components-home-stats-section/home-stats-button";
import HomeStatsCards from "./components-home-stats-section/home-stats-cards";
import BgCasa from "@/public/images/bg-casa-jedliana.png";

export default function HomeStatsSection() {
 return (
  <section className="relative flex flex-col items-center bg-zinc-900 space-y-8 px-10 py-14 overflow-hidden w-full mx-auto max-w-7xl">
   {/* background image */}
   <Image
    src={BgCasa}
    alt="Casa Jedliana Background"
    fill
    priority
    className="object-cover"
   />
   {/* contents */}
   <div className="relative z-10 flex flex-col items-center justify-center space-y-8 w-full">
    <HomeStatsCards />
    <HomeStatsButton />
   </div>
  </section>
 );
}
