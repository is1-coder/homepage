import React from "react";
import { aboutItems } from "@/features/about/aboutItems";

const AboutPage = () => {
  return (
    <div className="flex flex-col gap-4">
      {aboutItems.map((item, index) => (
        <div key={index} className="p-4 bg-[--bg-color-2] max-w-fit ">
          <h2>{item.title}</h2>
          <p className="mt-3 leading-5">{item.desctipotion}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutPage;
