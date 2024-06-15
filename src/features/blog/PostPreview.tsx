import { PostMetadata } from "@/types/post";
import Link from "next/link";
import React from "react";

type PostPreviewProps = {
  post: PostMetadata;
};

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <div>
      <Link href={`/blog/${post.slug}`}>
        <h2>{post.title}</h2>
      </Link>
      <p>{post.date}</p>
      <p>{post.description}</p>
    </div>
  );
};

export default PostPreview;
