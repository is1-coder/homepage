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
import Link from "next/link";
import ReturnTopButton from "@/components/ReturnTopButton/ReturnTopButton";

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
        // layout="responsive"
        style={{ objectFit: "cover", display: "block", margin: "40px auto" }}
      />
      <p style={{ marginBottom: "64px" }}>{metadata.description}</p>

      <div className="znc" dangerouslySetInnerHTML={{ __html: html }} />

      <div
        style={{
          marginTop: "64px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ReturnTopButton />
        <span>|</span>
        <Link href="/blog" style={{ textDecoration: "none", color: "#222" }}>
          <span style={{ padding: "16px" }} className="hoverOpacity">
            記事一覧へ戻る
          </span>
        </Link>
      </div>
    </>
  );
};

export default PostPage;

export const generateStaticParams = async () => {
  const postMetadata = getAllPostMetadata();
  return postMetadata.map((post) => ({ slug: post.slug }));
};
