'use client'
import AchievementsContentSection from "@/components/components-achievements-page/achievements-content-section";
import AchievementsTopSection from "@/components/components-achievements-page/achievements-top-section";

export default function Achievements() {
 return (
  <section className="mx-auto w-full max-w-7xl">
   <AchievementsTopSection />
   <AchievementsContentSection/>
  </section>
 );
}
