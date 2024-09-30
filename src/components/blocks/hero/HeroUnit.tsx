"use client";

import Image from "next/image";
import Link from "next/link";

export interface HeroProps {
  title: string;
  text: string;
  links?: Array<{ text: string; href: string }>;
  image?: {
    src: string;
    alt: string;
  };
}

export default function HeroUnit({ title, text, links, image }: HeroProps) {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:grid lg:max-w-none lg:grid-cols-2 lg:gap-x-16 lg:gap-y-6 xl:grid-cols-1 xl:grid-rows-1 xl:gap-x-8">
            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-rs-gray sm:text-6xl lg:col-span-2 xl:col-auto">
              {title}
            </h1>
            <div className="mt-6 max-w-xl lg:mt-0 xl:col-end-1 xl:row-start-1">
              <p className="text-lg leading-8 text-rs-gray/90">{text}</p>
              <div className="mt-10 flex items-center gap-x-6">
                {links && links[0] ? (
                  <Link
                    href="/contact"
                    className="rounded-md bg-rs-blue px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-rs-green focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rs-green"
                  >
                    Get in touch
                  </Link>
                ) : null}
                {links && links[1] ? (
                  <Link
                    href="/services"
                    className="text-sm font-semibold leading-6 text-gray-900"
                  >
                    Our services <span aria-hidden="true">→</span>
                  </Link>
                ) : null}
              </div>
            </div>
            {image ? (
              <Image
                src={image.src}
                alt={image.alt}
                className="mt-10 aspect-[6/5] w-full max-w-lg rounded-2xl object-cover sm:mt-16 lg:mt-0 lg:max-w-none xl:row-span-2 xl:row-end-2 xl:mt-36"
                width="800"
                height="800"
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
