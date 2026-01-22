export default function MissionVisionWidget({
 title,
 description,
 icon: Icon,
}) {
 return (
      <div className="border border-yellow-400 rounded-4xl p-10">
        <div className="flex flex-col items-center">
          <Icon className="text-7xl md:text-9xl text-yellow-400" />
          <h1 className="uppercase text-title text-yellow-400">
            {title}
          </h1>
        </div>
        <p className="text-description">{description}</p>
      </div>
 );
}
