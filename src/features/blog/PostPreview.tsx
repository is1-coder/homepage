import { PostMetadata } from "@/types/post";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { LuCalendarPlus } from "react-icons/lu";

type PostPreviewProps = {
  post: PostMetadata;
};

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <Link
      className="hoverPostPreview"
      href={`/blog/${post.slug}`}
      style={{
        height: "100%",
        width: "400px",
        color: "#222",
        textDecoration: "none",
      }}
    >
      <div style={{ height: "225px", width: "400px", overflow: "hidden" }}>
        <Image
          src={`/images/blog/${
            post.thumbnail ? `${post.slug}/${post.thumbnail}` : "default.png"
          }`}
          alt={`${post.slug}`}
          height={225}
          width={400}
          style={{ objectFit: "cover" }}
        />
      </div>

      <div style={{ margin: "8px 0" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <LuCalendarPlus size="12px" style={{ marginRight: "4px" }} />
          <p style={{ fontSize: "12px" }}>{post.date}</p>
        </div>
        <h2 style={{ fontSize: "24px", lineHeight: "28px", marginTop: "6px" }}>
          {post.title}
        </h2>
        <p style={{ fontSize: "12px", lineHeight: "16px", marginTop: "6px" }}>
          {post.description}
        </p>
      </div>
    </Link>
  );
};

export default PostPreview;
