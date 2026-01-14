import { EmptyComponent } from "@/components/empty-component";
import { Rocket } from "lucide-react";
import Image from "next/image";
import HomePageImage from "../public/images/home-page-image.png";
import JedlianCommunicationsSection from "@/components/components-jedlian-communication-section/jedlian-communications-section";
import HomeStatsSection from "@/components/home-stats-section";

export default function Home() {
 return (
  //  <EmptyComponent
  //   emptyMediaIcon={<Rocket className="animate-bounce" />}
  //   emptyTitle="Page Under Development"
  //   emptyDescription="This page is currently under development. Please check back soon."
  //  />
  <>
   <Image
    src={HomePageImage}
    alt="Jedlian landing page image"
    className="w-full"
   />
   <HomeStatsSection/>
   <JedlianCommunicationsSection />
  </>
 );
}
