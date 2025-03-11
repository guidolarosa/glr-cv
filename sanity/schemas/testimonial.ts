import { DocumentTextIcon } from "@sanity/icons";

export const testimonial = {
  title: "Link",
  name: "testimonial",
  type: "object",
  icon: DocumentTextIcon,
  fields: [
    {
      title: "Testimonial",
      name: "testimonial",
      type: "array",
      of: [{type: 'block'}]
    },
    {
      title: "Author",
      name: "author",
      type: "link"
    },
  ]
};
