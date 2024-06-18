import React from "react";
import Image from "next/image";
import { getPostMetadata } from "@/features/blog/blog";
import { LuCalendarPlus } from "react-icons/lu";

type BlogHeaderProps = {
  slug: string;
  style?: React.CSSProperties;
};

const BlogHeader = ({ slug, style }: BlogHeaderProps) => {
  const metadata = getPostMetadata(slug);

  return (
    <div style={style}>
      <h1>{metadata.title}</h1>
      <div style={{ display: "flex", alignItems: "center", marginTop: "16px" }}>
        <LuCalendarPlus style={{ marginRight: "4px" }} />
        <p>{metadata.date}</p>
      </div>
      <Image
        src={`/images/blog/${
          metadata.thumbnail ? `${slug}/${metadata.thumbnail}` : "default.png"
        }`}
        alt={`${slug}`}
        height={360}
        width={640}
        // layout="responsive"
        style={{ objectFit: "cover", display: "block", margin: "40px auto" }}
      />
      <p>{metadata.description}</p>
    </div>
  );
};

export default BlogHeader;
