"use client";

import HomeStatsButton from "./components-home-stats-section/home-stats-button";
import HomeStatsCards from "./components-home-stats-section/home-stats-cards";

export default function HomeStatsSection() {

  return (
    <section className="flex flex-col gap-10 p-10 items-center bg-zinc-900">
      <HomeStatsCards/>
      <HomeStatsButton/>
    </section>
  );
}
