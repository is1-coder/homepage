"use client";
import React from "react";

const returnTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

const ReturnTop = () => {
  return (
    <span
      onClick={returnTop}
      style={{ cursor: "pointer", padding: "16px" }}
      className="hoverOpacity"
    >
      トップへ戻る
    </span>
  );
};

export default ReturnTop;
