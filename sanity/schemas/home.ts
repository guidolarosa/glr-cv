import { HomeIcon } from "@sanity/icons";

export const home = {
  name: "home",
  type: "document",
  title: "Home",
  icon: HomeIcon,
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      initialValue: "Home",
      disabled: true,
    },
    {
      name: "role",
      title: "Role",
      type: "string",
      
    },
    {
      name: "shortBio",
      title: "Short Bio",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
    {
      title: "Education",
      name: "education",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Mail",
      name: "mail",
      type: "string"
    },
    {
      title: "Phone",
      name: "phone",
      type: "string"
    },
    {
      title: "Contact Links",
      name: "contactLinks",
      type: "array",
      of: [{ type: "link"}]
    },
    {
      title: "Other Links",
      name: "otherLinks",
      type: "array",
      of: [{ type: "link"}]
    }
  ],
};
