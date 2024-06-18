import ReturnTopButton from "@/components/ReturnTopButton/ReturnTopButton";
import Link from "next/link";
import React from "react";

type BlogFooterProps = {
  style?: React.CSSProperties;
};

const BlogFooter = ({ style }: BlogFooterProps) => {
  return (
    <div
      style={{
        ...style,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ReturnTopButton />
      <span style={{ userSelect: "none" }}>|</span>
      <Link href="/blog" style={{ textDecoration: "none", color: "#222" }}>
        <span style={{ padding: "16px" }} className="hoverOpacity">
          記事一覧へ戻る
        </span>
      </Link>
    </div>
  );
};

export default BlogFooter;
