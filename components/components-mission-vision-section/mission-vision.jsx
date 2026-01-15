import CorporateGovernanceHeader from "../corporate-governance-header";
import { missionVisionData } from "@/lib/data";
import MissionVisionWidget from "./mission-vision-widget";

export default function MissionVision() {
  return (
    <section className="flex gap-10 
    justify-center items-center
    w-full mx-auto max-w-6xl h-100">

      <MissionVisionWidget title={missionVisionData[0].title}
        description={missionVisionData[0].description}
        customClassName={"bg-zinc-300"} type="mission"
      />
      <MissionVisionWidget title={missionVisionData[1].title}
        description={missionVisionData[1].description}
        customClassName={"bg-amber-300"} type="vision"
      />
    </section>
  )
}
