import { getPostContent, getAllPostMetadata } from "@/features/blog/blog";
import React from "react";
import markdownToHtml from "zenn-markdown-html";
// import "@/app/reset.css";
import "zenn-content-css";
import "@/features/blog/blog.css";
import BlogHeader from "@/features/blog/BlogHeader";
import BlogFooter from "@/features/blog/BlogFooter";
import BlogIndex from "@/features/blog/BlogIndex";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        gap: 40,
      }}
    >
      <div style={{ backgroundColor: "#fff", padding: "32px" }}>
        <BlogHeader slug={slug} style={{ marginBottom: "64px" }} />

        {/* ブログコンテンツ */}
        <div
          className="znc innerLink"
          dangerouslySetInnerHTML={{ __html: html }}
        />

        <BlogFooter style={{ marginTop: "64px" }} />
      </div>
      <BlogIndex html={html} style={{ width: "300px", flexShrink: 0 }} />
    </div>
  );
};

export default PostPage;

export const generateStaticParams = async () => {
  const postMetadata = getAllPostMetadata();
  return postMetadata.map((post) => ({ slug: post.slug }));
};
