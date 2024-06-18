import ReturnTopButton from "@/components/ReturnTopButton/ReturnTopButton";
import Link from "next/link";
import React from "react";
import { FaRegListAlt } from "react-icons/fa";

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
        <div
          style={{
            cursor: "pointer",
            padding: "16px",
            display: "flex",
            alignItems: "center",
          }}
          className="hoverOpacity"
        >
          <FaRegListAlt
            style={{ marginRight: "4px", position: "relative", top: "1px" }}
          />
          <p>記事一覧へ戻る</p>
        </div>
      </Link>
    </div>
  );
};

export default BlogFooter;
