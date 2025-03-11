import { sanityFetch } from "@/sanity/lib/fetch";
import { H2, H3 } from "../typography";
import { JOB } from "@/sanity/lib/queries";
import { PortableText } from "next-sanity";
import Link from "@/components/Link";
import Column from "../Column";

const Work = async () => {
  const jobs = await sanityFetch({
    query: JOB,
  });

  return (
    <Column title={"Work History"}>
      <ul className="flex flex-col gap-6">
        {jobs.map((job) => (
          <li key={job._id} className="flex flex-col gap-2">
            <div>
              <H2 className="text-emerald-500">{job.title}</H2>
              <strong className="text-stone-500">{job.position}</strong>
            </div>
            <div className="text-xs flex gap-2 px-2 py-1 border rounded-sm w-fit">
              <span>
                {job.startDate
                  ? new Date(job.startDate).toLocaleDateString()
                  : "Undefined"}
              </span>
              {"->"}
              <span>
                {job.endDate
                  ? new Date(job.endDate).toLocaleDateString()
                  : "Current"}
              </span>
            </div>
            <div className="text-xs text-stone-300 leading-relaxed">
              <PortableText value={job.description} />
            </div>
            {job.links && (
              <div className="text-xs">
                <ul>
                  {job.links.map((link, idx) => (
                    <li key={link._key} className="inline">
                      <Link
                        href={link.url}
                        className="text-emerald-400"
                        target="_blank"
                      >
                        {link.label}
                      </Link>
                      <span className="opacity-40 text-emerald-400">
                        {idx < job.links.length - 1 && " / "}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {job.testimonials && (
              <div className="mt-3">
                <H3 className="mb-2 !text-sm">Testimonials</H3>
                <div className="border p-4 border-emerald-500 bg-emerald-950 rounded-sm">
                  {job.testimonials.map((testimonial) => (
                    <div
                      key={testimonial._key}
                      className="text-xs leading-relaxed"
                    >
                      <div className="opacity-90 text-emerald-50">
                        <PortableText value={testimonial.testimonial} />
                      </div>
                      <div className="mt-3">
                        <Link
                          href={testimonial.author.url}
                          className="text-emerald-500 underline"
                        >
                          {testimonial.author.label}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </Column>
  );
};

export default Work;
