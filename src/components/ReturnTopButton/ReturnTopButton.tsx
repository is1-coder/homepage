"use client";
import React from "react";
import { FiArrowUpCircle } from "react-icons/fi";

const returnTop = () => {
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
};

const ReturnTopButton = () => {
  return (
    <div
      onClick={returnTop}
      style={{
        cursor: "pointer",
        padding: "16px",
        display: "flex",
        alignItems: "center",
      }}
      className="hoverOpacity"
    >
      <FiArrowUpCircle style={{ marginRight: "4px" }} />
      <p>トップへ戻る</p>
    </div>
  );
};

export default ReturnTopButton;
