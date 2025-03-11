/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityFetch } from "@/sanity/lib/fetch";
import { SKILL } from "@/sanity/lib/queries";
import Column from "../Column";

const Skills = async () => {
  const skills : any = await sanityFetch({
    query: SKILL,
  });

  return (
    <Column title={"Skills"}>
      <ul className="flex flex-col gap-2">
        {skills.map((skill: any) => (
          <li key={skill._id} className="flex flex-col gap-1">
            <label className="text-sm">{skill.label}</label>
            <div className="border h-5 border-emerald-500 p-0.5">
              <div
                className="bg-emerald-500 h-full"
                style={{ width: `${skill.percentage}%` }}
              ></div>
            </div>
          </li>
        ))}
      </ul>
    </Column>
  );
};

export default Skills;
