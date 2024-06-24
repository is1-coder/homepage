import React from "react";
import "zenn-content-css";
import "@/features/blog/blog.css";

type BlogContentProps = {
  html: string;
};

const BlogContent = ({ html }: BlogContentProps) => {
  return <div className="znc" dangerouslySetInnerHTML={{ __html: html }} />;
};

export default BlogContent;
