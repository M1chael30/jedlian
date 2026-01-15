import Image from "next/image";
import HomePageImage from "../public/images/home-page-image.png";
import JedlianBusinessesSection from "@/components/components-jedlian-businesses-section/jedlian-businesses-section";
import HomeStatsSection from "@/components/home-stats-section";
import CorporateResponsibilitySection from "@/components/components-corporate-responsibility-section/corporate-responsibility-section";

export default function Home() {
 return (
  <>
   <Image
    src={HomePageImage}
    alt="Jedlian landing page image"
    className="w-full"
   />
   <HomeStatsSection />
   <JedlianBusinessesSection />
   <CorporateResponsibilitySection />
  </>
 );
}
