import PostPreview from "@/features/blog/PostPreview";
import { getAllPostMetadata } from "@/features/blog/blog";
import React from "react";

const BlogPage = () => {
  const postMetadata = getAllPostMetadata().reverse();

  return (
    <div className="flex justify-center items-start flex-wrap gap-10">
      {postMetadata.map((post, index) => (
        <PostPreview key={index} post={post} />
      ))}
    </div>
  );
};

export default BlogPage;
