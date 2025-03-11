// ./sanity/lib/queries.ts

import { groq } from "next-sanity";

export const JOB = groq`*[_type == "job"] | order(endDate desc)`;

export const SKILL = groq`*[_type == "skills"]`;

export const HOME = groq`*[_type == "home"] {
  "image": image.asset->url,
  education,
  role,
  phone,
  shortBio,
  mail,
  otherLinks
}`;