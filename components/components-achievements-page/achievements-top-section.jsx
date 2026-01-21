import Image from "next/image";
import bannerAchievements from "@/public/images/banners/bannerAchievements.png";

export default function AchievementsTopSection() {
 return (
  <Image
   src={bannerAchievements}
   alt="Banner Casa Jedliana"
   className="w-full h-auto max-w-full object-contain"
  />
 );
}
