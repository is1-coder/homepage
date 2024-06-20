import React from "react";
import { JSDOM } from "jsdom";

type BlogIndexProps = {
  html: string;
  style?: React.CSSProperties;
};

type IndexItem = {
  tag: string;
  title: string;
  href: string;
};

const BlogIndex = ({ html, style }: BlogIndexProps) => {
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

  console.log(indexItems);

  return (
    <div
      style={{
        ...style,
        backgroundColor: "#fff",
        padding: 16,
        position: "sticky",
        top: 182,
      }}
    >
      <h3 style={{ marginBottom: 8 }}>目次</h3>
      {indexItems.map((item, index) => (
        <a
          href={`#${item.href}`}
          key={index}
          style={{ textDecoration: "none", color: "#222" }}
          className="hoverOpacity"
        >
          <p
            style={
              item.tag === "H1" || item.tag === "H2"
                ? { fontWeight: "500" }
                : { fontWeight: "400", color: "#666", paddingLeft: "1em" }
            }
          >
            {item.title}
          </p>
        </a>
      ))}
    </div>
  );
};

export default BlogIndex;
