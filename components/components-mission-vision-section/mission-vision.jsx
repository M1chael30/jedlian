import { missionVisionData } from "@/lib/corporateGovernanceData";
import MissionVisionWidget from "./mission-vision-widget";
import { PiTargetFill } from "react-icons/pi";
import { BsEyeFill } from "react-icons/bs";

export default function MissionVision() {
  return (
    <section
      className="
        grid grid-cols-1 md:grid-cols-2
     gap-5 px-10 justify-center items-center
     text-center"
    >
      <div>
        <div className="flex flex-col items-center">
          <PiTargetFill className="text-7xl md:text-9xl text-yellow-400" />
          <h1 className="uppercase text-title text-yellow-400">
            {missionVisionData[0].title}
          </h1>
        </div>
        <p className="text-description">{missionVisionData[0].description}</p>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <BsEyeFill className="text-7xl md:text-9xl text-yellow-400" />
          <h1 className="uppercase text-title text-yellow-400">
            {missionVisionData[1].title}
          </h1>
        </div>
        <p className="text-description">{missionVisionData[1].description}</p>
      </div>
    </section>
  );
}
