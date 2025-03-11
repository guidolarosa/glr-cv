import { sanityFetch } from "@/sanity/lib/fetch";
import { H1 } from "../typography";
import { HOME } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Column from "../Column";

const Education = async () => {
  const home = await sanityFetch({
    query: HOME,
  });

  return (
    <Column title={"Education"}>
      <div className="text-xs text-stone-300 leading-relaxed [&>p]:!mb-4">
        <PortableText value={home[0].education} />
      </div>
    </Column>
  );
};

export default Education;
