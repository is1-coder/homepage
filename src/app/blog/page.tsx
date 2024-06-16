import PostPreview from "@/features/blog/PostPreview";
import { getAllPostMetadata } from "@/features/blog/blog";
import React from "react";

const BlogPage = () => {
  const postMetadata = getAllPostMetadata().reverse();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "flex-start",
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
