import Link from "next/link";
import React from "react";
import Image from "next/image";
import { AiFillGithub } from "react-icons/ai";
import { RxOpenInNewWindow } from "react-icons/rx";

const LinkPage = () => {
  return (
    <div style={{ width: "20%", margin: "0 auto" }}>
      <Link
        href="https://github.com/is1-coder"
        target="_blank"
        style={{
          textDecoration: "none",
          color: "#222",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <AiFillGithub size="40px" />
        <h3 style={{ marginLeft: "8px" }}>GitHub</h3>
        <RxOpenInNewWindow size="20px" style={{ marginLeft: "4px" }} />
      </Link>

      <Link
        href="https://atcoder.jp/users/is1"
        target="_blank"
        style={{
          textDecoration: "none",
          color: "#222",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Image
          src="/images/link/logo_transparent.png"
          alt={"atcoder-logo"}
          height={40}
          width={40}
          style={{
            pointerEvents: "none",
            userSelect: "none",
            MozUserSelect: "none",
            WebkitUserSelect: "none",
            msUserSelect: "none",
          }}
        />
        <h3 style={{ marginLeft: "8px" }}>AtCoder</h3>
        <RxOpenInNewWindow size="20px" style={{ marginLeft: "4px" }} />
      </Link>
    </div>
  );
};

export default LinkPage;
