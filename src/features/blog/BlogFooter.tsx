"use client";
import Link from "next/link";
import React from "react";
import { FaRegListAlt } from "react-icons/fa";
import { FiArrowUpCircle } from "react-icons/fi";

const returnTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

type BlogFooterProps = {
  className?: string;
};

const BlogFooter = ({ className }: BlogFooterProps) => {
  return (
    <div className={`${className} flex justify-center items-center`}>
      <div
        className="cursor-pointer p-4 flex item-scenter opacity-70 hover:opacity-[1]"
        onClick={returnTop}
      >
        <FiArrowUpCircle />
        <p className="ml-1">トップへ戻る</p>
      </div>
      <span style={{ userSelect: "none" }}>|</span>
      <Link
        href="/blog"
        className="cursor-pointer p-4 flex item-scenter opacity-70 hover:opacity-[1]"
      >
        <FaRegListAlt className="relative top-[1px]" />
        <p className="ml-1">記事一覧へ戻る</p>
      </Link>
    </div>
  );
};

export default BlogFooter;
