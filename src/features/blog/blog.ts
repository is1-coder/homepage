import { PostMetadata } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";

export const getPostMetadata = (): PostMetadata[] => {
  const folder = "src/features/blog/posts";
  const files = fs.readdirSync(folder);
  const markdownFiles = files.filter((file) => file.endsWith(".md"));

  const posts = markdownFiles.map((fileName) => {
    const markdownFile = fs.readFileSync(`${folder}/${fileName}`, "utf-8");
    const matterResult = matter(markdownFile);
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      slug: fileName.replace(".md", ""),
    };
  });
  return posts;
};

export const getPostContent = (slug: string): string => {
  const folder = "src/features/blog/posts";
  const fileName = `${folder}/${slug}.md`;
  const markdownFile = fs.readFileSync(fileName, "utf-8");

  const matterResult = matter(markdownFile);
  return matterResult.content;
};
