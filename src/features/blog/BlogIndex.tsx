import React from "react";
import { JSDOM } from "jsdom";

type BlogIndexProps = {
  html: string;
  className?: string;
};

type IndexItem = {
  tag: string;
  title: string;
  href: string;
};

const BlogIndex = ({ html, className }: BlogIndexProps) => {
  const dom = new JSDOM(html).window.document;
  const elements = dom.querySelectorAll<HTMLElement>("h1, h2, h3, h4");
  let indexItems: IndexItem[] = [];
  elements.forEach((element) => {
    const tag = element.tagName;
    const title = element.innerHTML.split("</a> ")[1];
    const href = element.id;
    const record: IndexItem = { tag, title, href };
    indexItems.push(record);
  });

  return (
    <div
      className={`top-[calc(var(--header-height)+var(--main-padding))] bg-[--bg-color-2]
                  max-h-[600px] w-[300px] sticky p-4 overflow-y-auto ${className} `}
    >
      <h3>目次</h3>
      <div className="mt-4">
        {indexItems.map((item, index) => (
          <a
            href={`#${item.href}`}
            key={index}
            className={`mt-2 opacity-60 hover:opacity-[1] flex items-start ${
              (item.tag === "H1" || item.tag === "H2") && "font-[700]"
            }`}
          >
            <p>{item.tag === "H1" || item.tag === "H2" ? "・" : "　"}</p>
            <p className="leading-[1.2]">{item.title}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;
