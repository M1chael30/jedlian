import CodeOfConductDesc from "./code-of-conduct-desc";
import CodeOfConductSquare from "./code-of-conduct-square";

export default function CodeOfConduct() {
  return (
    <section className="flex flex-col gap-10 my-20">
        <div className="flex gap-6">
        <CodeOfConductDesc/>
        <CodeOfConductSquare/>
        </div>
    </section>
  )
}
