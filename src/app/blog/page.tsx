import PostPreview from "@/features/blog/PostPreview";
import { getPostMetadata } from "@/features/blog/blog";
import React from "react";

const BlogPage = () => {
  const postMetadata = getPostMetadata().reverse();

  return (
    <div>
      {postMetadata.map((post, index) => (
        <PostPreview key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
