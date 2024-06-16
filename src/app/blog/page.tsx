import PostPreview from "@/features/blog/PostPreview";
import { getPostMetadata } from "@/features/blog/blog";
import React from "react";

const BlogPage = () => {
  const postMetadata = getPostMetadata();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row-reverse",
        flexWrap: "wrap-reverse",
        justifyContent: "center",
        alignItems: "flex-end",
        gap: "32px",
      }}
    >
      {postMetadata.map((post, index) => (
        <PostPreview key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
