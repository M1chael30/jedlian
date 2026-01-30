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

export default function Business() {
 const params = useParams();
 let data;
 let content;

 // check if equal to the parameter and then show data and content.
 if (params.business === "jedlian-communication") {
  data = jedlianCommunicationOffices;
  content = <BottomSection items={data} />;
 } else if (params.business === "jedlian-gasoline") {
  data = jedlianGasolineBranches;
  content = <BottomSection items={data} />;
 } else if (params.business === "jedlian-drugstore") {
  data = jedlianDrugstoreBranches;
  content = <BottomSection items={data} />;
 }

 // find the data that equals to the parameter
 const item = jedlianBusinessesData.find(
  (item) => item.params === params.business,
 );

 return (
  <section className="relative mx-auto w-full max-w-7xl">
   {/* image background */}
   <Image
    fill
    priority
    src={bgBusinessPage}
    draggable="false"
    alt="Business page background image"
    className="object-cover select-none"
   />

   <div className="relative z-10 flex flex-col">
    {/* top section */}
    <TopSection imgBanner={item?.imgBanner} imgCircle={item?.imgCircleBanner} />
    {/* content section */}
    <ContentSection item={item} />
    {/* branches or offices */}
    {content}
   </div>
  </section>
 );
}
