export default function MissionVisionCircles({type}) {
    return(
    <div className="absolute inset-0">
        <div className={`rounded-full w-55 h-55 absolute  opacity-20  ${type == "mission" ? "bg-zinc-400 top-50" : "bg-yellow-100 bottom-50 right-1" }`} />
        <div className={`rounded-full  w-35 h-35 absolute opacity-20  ${type == "mission" ? "bg-zinc-400 top-30 left-30": "bg-yellow-100 bottom-30 right-30" }`} />
    </div>
    )
}