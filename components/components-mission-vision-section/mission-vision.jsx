import { missionVisionData } from "@/lib/corporateGovernanceData";
import MissionVisionWidget from "./mission-vision-widget";
import { PiTargetFill } from "react-icons/pi";
import { BsEyeFill } from "react-icons/bs";

export default function MissionVision() {
  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-2
     gap-5 px-8 mb-12 justify-center items-center text-center"
    >

        <div className="flex flex-col items-center">
          <PiTargetFill className="text-9xl text-yellow-400"/>
          <h1 className="uppercase text-title text-yellow-400">{missionVisionData[0].title}</h1>
          <p className="text-description">{missionVisionData[0].description}</p>
        </div>
        <div className="flex flex-col items-center">
          <BsEyeFill className="text-9xl text-yellow-400"/>
          <h1 className="uppercase text-title text-yellow-400">{missionVisionData[1].title}</h1>
          <p className="text-description">{missionVisionData[1].description}</p>
        </div>
    </section>
  );
}
