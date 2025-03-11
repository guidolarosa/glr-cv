import { DocumentTextIcon } from "@sanity/icons";

export const link = {
  title: "Link",
  name: "link",
  type: "object",
  icon: DocumentTextIcon,
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "URL",
      name: "url",
      type: "url",
    },
  ]
};
