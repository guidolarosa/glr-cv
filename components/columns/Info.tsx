/* eslint-disable @typescript-eslint/no-explicit-any */
import { sanityFetch } from "@/sanity/lib/fetch";
import { H1 } from "../typography";
import { HOME } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "@/components/Link";
import { PortableText } from "next-sanity";

const Info = async () => {
  const home : any = await sanityFetch({
    query: HOME,
  });

  const { image, role, mail, phone, shortBio, otherLinks } = home[0];

  return (
    <div className="flex flex-col gap-4 pb-16">
      <div className="w-40 aspect-square relative rounded-full overflow-hidden">
        <Image src={image} fill alt="Profile Picture" />
      </div>
      <div>
        <H1 className="!text-2xl">Guido La Rosa</H1>
        <div>
          <strong className="opacity-50">{role}</strong>
        </div>
      </div>
      <div>
        <div className="text-xs">
          <PortableText value={shortBio} />
        </div>
      </div>
      <div className="mt-auto flex flex-col gap-2">
        <strong>Contact</strong>
        <div className="text-xs flex flex-col gap-1">
          <div>
            <Link href={`tel:${phone}`} className="text-emerald-500">
              {phone}
            </Link>
          </div>
          <div>
            <Link href={`mailto:${mail}`} className="text-emerald-500">
              {mail}
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <strong>Links</strong>
        <ul className="text-xs">
          {otherLinks.map((link: any, idx: number) => (
            <li key={link._key} className="inline leading-relaxed">
              <Link href={link.url} className="text-emerald-500">
                {link.label}
              </Link>
              <span className="opacity-40 text-emerald-400 mx-1">
                {idx < otherLinks.length - 1 && "/"}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
