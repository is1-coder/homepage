import { getPostContent, getAllPostMetadata } from "@/features/blog/blog";
import React from "react";
import markdownToHtml from "zenn-markdown-html";
import BlogHeader from "@/features/blog/BlogHeader";
import BlogFooter from "@/features/blog/BlogFooter";
import BlogContent from "@/features/blog/BlogContent";
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
    <div className="flex justify-center items-start gap-8">
      <div className="max-w-[1000px] bg-[--bg-color-2] p-8">
        <BlogHeader slug={slug} className="mb-14" />

        {/* ブログコンテンツ */}
        <BlogContent html={html} />

        <BlogFooter className="mt-20" />
      </div>
      <BlogIndex html={html} className="flex-shrink-0 hidden lg:block" />
    </div>
  );
};

export default PostPage;

export const generateStaticParams = async () => {
  const postMetadata = getAllPostMetadata();
  return postMetadata.map((post) => ({ slug: post.slug }));
};
