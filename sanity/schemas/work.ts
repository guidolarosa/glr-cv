import { DocumentTextIcon } from "@sanity/icons";

export const work = {
  title: "Job",
  name: "job",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: "Position",
      name: "position",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Start Date",
      name: "startDate",
      type: "date",
    },
    {
      title: "End Date",
      name: "endDate",
      type: "date",
    },
    {
      title: "Links",
      name: "links",
      type: "array",
      of: [{ type: "link" }],
    },
    {
      title: "Testimonials",
      name: "testimonials",
      type: "array",
      of: [{ type: "testimonial" }],
    },
  ],
};
