import {
  getPostContent,
  getAllPostMetadata,
  getPostMetadata,
} from "@/features/blog/blog";
import React from "react";
import markdownToHtml from "zenn-markdown-html";
import "@/app/reset.css";
import "zenn-content-css";
import Image from "next/image";

type PostPageProps = {
  params: {
    slug: string;
  };
};

const PostPage = ({ params: { slug } }: PostPageProps) => {
  const metadata = getPostMetadata(slug);
  const content = getPostContent(slug);
  const html = markdownToHtml(content, {
    embedOrigin: "https://embed.zenn.studio",
  });

  console.log(
    `/images/blog/${
      metadata.thumbnail
        ? `${metadata.slug}/${metadata.thumbnail}`
        : "default.png"
    }`
  );
  return (
    <>
      <h2 style={{ fontSize: "32px" }}>{metadata.title}</h2>
      <p style={{ margin: "16px 0" }}>{metadata.date}</p>
      <Image
        src={`/images/blog/${
          metadata.thumbnail ? `${slug}/${metadata.thumbnail}` : "default.png"
        }`}
        alt={`${slug}`}
        height={360}
        width={640}
        style={{ objectFit: "cover", display: "block", margin: "36px auto" }}
      />
      <p style={{ margin: "36px 0" }}>{metadata.description}</p>

      <div className="znc" dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
};

export default PostPage;

export const generateStaticParams = async () => {
  const postMetadata = getAllPostMetadata();
  return postMetadata.map((post) => ({ slug: post.slug }));
};
