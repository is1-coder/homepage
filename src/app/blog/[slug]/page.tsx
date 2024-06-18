import { getPostContent, getAllPostMetadata } from "@/features/blog/blog";
import React from "react";
import markdownToHtml from "zenn-markdown-html";
import "@/app/reset.css";
import "zenn-content-css";
import BlogHeader from "@/features/blog/BlogHeader";
import BlogFooter from "@/features/blog/BlogFooter";

type PostPageProps = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params: { slug } }: PostPageProps) => {
  const content = getPostContent(slug);
  const html = markdownToHtml(content, {
    embedOrigin: "https://embed.zenn.studio",
  });

  return (
    <>
      <BlogHeader slug={slug} style={{ marginBottom: "64px" }} />

      {/* ブログコンテンツ */}
      <div className="znc" dangerouslySetInnerHTML={{ __html: html }} />

      <BlogFooter />
    </>
  );
};

export default PostPage;

export const generateStaticParams = async () => {
  const postMetadata = getAllPostMetadata();
  return postMetadata.map((post) => ({ slug: post.slug }));
};
