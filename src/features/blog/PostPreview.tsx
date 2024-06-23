import { PostMetadata } from "@/types/post";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { LuCalendarPlus } from "react-icons/lu";

type PostPreviewProps = {
  post: PostMetadata;
};

const PostPreview = ({ post }: PostPreviewProps) => {
  return (
    <Link href={`/blog/${post.slug}`} className="group p-5 bg-[--bg-color-2]">
      <div className="max-h-[225px] max-w-[400px]  overflow-hidden">
        <Image
          src={`/images/blog/${
            post.thumbnail ? `${post.slug}/${post.thumbnail}` : "default.png"
          }`}
          alt={`${post.slug}`}
          height={225}
          width={400}
          className="aspect-video object-cover object-center group-hover:scale-110"
        />
      </div>

      <div className="max-w-[400px] mt-4">
        <div className="flex items-center">
          <LuCalendarPlus size="12px" />
          <p className="text-xs ml-1">{post.date}</p>
        </div>
        <h2 className="text-xl font-[600] mt-4 group-hover:text-[--color-ac-1]">
          {post.title}
        </h2>
        <p className="text-xs mt-2">{post.description}</p>
      </div>
    </Link>
  );
};

export default PostPreview;
