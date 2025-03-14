/* eslint-disable @typescript-eslint/no-explicit-any */
import { DocumentTextIcon } from "@sanity/icons";

export const skill = {
  title: "Skills",
  name: "skills",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    {
      title: "Label",
      name: "label",
      type: "string",
    },
    {
      title: "Percentage",
      name: "percentage",
      type: "number",
      validation: (rule: any) => rule.required().min(0).max(100)
    }
  ],
};
