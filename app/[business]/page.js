"use client";

import BottomSection from "@/components/components-jedlian-business-section/bottom-section";
import ContentSection from "@/components/components-jedlian-business-section/content-section";
import TopSection from "@/components/components-jedlian-business-section/top-section";
import {
 jedlianBusinessesData,
 jedlianCommunicationOffices,
 jedlianDrugstoreBranches,
 jedlianGasolineBranches,
} from "@/lib/homePageData";
import bgBusinessPage from "@/public/images/business-page-img/bg-business-page.png";
import Image from "next/image";
import { useParams } from "next/navigation";

import { motion } from "motion/react";

export default function Business() {
 const params = useParams();
 let data;
 let content;

 if (params.business === "jedlian-communication") {
  data = jedlianCommunicationOffices;
 } else if (params.business === "jedlian-gasoline") {
  data = jedlianGasolineBranches;
 } else if (params.business === "jedlian-drugstore") {
  data = jedlianDrugstoreBranches;
 }

 if (params.business === "jedlian-communication") {
  content = <BottomSection items={data} />;
 } else if (params.business === "jedlian-gasoline") {
  content = <BottomSection items={data} />;
 } else if (params.business === "jedlian-drugstore") {
  content = <BottomSection items={data} />;
 }

 const item = jedlianBusinessesData.find(
  (item) => item.path === String(params.business),
 );

 return (
  <section className="relative mx-auto w-full max-w-7xl">
   {/* image background */}
   <Image
    fill
    priority
    src={bgBusinessPage}
    alt="Business page background image"
    className="object-cover"
   />

   {/* top section */}
   <div className="relative z-10 flex flex-col gap-10">
    <TopSection imgBanner={item?.imgBanner} imgCircle={item?.imgCircleBanner} />
    <ContentSection item={item} />
    {content}
   </div>
  </section>
 );
}
