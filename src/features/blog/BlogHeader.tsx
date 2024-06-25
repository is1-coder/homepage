import React from "react";
import Image from "next/image";
import { getPostMetadata } from "@/features/blog/blog";
import { LuCalendarPlus } from "react-icons/lu";
import "zenn-content-css";

type BlogHeaderProps = {
  slug: string;
  className?: string;
};

const BlogHeader = ({ slug, className }: BlogHeaderProps) => {
  const metadata = getPostMetadata(slug);

  return (
    <div className={`${className}`}>
      <h1 className="text-[28px]">{metadata.title}</h1>
      <div className="flex items-center mt-6">
        <LuCalendarPlus />
        <p className="ml-2">{metadata.date}</p>
      </div>
      <Image
        src={`/images/blog/${
          metadata.thumbnail ? `${slug}/${metadata.thumbnail}` : "default.png"
        }`}
        alt={`${slug}`}
        height={360}
        width={640}
        className="max-w-[80%] aspect-video object-cover object-center overflow-hidden mx-auto  my-10"
      />
      <p className="znc">{metadata.description}</p>
    </div>
  );
};

export default BlogHeader;
