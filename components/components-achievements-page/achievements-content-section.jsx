"use client";
import { achievementsData } from "@/lib/achievementsData";
import { motion } from "motion/react";
import Image from "next/image";
import DesktopView from "./desktop-view";
import MobileView from "./mobile-view";
import Timeline from "./timeline";

export default function AchievementsContentSection() {
  return (
    <section className="flex flex-col items-center justify-center p-8 md:p-10">
      <DesktopView/>
     {/*<MobileView/> */}
     {/* <Timeline/> */}
    </section>
  );
}
