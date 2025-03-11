import { type SchemaTypeDefinition } from "sanity";
import { home } from "./schemas/home";
import { work } from "./schemas/work";
import { skill } from "./schemas/skill";
import { link } from "./schemas/link";
import { testimonial } from "./schemas/testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    work,
    home,
    skill,
    link,
    testimonial
  ],
};
