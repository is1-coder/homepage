import { getPostContent, getPostMetadata } from "@/features/blog/blog";
import React from "react";
import markdownToHtml from "zenn-markdown-html";
import "zenn-content-css";

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
    <div>
      <div className="znc" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

export default PostPage;

export const generateStaticParams = async () => {
  const postMetadata = getPostMetadata();
  return postMetadata.map((post) => ({ slug: post.slug }));
};
