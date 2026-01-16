import CodeOfConductDesc from "./code-of-conduct-desc";
import CodeOfConductSquare from "./code-of-conduct-square";

export default function CodeOfConduct() {
  return (
    <section className="flex flex-col py-20">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <CodeOfConductDesc />
          <CodeOfConductSquare />
      </div>
    </section>
  );
}
